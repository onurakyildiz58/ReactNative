import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

function MovieItem({ movie, func }) {
    return (
        <TouchableOpacity style={s`flex-1 p-2`} onPress={func}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={[s`w-full rounded-lg`, { aspectRatio: 3 / 5 }]} />
            <View style={s`absolute top-2 left-2 bg-violet-700 rounded-lg px-2 py-1`}>
                <Text style={s`text-bold text-white`}>{movie.vote_average.toFixed(1)}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MovieItem;
