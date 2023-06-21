import { create } from 'zustand';

const store = (set) => ({
  cart: [],
  isModalOpen: false,
  setModalOpen(opt) {
    set((s) => ({ ...s, isModalOpen: opt }));
  },
  addToCart(newProduct) {
    set((s) => ({ ...s, cart: [...s.cart, newProduct] }));
  },
});

const useState = create(store);
export default useState;
