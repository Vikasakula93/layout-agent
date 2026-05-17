export default function WireframePreview({
  layout
}) {
  if (!layout?.rootNodes?.length) {
    return <div>No layout found</div>;
  }

  const rootId = layout.rootNodes[0];
  const artboard =
    layout.nodes[rootId];

  if (!artboard) {
    return <div>No artboard</div>;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        height: "500px",
        border: "2px solid #ccc",
        overflow: "hidden",
        background: "#fafafa"
      }}
    >
      {artboard.children?.map((id) => {
        const node =
          layout.nodes[id];

        if (!node) return null;

        return (
          <div
            key={id}
            style={{
              position: "absolute",
              left: `${
                (node.nx || 0) * 100
              }%`,
              top: `${
                (node.ny || 0) * 100
              }%`,
              width: `${
                (node.nw || 0.1) * 100
              }%`,
              height: `${
                (node.nh || 0.1) * 100
              }%`,
              border:
                "1px solid black",
              padding: "4px",
              fontSize: "10px",
              background:
                node.type ===
                "text"
                  ? "#ffeeba"
                  : "#d4edda"
            }}
          >
            {node.data?.content ||
              node.name}
          </div>
        );
      })}
    </div>
  );
}