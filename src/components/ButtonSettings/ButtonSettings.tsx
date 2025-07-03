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
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  isRed?: boolean;
};

export function ButtonSettings({
  title,
  loading,
  disabled,
  leftComponent,
  rightComponent,
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
          {leftComponent && !rightComponent && (
            <View className="mr-4">{leftComponent}</View>
          )}
          <Text
            className={`flex-1 text-base ${isRed ? "text-error" : "text-primaryBlack"} font-semibold`}
          >
            {title}
          </Text>
          {rightComponent && !leftComponent && (
            <View className="mr-4">{rightComponent}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}
