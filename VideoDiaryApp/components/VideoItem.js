import React from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import { s } from 'react-native-wind';



function VideoItem({ thumbnail, func }) { 
    const screenWidth = Dimensions.get("window").width;
    return (
        <TouchableOpacity style={s`flex-1 items-center justify-center py-2`} onPress={func}>
            <Image
                source={{ uri: thumbnail }}
                style={{ width: screenWidth/2 - 20 , height: 200, borderRadius: 8 }}
            />
        </TouchableOpacity>
    );
}

export default VideoItem;
