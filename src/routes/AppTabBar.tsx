import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import {
  HomeIcon,
  AiChat02Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import {
  HomeIcon as HomeDuotone,
  AiChat02Icon as AiChatDuotone,
  Settings02Icon as SettingsDuotone,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { AppTabBottomParamList } from "./AppTabNavigator";

export function AppTabBar(props: BottomTabBarProps) {
  const { state, navigation } = props;

  const navItems: Record<
    keyof AppTabBottomParamList,
    {
      label: string;
      solidIcon: typeof HomeIcon;
      duotoneIcon: typeof HomeDuotone;
    }
  > = {
    chat: {
      label: "Chat",
      solidIcon: AiChat02Icon,
      duotoneIcon: AiChatDuotone,
    },
    home: {
      label: "Home",
      solidIcon: HomeIcon,
      duotoneIcon: HomeDuotone,
    },
    settings: {
      label: "Configuração",
      solidIcon: Settings02Icon,
      duotoneIcon: SettingsDuotone,
    },
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const key = route.name as keyof AppTabBottomParamList;
        const item = navItems[key];
        const isActive = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isActive && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={styles.navItem}
          >
            <HugeiconsIcon
              icon={item.solidIcon}
              altIcon={item.duotoneIcon}
              showAlt={isActive}
              size={24}
              color={isActive ? "#000" : "#888"}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: "#888",
    fontWeight: "400",
  },
  activeLabel: {
    color: "#000",
    fontWeight: "700",
  },
});
