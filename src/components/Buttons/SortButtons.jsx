import { useState } from "react";
import { Button } from "antd";

function CatalogButtons({ title, name, currentName, onChange, rotate }) {
  return (
    <Button
      onClick={() => {
        onChange(name);
      }}
    >
      <span>{title}</span>
      {currentName === name ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
          className={`${rotate ? "rotate-180" : ""}`}
        >
          <path
            d="M4 9L20 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 15L14 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </Button>
  );
}

function SortButtons({ currentName, setCurrentName }) {
  const [rotate, setRotate] = useState(true);

  function onChange(name) {
    setCurrentName(name);
    setRotate(rotate ? false : !false);
  }
  return (
    <div className="flex ga-2 my-2">
      <CatalogButtons
        name={"price"}
        title={"Narx bo'yicha"}
        currentName={currentName}
        rotate={rotate}
        onChange={onChange}
      ></CatalogButtons>
      <CatalogButtons
        name={"order_count"}
        title={"Reting bo'yicha"}
        currentName={currentName}
        rotate={rotate}
        onChange={onChange}
      ></CatalogButtons>
      <CatalogButtons
        name={"rating"}
        title={"Yangi kelganlar"}
        currentName={currentName}
        rotate={rotate}
        onChange={onChange}
      ></CatalogButtons>
      <CatalogButtons
        name={"new"}
        title={"Ommaviyligi bo'yicha"}
        currentName={currentName}
        rotate={rotate}
        onChange={onChange}
      ></CatalogButtons>
    </div>
  );
}

export default SortButtons;
