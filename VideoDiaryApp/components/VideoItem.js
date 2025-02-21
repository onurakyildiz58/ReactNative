import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { s } from 'react-native-wind';

function VideoItem({ thumbnail, func }) {
    return (
        <TouchableOpacity style={s`flex-1 p-2 bg-red-500 m-2`} onPress={func}>
            <Image
                source={{ uri: thumbnail }}
                style={{ width: 120, height: 120, borderRadius: 8 }}
            />
            <Text>{thumbnail}</Text>
        </TouchableOpacity>
    );
}

export default VideoItem;
