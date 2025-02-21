import { create } from "zustand";

const useVideoStore = create((set) => ({
  title: "",
  description: "",
  videoUri: null,
  startTime: 0,
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setVideoUri: (videoUri) => set({ videoUri }),
  setStartTime: (startTime) => set({ startTime }),
  reset: () => set({ title: "", description: "", videoUri: null }),
}));

export default useVideoStore;
