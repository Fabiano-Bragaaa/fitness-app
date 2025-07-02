import { Text, View } from "react-native";

export type MessageProps = {
  id: string;
  message: string;
  from?: "me" | "other";
};

export function Message({ message, from = "me" }: MessageProps) {
  const isMe = from === "me";

  return (
    <View
      className={`w-full mb-2 flex-row my-3 ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <View
        className={`max-w-[90%] p-3 rounded-xl shadow ${
          isMe ? "bg-white" : "bg-gray-200"
        }`}
      >
        <Text className="text-primaryBlack">{message}</Text>
      </View>
    </View>
  );
}
