import { Text, View } from "react-native";

import { Delete03Icon, Logout03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import { ButtonSettings, Screen } from "@components";
import { AppScreen } from "@routes";

import { SettingsHeader } from "./components/SettingsHeader";

export function Settings({ navigation }: AppScreen<"settings">) {
  return (
    <Screen>
      <SettingsHeader />
      <View className="gap-6">
        <Text className="text-primaryBlack text-lg font-bold">Ações</Text>
        <ButtonSettings
          leftComponent={<HugeiconsIcon icon={Delete03Icon} color="#E63535" />}
          title="Excluir conta"
          isRed
        />
        <ButtonSettings
          leftComponent={<HugeiconsIcon icon={Logout03Icon} color="#080808" />}
          title="Sair"
        />
      </View>
    </Screen>
  );
}
