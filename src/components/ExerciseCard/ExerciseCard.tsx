import { Text, View } from "react-native";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

type Props = {
  name: string;
  time: number;
  intensity: string;
};

export function ExerciseCard({ intensity, name, time }: Props) {
  return (
    <View className="w-full gap-4">
      <View className="flex-row">
        <Text className="text-gray-400 text-xl font-semibold flex-1">
          {name}
        </Text>
        <HugeiconsIcon icon={ArrowRight01Icon} color="#080808" />
      </View>
      <View className="flex-row mb-4">
        <Text className="text-primaryBlack font-semibold flex-1">
          Tempo: {time}
        </Text>
        <Text className="text-primaryBlack font-semibold">
          Intensidade: {intensity}
        </Text>
      </View>
    </View>
  );
}
