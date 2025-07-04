import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ViewProps } from "react-native";

import { useAppSafeArea } from "@hooks";

import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/ScreenContainer";

type ScreenProps = ViewProps & {
  children: ReactNode;
  scrollable?: boolean;
};

export function Screen({ children, scrollable, style }: ScreenProps) {
  const { bottom, top } = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container>
        <View
          style={[
            {
              flex: 1,
              paddingHorizontal: 20,
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
        >
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
