import React from 'react';
import { Text, View } from 'react-native';
import { s } from 'react-native-wind';

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';

import { fetchMovieDetails } from '../utils/requests';

import { useQuery } from '@tanstack/react-query';

function MovieDetails({ navigation, route }) {
    const id = route.params?.movieID;
    const { data, isLoading, error } = useQuery({ queryKey: ['movieDetails'], queryFn: () => fetchMovieDetails(id) });

    return isLoading ? (
        <Loading />
    ) : error ? (
        <Text>{error.message}</Text>
    ) : (
        <View>
            <CustomIconHeader func={() => navigation.goBack()} title={data.title} name={'arrow-back'} size={35} position={'left'} />
            <Text style={s`text-black text-center`}>{data.title}</Text>
        </View>

    );
}

export default MovieDetails;
