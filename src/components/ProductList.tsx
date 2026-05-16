import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props: any) => {
  const { data, isDetail, handleDetail } = props;
  return (
    <div>
      <ProductItem
        data={data}
        isDetail={isDetail}
        handleDetail={handleDetail}
      />
    </div>
  );
};

export default ProductList;
