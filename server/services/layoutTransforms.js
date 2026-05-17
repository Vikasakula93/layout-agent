export function resizeArtboard(
  layout,
  width,
  height
) {
  const updated = structuredClone(layout);

  const rootId = updated.rootNodes[0];
  const artboard =
    updated.nodes[rootId];

  artboard.width = width;
  artboard.height = height;

  artboard.children.forEach(
    (childId) => {
      const node =
        updated.nodes[childId];

      if (
        node.nx !== undefined &&
        node.ny !== undefined &&
        node.nw !== undefined &&
        node.nh !== undefined
      ) {
        node.x = node.nx * width;
        node.y = node.ny * height;
        node.width =
          node.nw * width;
        node.height =
          node.nh * height;
      }
    }
  );

  return updated;
}

// ==========================
// Move Headline to Top
// ==========================
export function moveHeadlineToTop(
  layout
) {
  const updated =
    structuredClone(layout);

  const rootId =
    updated.rootNodes[0];

  const artboard =
    updated.nodes[rootId];

  const headline =
    Object.values(
      updated.nodes
    ).find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.toLowerCase()
          .includes("luxury")
    );

  if (headline) {
    headline.y = 60;
    headline.ny =
      headline.y /
      artboard.height;
  }

  return updated;
}

// ==========================
// Make Headline Smaller
// ==========================
export function makeHeadlineSmaller(
  layout
) {
  const updated =
    structuredClone(layout);

  const headline =
    Object.values(
      updated.nodes
    ).find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.toLowerCase()
          .includes("luxury")
    );

  if (
    headline?.style?.visual
      ?.fontSize
  ) {
    headline.style.visual.fontSize -=
      12;
  }

  return updated;
}

// ==========================
// Headline Color Red
// ==========================
export function changeHeadlineColor(
  layout,
  color = "#FF0000"
) {
  const updated =
    structuredClone(layout);

  const headline =
    Object.values(
      updated.nodes
    ).find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.toLowerCase()
          .includes("luxury")
    );

  if (headline) {
    headline.style.visual.color =
      {
        type: "solid",
        value: color
      };
  }

  return updated;
}

// ==========================
// Move Offer Badge Higher
// ==========================
export function moveOfferBadgeHigher(
  layout
) {
  const updated =
    structuredClone(layout);

  const badge =
    Object.values(
      updated.nodes
    ).find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.includes("20%")
    );

  if (badge) {
    badge.y -= 100;
    badge.ny =
      badge.y / 1080;
  }

  return updated;
}

// ==========================
// Make Discount Badge Bigger
// ==========================
export function makeDiscountBadgeBigger(
  layout
) {
  const updated =
    structuredClone(layout);

  const badge =
    Object.values(
      updated.nodes
    ).find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.includes("20%")
    );

  if (badge) {
    badge.width *= 1.3;
    badge.height *= 1.3;

    if (
      badge.style?.visual
        ?.fontSize
    ) {
      badge.style.visual.fontSize +=
        8;
    }
  }

  return updated;
}

// ==========================
// Keep Product Large
// ==========================
export function keepProductLarge(
  layout
) {
  const updated =
    structuredClone(layout);

  const product =
    Object.values(
      updated.nodes
    ).find((node) =>
      node.name
        ?.toLowerCase()
        .includes("product")
    );

  if (product) {
    product.width *= 1.2;
    product.height *= 1.2;
  }

  return updated;
}

// ==========================
// Center Product
// ==========================
export function centerProduct(
  layout
) {
  const updated =
    structuredClone(layout);

  const rootId =
    updated.rootNodes[0];

  const artboard =
    updated.nodes[rootId];

  const product =
    Object.values(
      updated.nodes
    ).find((node) =>
      node.name
        ?.toLowerCase()
        .includes("product")
    );

  if (product) {
    product.x =
      (artboard.width -
        product.width) /
      2;

    product.nx =
      product.x /
      artboard.width;
  }

  return updated;
}