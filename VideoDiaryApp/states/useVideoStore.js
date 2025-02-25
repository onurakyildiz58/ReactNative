import { create } from "zustand";

const useVideoStore = create((set) => ({
  id: null,
  title: "",
  description: "",
  videoUri: null,

  setId: (id) => set({ id }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setVideoUri: (videoUri) => set({ videoUri }),

  reset: () => set({ title: "", description: "", videoUri: null, id: null }),
}));

export default useVideoStore;
