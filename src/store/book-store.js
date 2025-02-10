import { create } from "zustand";

const bookStore = (set) => ({
  products: [
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
  ],

  productId: null,

  search: "",

  cash: false,
  setCash: () => set((state) => ({ cash: true })),
  setCashClose: () => set((state) => ({ cash: false })),

  payment: true,
  katalog: false,
  katalofn: () => set((state) => ({ katalog: !state.katalog })),
  language: "O'Z",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "O'Z" ? "RU" : "O'Z",
    })),
  like: 0,
  incrementLike: () => set((state) => ({ like: state.like + 1 })),
  decrementLike: () => set((state) => ({ like: state.like - 1 })),
  korz: 0,
  incrementKorz: () => set((state) => ({ korz: state.korz + 1 })),
  decrementKorz: () => set((state) => ({ korz: state.korz - 1 })),
  massivKorz: [],
  setMassiveKorz: (id) =>
    set((state) => {
      const product = state.products.find((item) => item.id === id);
      if (product) {
        const newArr = state.massivKorz.find((item) => item.id === id);
        if (newArr) {
          return {
            massivKorz: state.massivKorz.map((item) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            ),
          };
        } else {
          return {
            massivKorz: [...state.massivKorz, { ...product, count: 1 }],
          };
        }
      }
      return state;
    }),
  massivKorzLike: [],
  setMassiveLike: (id) =>
    set((state) => {
      const product = state.products.find((item) => item.id === id);
      if (product) {
        const newArr = state.massivKorzLike.find((item) => item.id === id);
        if (newArr) {
          return {
            massivKorzLike: state.massivKorzLike.map((item) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            ),
          };
        } else {
          return {
            massivKorzLike: [...state.massivKorzLike, { ...product, count: 1 }],
          };
        }
      }
      return state;
    }),
  coutPlusLike: (id) =>
    set((state) => {
      return {
        massivKorzLike: state.massivKorzLike.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        ),
      };
    }),

  coutMinusLike: (id) =>
    set((state) => {
      return {
        massivKorzLike: state.massivKorzLike.map((item) =>
          item.id === id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    }),
  coutPlusKorz: (id) =>
    set((state) => {
      return {
        massivKorz: state.massivKorz.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        ),
      };
    }),

  coutMinusKorz: (id) =>
    set((state) => {
      return {
        massivKorz: state.massivKorz.map((item) =>
          item.id === id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    }),
  deletiItemLike: (id) =>
    set((state) => {
      return {
        massivKorzLike: state.massivKorzLike.filter((item) => item.id !== id),
      };
    }),
  deletiItemKorz: (id) =>
    set((state) => {
      return {
        massivKorz: state.massivKorz.filter((item) => item.id !== id),
      };
    }),
});

const useBookStore = create(bookStore);

export default useBookStore;
