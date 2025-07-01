import { useState } from "react";
import { Pressable } from "react-native";

import { ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import { TextInput, TextInputProps } from "../TextInput/TextInput";

export type PasswordInputProps = TextInputProps;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      rightComponent={
        <Pressable onPress={toggleSecureTextEntry}>
          <HugeiconsIcon
            icon={ViewIcon}
            altIcon={ViewOffSlashIcon}
            showAlt={isSecureTextEntry}
          />
        </Pressable>
      }
      {...props}
    />
  );
}
