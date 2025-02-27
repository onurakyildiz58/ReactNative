import React, { useState, useEffect } from 'react';
import { Text, View, Modal } from 'react-native';
import { s } from 'react-native-wind';
import { FFmpegKit, FFmpegKitConfig } from 'ffmpeg-kit-react-native';

import VideoTrim from '../VideoTrim';
import IconBtn from '../IconBtn';
import Btn from '../Btn';
import Progress from '../Progress';

import useModalStore from '../../states/useModalStore';
import useVideoStore from "../../states/useVideoStore";

function VideoCropModal() {
    const { videoUri, setVideoUri, startTime, duration } = useVideoStore();
    const { isModalVisible, hideModal } = useModalStore();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        FFmpegKitConfig.init();

        FFmpegKitConfig.enableLogCallback((log) => {
            console.log('FFmpeg Log:', log.getMessage());
        });

        FFmpegKitConfig.enableStatisticsCallback((stats) => {
            console.log("FFmpeg Stats:", stats.getTime());
        });

        FFmpegKit.execute('-version').then((session) => {
            const returnCode = session.getReturnCode();
            if (returnCode.isSuccess()) {
                console.log("FFmpeg successfully initialized!");
            } else {
                console.log("Error initializing FFmpeg.");
            }
        });
    }, []);

    const trimVideo = async () => {
        if (!videoUri) return;

        const outputUri = `${videoUri.substring(0, videoUri.lastIndexOf('/'))}/trimmed_video.mp4`;
        const command = `-i ${videoUri} -ss ${startTime} -to ${startTime + 5} -c copy ${outputUri}`;

        setProgress(0);
        FFmpegKit.executeAsync(command, async (session) => {
            const returnCode = await session.getReturnCode();
            if (returnCode.isSuccess()) {
                setVideoUri(outputUri);
                Alert.alert("Başarılı", "Video başarıyla kırpıldı!");
                hideModal();
            } else {
                Alert.alert("Hata", "Video kırpma işlemi başarısız oldu.");
            }
        }, (stats) => {
            const completionPercentage = Math.round((stats.getTime() / 5) * 100);
            setProgress(completionPercentage);
        });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={hideModal}
        >
            <View style={s`flex-1 justify-center items-center bg-white`}>
                <View style={s`absolute top-5 right-5`}>
                    <IconBtn func={hideModal} name={"close-outline"} size={30} color={s`text-black`.color} />
                </View>
                <View style={s`bg-white p-4 rounded-lg `}>
                    <Text style={s`text-lg font-bold mb-3`}>Video Kırpma</Text>
                    <Text>video süresi : {Math.round(duration / 1000)} saniye</Text>
                    <Text>başlangıç süresi : {startTime}. saniye</Text>
                    <Text>bitiş süresi : {startTime + 5}. saniye</Text>
                    <View style={s`mt-4 w-full`}>
                        <VideoTrim />
                    </View>
                    {progress > 0 ? (
                        <View style={s`mt-4 `}>
                            <Progress progress={progress} />
                        </View>
                    ) : (
                        <View style={s`mt-4`}>
                            <Btn onPress={trimVideo}>Video Kırp</Btn>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    )
}

export default VideoCropModal;
