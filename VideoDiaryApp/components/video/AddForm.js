import React, { useEffect } from 'react';
import { View } from 'react-native';
import Input from './Input';
import { s } from "react-native-wind";

import useVideoStore from '../../states/useVideoStore';

function AddForm() {
    const { title, description, setTitle, setDescription, reset } = useVideoStore();

    useEffect(() => {
        return () => reset();
    }, []);

    return (
        <View style={s`px-4`}>
            <Input label={"Video Başlığı"} onUpdateValue={setTitle} value={title} />
            <Input label={"Video Açıklaması"} onUpdateValue={setDescription} value={description} multiline={true} />
        </View>
    );
}

export default AddForm;
