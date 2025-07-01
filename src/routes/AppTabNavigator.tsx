import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Chat, Home, Settings } from "@screens";

import { AppTabBar } from "./AppTabBar";

export type AppTabBottomParamList = {
  settings: undefined;
  home: undefined;
  chat: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<AppTabBottomParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Navigator tabBar={renderTabBar} screenOptions={{ headerShown: false }}>
      <Screen name="chat" component={Chat} />
      <Screen name="home" component={Home} />
      <Screen name="settings" component={Settings} />
    </Navigator>
  );
}
