import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalVisible: false,
  showModal: () => set({ isModalVisible: true }),
  hideModal: () => set({ isModalVisible: false }),
}));

export default useModalStore;
