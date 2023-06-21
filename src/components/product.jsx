export default function Product({
  image,
  categories,
  name,
  id,
  range: { min, max },
  currency,
}) {
  return (
    <div className='flex flex-col overflow-hidden '>
      <img className='object-contain bg-white rounded grow' src={image} />
      <h3 className='text-lg font-semibold '>{name}</h3>
      <div className='flex items-center gap-2 text-theme-gray'>
        <p>${min}</p> {'-'}
        <p>${max}</p>
      </div>
    </div>
  );
}
