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
              <div key={el.id}>
                <img src={el.image} />
                <p>{el.name}</p>
                <p>${el.min}</p>
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
