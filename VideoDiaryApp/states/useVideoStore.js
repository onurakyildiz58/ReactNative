import { create } from "zustand";

const useVideoStore = create((set) => ({
  title: "",
  description: "",
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
}));

export default useVideoStore;
