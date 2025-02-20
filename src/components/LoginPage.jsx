import { Button, Modal, message } from "antd";
import { useForm } from "react-hook-form";
// import UserIcon from "../../../assets/User";
import React, { useState } from "react";
import axios from "axios";

function LoginModal() {
  const [open, setOpen] = useState(false);
  const [otish, setOtish] = useState("back");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      setLoading(true);
      //   const response = await axios.post(
      //     "https://gateway.texnomart.uz/api/common/v1/user/register",
      //     data
      //   );

      message.success("Kod yuborildi!!!");
      setOtish("kod");
    } catch (error) {
      console.error("Xatolik:", error);
      message.error("Qayta urinib ko‘ring!!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <p type="text" onClick={() => setOpen(true)}>
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
        </p>
      </div>

      <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
        {otish === "back" ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-center font-bold">Login</h2>
              <div className="flex flex-col gap-2">
                <label> Telefon</label>
                <input
                  className="p-2 border rounded-lg border-yellow-400"
                  {...register("numberPhone", { required: true })}
                  type="tel"
                  placeholder="+998 -- --- -- --"
                />
                {errors.numberPhone && (
                  <p className="text-red-600">Telefon raqam kiriting!!!</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="p-2 border rounded-lg border-yellow-400"
                  {...register("name", { required: true })}
                  placeholder="Ismingizni Kiriting"
                />
                {errors.name && (
                  <p className="text-red-600">Ismingizni Kiriting!!!</p>
                )}
              </div>
              <Button
                htmlType="submit"
                size="large"
                loading={loading}
                style={{
                  backgroundColor: "orange",
                  fontSize: 22,
                  color: "white",
                  marginTop: 10,
                }}
              >
                Kodni Olish
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              onClick={() => {
                setOtish("back");
              }}
            >
              Back
            </Button>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-center font-bold">Password</h2>
              <div className="flex flex-col gap-2">
                <label>Parol</label>
                <input
                  className="p-2 border rounded-lg border-yellow-400"
                  {...register("parol", { required: true })}
                  type="password"
                  placeholder="Parol Kiriting"
                />
                {errors.numberPhone && (
                  <p className="text-red-500">Parol kiriting!!!</p>
                )}
              </div>

              <Button
                htmlType="submit"
                size="large"
                loading={loading}
                onCancel={() => setOpen(false)}
                style={{
                  backgroundColor: "orange",
                  fontSize: 22,
                  color: "white",
                  marginTop: 10,
                }}
              >
                Kodni Olish
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}

export default LoginModal;
