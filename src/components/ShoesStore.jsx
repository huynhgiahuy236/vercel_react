import { useState, useCallback } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CartProduct from './CartProduct';
import dataShoes from '../data/productShoes.json';
import { useScrollLock } from '../utils/hooks';

const ShoesStore = () => {
  const [isDetail, setIsDetail] = useState(0);
  const [isCart, setIsCart] = useState(false);
  const [cart, setCart] = useState([]);

  // Lock scroll when cart is open
  useScrollLock(isCart);

  /**
   * Find product by ID from data array
   */
  const findProductById = useCallback((data, id) => {
    return data.find((item) => item.id === id);
  }, []);

  /**
   * Handle detail view - both open and close
   */
  const handleDetail = useCallback((productId, setState) => {
    setState(productId);
  }, []);

  /**
   * Add product to cart or increase quantity if exists
   */
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

  /**
   * Calculate total items in cart
   */
  const sumProduct = useCallback(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  return (
    <div className="text-center max-w-full-screen">
      <header className="sticky top-0 z-10 px-10 py-7 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm flex items-center justify-between">
        <p className="text-2xl font-black tracking-[4px] uppercase bg-gradient-to-r from-blue-900 via-blue-500 to-blue-300 bg-clip-text text-transparent pr-1">
          BT Shoes
        </p>
        <button
          className="text-white relative font-medium bg-blue-600 hover:bg-blue-800 cursor-pointer py-2 px-6 flex gap-5 items-center rounded-lg"
          onClick={() => {
            setIsCart(!isCart);
          }}
        >
          <span className="absolute -top-3 -right-3 rounded-[50%] h-8 w-8 pt-1.5 bg-red-500 text-white text-sm">
            {sumProduct()}
          </span>
          Giỏ hàng
          <span className="hidden md:block">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
        </button>
      </header>

      {isCart && (
        <div className="relative">
          <div
            className="fixed inset-0 bg-black/50 z-20"
            onClick={() => {
              setIsCart(false);
            }}
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 transition-opacity duration-300"
            onClick={() => {
              setIsDetail(0);
            }}
          ></div>
          <div className="top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 z-20">
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
