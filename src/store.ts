import create from 'zustand';

interface StoreState {
  cart: any[];
  addItemToCart: (item: any) => void;
  removeItemFromCart: (itemId: number) => void;
}

const useStore = create<StoreState>((set) => ({
  cart: [],
  addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeItemFromCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
}));

export { useStore };