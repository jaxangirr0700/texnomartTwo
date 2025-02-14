import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function TopCatigories() {
  const [catigories, setCatigories] = useState([]);
  useEffect(() => {
    axios
      .get(
        `
https://gw.texnomart.uz/api/web/v1/header/top-categories`
      )
      .then((res) => {
        // console.log(res.data.data.data);
        setCatigories(res.data.data.data);
      });
  }, []);
  return (
    <div className="flex justify-between max-w-[1440px] m-auto">
      <ul className="flex w-full items-center justify-between mb-5">
        {catigories.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              <Link to={`/katalog/${item.slug}`}>
                <span className="text-xl bg-slate-50" key={item.title}>
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TopCatigories;
