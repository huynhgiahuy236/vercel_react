import QuantityButton from './QuantityButton';
import {
  CONFIRM_DELETE_MESSAGE,
  MIN_QUANTITY,
  TAX_RATE,
} from '../utils/constants';

const CartProduct = ({ cart, setIsCart, setCart, dataShoes }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const decrease = (id) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(product.quantity - 1, MIN_QUANTITY),
            }
          : product
      )
    );
  };

  const increase = (id) => {
    const productInStore = dataShoes.find((item) => item.id === id);
    if (!productInStore) return;

    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.min(product.quantity + 1, productInStore.quantity),
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
    <aside className="fixed left-1/2 top-1/2 z-30 flex max-h-[90vh] w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-950/30">
      <div className="grid min-h-[70vh] w-full grid-cols-1 lg:grid-cols-[1fr_340px]">
        <section className="flex min-h-0 flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
                Your bag
              </p>
              <h2 className="text-xl font-black text-slate-950">
                Shopping cart
              </h2>
            </div>
            <button
              onClick={() => setIsCart(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-950 hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
            {cart.length === 0 ? (
              <div className="grid h-full min-h-80 place-items-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 text-center">
                <div>
                  <i className="fa-solid fa-bag-shopping text-5xl text-slate-300"></i>
                  <p className="mt-4 font-bold text-slate-700">
                    Your cart is empty
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Pick a pair and it will show up here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((product) => (
                  <article
                    key={product.id}
                    className="grid grid-cols-[76px_1fr] gap-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-[84px_1fr_auto]"
                  >
                    <div className="flex h-20 items-center justify-center rounded-2xl bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    <div className="min-w-0 text-left">
                      <p className="truncate text-sm font-black text-slate-950">
                        {product.name}
                      </p>
                      <p className="mt-1 text-sm font-bold text-blue-600">
                        ${product.price}
                      </p>
                      <div className="mt-3">
                        <QuantityButton
                          quantity={product.quantity}
                          onDecrease={() => decrease(product.id)}
                          onIncrease={() => increase(product.id)}
                        />
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-between border-t border-slate-100 pt-3 sm:col-span-1 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
                      <p className="font-black text-slate-950">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => remove(product.id)}
                        className="grid h-9 w-9 place-items-center rounded-full text-slate-300 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 p-5 lg:border-l lg:border-t-0 lg:p-6">
          <div className="rounded-3xl bg-slate-950 p-5 text-white">
            <p className="text-sm text-slate-300">Order total</p>
            <p className="mt-2 text-4xl font-black">${total.toFixed(2)}</p>
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Tax</span>
              <span className="font-bold text-slate-900">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Shipping</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                Free
              </span>
            </div>
          </div>

          <div className="my-5 h-px bg-slate-200"></div>

          <input
            placeholder="Promo code"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
          <button className="mt-3 h-12 w-full rounded-2xl border border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:bg-slate-100">
            Apply code
          </button>
          <button className="mt-3 h-12 w-full rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-slate-950">
            Checkout
          </button>
        </section>
      </div>
    </aside>
  );
};

export default CartProduct;
