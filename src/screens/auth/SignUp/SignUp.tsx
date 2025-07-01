import { useState } from "react";
import { Modal, Text, View } from "react-native";

import { useAuthSignUp } from "@domain";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthCredentials } from "@services";
import { useForm } from "react-hook-form";

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  ImageLogo,
  Link,
  Screen,
} from "@components";
import { AuthScreenPropps } from "@routes";

import { signUpSchema, TypeSignUpSchema } from "./SignUpSchema";

export function SignUp({ navigation }: AuthScreenPropps<"signUp">) {
  const { saveCredentials } = useAuthCredentials();

  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const { isLoading, signIn } = useAuthSignUp({
    onSuccess: (authCredentials) => {
      setSuccessModalVisible(true);
      setTimeout(() => {
        setSuccessModalVisible(false);
        saveCredentials(authCredentials);
      }, 2000);
    },
  });
  const { control, formState, handleSubmit } = useForm<TypeSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    mode: "onChange",
  });

  function submitForm(props: TypeSignUpSchema) {
    signIn(props);
  }

  return (
    <Screen scrollable>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Crie sua conta</Text>
        <FormTextInput control={control} name="email" placeholder="E-mail" />
        <FormPasswordInput
          control={control}
          name="password"
          placeholder="Senha"
        />
        <FormPasswordInput
          control={control}
          name="confirm_password"
          placeholder="Confirmar senha"
        />
        <Button
          title="Criar conta"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
          loading={isLoading}
        />
        <View className="self-start mt-3">
          <Link
            title="Já possui conta?"
            linkTitle="Fazer login"
            onNavigate={() => navigation.navigate("login")}
          />
        </View>
      </View>
      <Modal animationType="fade" transparent visible={successModalVisible}>
        <View className="flex-1 justify-center items-center bg-black/60">
          <View className="bg-green-50 p-6 rounded-lg items-center mx-6">
            <Text className="text-5xl">✅</Text>
            <Text className="mt-2 text-green-800 font-bold">
              Conta registrada com sucesso!
            </Text>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}
