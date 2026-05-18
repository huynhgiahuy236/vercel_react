import { useCallback, useState } from 'react';
import CartProduct from './CartProduct';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import dataShoes from '../data/productShoes.json';
import { useScrollLock } from '../utils/hooks';

const ShoesStore = () => {
  const [isDetail, setIsDetail] = useState(0);
  const [isCart, setIsCart] = useState(false);
  const [cart, setCart] = useState([]);

  useScrollLock(isCart);

  const findProductById = useCallback((data, id) => {
    return data.find((item) => item.id === id);
  }, []);

  const handleDetail = useCallback((productId, setState) => {
    setState(productId);
  }, []);

  const addProduct = useCallback((setState, item) => {
    setState((prev) => {
      const existed = prev.find((product) => product.id === item.id);

      if (existed) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const sumProduct = useCallback(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Sneaker Studio
            </p>
            <h1 className="text-2xl font-black tracking-tight text-slate-950">
              BT Shoes
            </h1>
          </div>

          <button
            className="relative flex h-11 items-center gap-3 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-blue-700"
            onClick={() => setIsCart(!isCart)}
          >
            <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-white">
              {sumProduct()}
            </span>
            <i className="fa-solid fa-bag-shopping"></i>
            Cart
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-blue-300">
              New collection
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Chon doi giay hop vibe cua ban.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 md:text-base">
              Danh sach san pham, xem chi tiet, them gio hang va tinh tien deu
              nam gon trong mot man hinh.
            </p>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <div className="rounded-3xl bg-white/10 px-5 py-4 text-left ring-1 ring-white/10">
              <p className="text-sm text-slate-300">Available styles</p>
              <p className="text-3xl font-black">{dataShoes.length}</p>
            </div>
          </div>
        </div>
      </section>

      {isCart && (
        <div className="relative">
          <div
            className="fixed inset-0 z-20 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setIsCart(false)}
          ></div>
          <CartProduct
            cart={cart}
            setIsCart={setIsCart}
            setCart={setCart}
            dataShoes={dataShoes}
          />
        </div>
      )}

      <ProductList
        data={dataShoes}
        setCart={setCart}
        isDetail={isDetail}
        setIsDetail={setIsDetail}
        handleDetail={handleDetail}
        addProduct={addProduct}
      />

      {isDetail !== 0 && (
        <>
          <div
            className="fixed inset-0 z-10 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsDetail(0)}
          ></div>
          <div className="fixed left-1/2 top-1/2 z-20 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2">
            <ProductDetail
              addProduct={addProduct}
              data={dataShoes}
              isDetail={isDetail}
              productId={findProductById}
              setIsDetail={setIsDetail}
              handleDetail={handleDetail}
              setCart={setCart}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShoesStore;
