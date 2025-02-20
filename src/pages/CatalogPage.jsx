import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/loaderr/Loader";
import SortButtons from "../components/Buttons/SortButtons";
import useBookStore from "../store/book-store";
import { Link } from "react-router";
import FilteredData from "../components/FilteredData";

function CatalogPage() {
  const params = useParams();
  // console.log(params);
  const [products, setProd] = useState();
  const [currentPage, setСurrentPage] = useState(1);
  const [currentName, setCurrentName] = useState("price");
  const state = useBookStore();

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=${currentName}&page=${currentPage}`
      )
      .then((res) => {
        // console.log(res.data.data.pagination);
        setProd(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(`${page} Xato ${err}`);
      });
  }, [params.slug, currentPage, currentName]);

  if (!products) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div>
        <div className="flex gap-5 justify-between ">
          <FilteredData filter={products.filter}></FilteredData>

          <div>
            <div>
              <div className="flex gap-1">
                {" "}
                {Array(products.pagination.total_page)
                  .fill(1)
                  .map((e, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={i}
                        type={page === currentPage ? "primary" : "default"}
                        onClick={() => {
                          setСurrentPage(page);
                        }}
                      >
                        {page}
                      </Button>
                    );
                  })}
              </div>

              <SortButtons
                currentName={currentName}
                setCurrentName={setCurrentName}
              ></SortButtons>
            </div>
            <ul className="grid grid-cols-5 py-5 w-full">
              {products.products.map((item, index) => {
                // console.log(item);

                return (
                  <li
                    key={index}
                    className="flex flex-col gap-2 items-start  border-2 rounded-xl border-slate-50 max-w-[200px]"
                  >
                    <Link to={`/catalog/${item.id}`} className="w-40 h-40 ">
                      <img src={item.image} alt={`${item.name}`} />
                    </Link>
                    <span>{item.name}</span>
                    <p className="bg-slate-100 rounded-xl px-2 py-1">
                      {(item.sale_price * 1.2) / 24} So'mdan / 24 oy{" "}
                    </p>
                    <p>{item.sale_price} So'm</p>
                    <Button
                      onClick={() => {
                        state.addSavatcha(item);
                        console.log(state.savatcha);
                      }}
                    >
                      Savagtcha
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CatalogPage;
