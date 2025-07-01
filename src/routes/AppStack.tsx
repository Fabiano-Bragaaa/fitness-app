import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppTabBottomParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Navigator>
  );
}
