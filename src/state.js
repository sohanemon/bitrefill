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
      console.log('🛑 ~ set ~ matchedProduct:', matchedProduct);

      if (matchedProduct !== -1)
        return {
          ...s,
          cart: [
            ...s.cart,
            {
              ...s.cart.at(matchedProduct),
              amount: s.cart.at(matchedProduct).amount
                ? ++s.cart.at(matchedProduct).amount
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
