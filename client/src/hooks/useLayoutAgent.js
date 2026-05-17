import { useState } from "react";
import axios from "axios";
import initialLayout from "../data/initialLayout.json";

export function useLayoutAgent() {
  const [layout, setLayout] =
    useState(initialLayout);

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async (text) => {
    const userMessage = {
      role: "user",
      content: text
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/chat",
        {
          message: text,
          layout
        }
      );

      setLayout(
        response.data.updatedLayout
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            response.data.explanation
        }
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong."
        }
      ]);
    }

    setLoading(false);
  };

  return {
    layout,
    messages,
    loading,
    sendMessage
  };
}