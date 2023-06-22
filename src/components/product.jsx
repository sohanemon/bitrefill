import useStore from '../state';

export default function Product({ image, name, id, range: { min, max } }) {
  const addToCart = useStore((s) => s.addToCart);
  function handleAddToCard() {
    addToCart({ image, id, min, name });
  }

  return (
    <div
      title='Add to cart'
      className='flex flex-col overflow-hidden transition-all group '
      onClick={handleAddToCard}
    >
      <img
        className='object-contain bg-white rounded group-active:scale-95 group-hover:opacity-80 grow '
        src={image}
      />
      <h3 className='mt-3 text-lg font-semibold'>{name}</h3>
      <div className='flex items-center gap-2 text-theme-gray'>
        <p>${min}</p> {'-'}
        <p>${max}</p>
      </div>
    </div>
  );
}
