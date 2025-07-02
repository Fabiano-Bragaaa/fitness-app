import { FlatList } from "react-native";

import { useChatLogic } from "@domain";

import { ChatInput, LoadingMessage, Message, Screen } from "@components";
import { AppScreen } from "@routes";

import { ChatHeader } from "./components/ChatHeader";

export function Chat({ navigation }: AppScreen<"chat">) {
  const { displayMessages, input, isLoading, sendMessage, setInput } =
    useChatLogic();
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
