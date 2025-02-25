import React from "react";
import { View, Text } from "react-native";
import { s } from "react-native-wind";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { FlashList } from "@shopify/flash-list";

import CustomIconHeader from "../components/CustomIconHeader";
import VideoItem from "../components/VideoItem";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { fetchVideos } from "../db/sqlite";

function HomeScreen() {
  const router = useRouter();

  const { data: videos, isLoading, isError, error } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
  });

  return isLoading ? (
    <Loading message={"Lütfen Bekleyiniz..."} />
  ) : isError ? (
    <Error message={error.message} />
  ) : (
    <View style={s`flex-1`}>
      <CustomIconHeader
        title={"Ana Sayfa"}
        func={() => router.push("/add")}
        name={"add-circle-outline"}
        size={30}
        position={"right"}
      />
      {videos.length === 0 ? (
        <Text style={s`text-center text-gray-500 mt-6`}>No videos added yet!</Text>
      ) : (
        <FlashList
          data={videos}
          renderItem={({ item }) => {
            return (
              <VideoItem
                thumbnail={item.videoUri}
                func={() =>
                  router.push({
                    pathname: "/[id]",
                    params: { id: item.id },
                  })
                }
              />
            );
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
      )}
    </View>
  );
}

export default HomeScreen;
