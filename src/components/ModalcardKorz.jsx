import React from "react";
import useBookStore from "../store/book-store";

function ModalCardKorz() {
  const { massivKorz, cash, setCash, setCashClose } = useBookStore();

  return (
    <div className=" w-96 mx-auto bg-white shadow-lg rounded-lg p-5">
      <div className="flex justify-between border-b pb-3 mb-3">
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

      {cash
        ? massivKorz.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex  justify-between items-center mb-4">
                  <p className="text-gray-700">
                    Savatda {item.count} ta mahsulot
                  </p>
                  <p className="font-semibold text-lg">
                    {Math.floor(item.price * item.count)} so'm
                  </p>
                </div>
                <p className="font-bold mb-2">
                  {item.price * item.count}Umumiy Summa
                </p>
              </div>
            );
          })
        : massivKorz.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex  justify-between items-center mb-4">
                  <p className="text-gray-700">Muddatli to'lov:</p>
                  <p className="font-semibold text-lg">
                    {Math.floor((item.price * item.count * 1.5) / 24)} so'm x
                  </p>
                </div>
                <p className="font-bold">
                  {Math.floor((item.price * item.count) / 24)} Umumiy Summasi
                </p>
              </div>
            );
          })}

      <div className="text-center">
        <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600">
          Rasmiylashtirish
        </button>
      </div>
    </div>
  );
}

export default ModalCardKorz;
