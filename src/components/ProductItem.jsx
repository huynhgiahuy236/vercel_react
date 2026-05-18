const ProductItem = ({ item, handleDetail, setIsDetail, setCart, addProduct }) => {
  return (
    <article className="group flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200">
      <div className="relative m-3 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
          In stock
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-slate-950 px-3 py-1 text-sm font-black text-white">
          ${item.price}
        </span>
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2 text-left">
        <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-blue-600">
          {item.alias}
        </p>
        <h3 className="min-h-14 text-lg font-black leading-7 text-slate-950">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {item.shortDescription}
        </p>

        <div className="mt-auto grid grid-cols-[1fr_48px] gap-2 pt-5">
          <button
            onClick={() => handleDetail(item.id, setIsDetail)}
            className="h-12 rounded-2xl border border-slate-200 bg-white text-sm font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            View detail
          </button>
          <button
            className="grid h-12 place-items-center rounded-2xl bg-blue-600 text-white transition hover:bg-slate-950"
            onClick={() => addProduct(setCart, item)}
            title="Add to cart"
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
