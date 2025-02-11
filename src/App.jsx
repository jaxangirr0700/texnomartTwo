import Alert from "antd/es/alert/Alert";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import useBookStore from "./store/book-store";
import { Route, Routes } from "react-router";
import ProductCard from "./components/ProductCard";
function App() {
  const {} = useBookStore();
  return (
    <>
      <Navbar />
      <div className="container m-auto max-w-[1440px]">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
