import { Image } from "react-native";

import { logo } from "@assets";

export function ImageLogo() {
  return <Image source={logo} style={{ width: 300, height: 300 }} />;
}
