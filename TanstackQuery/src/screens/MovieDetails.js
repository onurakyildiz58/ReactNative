import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { s } from 'react-native-wind';

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';
import IconBtn from '../components/IconBtn';

import { fetchMovieDetails } from '../utils/requests';
import { addToWatchList } from '../utils/WatchList';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function MovieDetails({ navigation, route }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const id = route.params?.movieID;
    const { data, isLoading, error } = useQuery({ queryKey: ['movieDetails'], queryFn: () => fetchMovieDetails(id) });

    const client = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: () => addToWatchList(id),
        onSuccess: () => {
            client.invalidateQueries(['watchlist']);
            setIsAdded(true);
        },
    });

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ];
        const monthName = monthNames[parseInt(month, 10) - 1];
        return `${day} ${monthName} ${year}`;
    };

    const getGenres = () => {
        return data?.genres?.map(genre => genre.name).join(', ');
    };

    return isLoading ? (
        <Loading />
    ) : error ? (
        <Text>{error.message}</Text>
    ) : (
        <>
            <CustomIconHeader func={() => navigation.goBack()} title={data.title} name={'arrow-back'} size={35} position={'left'} />
            <ScrollView contentContainerStyle={s`flex px-2`}>
                <View style={s`pb-32`}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
                        style={s`w-full h-48 rounded-lg`}
                        resizeMode="cover"
                    />
                    <View style={s`absolute bg-violet-700 rounded-lg px-2 py-1`}>
                        <Text style={s`text-bold text-white`}>{data.vote_average.toFixed(1)}</Text>
                    </View>
                    <View style={s`align-center p-2`}>
                        <View style={s`flex-row justify-between items-center`}>
                            <Text style={s`text-black text-start font-bold text-3xl`}>{data.title}</Text>
                            <IconBtn func={() => mutate()} name={isAdded ? 'bookmarks' : 'bookmarks-outline'} size={30} color={s`text-black`.color} />
                        </View>
                        <Text style={s`text-coolGray-500 text-xs`}>({formatDate(data.release_date)})</Text>
                        <Text style={s`text-black text-center py-2 tracking-widest uppercase font-bold`}>{data.tagline}</Text>
                        <Text style={s`text-black text-justify pb-1`}>Genres: {getGenres()}</Text>
                        <Text style={s`text-black text-justify`}>{data.overview}</Text>
                    </View>
                </View>
            </ScrollView>
        </>

    );
}

export default MovieDetails;
