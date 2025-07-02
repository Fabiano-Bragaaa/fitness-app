import { useState } from "react";
import { Text, View } from "react-native";

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
  Modal,
  Screen,
} from "@components";
import { AuthScreenProps } from "@routes";

import { signUpSchema, TypeSignUpSchema } from "./SignUpSchema";

export function SignUp({ navigation }: AuthScreenProps<"signUp">) {
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
      <Modal
        visible={successModalVisible}
        message="Conta registrada com sucesso!"
      />
    </Screen>
  );
}
