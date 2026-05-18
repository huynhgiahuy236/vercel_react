import ProductItem from './ProductItem';

const ProductList = ({ data, handleDetail, setIsDetail, setCart, addProduct }) => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2 text-left sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Featured
          </p>
          <h2 className="text-2xl font-black tracking-tight text-slate-950">
            Popular sneakers
          </h2>
        </div>
        <p className="text-sm text-slate-500">
          {data.length} products ready to ship
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            handleDetail={handleDetail}
            setIsDetail={setIsDetail}
            setCart={setCart}
            addProduct={addProduct}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
