import { useState } from "react";
import { Text, View } from "react-native";

import {
  useDeleteExercise,
  useGetExerciseById,
  useGetExercises,
  useUpdateExercise,
} from "@domain";

import {
  ActivityIndicator,
  BottomModal,
  Button,
  ExerciseCard,
  Graphic,
  Modal,
  OptionsModal,
  Screen,
} from "@components";
import { AppScreen } from "@routes";

import { HomeHeader } from "./components/HomeHeader";

export function Home({ navigation }: AppScreen<"home">) {
  const [visible, setVisible] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] =
    useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [id, setId] = useState<string>();

  const { exercises, isLoading } = useGetExercises();
  const { exercise: data } = useGetExerciseById(id);
  const { delete: removeExercise } = useDeleteExercise();
  const { update } = useUpdateExercise({
    onSuccess: () => {
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        setIsEdit(false);
      }, 2000);
    },
    onError: () => {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
        setIsEdit(false);
      }, 2000);
    },
  });

  if (isLoading || !exercises) {
    return <ActivityIndicator />;
  }

  function getExerciseById(id: string) {
    setId(id);
    setIsEdit(true);
    setVisibleEditModal(true);
  }

  function handleDeletePress() {
    setConfirmDeleteModalVisible(true);
  }

  function deleteExercise() {
    if (id) {
      removeExercise(id);
      setVisibleEditModal(false);
      setConfirmDeleteModalVisible(false);
    }
  }

  function handleUpdate(data: {
    id: string;
    name: string;
    duration: string;
    intensity: string;
  }) {
    if (id && data) {
      update(data);
      setVisibleEditModal(false);
    }
  }

  const EXERCISES_LENGTH = exercises?.length;

  const firstThreeExercises = exercises.slice(0, 3);

  return (
    <Screen scrollable>
      {isLoading && <ActivityIndicator />}
      <HomeHeader />
      <Text className="font-semibold text-xl text-primaryBlack my-5">
        Suas atividades
      </Text>
      <View className="gap-8">
        <View className="items-center justify-center">
          <View className="w-full p-3 rounded-xl shadow items-center bg-white">
            <Text className="text-xl text-primaryBlack mb-4">Atividades</Text>
            <Graphic fillValue={EXERCISES_LENGTH} />
          </View>
        </View>
        <View className="items-center justify-center">
          <View className="w-full p-3 rounded-xl shadow items-center bg-white">
            <Text className="text-xl text-primaryBlack">
              Resumo das atividades
            </Text>
            <View className="w-full h-0.5 bg-gray-100 mt-2 rounded-full" />

            {firstThreeExercises.map((exercises) => (
              <ExerciseCard
                handleExerciseById={() => getExerciseById(exercises.id)}
                key={exercises.id}
                name={exercises.name}
                intensity={exercises.intensity}
                time={Number(exercises.duration)}
              />
            ))}
            <Button
              title="Nova atividade"
              style={{ marginTop: 15 }}
              onPress={() => setVisible(true)}
            />
          </View>
        </View>
      </View>
      <BottomModal visible={visible} closeModal={() => setVisible(false)} />
      <BottomModal
        visible={visibleEditModal}
        closeModal={() => setVisibleEditModal(false)}
        isEdit={isEdit}
        duration={data?.duration}
        intensity={data?.intensity}
        name={data?.name}
        id={id}
        onUpdate={handleUpdate}
        onDeletePress={handleDeletePress}
      />
      <OptionsModal
        message={`Deseja apagar a ${data?.name}? Confirme no botão abaixo para concluir a exclusão da atividade!`}
        visible={confirmDeleteModalVisible}
        closeModal={() => setConfirmDeleteModalVisible(false)}
        handleDelete={deleteExercise}
        isEdit
      />
      <Modal visible={successModal} message="Edição salva com sucesso!!" />
      <Modal
        visible={errorModal}
        isError
        message="Ouve um erro ao editar sua atividade, tente novamente em alguns instantes"
      />
    </Screen>
  );
}
