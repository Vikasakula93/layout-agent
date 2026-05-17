export default function MessageBubble({
  message
}) {
  const isUser =
    message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser
          ? "flex-end"
          : "flex-start",
        marginBottom: "12px"
      }}
    >
      <div
        style={{
          background: isUser
            ? "#007bff"
            : "#eeeeee",
          color: isUser
            ? "white"
            : "black",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "70%"
        }}
      >
        {message.content}
      </div>
    </div>
  );
}