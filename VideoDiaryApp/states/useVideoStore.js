import { create } from "zustand";

const useVideoStore = create((set) => ({
  id: null,
  title: "",
  description: "",
  videoUri: null,
  duration: 0,
  startTime: 0,

  setId: (id) => set({ id }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setVideoUri: (videoUri) => set({ videoUri }),
  setDuration: (duration) => set({ duration }),
  setStartTime: (startTime) => set({ startTime }),

  reset: () => set({ title: "", description: "", videoUri: null, id: null, startTime: 0, duration: 0 }),
}));

export default useVideoStore;
