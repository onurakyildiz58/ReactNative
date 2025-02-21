import React, { useState } from "react";
import { View, Alert, Dimensions } from "react-native";
import { s } from 'react-native-wind';
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import Btn from "../Btn";
import IconBtn from "../IconBtn";

function VideoPicker({ fetchedVid }) {
    const [videoUri, setVideoUri] = useState(null);
    const screenWidth = Dimensions.get("window").width;

    const pickVideo = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Permission required", "We need access to your gallery.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            setVideoUri(result.assets[0].uri);
            fetchedVid(result.assets[0].uri);
        }
    };

    return (
        <View style={s`flex-1 mt-5`}>
            <Btn onPress={pickVideo}>Video Seç</Btn>
            {videoUri && (
                <View style={s`items-center pt-2`}>
                    <Video
                        source={{ uri: videoUri }}
                        style={[s`rounded-lg`, { width: screenWidth * 0.9, height: screenWidth * 0.9 * (9 / 16) }]}
                        useNativeControls
                    />
                    <View style={s`px-4 self-end`}>
                        <IconBtn onPress={() => console.log("asd")} name={"cut"} size={30} color={"black"}/>
                    </View>
                </View>
            )}
        </View>
    )
}

export default VideoPicker;
