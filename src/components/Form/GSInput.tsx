import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import { GSInput, GSInputProps } from "../GSInput/GSInput";

export function FormGSTextInput<FormType extends FieldValues>({
  name,
  control,
  ...gsInputProps
}: GSInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <GSInput value={value} onChangeText={onChange} {...gsInputProps} />
      )}
    />
  );
}
