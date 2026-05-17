import MessageBubble from "./MessageBubble";

export default function ChatWindow({
  messages
}) {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "12px"
      }}
    >
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          message={msg}
        />
      ))}
    </div>
  );
}