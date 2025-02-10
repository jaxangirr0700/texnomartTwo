import Alert from "antd/es/alert/Alert";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import useBookStore from "./store/book-store";
function App() {
  const {} = useBookStore();
  return (
    <>
      <Navbar />
      <div className="container m-auto max-w-[1440px] ">
        <Products />
      </div>
    </>
  );
}
export default App;
