import { create } from "zustand";

const useDBStore = create((set) => ({
    videos: [],

    addVideo: async ({ title, description, videoUri }) => {
        if (title && description && videoUri) {
            try {
                const newVideo = {
                    id: new Date().toString() + Math.random().toString(),
                    title,
                    description,
                    videoUri,
                };

                set((state) => ({
                    videos: [...state.videos, newVideo],
                }));

                console.log("Video saved with unique ID:", newVideo);
            } catch (error) {
                console.log("Error generating thumbnail:", error);
            }
        } else {
            console.log("Missing fields when trying to add a video:", { title, description, videoUri });
        }
    },

    resetVideos: () => set({ videos: [] }),
}));

export default useDBStore;
