export default function JsonViewer({
  layout
}) {
  return (
    <pre
      style={{
        background: "#f4f4f4",
        padding: "12px",
        borderRadius: "8px",
        overflow: "auto",
        maxHeight: "400px",
        fontSize: "12px"
      }}
    >
      {JSON.stringify(layout, null, 2)}
    </pre>
  );
}