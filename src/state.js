import { create } from 'zustand';

const store = (set) => ({
  cart: [],
  isModalOpen: false,
  setModalOpen(opt) {
    set((s) => ({ ...s, isModalOpen: opt }));
  },
  addToCart(newProduct) {
    set((s) => {
      const matchedProduct = s.cart.find(
        (oldProduct) => oldProduct.id === newProduct.id
      );
      console.log('🛑 ~ set ~ matchedProduct:', matchedProduct);
      return { ...s, cart: [...s.cart, newProduct] };
    });
  },
});

const useState = create(store);
export default useState;
