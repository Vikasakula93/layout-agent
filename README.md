# Chat-Based Layout Agent

## Project Overview

This project is a **chat-based layout agent** that allows users to modify a design layout using natural language instructions.

The application takes a layout JSON containing elements such as text, images, shapes, and positions, and updates the layout dynamically based on chat instructions like:

- Convert this design to 9:16
- Move the headline to the top
- Make the headline smaller
- Change the headline color to red
- Center the product

<<<<<<< HEAD
Frontend:
- React
=======
The updated layout JSON is displayed in real time along with a wireframe preview of the design.
>>>>>>> e5f2854 (Updated README)

---

# Features

✅ Chat-based layout editing

✅ Real-time JSON transformation

✅ Live wireframe preview

✅ Layout reasoning using semantic element detection

✅ Support for follow-up layout instructions

✅ Modular backend architecture

---

# Example Prompts

Try the following prompts:

```text
Convert this design to 9:16
Keep the product large
Move the headline to the top
Move the offer badge higher
Make the headline smaller
Change the headline color to red
Make the discount badge bigger
Center the product
```

---

# Tech Stack

## Frontend
- React.js
- Vite
- Axios
- CSS

## Backend
- Node.js
- Express.js
- CORS
- Dotenv

## Architecture
- Modular transformation services
- JSON validation
- Chat-based interaction
- Rule-based layout reasoning

---

# Project Structure

```text
layout-agent/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── JsonViewer.jsx
│   │   │   └── WireframePreview.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useLayoutAgent.js
│   │   │
│   │   ├── data/
│   │   │   └── initialLayout.json
│   │   │
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── routes/
│   │   └── chat.js
│   │
│   ├── services/
│   │   ├── llmService.js
│   │   └── layoutTransforms.js
│   │
│   ├── utils/
│   │   └── jsonValidator.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# Prerequisites

Before running this project, make sure you have:

- Node.js (v20 or higher)
- npm installed
- Git installed
- VS Code (recommended)

Check installed versions:

```bash
node -v
npm -v
```

---

# Environment Variables

Create a `.env` file inside:

```text
server/.env
```

Add:

```env
PORT=3001
OPENAI_API_KEY=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
```

> Note: API key is optional in the current implementation because layout transformations are handled through backend transformation logic.

---

# Installation & Setup

## Step 1: Clone Repository

```bash
git clone https://github.com/Vikasakula93/layout-agent.git
```

Move into project folder:

```bash
cd layout-agent
```

---

## Step 2: Install Frontend Dependencies

Go to client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

<<<<<<< HEAD
- Convert to 9:16
- Move headline to top
- Make headline smaller
=======
## Step 3: Install Backend Dependencies

Open another terminal.

Go to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
node index.js
```

Backend runs on:

```text
http://localhost:3001
```

---

# How It Works

### Step 1 — User Sends Instruction

Example:

```text
Move the headline to the top
```

### Step 2 — Backend Understands Instruction

The backend identifies:

- Which element needs modification
- What action should happen
- Which JSON properties must update

### Step 3 — JSON Gets Updated

The system updates:

- Position (`x`, `y`)
- Size (`width`, `height`)
- Font Size
- Colors
- Normalized coordinates (`nx`, `ny`, `nw`, `nh`)

### Step 4 — UI Refreshes Automatically

The updated layout appears instantly in:

1. Wireframe Preview
2. Updated JSON Viewer

---

# Supported Functionalities

### Convert to 9:16

Converts artboard dimensions from:

```text
1080 × 1080
```

to:

```text
1080 × 1920
```

while maintaining proportions.

### Keep Product Large

Increases product size for visual focus.

### Move Headline to Top

Moves the main headline element upward.

### Move Offer Badge Higher

Moves the discount/offer section higher.

### Make Headline Smaller

Reduces headline font size.

### Change Headline Color

Updates text color dynamically.

### Make Discount Badge Bigger

Increases badge size and font size.

### Center Product

Moves product image to center alignment.

---

# Future Improvements

- OpenAI GPT integration
- Better semantic layout understanding
- Undo / Redo support
- Drag-and-drop editing
- Multi-layout support
- Better UI design improvements

---

# Author

**Vikas Akula**

AI Engineer Intern POC Submission
>>>>>>> e5f2854 (Updated README)
