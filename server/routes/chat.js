import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message, layout } = req.body;

    const updatedLayout = structuredClone(layout);
    const lowerMessage = message.toLowerCase();

    const rootId = updatedLayout.rootNodes[0];
    const artboard = updatedLayout.nodes[rootId];

    // Find important nodes
    const nodes = Object.values(updatedLayout.nodes);

    const headline = nodes.find(
      (node) =>
        node.type === "text" &&
        node.data?.content?.toLowerCase().includes("luxury")
    );

    const product = nodes.find(
      (node) =>
        node.name?.toLowerCase().includes("product")
    );

    const discountBadge = nodes.find(
      (node) =>
        node.data?.content?.toLowerCase().includes("20%")
    );

    const offerText = nodes.find(
      (node) =>
        node.data?.content?.toLowerCase().includes("limited time")
    );

    let explanation = "Instruction understood";

    // ====================================
    // Convert to 9:16
    // ====================================
    if (
      lowerMessage.includes("9:16") ||
      lowerMessage.includes("convert")
    ) {
      artboard.width = 1080;
      artboard.height = 1920;

      artboard.children.forEach((childId) => {
        const node = updatedLayout.nodes[childId];

        if (
          node.nx !== undefined &&
          node.ny !== undefined
        ) {
          node.x = node.nx * 1080;
          node.y = node.ny * 1920;
          node.width = node.nw * 1080;
          node.height = node.nh * 1920;
        }
      });

      explanation =
        "Converted design to 9:16 format";
    }

    // ====================================
    // Keep product large
    // ====================================
    if (
      lowerMessage.includes("product large") ||
      lowerMessage.includes("keep the product large")
    ) {
      if (product) {
        product.width *= 1.2;
        product.height *= 1.2;
      }

      explanation = "Made product larger";
    }

    // ====================================
    // Move headline to top
    // ====================================
    if (
      lowerMessage.includes("headline") &&
      lowerMessage.includes("top")
    ) {
      if (headline) {
        headline.y = 60;
        headline.ny =
          headline.y / artboard.height;
      }

      explanation =
        "Moved headline to top";
    }

    // ====================================
    // Offer badge higher
    // ====================================
    if (
      lowerMessage.includes("offer badge") &&
      lowerMessage.includes("higher")
    ) {
      if (offerText) {
        offerText.y -= 100;
        offerText.ny =
          offerText.y / artboard.height;
      }

      explanation =
        "Moved offer badge higher";
    }

    // ====================================
    // Headline smaller
    // ====================================
    if (
      lowerMessage.includes("headline smaller") ||
      lowerMessage.includes("make the headline smaller")
    ) {
      if (headline) {
        headline.style.visual.fontSize -= 12;
      }

      explanation =
        "Made headline smaller";
    }

    // ====================================
    // Headline color red
    // ====================================
    if (
      lowerMessage.includes("headline color") &&
      lowerMessage.includes("red")
    ) {
      if (headline) {
        headline.style.visual.color = {
          type: "solid",
          value: "#FF0000"
        };
      }

      explanation =
        "Changed headline color to red";
    }

    // ====================================
    // Discount badge bigger
    // ====================================
    if (
      lowerMessage.includes("discount badge") &&
      lowerMessage.includes("bigger")
    ) {
      if (discountBadge) {
        discountBadge.width *= 1.3;
        discountBadge.height *= 1.3;

        discountBadge.style.visual.fontSize += 10;
      }

      explanation =
        "Made discount badge bigger";
    }

    // ====================================
    // Center product
    // ====================================
    if (
      lowerMessage.includes("center the product")
    ) {
      if (product) {
        product.x =
          (artboard.width - product.width) / 2;

        product.nx =
          product.x / artboard.width;
      }

      explanation =
        "Centered the product";
    }

    return res.json({
      updatedLayout,
      explanation
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
});

export default router;