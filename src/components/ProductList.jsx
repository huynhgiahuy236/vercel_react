import ProductItem from "./ProductItem";

const ProductList = ({
  data,
  handleDetail,
  setIsDetail,
  setCart,
  addProduct,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-[10%] mx-auto justify-items-center">
      {data.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          handleDetail={handleDetail}
          setIsDetail={setIsDetail}
          setCart={setCart}
          addProduct={addProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
