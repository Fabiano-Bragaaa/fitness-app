import { Image, ImageProps } from "react-native";

import { logo } from "@assets";

export function ImageLogo({ style, ...imageProps }: ImageProps) {
  return (
    <Image
      source={logo}
      style={[{ width: 300, height: 300 }, style]}
      {...imageProps}
    />
  );
}
