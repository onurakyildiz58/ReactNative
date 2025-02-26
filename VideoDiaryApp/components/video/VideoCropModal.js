import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Alert, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { s } from 'react-native-wind';
import { useVideoPlayer, VideoView } from "expo-video";
import { FFmpegKit, Statistics } from 'ffmpeg-kit-react-native';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/Ionicons';

import IconBtn from '../IconBtn';
import Input from './Input';
import Btn from '../Btn';
import Progress from '../Progress';
import Picks from '../Picks';

import useModalStore from '../../states/useModalStore';
import useVideoStore from "../../states/useVideoStore";

const { width: screenWidth } = Dimensions.get('window');

const data = new Array(100).fill(0).map((_, index) => ({
    id: index,
    height: Math.floor(Math.random() * 10) + 20,
}));

function VideoCropModal({ videoDuration }) {
    const { videoUri, setVideoUri, startTime, setStartTime, endTime, setEndTime } = useVideoStore();
    const { isModalVisible, hideModal } = useModalStore();
    const [progress, setProgress] = useState(0);

    const trimVideo = async () => {
        if (!videoUri) return;

        const outputUri = `${videoUri.substring(0, videoUri.lastIndexOf('/'))}/trimmed_video.mp4`;

        const command = `-i ${videoUri} -ss ${startTime} -to ${endTime} -c copy ${outputUri}`;

        setProgress(0); // Reset progress

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
            const completionPercentage = Math.round((stats.getTime() / (endTime - startTime)) * 100);
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
                    <Text>video süresi : {videoDuration}sn</Text>
                    <View style={s`mt-4 w-full`}>
                        <ScrollView horizontal contentContainerStyle={s`my-5 items-center content-center`} showsHorizontalScrollIndicator={false}>
                            <View style={s`flex-row items-center h-10 bg-gray-300 rounded-lg`}>
                                <Picks data={data} />
                            </View>
                            <View style={s`flex-row items-center h-10 bg-blue-300 absolute w-32 overflow-hidden rounded-lg`}>
                                <Picks data={data} thumb/>
                            </View>
                        </ScrollView>
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
