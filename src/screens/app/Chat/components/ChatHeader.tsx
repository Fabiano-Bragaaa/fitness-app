import { Text, View } from "react-native";

import { SquareArrowLeft02Icon, Edit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

export function ChatHeader() {
  return (
    <View className="flex-row justify-between mt-4">
      <HugeiconsIcon icon={SquareArrowLeft02Icon} color="#080808" />
      <Text className="font-semibold text-xl">Nome do Chat</Text>
      <HugeiconsIcon icon={Edit02Icon} color="#080808" size={20} />
    </View>
  );
}
