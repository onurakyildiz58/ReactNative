import React from 'react'
import { View } from 'react-native';
import Input from './Input'
import { s } from "react-native-wind";

import useVideoStore from '../../states/useVideoStore';

function AddForm() {
    const { title, description, setTitle, setDescription } = useVideoStore();
    
    return (
        <View style={s`px-4`}>
            <Input label={"Video Başlığı"} onUpdateValue={setTitle} value={title} />
            <Input label={"Video Açıklaması"} onUpdateValue={setDescription} value={description} />
        </View>
    )
}

export default AddForm
