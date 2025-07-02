import { useState } from "react";
import { FlatList } from "react-native";

import { useOpenAiChat } from "@domain";
import { typeWritterEffect } from "@utils";

import {
  ChatInput,
  LoadingMessage,
  Message,
  MessageProps,
  Screen,
} from "@components";

import { ChatHeader } from "./components/ChatHeader";

type Feedback = {
  type: "loading" | "typing";
  text: string;
};

export function Chat() {
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
      // Aqui pode exibir um toast ou alert com o erro, se quiser
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
  return (
    <Screen>
      <ChatHeader />
      <FlatList
        data={displayMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message {...item} />}
        className="flex-1 mb-3"
        ListHeaderComponent={() => (isLoading ? <LoadingMessage /> : null)}
        inverted
      />
      <ChatInput
        value={input}
        onChangeText={setInput}
        placeholder="O que tem na sua mente?"
        sendMessageOnPress={sendMessage}
      />
    </Screen>
  );
}
