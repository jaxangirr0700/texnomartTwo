import { useEffect } from "react";
import useBookStore from "../store/book-store";
import Loader from "./Loader";

function ProductCard() {
  const {
    productss,
    fetchProducts,
    isLoading,
    productId,
    cash,
    setCash,
    setCashClose,
  } = useBookStore();
  console.log(productss);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <Loader />;
  // console.log(productss, productId);

  const product = productss.find((product) => {
    return product.id === productId;
  });

  return (
    <div className="flex z-10">
      {product ? (
        <div key={product.id} className="flex">
          <img src={product.image} alt={product.name} />
          <div className="flex flex-col gap-4">
            {" "}
            <h2 className="flex justify-between w-[600px] bg-slate-100 font-bold ">
              {" "}
              <span>Ma'lumot </span> <span>{product.name}</span>
            </h2>
            <p className="flex justify-between w-[600px] bg-slate-100 font-bold ">
              {" "}
              <span>Narxi</span>
              <span>{product.sale_price} So'm</span>
            </p>
            <p className="flex justify-between w-[600px] bg-slate-100 font-bold ">
              <span>Muddatli to'lo'v</span>
              <span> {product.axiom_monthly_price} So'm </span>
            </p>
            <p className="flex justify-between w-[600px] bg-slate-100 font-bold ">
              <span>Loan order </span>{" "}
              <span> {product.is_can_loan_order} </span>
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className="text-center text-3xl font-bold text-red-600">
            Serverda qandaydir hatolik bor!!!
          </p>
          <Loader />{" "}
        </>
      )}
      {product ? (
        <div
          key={product.id}
          className=" w-96 mx-auto bg-white shadow-lg rounded-lg p-5"
        >
          <div className="flex  justify-between border-b pb-3 mb-3">
            <h3
              onClick={() => {
                setCash();
              }}
              className={`text-lg font-bold rounded-xl px-3 py-1 ${
                cash ? "bg-slate-200" : ""
              }`}
            >
              Hozirgi To'lash
            </h3>

            <h3
              onClick={() => {
                setCashClose();
              }}
              className={`text-lg font-bold rounded-xl px-3 py-1 ${
                cash ? "" : "bg-slate-200"
              }`}
            >
              Muddatli To'lov
            </h3>
          </div>

          {cash ? (
            <div>
              <div className="flex  justify-between items-center mb-4">
                <p className="text-gray-700 font-bold text-2xl">
                  Hozir to'lash
                </p>
                <p className="font-semibold text-lg">
                  {product.sale_price}so'm
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex  justify-between items-center mb-4">
                <p className="text-gray-700 font-bold text-lg ">
                  Muddatli to'lov:
                </p>
                <p className="font-semibold text-lg">
                  {" "}
                  {product.axiom_monthly_price}
                </p>
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600">
              Rasmiylashtirish
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ProductCard;
