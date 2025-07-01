import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import {
  PasswordInput,
  PasswordInputProps,
} from "../PasswordInput/PasswordInput";

export function FormPasswordInput<FormType extends FieldValues>({
  name,
  control,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <PasswordInput
          value={value}
          onChangeText={onChange}
          errorMessage={error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
