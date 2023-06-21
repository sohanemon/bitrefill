import useState from '../state';

export default function Modal({ children }) {
  const { isModalOpen, setModalOpen, cart } = useState();

  return (
    <div className='relative '>
      <button onClick={() => setModalOpen(true)}>{children}</button>
      {isModalOpen && (
        <>
          <div
            className={
              'absolute z-10 top-full right-0 w-full md:w-[327px] rounded-xl p-6 divide-y bg-white'
            }
          >
            {cart.map((el) => (
              <div className='py-3' key={el.id}>
                <div className='flex items-center gap-4 '>
                  <img
                    src={el.image}
                    className='object-contain w-10 h-10 rounded-sm ring ring-theme-base'
                  />
                  <div className='grow'>
                    <p className='font-semibold text-theme-dark'>{el.name}</p>
                    <p className='text-theme-gray'>${el.min}</p>
                  </div>
                  <div className='relative inline-block text-left'>
                    <div>
                      <button
                        type='button'
                        className='inline-flex w-full justify-center gap-x-1.5 rounded-full bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 '
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
                    </div>
                  </div>
                  <img src='/assets/trash.svg' />
                </div>
                <p className='text-right text-theme-gray'>${el.min}</p>
              </div>
            ))}
          </div>
          <div
            className='fixed inset-0 bg-black/40'
            onClick={() => setModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}
