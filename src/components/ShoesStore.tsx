import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import dataShoes from "../data/productShoes.json";
import CartProduct from "./CartProduct";

const ShoesStore = () => {
  // useState Detail
  const [isDetail, setIsDetail] = useState(0);
  // useState Car
  const [isCart, setIsCart] = useState(false);
  const [cart, setCart] = useState([]);
  const handleDetail = (newProduct: any, setUseState: any) => {
    setUseState(newProduct);
  };
  const productId = (data: any, state: any) => {
    return data.find((item: any) => item.id === state);
  };
  useEffect(() => {
    document.body.style.overflow = isCart ? "hidden" : "auto";
  }, [isCart]);
  const addProduct = (setUseState: any, item: any) => {
    setUseState((prev: any) => {
      const existed = prev.find((product: any) => product.id === item.id);
      if (existed) {
        return prev.map((product: any) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const sumProduct = () =>
    cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
  return (
    <div className="text-center  max-w-full-screen ">
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
          <span className="absolute -top-3 -right-3  rounded-[50%] h-8 w-8 pt-1.5 bg-red-500 text-white text-sm">
            {sumProduct()}
          </span>
          Giỏ hàng
          <span className="hidden md:block">
            <i className="fa-solid fa-cart-shopping "></i>
          </span>
        </button>
      </header>
      {isCart && (
        <div className="relative">
          <div className="fixed inset-0 bg-black/50 z-20" onClick={() => {
              setIsCart(false);
            }}>

          </div>
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
              productId={productId}
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
