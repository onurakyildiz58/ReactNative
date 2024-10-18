import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { s } from 'react-native-wind';

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';

import { fetchMovies } from '../utils/requests';

import { useQuery } from '@tanstack/react-query';

function Home() {
    const { data, isLoading, error } = useQuery({ queryKey: ['movies'], queryFn: fetchMovies });

    const renderItem = ({ item }) => (
        <Text style={s`text-base mb-2`}>{item.title}</Text>
    );

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <Text>{error.message}</Text>;
    }
    return (
        <View style={s`flex-1`}>
            <CustomIconHeader title={'Ana Sayfa'} name={'search'} size={35} func={() => console.log('arama')} />
            <View style={s`flex-1 items-center`}>
                <Text style={s`text-lg font-bold`}>Filmleeeer</Text>
            </View>
            <FlatList
                data={data?.results}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default Home;
