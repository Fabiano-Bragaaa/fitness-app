import { Pressable, Text, View } from "react-native";

import { ArrowRight04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

type Props = {
  title: string;
  linkTitle: string;
  onNavigate: () => void;
};

export function Link({ title, linkTitle, onNavigate }: Props) {
  return (
    <View className="flex-row gap-2">
      <Text className="text-black text-lg font-semibold">{title}</Text>
      <Pressable
        className="flex-row gap-1 justify-center items-center"
        onPress={onNavigate}
      >
        <Text className="text-blue-500 text-lg font-semibold">{linkTitle}</Text>
        <HugeiconsIcon
          icon={ArrowRight04Icon}
          color="#60a5fa"
          strokeWidth={2}
        />
      </Pressable>
    </View>
  );
}
