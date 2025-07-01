import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, SignUp } from "@screens";

export type AuthStackParamList = {
  login: undefined;
  signUp: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: false }}
    >
      <Screen name="login" component={Login} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
