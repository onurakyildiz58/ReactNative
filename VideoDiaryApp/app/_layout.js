import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

import Loading from "../components/Loading";
import Error from "../components/Error";

import { migrateDbIfNeeded } from "../db/sqlite";

const queryClient = new QueryClient();

function DatabaseInitializer() {
    const db = useSQLiteContext();

    const { isLoading, isError, error } = useQuery({
        queryKey: ["dbMigration"],
        queryFn: () => migrateDbIfNeeded(db),
        staleTime: Infinity,
        cacheTime: Infinity,
    });

    if (isLoading) {
        return <Loading message={"Veri Tabanı Başlatılıyor..."} />;
    }

    if (isError) {
        return <Error message={error.message} />;
    }

    return null;
}

function Layout() {
    return (
        <SQLiteProvider databaseName="sevenApps.db">
            <QueryClientProvider client={queryClient}>
                <DatabaseInitializer />
                <StatusBar style="dark" backgroundColor="#ffffff" translucent={false} />
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="add" />
                    <Stack.Screen name="[id]" />
                </Stack>
            </QueryClientProvider>
        </SQLiteProvider>
    );
}

export default Layout;
