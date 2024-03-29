import useStore from '../state';
import Modal from './modal';

export default function Navbar() {
  const { cart } = useStore();
  return (
    <nav className='relative flex items-center justify-between p-6 bg-white shadow md:px-60 md:py-8'>
      <img src='/assets/logo.svg' alt='' />

      <Modal>
        <div className='relative z-20 flex items-center gap-4 cursor-pointer'>
          <img src='/assets/cart.svg' alt='' />{' '}
          <p className='hidden font-semibold md:block text-theme-dark'>Cart</p>
          {!!cart.length && (
            <div className='absolute top-0 grid w-4 h-4 text-xs font-semibold text-white rounded-full ring-2 left-5 ring-white place-content-center bg-theme-pink'>
              {cart.length}
            </div>
          )}
        </div>
      </Modal>
    </nav>
  );
}
