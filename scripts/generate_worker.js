import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleDir = path.join(__dirname, '../module');
const workerDir = path.join(__dirname, '../worker');
const outputFile = path.join(workerDir, 'index.js');

// Ensure worker directory exists
if (!fs.existsSync(workerDir)) {
    fs.mkdirSync(workerDir);
}

const files = fs.readdirSync(moduleDir).filter(file => file.endsWith('.js'));

const imports = [];
const routes = [];

files.forEach((file, index) => {
    const name = path.basename(file, '.js');
    const importName = `mod_${index}`;
    imports.push(`import ${importName} from '../module/${file}';`);

    // Create route handler
    // Each module exports a function: module(params, useAxios)
    // We wrap this with Hono handler

    // Note: Escaping backticks for template literal generation in the output file
    const handler = `
app.all('/${name}', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await ${importName}(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});`;
    routes.push(handler);
});

const content = `
import { Hono } from 'hono';
import { createRequest } from './adapter';

const app = new Hono();

// Helper for cookie parsing
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

// --- Modules Imports ---
${imports.join('\n')}

// --- Routes ---
${routes.join('\n')}

export default app;
`;

fs.writeFileSync(outputFile, content);
console.log('Generated worker entry at ' + outputFile + ' with ' + files.length + ' routes.');
