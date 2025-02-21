import React, { useState } from "react";
import { View, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { s } from 'react-native-wind';
import { useRouter } from 'expo-router';

import AddForm from "../components/video/AddForm";
import CustomIconHeader from "../components/CustomIconHeader";
import VideoPicker from "../components/video/VideoPicker";
import Btn from "../components/Btn";

import useVideoStore from "../states/useVideoStore";

function AddScreen() {
    const router = useRouter();
    const { title, description } = useVideoStore();
    const [videoUri, setVideoUri] = useState(null);

    function saveVid() {
        if (!title || !description || !videoUri) {
            Alert.alert("Missing fields", "Please make sure to provide title, description, and select a video.");
            return;
        }
        console.log("Saving video with the following details:");
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Video URI:", videoUri);
    }

    const takeVidHandler = (vidUri) => {
        setVideoUri(vidUri);
    };

    return (
        <KeyboardAvoidingView
            style={s`flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior for iOS/Android
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={s`flex-1`} keyboardShouldPersistTaps="handled">
                    <View style={s`flex-1`}>
                        <CustomIconHeader title={"Video Ekle"} func={() => router.back()} name={"arrow-back-outline"} size={30} position={"left"} />
                        <AddForm />
                        <VideoPicker fetchedVid={takeVidHandler} />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>

            {/* Keep the button at the bottom */}
            <View style={s`absolute bottom-8 left-0 right-0`}>
                <Btn onPress={saveVid}>Kaydet</Btn>
            </View>
        </KeyboardAvoidingView>
    );
}

export default AddScreen;