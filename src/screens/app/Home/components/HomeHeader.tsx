import { Text, View } from "react-native";

import { ImageLogo } from "@components";

export function HomeHeader() {
  return (
    <View className="flex-row items-center gap-4">
      <ImageLogo style={{ width: 80, height: 80 }} />
      <Text className="font-semibold text-3xl text-primaryBlack">Inicio</Text>
    </View>
  );
}
