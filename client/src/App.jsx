import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import JsonViewer from "./components/JsonViewer";
import WireframePreview from "./components/WireframePreview";
import { useLayoutAgent } from "./hooks/useLayoutAgent";

export default function App() {
  const {
    layout,
    messages,
    loading,
    sendMessage
  } = useLayoutAgent();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "35%",
          borderRight: "1px solid #ddd",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h2 style={{ padding: "16px" }}>
          Layout Agent
        </h2>

        <ChatWindow messages={messages} />

        <ChatInput
          onSend={sendMessage}
          loading={loading}
        />
      </div>

      <div
        style={{
          width: "65%",
          padding: "20px",
          overflow: "auto"
        }}
      >
        <h2>Wireframe Preview</h2>

        <WireframePreview layout={layout} />

        <h2>Updated JSON</h2>

        <JsonViewer layout={layout} />
      </div>
    </div>
  );
}