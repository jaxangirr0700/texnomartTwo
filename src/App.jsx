import "./App.css";
import Navbar from "./components/Navbar";
import useBookStore from "./store/book-store";
import { Route, Routes } from "react-router";
import ProductCard from "./components/ProductCard";
import CatalogPage from "./components/CatalogPage";
import Home from "./components/Home";
function App() {
  const {} = useBookStore();
  return (
    <>
      <Navbar />
      <div className="container m-auto max-w-[1440px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/katalog/:slug" element={<CatalogPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
