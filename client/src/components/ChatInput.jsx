import { useState } from "react";

export default function ChatInput({
  onSend,
  loading
}) {
  const [text, setText] =
    useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "12px",
        borderTop:
          "1px solid #ddd"
      }}
    >
      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Try: Convert to 9:16"
        style={{
          flex: 1,
          padding: "10px"
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        style={{
          marginLeft: "10px"
        }}
      >
        Send
      </button>
    </div>
  );
}