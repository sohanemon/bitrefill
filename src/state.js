import { create } from 'zustand';

const store = (set) => ({
  cart: [],
  isModalOpen: false,

  setModalOpen(opt) {
    set((s) => ({ ...s, isModalOpen: opt }));
  },
  removeFromCart(id) {
    set((s) => ({ ...s, cart: [...s.cart.filter((el) => el.id !== id)] }));
  },

  addToCart(newProduct) {
    set((s) => {
      const matchedProduct = s.cart.findIndex(
        (oldProduct) => oldProduct.id === newProduct.id
      );

      if (matchedProduct !== -1)
        return {
          ...s,
          cart: [
            ...s.cart.filter((_, idx) => idx !== matchedProduct),
            {
              ...s.cart[matchedProduct],
              amount: ++s.cart[matchedProduct].amount,
            },
          ],
        };
      return { ...s, cart: [...s.cart, { ...newProduct, amount: 1 }] };
    });
  },
  setAmount(id, amount) {
    set((s) => {
      const oldProduct = s.cart.findIndex((el) => el.id === id);
      s.cart[oldProduct].amount = amount;
      return s.cart;
    });
  },
});

const useStore = create(store);
export default useStore;
