import React from "react";

function ModalCard() {
  const productPrice = 9779000;
  const installmentPrice = 664158;
  const installmentMonths = 24;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-5">
      <div className="flex justify-between border-b pb-3 mb-3">
        <h3 className="font-bold text-lg">Hozirgi To'lash</h3>
        <h3 className="font-bold text-lg">Muddatli To'lov</h3>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700">1 dona mahsulot narxi</p>
        <p className="font-semibold text-lg">
          {productPrice.toLocaleString()} so'm
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700">Muddatli to'lov:</p>
        <p className="font-semibold text-lg">
          {installmentPrice.toLocaleString()} so'm x {installmentMonths}
        </p>
      </div>

      <div className="text-center">
        <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600">
          Rasmiylashtirish
        </button>
      </div>
    </div>
  );
}

export default ModalCard;
