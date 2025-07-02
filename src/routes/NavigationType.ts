import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppTabBottomParamList } from "./AppTabNavigator";
import { AuthStackParamList } from "./AuthStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppTabBottomParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreen<RouteName extends keyof AppTabBottomParamList> =
  NativeStackScreenProps<AppTabBottomParamList, RouteName>;
