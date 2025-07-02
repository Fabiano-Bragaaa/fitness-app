import { Text, View } from "react-native";

import { useAuthSignIn } from "@domain";
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
import { AuthScreenProps } from "@routes";

import { loginSchema, TypeLoginSchema } from "./LoginSchema";

export function Login({ navigation }: AuthScreenProps<"login">) {
  const { isLoading, signIn } = useAuthSignIn();
  const { control, formState, handleSubmit } = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function submitForm(props: TypeLoginSchema) {
    signIn(props);
  }
  return (
    <Screen scrollable>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Login</Text>
        <FormTextInput control={control} name="email" placeholder="E-mail" />
        <FormPasswordInput
          control={control}
          name="password"
          placeholder="Senha"
        />
        <Button
          title="Login"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
          loading={isLoading}
        />
        <View className="self-start mt-3">
          <Link
            title="Não possui conta?"
            linkTitle="Criar conta"
            onNavigate={() => navigation.navigate("signUp")}
          />
        </View>
      </View>
    </Screen>
  );
}
