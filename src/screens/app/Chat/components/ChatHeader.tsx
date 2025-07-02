import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import {
  SquareArrowLeft02Icon,
  Edit02Icon,
  CheckmarkSquare01Icon,
  MultiplicationSignSquareIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useNavigation } from "@react-navigation/native";

import { ChangeNameChatInput } from "@components";

export function ChatHeader() {
  const { navigate } = useNavigation();
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [isEditName, setIsEditName] = useState<string>("Nome do chat");
  const [savedName, setSavedName] = useState<string>("Nome do chat");
  function changeName() {
    if (isEdit) {
      setSavedName(isEditName);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }

  function handleCancelEdit() {
    if (isEdit) {
      setIsEditName(savedName);
      setIsEdit(false);
    } else {
      navigate("home");
    }
  }

  return (
    <View className="flex-row justify-between items-center gap-8 mt-4">
      <Pressable onPress={handleCancelEdit}>
        <HugeiconsIcon
          icon={isEdit ? MultiplicationSignSquareIcon : SquareArrowLeft02Icon}
          color="#080808"
        />
      </Pressable>
      {isEdit ? (
        <ChangeNameChatInput
          placeholder={savedName}
          value={isEditName}
          onChangeText={setIsEditName}
        />
      ) : (
        <Text className="font-semibold text-xl">{savedName}</Text>
      )}
      <Pressable onPress={changeName}>
        <HugeiconsIcon
          icon={isEdit ? CheckmarkSquare01Icon : Edit02Icon}
          color="#080808"
        />
      </Pressable>
    </View>
  );
}
