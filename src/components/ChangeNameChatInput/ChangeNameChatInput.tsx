import { TextInput, TextInputProps, View } from "react-native";

export function ChangeNameChatInput(textInputProps: TextInputProps) {
  return (
    <View className="items-center flex-1 mt-2">
      <View className="flex-row bg-gray-300 p-3 rounded-lg">
        <TextInput
          textAlign="center"
          autoCapitalize="none"
          placeholderTextColor="#080808"
          className="p-0 text-primaryBlack font-bold text-lg flex-shrink flex-grow"
          {...textInputProps}
        />
      </View>
    </View>
  );
}
