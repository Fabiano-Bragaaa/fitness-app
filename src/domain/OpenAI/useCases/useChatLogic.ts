import { useState } from "react";

import { typeWritterEffect } from "@utils";

import { MessageProps } from "@components";

import { useOpenAiChat } from "./useOpenAiChat";

type Feedback = {
  type: "loading" | "typing";
  text: string;
};

export function useChatLogic() {
  const { isLoading, chatOpenAi } = useOpenAiChat({
    onSuccess: (reply) => {
      typeWritterEffect({
        text: reply.message,
        onUpdate: (current) => setFeedback({ type: "typing", text: current }),
        onDone: () => {
          setMessages((prev) => [reply, ...prev]);
          setFeedback(null);
          setIsMyTurn(true);
        },
      });
    },
    onError: (errorMsg) => {
      setFeedback(null);
      setIsMyTurn(true);
      console.error("Erro no chat OpenAI:", errorMsg);
    },
  });

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [isMyTurn, setIsMyTurn] = useState(true);
  const [feedback, setFeedback] = useState<null | Feedback>(null);

  async function sendMessage() {
    if (!input.trim()) {
      return;
    }

    setMessages((prev) => [
      {
        id: Date.now().toString(),
        message: input,
        from: "me",
      },
      ...prev,
    ]);

    setInput("");
    setIsMyTurn(false);
    setFeedback({ type: "loading", text: "" });

    chatOpenAi(input);
  }

  const displayMessages: MessageProps[] =
    feedback && feedback.type === "typing"
      ? [
          {
            id: Date.now().toString(),
            message: feedback.text,
            from: "other",
          },
          ...messages,
        ]
      : messages;

  return {
    input,
    setInput,
    isLoading,
    sendMessage,
    displayMessages,
  };
}
