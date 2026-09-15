const express = require('express');
require('dotenv').config(); // loads .env from backend_proxy/ directory

const app = express();
app.use(express.json());

// Allow the Angular dev server (port 4200) and any other origin in development
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.post(['/api/gemini', '/api/chat'], async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'prompt is required' });
  }

  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI_API_KEY is not configured on the server.' });
  }

  const endpoint =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt.trim() }] }],
  };

  try {
    const apiRes = await fetch(`${endpoint}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const json = await apiRes.json();

    if (!apiRes.ok) {
      const message = json?.error?.message ?? 'Unknown error from AI API';
      return res.status(apiRes.status).json({ error: message });
    }

    const answer =
      json.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No reply from AI.';
    res.json({ answer });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => console.log(`Proxy listening on http://localhost:${PORT}`));
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const ALT_PORT = 3002;
    app.listen(ALT_PORT, () => console.log(`Port ${PORT} in use, proxy fallback listening on http://localhost:${ALT_PORT}`));
  }
});
