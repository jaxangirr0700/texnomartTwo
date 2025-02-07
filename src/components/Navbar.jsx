import locImg from "../../imgs/location.png";
import useBookStore from "../store/book-store";
import Modall from "./Modal";
function Navbar() {
  const katalog = useBookStore((state) => state.katalog);
  const katalofn = useBookStore((state) => state.katalofn);
  const language = useBookStore((state) => state.language);
  const toggleLanguage = useBookStore((state) => state.toggleLanguage);



  const kotigories = [
    {
      nomi: "Aksiyalar",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
        >
          <path
            d="M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      nomi: "1+1",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
        >
          <path
            d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      nomi: "Havo sovutgichlar",
    },
    {
      nomi: "Isitgichlar",
    },
    {
      nomi: "Smartfonlar",
    },
    {
      nomi: "Muzlatgichlar",
    },
    {
      nomi: "Changyutgichlar",
    },
    {
      nomi: "Noutbuklar",
    },
    {
      nomi: "Televizorlar",
    },
    {
      nomi: "Barcha kategoriyalar",
    },
  ];
  return (
    <>
      <nav className=" bg-gray-600  w-[100vw]">
        <div className="w-[1440px] m-auto flex justify-between items-center text-white">
          <div className="flex justify-between items-center">
            <a href="" className="flex items-center mr-5">
              {" "}
              <img src={locImg} className="w-10"></img>Tashkent
            </a>
            <div className="flex gap-5">
              <a href="https://texnomart.uz/shops-map/">
                Bizning Do'konlarimiz
              </a>
              <a href="https://texnomart.uz/uz/page/b2b_sale/">
                Yuridik Shaxslar uchun
              </a>
              <a href="https://texnomart.uz/uz/page/purchase-online/">
                To'lo'v usullari
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <a href="">Aloqa Markazi:+998712099944</a>
            <button
              onClick={toggleLanguage}
              className="flex  items-center gap-2 border border-gray-400 rounded-xl px-2 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M19.7423 17.4915L20.5917 17.9414C21.1874 18.257 21.4853 18.4148 21.762 18.2331C22.0386 18.0513 22.0173 17.7661 21.9747 17.1958C21.7298 13.9197 17.6728 11.6731 14.8672 13.8841M15.2558 17.4915L14.4065 17.0416C13.8112 16.7262 13.5135 16.5685 13.2365 16.7515C12.9595 16.9345 12.9822 17.2187 13.0275 17.7872C13.2864 21.0359 17.3202 23.3133 20.0565 21.1514"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0107 22C5.95135 21.497 2 17.2229 2 12.0247C2 6.48823 6.48245 2 12.0118 2C17.308 2 21.6437 6.11759 22 11.33"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="relative cursor-pointer ">
                {language}
                <span className="absolute left-[30px] top-0 mt-1 w-32 bg-black border rounded-xl shadow-lg opacity-0 hover:opacity-100 transition-opacity flex flex-col">
                  <span className="p-2">O'Z</span>
                  <span className="p-2">RU</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div className="w-[1440px] m-auto flex justify-between items-center pt-5 pb-5">
        <div className="flex items-center gap-10 ">
          {" "}
          <a href="https://texnomart.uz/uz/" className="text-4xl font-bold ">
            Texnomart*
          </a>
          <button
            onClick={() => {
              katalofn();
            }}
            className="bg-yellow-400 px-2 py-3 rounded-xl flex items-center gap-1 font-mono font-bold cursor-pointer"
          >
            {katalog ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={30}
                height={30}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={30}
                height={30}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M4 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L20 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            Katalog
          </button>
        </div>
        <div className="w-[650px] flex items-center border border-yellow-400 px-2 py-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 border-0"
          />
        </div>

        <div className="flex gap-5">
          <Modall />
        </div>
      </div>
      <div className="w-[1440px] m-auto flex justify-between gap-2 items-center pt-5 pb-5">
        {kotigories.map((item) => {
          return (
            <a
              href=""
              key={item.nomi}
              className="flex items-center gap-2 text-gray-900 hover:text-gray-700"
            >
              {item.img}
              <span> {item.nomi.toLocaleUpperCase()}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
export default Navbar;
