import { useState } from "react";

function PromptInput({ onSubmit, loading, setResponse }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>

      <button
        onClick={() => {
          setInput("");
          setResponse("");
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default PromptInput;
