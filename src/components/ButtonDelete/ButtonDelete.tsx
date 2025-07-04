import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonDelete({ title, ...touchableOpacityProps }: Props) {
  return (
    <TouchableOpacity
      className="bg-red-900 p-3 gap-2 w-[40%] rounded-lg flex-row items-center"
      {...touchableOpacityProps}
    >
      <Text className="text-primaryWhite ml-2">{title}</Text>
      <HugeiconsIcon icon={Delete02Icon} color="#F6F6F6" size={20} />
    </TouchableOpacity>
  );
}
