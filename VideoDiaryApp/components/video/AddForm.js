import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { s } from "react-native-wind";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import Input from './Input';
import useVideoStore from '../../states/useVideoStore';

export const schema = yup.object().shape({
    title: yup.string().min(3, "Başlık en az 3 karakter olmalıdır").required("Başlık zorunludur"),
    description: yup.string().min(10, "Açıklama en az 10 karakter olmalıdır").required("Açıklama zorunludur"),
});

function AddForm() {
    const { title, description, setTitle, setDescription, reset } = useVideoStore();
    const { control, formState: { errors }, reset: formReset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { title, description }
    });

    useEffect(() => {
        formReset({ title, description });
    }, [title, description]);

    useEffect(() => {
        return () => reset();
    }, []);

    return (
        <View style={s`px-4`}>
            <Controller
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Video Başlığı"
                        onUpdateValue={(text) => {
                            setTitle(text);
                            onChange(text);
                        }}
                        value={value}
                        error={errors.title?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Video Açıklaması"
                        onUpdateValue={(text) => {
                            setDescription(text);
                            onChange(text);
                        }}
                        value={value}
                        multiline={true}
                        error={errors.description?.message}
                    />
                )}
            />
        </View>
    );
}

export default AddForm;
