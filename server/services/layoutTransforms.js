export function resizeArtboard(layout, width, height) {
  const updated = structuredClone(layout);

  const rootId = updated.rootNodes[0];
  const artboard = updated.nodes[rootId];

  artboard.width = width;
  artboard.height = height;

  artboard.children.forEach((childId) => {
    const node = updated.nodes[childId];

    if (
      node.nx !== undefined &&
      node.ny !== undefined &&
      node.nw !== undefined &&
      node.nh !== undefined
    ) {
      node.x = node.nx * width;
      node.y = node.ny * height;
      node.width = node.nw * width;
      node.height = node.nh * height;
    }
  });

  return updated;
}

export function moveHeadlineToTop(layout) {
  const updated = structuredClone(layout);

  const headline = Object.values(updated.nodes).find(
    (node) =>
      node.type === "text" &&
      node.data?.content?.includes("Luxury Comfort")
  );

  if (headline) {
    headline.y = 80;
    headline.ny = 80 / 1080;
  }

  return updated;
}

export function makeHeadlineSmaller(layout) {
  const updated = structuredClone(layout);

  const headline = Object.values(updated.nodes).find(
    (node) =>
      node.type === "text" &&
      node.data?.content?.includes("Luxury Comfort")
  );

  if (headline?.style?.visual?.fontSize) {
    headline.style.visual.fontSize -= 12;
  }

  return updated;
}

export function moveOfferBadgeHigher(layout) {
  const updated = structuredClone(layout);

  const badge = Object.values(updated.nodes).find(
    (node) =>
      node.type === "text" &&
      node.data?.content?.includes("20%")
  );

  if (badge) {
    badge.y -= 100;
    badge.ny = badge.y / 1080;
  }

  return updated;
}