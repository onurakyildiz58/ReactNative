import React from 'react';
import { Text, View, Modal } from 'react-native';
import { s } from 'react-native-wind';

import useVideoStore from "../../states/useVideoStore";
import IconBtn from '../IconBtn';
import Input from './Input';
import Btn from '../Btn';

function VideoCropModal({ isModalVisible, hideModal, videoUri }) {
    const { setVideoUri, startTime, setStartTime } = useVideoStore();

    function saveCroppedVid() {
        hideModal();
    }

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

                <View style={s`bg-white p-5 rounded-lg w-80`}>
                    <Text style={s`text-lg font-bold mb-3`}>Video Kırpma</Text>
                    <Text style={s`mb-3`}>Başlangıç zamanını seçin (saniye cinsinden):</Text>
                    <Input
                        label={"Başlangıç Zamanı (saniye)"}
                        onUpdateValue={(text) => setStartTime(parseInt(text) || 0)}
                        value={startTime.toString()}
                    />
                    <Text style={s`mb-3`}>Başlangıç zamanı: {startTime}. saniye</Text>
                    <Text style={s`mb-3`}>Bitiş zamanı: {startTime + 5}. saniye</Text>

                    <Btn onPress={saveCroppedVid}>Kırp</Btn>
                </View>
            </View>
        </Modal>
    )
}

export default VideoCropModal;
