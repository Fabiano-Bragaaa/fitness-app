import {
  Text,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { Cancel01Icon, Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import { PasswordInput } from "../PasswordInput/PasswordInput";

type Props = {
  visible: boolean;
  message: string;
  closeModal: () => void;
};

export function OptionsModal({ message, visible, closeModal }: Props) {
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
      <View className="flex-1 justify-center items-center bg-black/60">
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(0,0,0,0.6)"
          translucent
        />

        <View className="bg-primaryWhite p-6 rounded-lg w-[80%]">
          <View className="items-center flex-row">
            <Text className="font-semibold text-lg text-primaryBlack flex-1">
              Excluir conta
            </Text>
            <Pressable onPress={closeModal}>
              <HugeiconsIcon icon={Cancel01Icon} color="#8E8E8E" size={20} />
            </Pressable>
          </View>
          <Text className="text-primaryGray mb-6 mt-4">{message}</Text>

          <PasswordInput placeholder="Confirmar senha" />

          <View className="flex-row mt-10 gap-4">
            <TouchableOpacity
              onPress={closeModal}
              className="border border-primaryGray p-3 px-6 items-center rounded-lg"
            >
              <Text className="text-primaryGray">Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-900 p-2 flex-1 gap-2 rounded-lg flex-row items-center">
              <Text className="text-primaryWhite ml-2">Excluir conta</Text>
              <HugeiconsIcon icon={Delete02Icon} color="#F6F6F6" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
