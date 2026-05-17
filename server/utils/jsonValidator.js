export function validateLayout(layout) {
  if (!layout.rootNodes) {
    throw new Error("Missing rootNodes");
  }

  if (!layout.nodes) {
    throw new Error("Missing nodes");
  }

  return true;
}