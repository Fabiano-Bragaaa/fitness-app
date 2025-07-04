import { Text, View } from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";

type Props = {
  fillValue: number;
};

export function Graphic({ fillValue }: Props) {
  return (
    <AnimatedCircularProgress
      size={200}
      width={15}
      fill={fillValue}
      tintColor="#333333"
      backgroundColor="#EDEDED"
      arcSweepAngle={180}
      rotation={270}
      lineCap="round"
    >
      {(fill: number) => (
        <View className="items-center gap-4">
          <Text className="font-semibold text-3xl text-primaryBlack">
            {Math.round(fill)}
          </Text>
          <Text className="text-gray-500">registrados</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
}
