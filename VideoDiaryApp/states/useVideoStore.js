import { create } from "zustand";

const useVideoStore = create((set) => ({
  id: null,
  title: "",
  description: "",
  videoUri: null,
  startTime: 0,
  endTime: 0,

  setId: (id) => set({ id }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setVideoUri: (videoUri) => set({ videoUri }),
  setStartTime: (startTime) => set({ startTime }),
  setEndTime: (endTime) => set({ endTime }),

  reset: () => set({ title: "", description: "", videoUri: null, id: null, startTime: 0, endTime: 0 }),
}));

export default useVideoStore;
