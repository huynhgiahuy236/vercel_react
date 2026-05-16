import React from "react";

const ProductItem = (props: any) => {
  const { data, handleDetail } = props;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 m-10">
        {data.map((item: any) => (
          <div
            className="relative mt-10 border border-gray-200 rounded-xl p-5 flex flex-col gap-3 w-full max-w-xs bg-white shadow-sm hover:-translate-y-4 transition-all duration-500"
            key={item.id}
          >
            <span className="absolute -top-4 -right-4 bg-green-600 text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow-md shadow-green-200">
              ${item.price}
            </span>

            <div className="rounded-lg overflow-hidden bg-gray-50 h-44 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="text-lg font-bold text-[#041f73] leading-snug">
              {item.name}
            </h2>
            <p className="text-sm text-gray-500 italic leading-relaxed ">
              {item.shortDescription}
            </p>
            <button
              onClick={() => handleDetail(item.id)}
              className="mt-1 w-full py-2.5 px-5 rounded-lg bg-gradient-to-r from-[#041f73] to-blue-400 text-white text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity   "
            >
              Xem chi tiết →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
