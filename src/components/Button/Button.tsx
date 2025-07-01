import { ReactNode } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  rightComponent?: ReactNode;
};

export function Button({
  title,
  loading,
  disabled,
  ...touchableOpacityProps
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className="bg-black w-full h-12 rounded-md items-center justify-center"
      {...touchableOpacityProps}
    >
      {loading ? (
        <ActivityIndicator color="#fff" size={16} />
      ) : (
        <Text className="text-base text-white font-semibold ">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
