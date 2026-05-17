import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message, layout } = req.body;

    const updatedLayout =
      JSON.parse(JSON.stringify(layout));

    const rootId =
      updatedLayout.rootNodes[0];

    const artboard =
      updatedLayout.nodes[rootId];

    const lower =
      message.toLowerCase();

    // Find nodes
    const nodes = Object.values(
      updatedLayout.nodes
    );

    const headline = nodes.find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.toLowerCase()
          .includes("luxury")
    );

    const offerBadge = nodes.find(
      (node) =>
        node.type === "text" &&
        node.data?.content
          ?.toLowerCase()
          .includes("20%")
    );

    const product = nodes.find(
      (node) =>
        node.name
          ?.toLowerCase()
          .includes("product")
    );

    let explanation =
      "Instruction applied.";

    // 1. Convert to 9:16
    if (
      lower.includes("9:16") ||
      lower.includes("convert")
    ) {
      artboard.width = 1080;
      artboard.height = 1920;

      artboard.children.forEach((id) => {
        const node =
          updatedLayout.nodes[id];

        if (
          node.nx !== undefined
        ) {
          node.x =
            node.nx *
            artboard.width;

          node.y =
            node.ny *
            artboard.height;

          node.width =
            node.nw *
            artboard.width;

          node.height =
            node.nh *
            artboard.height;
        }
      });

      explanation =
        "Converted design to 9:16";
    }

    // 2. Move headline to top
    if (
      lower.includes("headline") &&
      lower.includes("top")
    ) {
      if (headline) {
        headline.y = 50;
        headline.ny =
          50 / artboard.height;
      }

      explanation =
        "Moved headline to top";
    }

    // 3. Move offer badge higher
    if (
      lower.includes("offer") ||
      lower.includes("badge")
    ) {
      if (
        lower.includes("higher")
      ) {
        offerBadge.y -= 100;
        offerBadge.ny =
          offerBadge.y /
          artboard.height;

        explanation =
          "Moved offer badge higher";
      }
    }

    // 4. Make headline smaller
    if (
      lower.includes("headline") &&
      lower.includes("smaller")
    ) {
      headline.style.visual.fontSize -=
        10;

      explanation =
        "Made headline smaller";
    }

    // 5. Headline color red
    if (
      lower.includes("headline") &&
      lower.includes("red")
    ) {
      headline.style.visual.color =
        {
          type: "solid",
          value: "#FF0000"
        };

      explanation =
        "Changed headline color to red";
    }

    // 6. Discount badge bigger
    if (
      lower.includes("discount") ||
      lower.includes("badge bigger")
    ) {
      offerBadge.width *= 1.3;
      offerBadge.height *=
        1.3;

      explanation =
        "Made discount badge bigger";
    }

    // 7. Center product
    if (
      lower.includes("center") &&
      lower.includes("product")
    ) {
      product.x =
        (artboard.width -
          product.width) /
        2;

      product.nx =
        product.x /
        artboard.width;

      explanation =
        "Centered product";
    }

    // 8. Keep product large
    if (
      lower.includes("product") &&
      lower.includes("large")
    ) {
      product.width *= 1.2;
      product.height *=
        1.2;

      explanation =
        "Kept product large";
    }

    res.json({
      updatedLayout,
      explanation
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      explanation:
        "Something went wrong"
    });
  }
});

export default router;