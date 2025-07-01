import { Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  ImageLogo,
  Link,
  Screen,
} from "@components";

import { signUpSchema, TypeSignUpSchema } from "./SignUpSchema";

export function SignUp() {
  const { control, formState, handleSubmit } = useForm<TypeSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange",
  });

  function submitForm() {
    //TODO
  }

  return (
    <Screen scrollable>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Crie sua conta</Text>
        <FormTextInput
          control={control}
          name="email"
          placeholder="E-mail"
          errorMessage="erro"
        />
        <FormPasswordInput
          control={control}
          name="password"
          placeholder="Senha"
        />
        <FormPasswordInput
          control={control}
          name="passwordConfirm"
          placeholder="Confirmar senha"
        />
        <Button
          title="Criar conta"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
        <View className="self-start mt-3">
          <Link title="Não possui conta?" linkTitle="Criar conta" />
        </View>
      </View>
    </Screen>
  );
}
