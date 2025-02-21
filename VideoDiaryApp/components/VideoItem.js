import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

function VideoItem(){
    return (
        <TouchableOpacity style={s`flex-1 p-2`} onPress={func}>
            
            <View style={s`absolute top-2 left-2 bg-violet-700 rounded-lg px-2 py-1`}>
                <Text style={s`text-bold text-white`}>{movie.vote_average.toFixed(1)}</Text>
            </View>
        </TouchableOpacity>
    )
}
 
export default VideoItem;
