import { ComponentProps } from "react";

import { Box, Input, InputField } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed/build/components/Badge/styled-components";

type Props = ComponentProps<typeof InputField> & {
  label: string;
};

export function GSInput({ label, ...inputField }: Props) {
  return (
    <Box>
      <Text className="text-primaryBlack font-semibold my-2">{label}</Text>
      <Input borderWidth={1} borderColor="#737373" borderRadius={8} padding={4}>
        <InputField flexGrow={1} flexShrink={1} {...inputField} />
      </Input>
    </Box>
  );
}
