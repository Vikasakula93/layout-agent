import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message, layout } = req.body;

    let updatedLayout =
      structuredClone(layout);

    const rootId =
      updatedLayout.rootNodes[0];

    const artboard =
      updatedLayout.nodes[rootId];

    // Convert to 9:16
    if (
      message.toLowerCase().includes("9:16")
    ) {
      artboard.width = 1080;
      artboard.height = 1920;

      artboard.children.forEach((id) => {
        const node =
          updatedLayout.nodes[id];

        if (!node) return;

        node.x =
          (node.nx || 0) *
          artboard.width;

        node.y =
          (node.ny || 0) *
          artboard.height;

        node.width =
          (node.nw || 0.2) *
          artboard.width;

        node.height =
          (node.nh || 0.2) *
          artboard.height;
      });

      return res.json({
        updatedLayout,
        explanation:
          "Converted design to 9:16 format"
      });
    }

    // Make headline smaller
    if (
      message
        .toLowerCase()
        .includes("headline smaller")
    ) {
      const headline =
        Object.values(
          updatedLayout.nodes
        ).find(
          (n) =>
            n.type === "text" &&
            n.name?.toLowerCase()
              .includes("headline")
        );

      if (
        headline?.style?.visual
          ?.fontSize
      ) {
        headline.style.visual.fontSize -=
          10;
      }

      return res.json({
        updatedLayout,
        explanation:
          "Headline made smaller"
      });
    }

    // Move headline to top
    if (
      message
        .toLowerCase()
        .includes("headline to top")
    ) {
      const headline =
        Object.values(
          updatedLayout.nodes
        ).find(
          (n) =>
            n.type === "text" &&
            n.name?.toLowerCase()
              .includes("headline")
        );

      if (headline) {
        headline.y = 50;
        headline.ny = 0.05;
      }

      return res.json({
        updatedLayout,
        explanation:
          "Headline moved to top"
      });
    }

    res.json({
      updatedLayout,
      explanation:
        "Instruction understood"
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message
    });
  }
});

export default router;