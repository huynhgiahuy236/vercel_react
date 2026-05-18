import QuantityButton from './QuantityButton';
import { CONFIRM_DELETE_MESSAGE, MIN_QUANTITY, TAX_RATE } from '../utils/constants';

const CartProduct = ({ cart, setIsCart, setCart, dataShoes }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const decrease = (id) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                product.quantity > MIN_QUANTITY
                  ? product.quantity - 1
                  : MIN_QUANTITY,
            }
          : product
      )
    );
  };

  const increase = (id) => {
    const productInStore = dataShoes.find((item) => item.id === id);

    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                product.quantity < productInStore.quantity
                  ? product.quantity + 1
                  : product.quantity,
            }
          : product
      )
    );
  };

  const remove = (id) => {
    if (!confirm(CONFIRM_DELETE_MESSAGE)) return;
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="z-30 flex items-center justify-center fixed w-full top-10 left-1/2 -translate-x-1/2 md:w-[80%] lg:w-[60%] px-3">
      <div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-lg font-bold text-blue-900 sm:text-xl">
              Shopping Cart
            </h1>
          </div>
          <button
            onClick={() => setIsCart(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border text-gray-400 hover:bg-red-500 hover:text-white"
          >
            x
          </button>
        </div>

        <div className="grid flex-1 min-h-0 grid-cols-1 lg:grid-cols-[1fr_280px]">
          <div className="min-h-0 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-gray-300">
                <i className="fa-solid fa-cart-plus text-7xl"></i>
                <p className="mt-4 text-sm text-gray-400">
                  Gio hang dang trong
                </p>
              </div>
            ) : (
              <>
                <div className="hidden md:block">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 z-10 bg-gray-200">
                      <tr className="text-xs uppercase text-blue-900">
                        <th className="px-3 py-3 text-center">STT</th>
                        <th className="px-3 py-3 text-center">Image</th>
                        <th className="px-3 py-3 text-center">Name</th>
                        <th className="px-3 py-3 text-center">Price</th>
                        <th className="px-3 py-3 text-center">Qty</th>
                        <th className="px-3 py-3 text-center">Total</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.map((product, index) => (
                        <tr
                          key={product.id}
                          className="border-b border-gray-100 hover:bg-blue-50/40"
                        >
                          <td className="px-3 py-4 text-center">
                            {index + 1}
                          </td>
                          <td className="px-3 py-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="mx-auto h-14 w-14 rounded-xl object-contain"
                            />
                          </td>
                          <td className="px-3 py-4">
                            <p className="font-semibold text-gray-800">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              Premium Product
                            </p>
                          </td>
                          <td className="px-3 py-4 text-center font-semibold text-blue-600">
                            ${product.price}
                          </td>
                          <td className="px-3 py-4">
                            <QuantityButton
                              quantity={product.quantity}
                              onDecrease={() => decrease(product.id)}
                              onIncrease={() => increase(product.id)}
                            />
                          </td>
                          <td className="px-3 py-4 text-center font-semibold text-green-600">
                            ${(product.price * product.quantity).toFixed(2)}
                          </td>
                          <td className="px-3 py-4 text-center">
                            <button
                              onClick={() => remove(product.id)}
                              className="rounded-lg p-2 text-gray-300 hover:bg-red-50 hover:text-red-500"
                            >
                              <i className="fa-solid fa-trash text-red-500"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 md:hidden">
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                    >
                      <div className="flex gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-20 w-20 rounded-xl border object-contain"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-800">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm font-semibold text-blue-600">
                            ${product.price}
                          </p>
                          <p className="mt-1 text-xs text-green-600">
                            Total: ${(product.price * product.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => remove(product.id)}
                          className="h-8 w-8 rounded-lg text-gray-300 hover:bg-red-50 hover:text-red-500"
                        >
                          <i className="fa-solid fa-trash text-red-500"></i>
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-400">So luong</span>
                        <QuantityButton
                          quantity={product.quantity}
                          onDecrease={() => decrease(product.id)}
                          onIncrease={() => increase(product.id)}
                          isMobile
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="shrink-0 border-t bg-gray-50 p-5 lg:border-l lg:border-t-0">
            <h2 className="mb-4 text-base font-bold text-gray-800">
              Tom tat don hang
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Tong tien</span>
                <span className="font-semibold text-gray-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Thue 1%</span>
                <span className="font-semibold text-gray-800">
                  ${(subtotal * TAX_RATE).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Van chuyen</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Mien phi
                </span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="mb-5 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${(subtotal + subtotal * TAX_RATE).toFixed(2)}</span>
            </div>

            <input
              placeholder="Ma giam gia..."
              className="mb-3 w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="mb-3 w-full rounded-xl border bg-white py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 cursor-pointer">
              Ap dung
            </button>
            <button className="cursor-pointer w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Thanh toan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
