import { Image, Text, View } from "react-native";

import { profile } from "@assets";

export function SettingsHeader() {
  return (
    <View className="mt-4 gap-4">
      <Text className="font-semibold text-2xl text-primaryBlack">
        Configuração
      </Text>
      <View className="items-center justify-center">
        <Image source={profile} className="w-48 h-48" />
      </View>
    </View>
  );
}
