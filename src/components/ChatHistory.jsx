function ChatHistory({ history }) {
  return (
    <div>
      <h3>Chat History</h3>
      {history.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Q:</strong> {item.prompt}
          </p>
          <p>
            <strong>A:</strong> {item.response}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;
