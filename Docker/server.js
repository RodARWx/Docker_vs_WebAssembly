const http = require('http');
const os = require('os');

const PORT = 8080;

const server = http.createServer((req, res) => {
  const startTime = process.hrtime.bigint();

  const hostname = os.hostname();
  const platform = os.platform();
  const arch = os.arch();
  const containerTime = new Date().toISOString();

  const endTime = process.hrtime.bigint();
  const responseTimeMs = (Number(endTime - startTime) / 1_000_000).toFixed(3);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World from Docker!</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --border-color: #334155;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --docker-blue: #0db7ed;
      --accent-green: #10b981;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 1.5rem;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      max-width: 560px;
      width: 100%;
      padding: 2rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 1rem;
    }
    .badge {
      display: inline-block;
      background: rgba(13, 183, 237, 0.15);
      color: var(--docker-blue);
      border: 1px solid rgba(13, 183, 237, 0.3);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--text-main);
      margin-top: 0.5rem;
    }
    .desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
    .data-table {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .data-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      background: rgba(15, 23, 42, 0.6);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .label {
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    .value {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.875rem;
      font-weight: 600;
      color: #e2e8f0;
    }
    .value.highlight {
      color: var(--accent-green);
    }
    .footer {
      margin-top: 1.5rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div>
        <span class="badge">Proof of Concept</span>
        <h1>Hello World from Docker!</h1>
      </div>
    </div>
    <p class="desc">
      Minimalist demonstration highlighting container isolation, packaging, and runtime characteristics for academic comparison against WebAssembly.
    </p>
    <div class="data-table">
      <div class="data-row">
        <span class="label">Container Hostname (ID)</span>
        <span class="value">${hostname}</span>
      </div>
      <div class="data-row">
        <span class="label">Platform / Architecture</span>
        <span class="value">${platform} / ${arch}</span>
      </div>
      <div class="data-row">
        <span class="label">Container Date & Time</span>
        <span class="value">${containerTime}</span>
      </div>
      <div class="data-row">
        <span class="label">Response Time</span>
        <span class="value highlight">${responseTimeMs} ms</span>
      </div>
    </div>
    <div class="footer">
      Docker vs. WebAssembly Academic Evaluation
    </div>
  </div>
</body>
</html>`;

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': Buffer.byteLength(html)
  });
  res.end(html);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
