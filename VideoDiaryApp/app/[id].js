import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { s } from 'react-native-wind';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useVideoPlayer, VideoView } from 'expo-video';

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';
import IconBtn from '../components/IconBtn';
import Error from '../components/Error';

import { fetchVideoById, deleteVideo } from '../db/sqlite';

function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const screenWidth = Dimensions.get('window').width;
  const queryClient = useQueryClient();

  const { data: video, isLoading, isError } = useQuery({
    queryKey: ['video', id],
    queryFn: () => fetchVideoById(id),
    enabled: !!id,
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteVideo(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
      queryClient.setQueryData(['video', id], null);
      router.back();
    },
    onError: (error) => {
      console.error('Error deleting video:', error);
    },
  });

  const navigateUpdate = () => {
    router.push({
      pathname: '/add',
      params: { willUpdateVideo: JSON.stringify(video), isUpdate: true }
    });
  }

  const player = useVideoPlayer(video?.videoUri);

  return isLoading ? (
    <Loading message={"Lütfen Bekleyiniz..."} />
  ) : isError || !video ? (
    <Error message={'Veriler alınırken hata meydana geldi'} />
  ) : (
    <View style={s`flex-1`}>
      <CustomIconHeader
        title={video.title}
        func={() => router.back()}
        name={'arrow-back-outline'}
        size={30}
        position={'left'}
      />
      <View style={s`px-4`}>
        <Text style={s`text-xl font-bold mt-6 text-center`}>{video.title}</Text>
        <Text style={s`text-lg my-4 text-justify`}>{video.description}</Text>
        <View style={s`items-center pt-2`}>
          <VideoView
            style={[
              s`rounded-lg`,
              { width: screenWidth * 0.9, height: screenWidth * 0.9 * (9 / 16) }
            ]}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
        </View>
        <View style={s`flex-row justify-around mt-10`}>
          <IconBtn
            func={() => deleteMutation.mutate()}
            name={'trash-outline'}
            size={30}
            color={s`text-black`.color}
          />
          <IconBtn
            func={navigateUpdate}
            name={'create-outline'}
            size={30}
            color={s`text-black`.color}
          />

        </View>
      </View>
    </View >
  );
}

export default DetailScreen;
