import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import useBookStore from "../store/book-store";
import Loader from "../components/loaderr/Loader";
import { Button } from "antd";
import SimilarProducts from "../components/SimilarProducts";

function ProductCard() {
  const [imgIndex, setImgIndex] = useState(0);
  const params = useParams();
  const [product, setProduct] = useState();
  const { cash, setCash, setCashClose } = useBookStore();
  const state = useBookStore();

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${params.id}`)
      .then((res) => {
        setProduct(res.data.data.data);
        // console.log(res.data.data.data);
      });
  }, [params.id]);

  if (!product) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="flex z-10">
        {product ? (
          <div className="flex gap-5">
            <div>
              {" "}
              {product.large_images.slice(0, 4).map((img, index) => {
                return (
                  <img
                    key={index}
                    className="w-20 h-20 border border-slate-100 hover:border-2  hover:border-yellow-600 rounded-xl"
                    src={img}
                    alt="PHoto"
                    onClick={() => {
                      setImgIndex(index);
                    }}
                  />
                );
              })}
            </div>
            <img
              className="w-80 h-96"
              src={product.large_images[imgIndex]}
              alt={product.name}
            />
            <div className="flex flex-col gap-4">
              <h2 className="flex justify-between w-[600px] bg-slate-50 font-bold ">
                <span>Brand </span> <span>{product.name}</span>
              </h2>
              <p className="flex justify-between w-[600px] bg-slate-50 font-bold ">
                <span>Narxi</span>
                <span>
                  <span className=" opacity-60">{product.loan_price}/ </span>
                  {product.installment_price} So'm
                </span>
              </p>
              <p className="flex justify-between w-[600px] bg-slate-50 font-bold ">
                <span>Muddatli to'lo'v</span>
                <span> {(product.sale_price * 1.2) / 24} So'm </span>
              </p>
              <p className="flex justify-between w-[600px] bg-slate-50 font-bold ">
                <span>Loan order </span>{" "}
                <span> {product.is_can_loan_order} </span>
              </p>
              <Button
                onClick={() => {
                  state.addSavatcha(product);
                  console.log(state.savatcha);
                }}
              >
                Savagtcha
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-center text-3xl font-bold text-red-600">
              Serverda qandaydir hatolik bor!!!
            </p>
            <Loader />
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
                    {product.installment_price}so'm
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
                    24 oy / {(product.loan_price * 1.2) / 24} So'm
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
      <SimilarProducts productId={params.id}></SimilarProducts>
    </>
  );
}

export default ProductCard;
