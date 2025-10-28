import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider } from "native-base"; // 👈 precisa existir

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Stack />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
