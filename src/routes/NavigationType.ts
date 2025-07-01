import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./AuthStack";

export type AuthScreenPropps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
