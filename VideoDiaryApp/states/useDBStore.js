import { create } from "zustand";

const useDBStore = create((set) => ({
  videos: [],

  addVideo: async ({ title, description, videoUri }) => {
    if (title && description && videoUri) {
      try {
        const newVideo = {
          id: `${new Date().toISOString()}-${Math.random().toString(36).substr(2, 9)}`,
          title,
          description,
          videoUri,
        };

        set((state) => ({
          videos: [...state.videos, newVideo],
        }));

        console.log("Video saved with unique ID:", newVideo);
      } catch (error) {
        console.log("Error generating video:", error);
      }
    } else {
      console.log("Missing fields when trying to add a video:", { title, description, videoUri });
    }
  },

  deleteVideo: async ({id}) => {
    if (!id) {
      console.log("Invalid ID");
      return;
    }
  
    set((state) => {
      const videoExists = state.videos.some((video) => video.id === id);
  
      if (!videoExists) {
        console.log("Video not found, cannot delete.");
        return state;
      }
  
      console.log("Video deleted successfully.");
      return {
        videos: state.videos.filter((video) => video.id !== id),
      };
    });
  },

  updateVideo: async ({ id, title, description, videoUri }) => {
    if (id && title && description && videoUri) {
      try {
        set((state) => {
          const videoIndex = state.videos.findIndex((video) => video.id === id);

          if (videoIndex === -1) {
            console.log("Video not found, cannot update.");
            return state;
          }

          const updatedVideo = {
            id,
            title,
            description,
            videoUri,
          };

          const updatedVideos = [...state.videos];
          updatedVideos[videoIndex] = updatedVideo;

          console.log("Video updated with unique ID:", updatedVideo);
          return { videos: updatedVideos };
        });
      } catch (error) {
        console.log("Error updating video:", error);
      }
    } else {
      console.log("Missing fields when trying to update a video:", { id, title, description, videoUri });
    }
  },

}));

export default useDBStore;
