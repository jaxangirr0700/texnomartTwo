import React, { use, useEffect, useState } from "react";
import { Button, Flex, Modal } from "antd";
import useBookStore from "../store/book-store";
import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import ModalCard from "./ModalCard";
import ModalCardKorz from "./ModalcardKorz";
import Loader from "./loaderr/Loader";
import axios from "axios";
import NavRightButtons from "./navRightButtons";

const Modall = () => {
  const [openLike, setOpenLike] = useState(false);
  const [openKorz, setOpenKorz] = useState(false);
  const [prod, setProd] = useState([]);

  const {
    massivKorz,
    massivKorzLike,
    coutPlusLike,
    coutMinusLike,
    deletiItemLike,
    productId,
  } = useBookStore();

  const state = useBookStore();
  const [productsModal, setProductsModal] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products`
      )
      .then((res) => {
        // console.log(res.data.data.data);
        useBookStore.setState({ massivKorz: res.data.data.data });
      });
  }, []);

  return (
    <Flex gap="middle" align="center">
      <NavRightButtons>
        {" "}
        <span className=" flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          Kirish
        </span>
      </NavRightButtons>
      <NavRightButtons>
        <div onClick={() => setOpenLike(true)}>
          <span className=" absolute right-[-10px] top-[-20px] text-white bg-yellow-500 px-2 py-1 rounded-full ">
            {massivKorzLike.length > 0 ? massivKorzLike.length : ""}
          </span>
          <span className=" flex flex-col items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sevimlilar
          </span>
        </div>
      </NavRightButtons>
      <Modal
        title="Sevimlidagi mahsulotlar"
        centered
        open={openLike}
        onOk={() => setOpenLike(false)}
        onCancel={() => setOpenLike(false)}
        width={1000}
      >
        <div className="flex items-center justify-between gap-5">
          <ul className="flex flex-col gap-2">
            <p className="text-2xl">
              {massivKorzLike.length > 0
                ? massivKorzLike.length + "  ta mahsulot"
                : "Hozircha mahsulot yo'q"}
            </p>
            {massivKorzLike.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-5 border border-slate-200 px-3 py-2 rounded-xl hover:scale-101 transition-all 0.5s"
                >
                  <div className="flex gap-3">
                    <img className="w-14" src={item.img} alt="" />
                    <span>
                      {item.title}{" "}
                      <p className="flex gap-5 border border-slate-200 w-fit px-2 py-1 rounded-xl">
                        <button onClick={() => coutPlusLike(item.id)}>+</button>
                        {item.count}
                        <button onClick={() => coutMinusLike(item.id)}>
                          -
                        </button>
                      </p>
                    </span>
                  </div>
                  <Button
                    type="dashed"
                    danger
                    icon={<DeleteFilled />}
                    onClick={() => {
                      deletiItemLike(item.id);
                    }}
                  ></Button>
                </li>
              );
            })}
          </ul>{" "}
          {massivKorzLike.length > 0 ? <ModalCard /> : <></>}
        </div>
      </Modal>
      <NavRightButtons>
        <div onClick={() => setOpenKorz(true)}>
          <span className=" absolute right-[-10px] top-[-20px] text-white bg-yellow-500 px-2 py-1 rounded-full ">
            {massivKorz.length > 0 ? massivKorz.length : ""}
          </span>
          <span className=" flex flex-col items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 6H22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="6"
                cy="20"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="17"
                cy="20"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 20L15 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Savatcha
          </span>
        </div>
      </NavRightButtons>

      <Modal
        title="Savatchadagi maxsulotlar"
        centered
        open={openKorz}
        onOk={() => setOpenKorz(false)}
        onCancel={() => setOpenKorz(false)}
        width={1000}
      >
        <div className="flex items-center justify-between">
          {productsModal
            .filter((item) => {
              return item.id == 356066;
            })
            .map((item) => (
              <div key={item.id} className="mb-4 flex">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 w-full px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">{item.name}</span>
                    <p className="text-gray-600">{item.sale_price} So'm</p>
                  </div>
                  <Button
                    type="dashed"
                    danger
                    icon={<DeleteFilled />}
                    className="mt-2"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}

          {/* <ModalCardKorz /> */}
        </div>
        <div className="flex items-center justify-between gap-5">
          <ul className="flex flex-col gap-2">
            <p>
              {massivKorz.length > 0
                ? massivKorz.length + "ta mahsulot"
                : "Hozircha mahsulot yo'q"}
            </p>
            {massivKorz
              .filter((i) => {
                // console.log(i);
                // console.log(productId);

                return i.id == 356579;
              })
              .map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-5 border border-slate-200 px-3 py-2 rounded-xl hover:scale-101 transition-all 0.5s"
                  >
                    <div className="flex gap-3">
                      <img className="w-14" src={item.image} alt="" />
                      <span>
                        {item.name}{" "}
                        <p className="flex gap-5 border border-slate-200 w-fit px-2 py-1 rounded-xl">
                          <button
                            onClick={() => {
                              coutPlusKorz(item.id);
                            }}
                          >
                            +
                          </button>
                          {item.all_count}
                          <button
                            onClick={() => {
                              coutMinusKorz(item.id);
                            }}
                          >
                            -
                          </button>
                        </p>
                      </span>
                    </div>
                    <Button
                      type="dashed"
                      danger
                      icon={<DeleteFilled />}
                      onClick={() => {
                        deletiItemKorz(item.id);
                      }}
                    ></Button>
                  </li>
                );
              })}
          </ul>
          {massivKorz.length > 0 ? <ModalCardKorz /> : <></>}
        </div>
      </Modal>
    </Flex>
  );
};
export default Modall;
