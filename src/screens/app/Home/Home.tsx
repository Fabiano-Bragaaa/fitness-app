import { Text, View } from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import { Screen } from "@components";
import { AppScreen } from "@routes";

import { HomeHeader } from "./components/HomeHeader";

export function Home({ navigation }: AppScreen<"home">) {
  return (
    <Screen>
      <HomeHeader />
      <Text className="font-semibold text-xl text-primaryBlack my-5">
        Suas atividades
      </Text>
      <View className="items-center justify-center">
        <View className="w-full p-3 rounded-xl shadow items-center bg-white">
          <Text className="text-xl text-primaryBlack">Atividades</Text>
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
        </View>
      </View>
    </Screen>
  );
}
