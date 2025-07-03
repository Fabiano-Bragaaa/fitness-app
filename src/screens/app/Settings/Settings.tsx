import { useState } from "react";
import { Text, View } from "react-native";

import {
  Delete03Icon,
  Logout03Icon,
  Edit02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useAuthCredentials } from "@services";

import { ButtonSettings, OptionsModal, Screen } from "@components";
import { AppScreen } from "@routes";

import { SettingsHeader } from "./components/SettingsHeader";

export function Settings({ navigation }: AppScreen<"settings">) {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const { userCredentials } = useAuthCredentials();

  function closeModal() {
    setSuccessModalVisible(false);
  }

  return (
    <Screen>
      <SettingsHeader />
      <View className="gap-6 my-6 ">
        <ButtonSettings
          rightComponent={<HugeiconsIcon icon={Edit02Icon} color="#080808" />}
          title={`Email: ${userCredentials?.user.email}`}
        />
      </View>
      <View className="gap-6">
        <Text className="text-primaryBlack text-lg font-bold">Ações</Text>
        <ButtonSettings
          leftComponent={<HugeiconsIcon icon={Delete03Icon} color="#E63535" />}
          title="Excluir conta"
          isRed
          onPress={() => setSuccessModalVisible(true)}
        />
        <ButtonSettings
          leftComponent={<HugeiconsIcon icon={Logout03Icon} color="#080808" />}
          title="Sair"
        />
      </View>
      <OptionsModal
        message="Para confirmar a exclusão da sua conta, confirme sua senha no campo abaixo "
        visible={successModalVisible}
        closeModal={closeModal}
      />
    </Screen>
  );
}
