const ProductDetail = ({
  data,
  isDetail,
  handleDetail,
  setIsDetail,
  productId,
  setCart,
  addProduct,
}) => {
  const product = productId(data, isDetail);

  if (!product) return null;

  return (
    <section className="grid max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-950/20 md:grid-cols-[1fr_1.05fr]">
      <div className="relative flex min-h-72 items-center justify-center bg-slate-100 p-8">
        <button
          onClick={() => handleDetail(0, setIsDetail)}
          className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-slate-950"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <span className="absolute right-5 top-5 rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-700">
          In stock
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-contain"
        />
      </div>

      <div className="overflow-y-auto p-6 text-left md:p-8">
        <p className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
          {product.alias}
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950">
          {product.name}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          {product.description}
        </p>

        <div className="my-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-400">Price</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              ${product.price}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-400">Quantity</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              {product.quantity}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.4fr] gap-3">
          <button
            onClick={() => handleDetail(0, setIsDetail)}
            className="h-12 rounded-2xl border border-slate-200 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
          >
            Close
          </button>
          <button
            className="h-12 rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-slate-950"
            onClick={() => {
              addProduct(setCart, product);
              setIsDetail(0);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
