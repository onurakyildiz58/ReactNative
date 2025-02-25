import React, { useEffect, useState } from "react";
import { View, Alert, ScrollView, Keyboard } from "react-native";
import { s } from 'react-native-wind';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useMutation, useQueryClient } from "@tanstack/react-query";

import AddForm from "../components/video/AddForm";
import CustomIconHeader from "../components/CustomIconHeader";
import VideoPicker from "../components/video/VideoPicker";
import Btn from "../components/Btn";

import useVideoStore from "../states/useVideoStore";
import { addVideo, updateVideo } from "../db/sqlite";
import { schema } from "../components/video/AddForm";

function AddScreen() {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const router = useRouter();
    const { willUpdateVideo, isUpdate } = useLocalSearchParams();
    const { id, title, description, videoUri, setId, setTitle, setDescription, reset } = useVideoStore();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (isUpdate && willUpdateVideo) {
            const videoData = JSON.parse(willUpdateVideo);
            setId(videoData.id);
            setTitle(videoData.title);
            setDescription(videoData.description);
        }

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };

    }, [willUpdateVideo, isUpdate, setId, setTitle, setDescription]);

    const addVideoMutation = useMutation({
        mutationFn: async ({ title, description, videoUri }) => {
            return await addVideo(title, description, videoUri);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["videos"] });
            router.back();
        },
    });

    const updateVideoMutation = useMutation({
        mutationFn: async ({ id, title, description, videoUri }) => {
            return await updateVideo(id, title, description, videoUri);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["videoDetails", id] });
            reset();
            router.push("/");
        },
    });

    const handleSave = async () => {
        try {
            await schema.validate({ title, description }, { abortEarly: false });
            
            if (isUpdate) {
                updateVideoMutation.mutate({ id, title, description, videoUri });
            } else {
                addVideoMutation.mutate({ title, description, videoUri });
            }
        } catch (err) {
            Alert.alert("Hata", err.errors.join("\n"));
        }
    };

    return (
        <View style={s`flex-1`}>
            <CustomIconHeader title={isUpdate ? "Anı Güncelle" : "Video Ekle"} func={() => router.back()} name={"arrow-back-outline"} size={30} position={"left"} />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: isKeyboardVisible ? 100 : 0,
                }}>
                <AddForm />
                <VideoPicker isUpdate={isUpdate} />
            </ScrollView>
            {!isKeyboardVisible && (
                <View style={s`absolute bottom-8 left-0 right-0`}>
                    <Btn onPress={handleSave} >
                        {isUpdate ? "Güncelle" : "Kaydet"}
                    </Btn>
                </View>
            )}
        </View>
    );
}

export default AddScreen;