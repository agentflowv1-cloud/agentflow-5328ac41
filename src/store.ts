import create from 'zustand';

interface StoreState {
  cart: any[];
  addItemToCart: (item: any) => void;
}

const useStore = create<StoreState>()((set) => ({
  cart: [],
  addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
}));

export { useStore };