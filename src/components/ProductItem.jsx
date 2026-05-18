const ProductItem = ({ item, handleDetail, setIsDetail, setCart, addProduct }) => {
  return (
    <div className="relative mt-10 border border-gray-200 rounded-xl p-5 flex flex-col gap-3 w-full max-w-xs bg-white shadow-sm hover:-translate-y-4 transition-all duration-500">
      <span className="absolute -top-4 -right-4 bg-green-600 text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow-md shadow-green-200">
        ${item.price}
      </span>

      <div className="rounded-lg overflow-hidden bg-gray-50 h-44 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>
      <h2 className="text-lg font-bold text-[#041f73] leading-snug">
        {item.name}
      </h2>
      <p className="text-sm text-gray-500 italic leading-relaxed">
        {item.shortDescription}
      </p>
      <div className="grid grid-cols-2 items-center gap-2">
        <button
          onClick={() => handleDetail(item.id, setIsDetail)}
          className="mt-1 w-full py-2.5 rounded-lg bg-blue-700 text-white text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity text-nowrap text-center"
        >
          Chi tiet
        </button>
        <button
          className="mt-1 w-full py-2.5 rounded-lg bg-green-700 text-white text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => {
            addProduct(setCart, item);
          }}
        >
          <i className="fa-solid fa-cart-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
