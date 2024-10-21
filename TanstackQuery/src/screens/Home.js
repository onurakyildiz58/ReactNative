import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { s } from 'react-native-wind';
import { useInfiniteQuery } from '@tanstack/react-query';

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';
import MovieItem from '../components/MovieItem';

import { fetchMovies } from '../utils/requests';

function Home({ navigation }) {

    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });

    return isLoading ? (
        <Loading />
    ) : error ? (
        <Text>{error.message}</Text>
    ) : (
        <View style={s`flex-1`}>
            <CustomIconHeader title="Home" name="search" size={35} func={() => console.log('arama')} position={'right'} />
            <FlatList
                data={data?.pages.flatMap(page => page.results)}
                renderItem={({ item }) => (
                    <MovieItem
                        movie={item}
                        func={() => navigation.navigate('movieDetails', { movieID: item.id })}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={s`pb-32`}
                onEndReached={() => fetchNextPage()}
                ListFooterComponent={isFetchingNextPage ? <Loading /> : null}
            />
        </View>
    );
}

export default Home;
