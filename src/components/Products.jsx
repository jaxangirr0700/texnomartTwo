import useBookStore from "../store/book-store";

function Products() {
  const {
    incrementLike,
    korz,
    incrementKorz,
    massivKorz,
    setMassive,
    massivKorzLike,
    setMassiveLike,
  } = useBookStore();
  const products = [
    {
      title: "Televizor Hisense 58E4K Smart",
      price: 7499000,
      img: "https://avatars.mds.yandex.net/i?id=90cd3d7999c0eeb1c9a414e914f54c76165a59d0-10752752-images-thumbs&n=13",

      id: 1,
    },
    {
      title: "Havo namlagich Xiaomi Humidifier 2 Litr EU",
      price: 524000,
      img: "https://avatars.mds.yandex.net/i?id=af92155b2d950a1875d58886406cdc5dbfab282c-9583697-images-thumbs&n=13",
      id: 2,
    },

    {
      title: "Televizor LG 65UR78006LB Smart",
      price: 10900000,
      img: "https://avatars.mds.yandex.net/i?id=3e2c52ec53a88773994561617657dc532288a217-5314793-images-thumbs&n=13",
      id: 3,
    },
    {
      title: "Muzlatgich Haier C2F536CWRG",
      price: 9299000,
      img: "https://avatars.mds.yandex.net/i?id=68ada5771ce3664410437e650c8016c782c0da27-12433518-images-thumbs&n=13",
      id: 4,
    },
    {
      title: "Mikroto'lqinli pech Hanasa AM720THMWH",
      price: 740000,
      img: "https://avatars.mds.yandex.net/i?id=316f5748a16d33581f77ded3d93cb853c0eaef9d-8438571-images-thumbs&n=13",
      id: 5,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-5 gap-5 ">
        {products.map((item, index) => {
          return (
            <ul
              key={index}
              className="flex flex-col gap-3 px-4 pt-2 pb-10 border border-gray-200 rounded-2xl text-xl font-bold hover:scale-105 active:scale-100 transition-all 0.5s relative"
            >
              <li>
                <img className="h-60" src={item.img} alt="Photo" />
              </li>
              <li> {item.title}</li>
              <li>
                <span className="bg-slate-200 rounded-2xl px-2 py-1">
                  {" "}
                  {Math.floor((item.price * 1.7) / 24)} So'm
                </span>{" "}
              </li>

              <li className="flex items-center justify-between pr-4">
                {item.price} So'm{" "}
                <svg
                  onClick={() => {
                    incrementKorz();
                    setMassive(item.id);
                    console.log(massivKorz);
                  }}
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
              </li>
              <li className=" absolute top-5 right-5 flex flex-col gap-5">
                <svg
                  onClick={() => {
                    incrementLike();
                    setMassiveLike(item.id);
                    console.log(massivKorzLike);
                  }}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M21 17L18 10L15 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 17L6 10L3 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 10H5.0482C6.31166 10 7.5375 9.29466 8.5241 8C10.5562 5.33333 13.4438 5.33333 15.4759 8C16.4625 9.29466 17.6883 10 18.9518 10H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 22C19.5603 22 20.9182 20.9483 21.6181 19.3974C21.9707 18.6161 22.147 18.2255 21.8476 17.6127C21.5483 17 21.0525 17 20.061 17H15.939C14.9475 17 14.4517 17 14.1524 17.6127C13.853 18.2255 14.0293 18.6161 14.3819 19.3974C15.0818 20.9483 16.4397 22 18 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 22C7.56035 22 8.9182 20.9483 9.61809 19.3974C9.97068 18.6161 10.147 18.2255 9.84763 17.6127C9.54829 17 9.05251 17 8.06097 17H3.93903C2.94749 17 2.45171 17 2.15237 17.6127C1.85302 18.2255 2.02932 18.6161 2.38191 19.3974C3.0818 20.9483 4.43965 22 6 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </li>
            </ul>
          );
        })}
        <ul>
          <p>Savatchadagi maxsulotlar {massivKorz.length}</p>
          {massivKorz.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
        <ul>
          <p>Sevimlidagi maxsulotlar {massivKorzLike.length}</p>
          {massivKorzLike.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
export default Products;
