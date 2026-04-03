import { useState } from "react";
import PromptInput from "./components/PromptInput";
import ResponseDisplay from "./components/ResponseDisplay";
import ChatHistory from "./components/ChatHistory";
import { fetchAIResponse } from "./api/generate";
function App() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState([]);

  const handlePromptSubmit = async (prompt) => {
    setLoading(true);
    setError("");

    try {
      const result = await fetchAIResponse(prompt);
      setResponse(result);

      setHistory((prev) => [{ prompt, response: result }, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1>AI Prompt App</h1>
      <PromptInput
        onSubmit={handlePromptSubmit}
        loading={loading}
        setResponse={setResponse}
      />

      {loading && <p>Generating response...</p>}
      <ResponseDisplay response={response} error={error} />
      <ChatHistory history={history} />
    </div>
  );
}

export default App;
