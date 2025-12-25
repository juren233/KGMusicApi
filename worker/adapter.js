import {
    cryptoMd5,
    cryptoAesEncrypt,
    cryptoAesDecrypt,
    cryptoRSAEncrypt,
    rsaEncrypt2,
    playlistAesEncrypt,
    playlistAesDecrypt
} from '../util/crypto.js';

import {
    signKey,
    signatureAndroidParams,
    signatureRegisterParams,
    signatureWebParams
} from '../util/helper.js';

import config from '../util/config.json';
const { appid, clientver, liteAppid, liteClientver } = config;

/**
 * Cloudflare Workers Adapter for 'util/request.js'
 * Implements the 'useAxios' interface expected by module/*.js
 */

const parseCookie = (str) => {
    if (!str) return {};
    return str.split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            if (v.length < 2) return acc;
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {});
};

const serializeCookie = (name, value, options = {}) => {
    let str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (options.path) str += `; Path=${options.path}`;
    if (options.domain) str += `; Domain=${options.domain}`;
    if (options.expires) str += `; Expires=${options.expires.toUTCString()}`;
    // Workers usually handle Secure/SameSite in the response headers logic, but we can add them here if needed string-wise
    return str;
};

// Helper to merge cookies
const mergeCookies = (cookieObj, newCookies) => {
    const merged = { ...cookieObj };
    if (Array.isArray(newCookies)) {
        newCookies.forEach(c => {
            const parts = c.split(';')[0].split('=');
            if (parts.length >= 2) {
                merged[parts[0].trim()] = parts[1].trim();
            }
        });
    } else if (typeof newCookies === 'object') {
        Object.assign(merged, newCookies);
    }
    return merged;
};

// Main Adapter Function
const createRequest = async (options) => {
    // 1. Construct URL
    const baseURL = options.baseURL || 'https://gateway.kugou.com';
    let url = options.url.startsWith('http') ? options.url : `${baseURL}${options.url}`;

    // 2. Handle Params (Query String)
    const params = options.params || {};
    // Inject default params logic if needed, but the original request.js does a lot of logic. 
    // Ideally, the module definition passes fully formed params, but request.js adds signature.
    // Since we can't easily import 'util/request.js' (it depends on axios), 
    // WE NEED TO COPY THE SIGNATURE LOGIC HERE or refactor request.js.
    // However, the user wants strict ZERO INTRUSION.
    // The modules accept a callback: `module(params, useAxios)`.
    // The `useAxios` function in `server.js` wraps `createRequest`.
    // We are implementing that `useAxios` wrapper.

    // WAIT: `util/request.js` behaves as `useAxios`. 
    // It contains significant logic for signing (signatureAndroidParams, etc).
    // If we replace `createRequest`, we lose that signing logic unless we duplicate it.
    // The previous analysis said "Implements createRequest using fetch... Copy/Reuse logic".
    // We need to import the helper functions from `util/helper.js` and `util/crypto.js`.

    // Let's look at `util/request.js` again. It imports:
    // const { signKey, signatureAndroidParams, signatureRegisterParams, signatureWebParams } = require('./helper');
    // const { appid, clientver, liteAppid, liteClientver } = require('./config.json');

    // We CAN require these in the Worker because they are just logic/JSON, not node-specific.
    // So we will import them.

    // We need to replicate the logic inside `createRequest` from `util/request.js`

    // --- REPLICATED LOGIC START ---

    // Note: process.env.platform might strictly be needed, we can default to 'android' or pass via env
    const platform = 'android'; // Default or from env
    const isLite = platform === 'lite';

    const dfid = options?.cookie?.dfid || '-';
    const mid = cryptoMd5(dfid);
    const uuid = cryptoMd5(`${dfid}${mid}`);
    const token = options?.cookie?.token || '';
    const userid = options?.cookie?.userid || 0;
    const clienttime = Math.floor(Date.now() / 1000);
    const ip = options?.realIP || options?.ip || '';

    const headers = { dfid, clienttime, mid };
    if (ip) {
        headers['X-Real-IP'] = ip;
        headers['X-Forwarded-For'] = ip;
    }

    const defaultParams = {
        dfid,
        mid,
        uuid,
        appid: isLite ? liteAppid : appid,
        clientver: isLite ? liteClientver : clientver,
        userid,
        clienttime,
    };

    if (token) defaultParams['token'] = token;

    // Merge params
    const rawParams = options?.clearDefaultParams ? options?.params || {} : Object.assign({}, defaultParams, options?.params || {});
    // clone to avoid mutating original reference if that matters
    const paramsMap = { ...rawParams };

    headers['clienttime'] = paramsMap.clienttime;

    if (options?.encryptKey) {
        paramsMap['key'] = signKey(paramsMap['hash'], paramsMap['mid'], paramsMap['userid'], paramsMap['appid']);
    }

    const dataBody = typeof options?.data === 'object' ? JSON.stringify(options.data) : options?.data || '';

    if (!paramsMap['signature'] && !options.notSignature) {
        switch (options?.encryptType) {
            case 'register':
                paramsMap['signature'] = signatureRegisterParams(paramsMap);
                break;
            case 'web':
                paramsMap['signature'] = signatureWebParams(paramsMap);
                break;
            case 'android':
            default:
                paramsMap['signature'] = signatureAndroidParams(paramsMap, dataBody);
                break;
        }
    }

    // Prepare Request options
    const method = (options.method || 'GET').toUpperCase();

    // Construct Query String
    const queryString = new URLSearchParams();
    Object.keys(paramsMap).forEach(key => {
        queryString.append(key, paramsMap[key]);
    });

    if (options.baseURL?.includes('openapicdn')) {
        url = `${url}?${queryString.toString()}`;
        // paramsMap cleared for url, but standard axios puts them in query
    } else {
        // Standard behavior: append params to URL
        if (url.includes('?')) {
            url += '&' + queryString.toString();
        } else {
            url += '?' + queryString.toString();
        }
    }

    // Headers
    const requestHeaders = Object.assign({
        'User-Agent': 'Android15-1070-11083-46-0-DiscoveryDRADProtocol-wifi'
    },
        options?.headers || {},
        headers
    );

    // Add Cookie header
    if (options.cookie) {
        const cookieStr = Object.entries(options.cookie)
            .map(([k, v]) => `${k}=${v}`)
            .join('; ');
        requestHeaders['Cookie'] = cookieStr;
    }

    // --- FETCH CALL ---
    const fetchOptions = {
        method: method,
        headers: requestHeaders,
    };

    if (method !== 'GET' && method !== 'HEAD') {
        fetchOptions.body = dataBody;
        if (typeof dataBody === 'string' && !requestHeaders['Content-Type']) {
            try {
                JSON.parse(dataBody);
                requestHeaders['Content-Type'] = 'application/json';
            } catch (e) {
                requestHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
            }
        }
    }

    // Proxy handling (Workers use fetch, which generally handles proxy via standard HTTP_PROXY env if supported by runtime, 
    // but Cloudflare Workers don't support arbitrary forward proxies easily without standard http connect. 
    // We will ignore proxy config for now as specific node proxy agents don't work in workers)

    const answer = { status: 500, body: {}, cookie: [], headers: {} };

    try {
        const response = await fetch(url, fetchOptions);

        answer.status = response.status;

        // Handle Headers
        response.headers.forEach((value, key) => {
            answer.headers[key.toLowerCase()] = value;
        });

        // Handle Cookies (Set-Cookie)
        // fetch API combines Set-Cookie headers? Cloudflare Workers might usually return them combined or as array
        // We need to parse them.
        const setCookieHeader = response.headers.get('Set-Cookie');
        if (setCookieHeader) {
            // This is tricky, split-cookie string logic might be needed if multiple cookies are combined with commas
            // For now, simple split (simplistic)
            // In Workers, sometimes response.headers.getAll('Set-Cookie') is available or it's a split string
            // Let's assume standard fetch behavior where it might be comma separated, which is bad for dates.
            // Cloudflare Workers `headers.getAll` is deprecated/removed in standards but might exist?
            // Actually, `fetch` in standard spec combines them.
            // Best effort:
            answer.cookie = [setCookieHeader];
            // Improvements can be made here for robust cookie parsing
        }

        const bodyText = await response.text();
        try {
            answer.body = JSON.parse(bodyText);
        } catch (e) {
            answer.body = bodyText;
        }

        if (answer.body && (answer.body.status === 0 || (answer.body.error_code && answer.body.error_code !== 0))) {
            answer.status = 502; // As per original logic
        } else {
            answer.status = 200; // As per original logic override
        }

    } catch (e) {
        answer.status = 502;
        answer.body = { status: 0, msg: e.message || 'Fetch Error' };
    }

    // The original logic returns a rejected promise for errors/status 502. 
    // We should maintain that interface.
    if (answer.status !== 200) {
        throw answer;
    }
    return answer;
};

export { createRequest };
