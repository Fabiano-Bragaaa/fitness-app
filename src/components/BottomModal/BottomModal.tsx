import { Modal, StatusBar, Text, View } from "react-native";

import { CancelSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

type Props = {
  visible: boolean;
  message: string;
};

export function BottomModal({ message, visible }: Props) {
  return (
    <Modal
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
      <View className="flex-1 justify-end items-center bg-black/60">
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(0,0,0,0.6)"
          translucent
        />
        <View className="bg-primaryWhite p-6 rounded-t-2xl w-full h-56 ">
          <View className="flex-row items-center">
            <Text className="mt-2 text-primaryBlack text-2xl font-bold flex-1">
              Registre sua atividade
            </Text>
            <HugeiconsIcon icon={CancelSquareIcon} color="#080808" size={30} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
