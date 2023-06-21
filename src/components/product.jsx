import useState from '../state';

export default function Product({ image, name, id, range: { min, max } }) {
  const addToCart = useState((s) => s.addToCart);
  function handleAddToCard() {
    addToCart({ image, id, min, name });
  }

  return (
    <div className='flex flex-col overflow-hidden ' onClick={handleAddToCard}>
      <img className='object-contain bg-white rounded grow ' src={image} />
      <h3 className='text-lg font-semibold '>{name}</h3>
      <div className='flex items-center gap-2 text-theme-gray'>
        <p>${min}</p> {'-'}
        <p>${max}</p>
      </div>
    </div>
  );
}
