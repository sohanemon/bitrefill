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
              'absolute z-10 top-full right-0 w-full md:w-[327px] rounded-xl p-6 bg-white'
            }
          >
            {cart.map((el) => (
              <div className='flex' key={el.id}>
                <img
                  src={el.image}
                  className='object-contain w-10 h-10 rounded-sm ring ring-theme-base'
                />
                <div>
                  <p className='font-semibold text-theme-dark'>{el.name}</p>
                  <p className='text-theme-gray'>${el.min}</p>
                </div>
                <select name='' id={el.name}></select>
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
