import React from "react";

const CartProduct = (props: any) => {
  const { cart, setIsCart, setCart, dataShoes } = props;
  if (cart.length === 0) {
    return (
      <div
        className="bg-blue-100 rounded-2xl shadow-2xl fixed w-[60%] left-1/2 h-auto top-1/2 -translate-y-1/2 
      -translate-x-1/2 z-30"
      >
        <div className="container mx-auto p-5 ">
          <h1 className="text-2xl font-semibold mb-4 text-blue-700">
            Shopping Cart
          </h1>
          <tbody>chua them vao gio hang</tbody>
        </div>
      </div>
    );
  }
  const sum = cart.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0,
  );
  const decrease = (id: any) => {
    setCart((prev: any) =>
      prev.map((product: any) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product,
      ),
    );
  };
  const increase = (id: any) => {
    const productID = dataShoes.find((item: any) => item.id === id);
    console.log(productID.quantity);
    setCart((prev: any) =>
      prev.map((product: any) =>
        product.id === id
          ? {
              ...product,
              quantity:
                product.quantity < productID.quantity
                  ? product.quantity + 1
                  : product.quantity,
            }
          : product,
      ),
    );
  };
  const remove = (id: number) => {
    confirm("Are you sure that !!!")
    setCart((c: any) => c.filter((p: any) => p.id !== id));
  };

  return (
    <>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-xl fixed w-[65%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-4 border-b border-gray-100">
          <h1 className="text-lg font-medium text-gray-800 flex items-center gap-2">
            🛍 Shopping Cart
            <span className="text-[11px] font-medium bg-blue-50 text-blue-600 rounded-full px-3 py-0.5">
              {cart.length} items
            </span>
          </h1>
          <button
            onClick={() => {
              setIsCart(false);
            }}
            className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-700 transition text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex">
          {/* Table */}
          <div className="flex-1 min-w-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-4 py-3 text-center text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                    #
                  </th>
                  <th className="px-4 py-3 text-center text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                    Image
                  </th>
                  <th className="py-3 text-left text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                    Product
                  </th>
                  <th className="px-4 py-3 text-center text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                    Price
                  </th>
                  <th className="px-4 py-3 text-center text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                    Qty
                  </th>
                  <th className="px-4 py-3 text-center text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                    Total
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product: any, index: any) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="px-4 py-3 text-center">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 text-[11px] font-medium inline-flex items-center justify-center">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover border border-gray-100"
                        />
                      </div>
                    </td>
                    <td className="py-3 pl-0">
                      <p className="font-medium text-gray-800 text-sm">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Premium Product
                      </p>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-blue-600">
                      ${product.price}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2 py-1 w-fit mx-auto">
                        <button
                          onClick={() => {
                            decrease(product.id);
                            console.log(product.id);
                          }}
                          className="cursor-pointer w-5 h-5 rounded bg-gray-100 hover:bg-blue-50 hover:text-blue-500 text-gray-600 flex items-center justify-center text-sm transition"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium w-4 text-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => {
                            increase(product.id);
                          }}
                          className="w-5 h-5 rounded bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-sm transition"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-green-600">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => remove(product.id)}
                        className="text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-md p-1 transition text-xs"
                      >
                        🗑
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="w-56 flex-shrink-0 border-l border-gray-100 bg-gray-50/60 p-5 flex flex-col">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Tạm tính</h2>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Tổng tiền</span>
              <span className="font-medium text-gray-700">
                ${sum.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Thuế (1%)</span>
              <span className="font-medium text-gray-700">
                ${(sum * 0.01).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Vận chuyển</span>
              <span className="text-[10px] bg-green-50 text-green-700 font-medium rounded-full px-2 py-0.5">
                Miễn phí
              </span>
            </div>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between text-sm font-medium text-gray-800 mb-4">
              <span>Total</span>
              <span>${(sum + sum * 0.01).toFixed(2)}</span>
            </div>
            <input
              placeholder="Mã giảm giá..."
              className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-blue-200 bg-white"
            />
            <button className="w-full text-xs text-gray-500 border border-gray-200 rounded-lg py-2 mb-3 bg-white hover:bg-gray-50 transition">
              Áp dụng
            </button>
            <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition flex items-center justify-center gap-1.5 mt-auto">
              🔒 Thanh toán
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
