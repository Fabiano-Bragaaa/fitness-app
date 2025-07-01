import { ReactNode } from "react";
import {
  TextInputProps as RNTextInputProps,
  View,
  TextInput as RNTextInput,
  Text,
} from "react-native";

export type TextInputProps = RNTextInputProps & {
  errorMessage?: string;
  rightComponent?: ReactNode;
};

export function TextInput({
  errorMessage,
  rightComponent,
  ...rnTextInputProps
}: TextInputProps) {
  return (
    <View className="items-center p-4">
      <View className="flex-row">
        <RNTextInput
          autoCapitalize="none"
          placeholderTextColor="#737373"
          {...rnTextInputProps}
          className="p-0 pb-2 text-black text-lg flex-shrink flex-grow border-b border-b-gray-400"
        />
        {rightComponent && (
          <View className="justify-center ml-4">{rightComponent}</View>
        )}
      </View>
      {errorMessage && (
        <View className="mt-1 self-start">
          <Text className="text-red-500 text-lg">{errorMessage}</Text>
        </View>
      )}
    </View>
  );
}
