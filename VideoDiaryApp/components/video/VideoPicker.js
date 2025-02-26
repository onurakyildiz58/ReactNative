import React, { useEffect, useState } from "react";
import { View, Alert, Dimensions } from "react-native";
import { s } from "react-native-wind";
import * as ImagePicker from "expo-image-picker";
import { useVideoPlayer, VideoView } from "expo-video";

import Btn from "../Btn";
import IconBtn from "../IconBtn";
import VideoCropModal from "./VideoCropModal";

import useVideoStore from "../../states/useVideoStore";
import useModalStore from "../../states/useModalStore";

const extractNameFromVideoUri = (uri, trimExt) => {
    const splittedUri = uri.split('/');
    const fullName = splittedUri[splittedUri.length - 1];
    const fileName = fullName.split('.')[0];
    const fileExtension = fullName.split('.')[1];

    let newFileName = fileName.replace(/[^a-zA-Z0-9]/g, '_');
    newFileName = newFileName.replace(/\s+/g, '_');

    if (trimExt) return newFileName;
    return `${newFileName}.${fileExtension}`;
}


function VideoPicker({ isUpdate }) {
    const { videoUri, setVideoUri } = useVideoStore();
    const { showModal } = useModalStore();
    const screenWidth = Dimensions.get("window").width;
    const [videoDuration, setVideoDuration] = useState(10);

    const pickVideo = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("İzin Gerekli", "Galeriye erişim izni vermeniz gerekiyor.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['videos'],
            allowsEditing: false,
            quality: 1
        });

        if (!result.canceled) {
            //console.log(result.assets[0].uri);
            //console.log(extractNameFromVideoUri(result.assets[0].uri, true)); // without Extension
            //console.log(extractNameFromVideoUri(result.assets[0].uri, false)); // with extension
            setVideoUri(result.assets[0].uri);
        }
    };

    const player = useVideoPlayer(videoUri, (player) => {
        if (videoUri) {
            player.play();
        }
    });

    return (
        <>
            <View style={s`mt-5`}>
                <Btn onPress={pickVideo}>{isUpdate ? "Yeni Video Seç" : "Video Seç"}</Btn>
                {videoUri && (
                    <View style={s`items-center pt-2`}>
                        <VideoView
                            style={[
                                s`rounded-lg`,
                                { width: screenWidth * 0.9, height: screenWidth * 0.9 * (9 / 16) }
                            ]}

                            player={player}
                            allowsFullscreen
                            allowsPictureInPicture
                        />

                        <View style={s`mt-2 bg-emerald-400 border border-emerald-800 rounded-lg`}>
                            <IconBtn func={showModal} name={"cut"} size={30} color={"black"} />
                        </View>
                    </View>
                )}
            </View>
            <VideoCropModal videoDuration={videoDuration} />
        </>
    );
}

export default VideoPicker;
