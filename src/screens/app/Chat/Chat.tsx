import { View } from "react-native";

import { ChatInput, Message, Screen } from "@components";

import { ChatHeader } from "./components/ChatHeader";

export function Chat() {
  return (
    <Screen>
      <ChatHeader />
      <View className="flex-1 mb-3" />
      <Message message="skadlskadksakdaskdaskdkasdsadlsakdsladksaldksaldksalaskdsalkdsaldkasldkasdlsa" />
      <Message
        message="skadlskadksakdaskdaskdkasdsadlsakdsladksaldksaldksalaskdsalkdsaldkasldkasdlsa"
        from="other"
      />
      <ChatInput placeholder="O que tem na sua mente?" />
    </Screen>
  );
}
