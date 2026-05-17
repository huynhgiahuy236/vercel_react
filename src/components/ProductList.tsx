import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props: any) => {
  const { data, isDetail, handleDetail,setIsDetail,setCart,addProduct } = props;
  return (
    <div>
      <ProductItem
        data={data}
        setCart={setCart}
        isDetail={isDetail}
        setIsDetail={setIsDetail}
        handleDetail={handleDetail}
        addProduct={addProduct}
      />
    </div>
  );
};

export default ProductList;
