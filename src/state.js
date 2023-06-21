import { create } from 'zustand';

const store = (set) => ({
  cart: [],
  isModalOpen: false,
  setModalOpen(opt) {
    set((s) => ({ ...s, isModalOpen: opt }));
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
              amount: s.cart[matchedProduct].amount
                ? ++s.cart[matchedProduct].amount
                : 1,
            },
          ],
        };
      return { ...s, cart: [...s.cart, newProduct] };
    });
  },
});

const useState = create(store);
export default useState;
