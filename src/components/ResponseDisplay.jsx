function ResponseDisplay({ response, error }) {
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default ResponseDisplay;
