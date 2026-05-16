import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import dataShoes from "../data/productShoes.json";

const ShoesStore = () => {
  const [isDetail, setIsDetail] = useState(0);
  const handleDetail = (newProduct: any) => {
    setIsDetail(newProduct);
  };
  return (
    <div className="text-center  max-w-full-screen">
      <header className="sticky top-0 z-50 px-10 py-4 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm flex items-center justify-center">
        <p className="text-2xl font-black tracking-[4px] uppercase bg-gradient-to-r from-blue-900 via-blue-500 to-blue-300 bg-clip-text text-transparent pr-1">
          BT Shoes
        </p>
      </header>
      <ProductList
        data={dataShoes}
        isDetail={isDetail}
        handleDetail={handleDetail}
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
              data={dataShoes}
              isDetail={isDetail}
              handleDetail={handleDetail}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShoesStore;
