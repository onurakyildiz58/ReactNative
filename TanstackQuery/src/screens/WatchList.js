import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { s } from 'react-native-wind';
import { useQuery } from '@tanstack/react-query';

import CustomHeader from '../components/CustomHeader';
import Loading from '../components/Loading';
import MovieItem from '../components/MovieItem';

import { fetchWatchList } from '../utils/WatchList';

function WatchList({navigation}) {
    const { data, isLoading, error } = useQuery({ queryKey: ['watchList'], queryFn: fetchWatchList });

    return isLoading ? (
        <Loading />
    ) : error ? (
        <Text>{error.message}</Text>
    ) : (
        <View style={s`flex-1`}>
            <CustomHeader title={'Watch List'} />
            <FlatList
                data={data?.results}
                renderItem={({ item }) => <MovieItem movie={item} func={() => navigation.navigate('movieDetails', { movieID: item.id })} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={s`pb-32`}
            />
        </View>
    );
}

export default WatchList;
