import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
function CatalogPage() {
  const params = useParams();
  // console.log(params);
  const [prod, setProd] = useState();
  const [currentPage, setСurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=-order_count&page=${currentPage}`
      )
      .then((res) => {
        console.log(res.data.data.pagination);
        setProd(res.data.data);
      })
      .catch((err) => {
        console.log(`${page} Xato`);
      });
  }, [params.slug, currentPage]);

  console.log(prod);

  if (!prod) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div className="text-2xl font-bold font-mono"> Catalog Page</div>
      <div>
        <div className="flex gap-1">
          {" "}
          {Array(prod.pagination.total_page)
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

        <ul className="grid grid-cols-5 py-5">
          {prod.products.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-col gap-2 items-start justify-start border-2 rounded-xl border-slate-50 max-w-[200px]"
              >
                <img className="w-30" src={item.image} alt="" />
                <span>{item.name}</span>
                <p className="bg-slate-100 rounded-xl px-2 py-1">
                  {(item.sale_price * 1.2) / 24} So'mdan / 24 oy{" "}
                </p>
                <p>{item.sale_price} So'm</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default CatalogPage;
