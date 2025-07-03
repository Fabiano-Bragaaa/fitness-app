import { Text } from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";

export function Graphic() {
  return (
    <AnimatedCircularProgress
      size={200}
      width={15}
      fill={60}
      tintColor="#333333"
      backgroundColor="#EDEDED"
      arcSweepAngle={180}
      rotation={270}
      lineCap="round"
    >
      {(fill: number) => <Text>{`${Math.round(fill)} registrados`}</Text>}
    </AnimatedCircularProgress>
  );
}
