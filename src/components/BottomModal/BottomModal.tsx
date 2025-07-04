import { useEffect, useState } from "react";
import { Modal, Pressable, StatusBar, Text, View } from "react-native";

import { useCreateExercise } from "@domain";
import { zodResolver } from "@hookform/resolvers/zod";
import { CancelSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useForm } from "react-hook-form";

import { Button } from "../Button/Button";
import { ButtonDelete } from "../ButtonDelete/ButtonDelete";
import { FormGSTextInput } from "../Form/GSInput";
import { Modal as CModal } from "../Modal/Modal";

import { bottomModalSchema, TypeBottomModalSchema } from "./modalSchema";

type Props = {
  visible: boolean;
  closeModal: () => void;
  name?: string;
  duration?: string;
  intensity?: string;
  isEdit?: boolean;
  id?: string;
  onDeletePress?: () => void;
  onUpdate?: (data: {
    id: string;
    name: string;
    duration: string;
    intensity: string;
  }) => void;
};

export function BottomModal({
  closeModal,
  visible,
  name,
  duration,
  intensity,
  isEdit,
  onDeletePress,
  id,
  onUpdate,
}: Props) {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const { createExercise, isloading } = useCreateExercise({
    onSuccess: () => {
      reset();
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        closeModal();
      }, 2000);
    },
    onError: () => {
      reset();
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
        closeModal();
      }, 2000);
    },
  });

  const { control, formState, handleSubmit, reset } =
    useForm<TypeBottomModalSchema>({
      resolver: zodResolver(bottomModalSchema),
      defaultValues: {
        duration: duration || "",
        intensity: intensity || "",
        name: name || "",
      },
    });

  function registetr(props: TypeBottomModalSchema) {
    if (isEdit && id && onUpdate) {
      onUpdate({ id, ...props });
    } else {
      createExercise(props);
    }
  }

  useEffect(() => {
    if (isEdit) {
      reset({
        name: name || "",
        duration: duration || "",
        intensity: intensity || "",
      });
    } else {
      reset({
        name: "",
        duration: "",
        intensity: "",
      });
    }
  }, [isEdit, name, duration, intensity, reset]);

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
              {isEdit ? "Edite sua atividade" : "Registre sua atividade"}
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

          <View
            style={{ width: "50%", alignSelf: "flex-start", marginTop: 20 }}
          >
            <ButtonDelete title="Excluir atividade" onPress={onDeletePress} />
          </View>

          <Button
            title={isEdit ? "Editar atividade" : "Registar atividade"}
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
      <CModal
        visible={errorModal}
        isError
        message="Ouve um erro ao registrar sua atividade, tente novamente em alguns instantes"
      />
    </Modal>
  );
}
