# Approach

I implemented a chat-based layout agent using a hybrid architecture.

The frontend uses React + Vite and provides:
- Chat interface
- JSON viewer
- Wireframe preview

The backend is built with Express.js and processes layout transformation requests.

For reliability, deterministic layout transformation functions are used for operations like:
- Aspect ratio conversion (1:1 → 9:16)
- Headline movement
- Text resizing

The system is designed to integrate with OpenAI GPT for natural language reasoning. However, core transformations are implemented programmatically to ensure stable and predictable JSON updates.

The architecture supports future enhancements such as:
- Semantic element detection
- Follow-up conversational context
- Dynamic layout reasoning
- LLM-powered intent understanding