import "./global.css";
import { useEffect } from "react";
import { StatusBar } from "react-native";

import { registerInterceptor } from "@api";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useAuthCredentialsZustand } from "@services";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Routes } from "@routes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <SafeAreaProvider>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="dark-content"
          />
          <Routes />
        </SafeAreaProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
