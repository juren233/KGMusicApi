// module/audio_proxy.js
// 音频代理 - 解决 HTTPS 站点无法加载 HTTP 音频的问题

const https = require('https');
const http = require('http');

module.exports = async (params, useAxios, res) => {
  const audioUrl = params.url;
  
  if (!audioUrl) {
    return { code: 400, msg: 'Missing url parameter' };
  }

  return new Promise((resolve) => {
    try {
      const urlObj = new URL(audioUrl);
      const httpModule = urlObj.protocol === 'https:' ? https : http;
      
      const request = httpModule.get(audioUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': 'https://www.kugou.com/',
        }
      }, (response) => {
        // 设置响应头
        res.set({
          'Content-Type': response.headers['content-type'] || 'audio/mpeg',
          'Content-Length': response.headers['content-length'] || '',
          'Accept-Ranges': 'bytes',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=86400',
        });
        
        // 流式传输音频
        response.pipe(res);
        response.on('end', () => resolve(null)); // 不返回 JSON
      });
      
      request.on('error', (e) => {
        resolve({ code: 500, msg: 'Proxy error: ' + e.message });
      });
      
    } catch (e) {
      resolve({ code: 500, msg: 'Invalid URL: ' + e.message });
    }
  });
};