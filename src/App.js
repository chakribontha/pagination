import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Product from "./Component/Product";

function App() {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(3);

  const featchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    featchProducts();
  }, []);

  const selectpageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage < products.length && selectedPage!==page) {
      setPage(selectedPage);
    }
    
  }

  return (
    <div className="App">
      {products.slice(page * 9 - 9, page * 9).map((product, id) => (
        <Product key={id} product={product} />
      ))}
      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectpageHandler(page - 1)}>👈🏻</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectpageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => selectpageHandler(page + 1)}>👉🏻</span>
        </div>
      )}
    </div>
  );
}

export default App;
