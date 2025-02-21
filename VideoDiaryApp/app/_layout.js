import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Layout() {
    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar style="dark" backgroundColor="#ffffff" translucent={false} />

            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="add" />
                <Stack.Screen name="[id]" />
            </Stack>
        </QueryClientProvider>
    );
}

export default Layout;
