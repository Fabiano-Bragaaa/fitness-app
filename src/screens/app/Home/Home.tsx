import { Text, View } from "react-native";

import { useGetExercises } from "@domain";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { ActivityIndicator, Graphic, Screen } from "@components";
import { AppScreen } from "@routes";

import { HomeHeader } from "./components/HomeHeader";

export function Home({ navigation }: AppScreen<"home">) {
  const { exercises, isLoading } = useGetExercises();

  if (!exercises) {
    return null;
  }

  const EXERCISES_LENGTH = exercises?.length;

  console.log(exercises);

  return (
    <Screen>
      {isLoading && <ActivityIndicator />}
      <HomeHeader />
      <Text className="font-semibold text-xl text-primaryBlack my-5">
        Suas atividades
      </Text>
      <View className="gap-8">
        <View className="items-center justify-center">
          <View className="w-full p-3 rounded-xl shadow items-center bg-white">
            <Text className="text-xl text-primaryBlack">Atividades</Text>
            <Graphic fillValue={EXERCISES_LENGTH} />
          </View>
        </View>
        <View className="items-center justify-center">
          <View className="w-full p-3 rounded-xl shadow items-center bg-white">
            <Text className="text-xl text-primaryBlack">
              Resumo das atividades
            </Text>
            <View className="w-full h-0.5 bg-gray-100 mt-2 rounded-full" />
          </View>
        </View>
      </View>
    </Screen>
  );
}
