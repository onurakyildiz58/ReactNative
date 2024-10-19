import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { s } from 'react-native-wind';

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';
import MovieItem from '../components/MovieItem';

import { fetchMovies } from '../utils/requests';

import { useQuery } from '@tanstack/react-query';

function Home({ navigation }) {
    const { data, isLoading, error } = useQuery({ queryKey: ['movies'], queryFn: fetchMovies });

    return isLoading ? (
        <Loading />
    ) : error ? (
        <Text>{error.message}</Text>
    ) : (
        <View style={s`flex-1`}>
            <CustomIconHeader title="Ana Sayfa" name="search" size={35} func={() => console.log('arama')} position={'right'}/>
            <FlatList
                data={data?.results}
                renderItem={({ item }) => <MovieItem movie={item} func={() => navigation.navigate('movieDetails', { movieID: item.id })} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default Home;
