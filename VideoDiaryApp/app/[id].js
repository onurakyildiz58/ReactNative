import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { s } from 'react-native-wind';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { useVideoPlayer, VideoView } from "expo-video";

import CustomIconHeader from '../components/CustomIconHeader';
import Loading from '../components/Loading';
import IconBtn from '../components/IconBtn';

import useDBStore from '../states/useDBStore';

function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { videos } = useDBStore();
  const screenWidth = Dimensions.get("window").width;


  const { data: video, isLoading, isError } = useQuery({
    queryKey: ['video', id],
    queryFn: () => {
      return videos.find((item) => item.id === id);
    },
    enabled: !!id,
  });

  const player = useVideoPlayer(video.videoUri);

  if (isLoading) {
    return <Loading message={"Lütfen Bekleyiniz..."} />;
  }

  if (isError || !video) {
    return <Text>Video not found</Text>;
  }

  return (
    <View style={s`flex-1`}>
      <CustomIconHeader
        title={"Detay"}
        func={() => router.back()}
        name={"arrow-back-outline"}
        size={30}
        position={"left"}
      />
      <View style={s`px-4`}>
        <View style={s`flex-row justify-around`}>
          <IconBtn func={() => console.log("object")} name={"trash-outline"} size={30} color={s`text-black`.color} />
          <IconBtn func={() => console.log("object")} name={"create-outline"} size={30} color={s`text-black`.color} />
        </View>
        <Text style={s`text-xl font-bold mt-6`}>Title: {video.title}</Text>
        <Text style={s`text-lg mt-4`}>Description: {video.description}</Text>
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
      </View>

    </View>
  );
}

export default DetailScreen;
