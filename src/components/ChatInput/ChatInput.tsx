import { Pressable, TextInput, TextInputProps, View } from "react-native";

import { SentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

type ChatInputProps = TextInputProps & {
  sendMessageOnPress: () => void;
};

export function ChatInput({
  sendMessageOnPress,
  ...textInputProps
}: ChatInputProps) {
  return (
    <View className="items-center mt-2">
      <View className="flex-row bg-gray-300 p-3 rounded-lg">
        <TextInput
          textAlignVertical="center"
          autoCapitalize="none"
          placeholderTextColor="#080808"
          className="p-0 text-primaryBlack text-lg flex-shrink flex-grow"
          {...textInputProps}
        />
        <Pressable onPress={sendMessageOnPress} className="justify-center ml-4">
          <HugeiconsIcon icon={SentIcon} color="#080808" size={22} />
        </Pressable>
      </View>
    </View>
  );
}
