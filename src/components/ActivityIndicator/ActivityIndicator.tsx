import { ActivityIndicator as RNActivityIndicator, View } from "react-native";

export function ActivityIndicator() {
  return (
    <View className="flex-1 items-center justify-center">
      <RNActivityIndicator color={"#080808"} size={30} />
    </View>
  );
}
