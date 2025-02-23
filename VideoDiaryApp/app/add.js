import React, { useEffect, useState } from "react";
import { View, Alert, ScrollView, Keyboard } from "react-native";
import { s } from 'react-native-wind';
import { useRouter } from 'expo-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import AddForm from "../components/video/AddForm";
import CustomIconHeader from "../components/CustomIconHeader";
import VideoPicker from "../components/video/VideoPicker";
import Btn from "../components/Btn";

import useVideoStore from "../states/useVideoStore";
import useDBStore from "../states/useDBStore";
import { addVideo } from "../db/sqlite";

function AddScreen() {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const router = useRouter();
    const { title, description, videoUri } = useVideoStore();
    const { addVideo } = useDBStore();
/*
    const { mutate } = useMutation(
        async () => {
          if (!title || !description || !videoUri) {
            throw new Error("Missing fields");
          }
          await addVideo(title, description, videoUri); // Save the video to SQLite
        },
        {
          onError: (error) => {
            Alert.alert("Error", error.message);
          },
          onSuccess: () => {
            queryClient.invalidateQueries(['videos']); // Invalidate and refetch videos
            router.back(); // Go back after the video is saved
          },
        }
      );
*/
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    function saveVid() {
        if (!title || !description || !videoUri) {
            Alert.alert("Eksik Alanlar", "Lütfen video başlığı, video açıklaması ekleyin ve bir video seçin.");
            return;
        }
        addVideo({ title, description, videoUri });
        //console.log("add.js", useDBStore.getState().videos);
        router.back();
    }

    return (
        <View style={s`flex-1`}>
            <CustomIconHeader title={"Video Ekle"} func={() => router.back()} name={"arrow-back-outline"} size={30} position={"left"} />

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: isKeyboardVisible ? 100 : 0,
                }}
            >
                <AddForm />
                <VideoPicker />
            </ScrollView>
            {!isKeyboardVisible && (
                <View style={s`absolute bottom-8 left-0 right-0`}>
                    <Btn onPress={saveVid} >
                        Kaydet
                    </Btn>
                </View>
            )}
        </View>
    );
}

export default AddScreen;