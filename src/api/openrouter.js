// openrouter.js

export async function fetchAIResponse(prompt) {
  const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`OpenRouter API error (${response.status}): ${text}`);
    }

    const data = await response.json();

    // OpenRouter responses use an array of choices (OpenAI‑compatible)
    const assistantMessage = data.choices?.[0]?.message?.content;
    return assistantMessage ?? "No response generated.";
  } catch (error) {
    console.error("OpenRouter ERROR:", error);
    throw error;
  }
}
