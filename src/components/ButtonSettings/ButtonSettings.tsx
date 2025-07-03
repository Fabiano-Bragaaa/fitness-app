import { ReactNode } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  leftComponent: ReactNode;
  isRed?: boolean;
};

export function ButtonSettings({
  title,
  loading,
  disabled,
  leftComponent,
  isRed = false,
  ...touchableOpacityProps
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className="bg-primaryWhite w-full h-16 rounded-md justify-center p-4 shadow"
      {...touchableOpacityProps}
    >
      {loading ? (
        <ActivityIndicator color="#fff" size={16} />
      ) : (
        <View className="flex-row items-center">
          {leftComponent && <View className="mr-4">{leftComponent}</View>}
          <Text
            className={`text-base ${isRed ? "text-error" : "text-primaryBlack"} font-semibold`}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
