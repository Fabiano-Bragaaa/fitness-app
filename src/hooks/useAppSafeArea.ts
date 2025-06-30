import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useAppSafeArea() {
  const { bottom, top } = useSafeAreaInsets();

  return {
    top: Math.max(top, 20),
    bottom: Math.max(bottom, 20),
  };
}
