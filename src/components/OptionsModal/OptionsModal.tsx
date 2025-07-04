import {
  Text,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import { ButtonDelete } from "../ButtonDelete/ButtonDelete";
import { PasswordInput } from "../PasswordInput/PasswordInput";

type Props = {
  visible: boolean;
  message: string;
  isEdit?: boolean;
  closeModal: () => void;
  handleDelete: () => void;
};

export function OptionsModal({
  message,
  visible,
  isEdit,
  closeModal,
  handleDelete,
}: Props) {
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
              {isEdit ? "Excluir atividade" : "Excluir conta"}
            </Text>
            <Pressable onPress={closeModal}>
              <HugeiconsIcon icon={Cancel01Icon} color="#8E8E8E" size={20} />
            </Pressable>
          </View>
          <Text className="text-primaryGray mb-6 mt-4 text-center">
            {message}
          </Text>
          {!isEdit && <PasswordInput placeholder="Confirmar senha" />}

          <View className="flex-row items-center mt-10 gap-4">
            <TouchableOpacity
              onPress={closeModal}
              className="border border-primaryGray p-3 px-6 items-center rounded-lg"
            >
              <Text className="text-primaryGray">Cancelar</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <ButtonDelete
                title={isEdit ? "Excluir atividade" : "Excluir conta"}
                onPress={handleDelete}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
