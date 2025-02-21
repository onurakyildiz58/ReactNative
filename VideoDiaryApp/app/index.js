import React from "react";
import { View, Text, FlatList} from "react-native";
import { s } from "react-native-wind";
import { useRouter } from "expo-router";

import CustomIconHeader from "../components/CustomIconHeader";
import VideoItem from "../components/VideoItem";

import useDBStore from "../states/useDBStore";

function HomeScreen() {
  const router = useRouter();
  const { videos } = useDBStore();

  return (
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
        <FlatList
          data={videos}
          renderItem={({ item }) => {
            return (
              <VideoItem
                thumbnail={item.title}
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
        />
      )}
    </View>
  );
}

export default HomeScreen;
