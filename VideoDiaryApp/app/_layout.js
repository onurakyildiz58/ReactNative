import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Layout() {
    return (
        <>
            <StatusBar style="dark" backgroundColor="#ffffff" translucent={false} />

            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="add" />
                <Stack.Screen name="[id]" />
            </Stack>
        </>
    );
}

export default Layout;
