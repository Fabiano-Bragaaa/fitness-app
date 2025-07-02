import { Text, View, Modal as RNModal, StatusBar } from "react-native";

import {
  CheckmarkSquare03Icon,
  CancelSquareIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

type Props = {
  visible: boolean;
  isError?: boolean;
  message: string;
};

export function Modal({ message, visible, isError = false }: Props) {
  return (
    <RNModal
      onRequestClose={() => {
        StatusBar.setTranslucent(true);
      }}
      onShow={() => {
        StatusBar.setTranslucent(false);
      }}
      animationType="fade"
      transparent
      visible={visible}
    >
      <View className="flex-1 justify-center items-center bg-black/60">
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(0,0,0,0.6)"
          translucent
        />
        <View className="bg-green-50 p-6 rounded-lg items-center mx-6 mx-h-10">
          <HugeiconsIcon
            icon={isError ? CancelSquareIcon : CheckmarkSquare03Icon}
            color="#348352"
            size={40}
          />
          <Text className="mt-2 text-success font-bold">{message}</Text>
        </View>
      </View>
    </RNModal>
  );
}
