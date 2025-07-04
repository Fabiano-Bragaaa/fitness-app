import { ReactNode } from "react";
import { ScrollView, View } from "react-native";

type Props = {
  children: ReactNode;
};

export function ScrollViewContainer({ children }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      className="flex-1 bg-white"
      style={{ flex: 1 }}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children }: Props) {
  return <View className="flex-1 bg-white">{children}</View>;
}
