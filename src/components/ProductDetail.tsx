import React from "react";

const ProductDetail = (props: any) => {
  const {
    data,
    isDetail,
    handleDetail,
    setIsDetail,
    productId,
    setCart,
    addProduct,
  } = props;
  const product = productId(data, isDetail);
  return (
    <>
      {product && (
        <div className="bg-white rounded-xl border border-gray-100 w-full max-w-sm overflow-hidden shadow-sm ">
          <div className="relative bg-gray-200 h-56 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain p-4"
            />
            <span className="absolute top-3 right-3 text-xs bg-green-200 text-green-700 px-4 py-2 rounded-md font-medium">
              Còn hàng
            </span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              {product.alias}
            </p>
            <h2 className="text-xl font-semibold tracking-wide my-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e293b] text-slate-100 border border-slate-700/50 shadow-lg shadow-black/20">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-4">
              <span className="text-lg font-medium py-1 px-4 bg-green-600 text-white rounded-sm">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 font-medium border border-gray-300 bg-gray-50 py-2 px-4 rounded-lg">
                Số lượng: {product.quantity}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetail(0, setIsDetail)}
                className="flex-1 border border-gray-200 rounded-lg py-2 text-sm text-gray-500 hover:bg-gray-50 cursor-pointer"
              >
                Close
              </button>
              <button
                className="flex-[2] bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700 cursor-pointer"
                onClick={() => {
                  addProduct(setCart, product);
                  setIsDetail(0);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
