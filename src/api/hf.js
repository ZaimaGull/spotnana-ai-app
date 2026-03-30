export async function fetchAIResponse(prompt) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );

    // 👇 SAFETY: read as text first
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(`Non-JSON response: ${text}`);
    }

    if (!response.ok) {
      throw new Error(data.error || "Hugging Face API Error");
    }

    if (Array.isArray(data)) {
      return data[0]?.generated_text || "No response generated.";
    }

    return data.generated_text || "No response generated.";
  } catch (error) {
    console.error("HF ERROR:", error);
    throw error;
  }
}
