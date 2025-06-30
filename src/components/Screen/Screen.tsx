import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import { useAppSafeArea } from "@hooks";

import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/ScreenContainer";

type ScreenProps = {
  children: ReactNode;
  scrollable?: boolean;
};

export function Screen({ children, scrollable }: ScreenProps) {
  const { bottom, top } = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: top,
            paddingBottom: bottom,
          }}
        >
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
