import { Button } from "antd";
import React, { useState } from "react";

function CatalogButtons({ children }) {
  const [rotate, setRotate] = useState(true);

  return (
    <Button
      onClick={() => {
        setRotate(rotate ? false : !false);
      }}
    >
      Narx bo'yicha{" "}
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
    </Button>
  );
}

export default CatalogButtons;
