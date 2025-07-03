import { useState } from "react";
import { Text, View } from "react-native";

import { useCreateExercise, useGetExercises } from "@domain";

import {
  ActivityIndicator,
  BottomModal,
  Button,
  ExerciseCard,
  Graphic,
  Screen,
} from "@components";
import { AppScreen } from "@routes";

import { HomeHeader } from "./components/HomeHeader";

export function Home({ navigation }: AppScreen<"home">) {
  const [visible, setVisible] = useState(false);
  const { exercises, isLoading } = useGetExercises();

  if (!exercises) {
    return null;
  }

  const EXERCISES_LENGTH = exercises?.length;

  const firstThreeExercises = exercises.slice(0, 3);

  return (
    <Screen scrollable>
      {isLoading && <ActivityIndicator />}
      <HomeHeader />
      <Text className="font-semibold text-xl text-primaryBlack my-5">
        Suas atividades
      </Text>
      <View className="gap-8">
        <View className="items-center justify-center">
          <View className="w-full p-3 rounded-xl shadow items-center bg-white">
            <Text className="text-xl text-primaryBlack mb-4">Atividades</Text>
            <Graphic fillValue={EXERCISES_LENGTH} />
          </View>
        </View>
        <View className="items-center justify-center">
          <View className="w-full p-3 rounded-xl shadow items-center bg-white">
            <Text className="text-xl text-primaryBlack">
              Resumo das atividades
            </Text>
            <View className="w-full h-0.5 bg-gray-100 mt-2 rounded-full" />

            {firstThreeExercises.map((exercises) => (
              <ExerciseCard
                key={exercises.id}
                name={exercises.name}
                intensity={exercises.intensity}
                time={Number(exercises.duration)}
              />
            ))}
            <Button
              title="Nova atividade"
              style={{ marginTop: 15 }}
              onPress={() => setVisible(true)}
            />
          </View>
        </View>
      </View>
      <BottomModal visible={visible} closeModal={() => setVisible(false)} />
    </Screen>
  );
}
