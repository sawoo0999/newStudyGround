import { create } from "zustand";

export const useSearchTerm = create((set) => {
  return {
    searchTerm: undefined,
    setSearchTerm: (searchTerm) => set({ searchTerm }),
  };
});

export const useImageStore = create((set) => ({
  selectedImage: null, // 초기값을 null로 설정했지만, 필요에 따라 변경 가능합니다.
  setSelectedImage: (image) => set({ selectedImage: image }),
}));
