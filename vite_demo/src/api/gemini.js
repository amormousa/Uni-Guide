export async function askGemini(prompt) {
  const resp = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  if (!resp.ok) throw new Error('Gemini request failed');
  const data = await resp.json();
  return data.answer;
}
