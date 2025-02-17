import "./App.css";
import Navbar from "./components/Navbar";
import useBookStore from "./store/book-store";
import { Route, Routes } from "react-router";
import ProductCard from "./pages/ProductCard";
import Home from "./components/Home";
import CatalogPage from "./pages/CatalogPage";
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
          <Route path="/catalog/:id" element={<ProductCard />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
