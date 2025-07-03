import { useState } from "react";
import { Modal, Pressable, StatusBar, Text, View } from "react-native";

import { useCreateExercise } from "@domain";
import { zodResolver } from "@hookform/resolvers/zod";
import { CancelSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useForm } from "react-hook-form";

import { Button } from "../Button/Button";
import { FormGSTextInput } from "../Form/GSInput";
import { Modal as CModal } from "../Modal/Modal";

import { bottomModalSchema, TypeBottomModalSchema } from "./modalSchema";

type Props = {
  visible: boolean;
  closeModal: () => void;
};

export function BottomModal({ closeModal, visible }: Props) {
  const [successModal, setSuccessModal] = useState(false);
  const { createExercise, isloading } = useCreateExercise({
    onSuccess: () => {
      reset();
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        closeModal();
      }, 2000);
    },
  });
  const { control, formState, handleSubmit, reset } =
    useForm<TypeBottomModalSchema>({
      resolver: zodResolver(bottomModalSchema),
      defaultValues: {
        duration: "",
        intensity: "",
        name: "",
      },
    });

  function registetr(props: TypeBottomModalSchema) {
    createExercise(props);
  }

  return (
    <Modal
      onRequestClose={() => {
        StatusBar.setTranslucent(true);
      }}
      onShow={() => {
        StatusBar.setTranslucent(false);
      }}
      animationType="fade"
      transparent
      visible={visible}
    >
      <View className="flex-1 justify-end items-center bg-black/60">
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(0,0,0,0.6)"
          translucent
        />
        <View className="bg-primaryWhite p-6 rounded-t-2xl w-full">
          <View className="flex-row items-center">
            <Text className="mt-2 text-primaryBlack text-2xl font-bold flex-1">
              Registre sua atividade
            </Text>
            <Pressable onPress={closeModal}>
              <HugeiconsIcon
                icon={CancelSquareIcon}
                color="#080808"
                size={30}
              />
            </Pressable>
          </View>
          <FormGSTextInput
            control={control}
            name="name"
            label="Nome"
            placeholder="Corrida, natação, musculação"
          />
          <FormGSTextInput
            control={control}
            name="intensity"
            label="Intensidade"
            placeholder="Qual a intensidade?"
          />
          <FormGSTextInput
            control={control}
            name="duration"
            label="Duração"
            placeholder="Qual foi a duração?"
          />
          <Button
            title="Registar atividade"
            style={{ marginTop: 25 }}
            disabled={!formState.isValid}
            onPress={handleSubmit(registetr)}
            loading={isloading}
          />
        </View>
      </View>
      <CModal
        visible={successModal}
        message="Atividade registrada com sucesso!"
      />
    </Modal>
  );
}
