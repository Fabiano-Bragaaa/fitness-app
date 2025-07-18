import { useEffect, useState } from "react";
import { Text } from "react-native";

export function LoadingMessage() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 300);

    return () => clearInterval(interval);
  }, []);
  return <Text className="text-3xl text-primaryBlack">{dots}</Text>;
}
