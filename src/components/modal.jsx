import { useState } from 'react';
import useStore from '../state';

export default function Modal({ children }) {
  const { isModalOpen, setAmount, setModalOpen, cart, removeFromCart } =
    useStore();

  return (
    <div className='relative '>
      <button
        className={!cart.length && 'pointer-events-none'}
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>
      {isModalOpen && !!cart.length && (
        <>
          <div
            className={
              'absolute z-10 top-full right-0 w-full md:w-[327px] max-md:w-[88vw] rounded-xl p-6 divide-y bg-white'
            }
          >
            {cart.map((el) => (
              <div className='py-4' key={el.id}>
                <div className='flex items-center gap-4 '>
                  <img
                    src={el.image}
                    className='object-contain w-10 h-10 rounded-sm ring ring-theme-base'
                  />
                  <div className='grow'>
                    <p className='font-semibold text-theme-dark'>{el.name}</p>
                    <p className='text-theme-gray'>${el.min}</p>
                  </div>
                  <Selector el={el} />
                  <img
                    className='cursor-pointer'
                    onClick={() => removeFromCart(el.id)}
                    src='/assets/trash.svg'
                  />
                </div>
                <p className='font-medium text-right text-black'>
                  ${el.min * el.amount}
                </p>
              </div>
            ))}
            <div className='flex items-center justify-between pt-4'>
              <p className='text-theme-dark'>Total</p>
              <p className='font-medium text-right text-black '>
                ${cart.reduce((p, c) => p + c.amount * c.min, 0)}
              </p>
            </div>
            <button className='w-full h-10 mt-3 font-semibold text-white rounded-full bg-theme-pink'>
              Continue to checkout
            </button>
          </div>
          <div
            className='fixed inset-0 bg-black/40'
            onClick={() => setModalOpen(false)}
          />
        </>
      )}
    </div>
  );

  function Selector({ el }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className='relative inline-block text-left'>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            type='button'
            className='peer inline-flex w-full justify-center gap-x-1.5 rounded-full bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 '
          >
            {el.amount}
            <svg
              className='w-5 h-5 -mr-1 text-gray-600'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' />
            </svg>
          </button>
          {isOpen && (
            <div className='absolute right-0 z-20 w-20 h-32 overflow-y-scroll text-right bg-white rounded shadow top-full peer-focus:block'>
              {Array.from(Array(20)).map((_, idx) => (
                <p
                  onClick={() => {
                    setAmount(el.id, idx + 1);
                    setIsOpen(false);
                  }}
                  className='py-1 pr-3 font-medium hover:bg-theme-pink/10'
                  key={_}
                >
                  {idx + 1}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
