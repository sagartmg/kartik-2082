import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [limit, setLimit] = useState(5);

  const fetchData = () => {
    axios.get(`https://dummyjson.com/products?limit=${limit}`).then((res) => {
      setProducts(res.data.products);
    });
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  return (
    <>
      <p>limit value {limit}</p>
      <select
        className="border px-2 py-1"
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      >
        <option value="5">five</option>
        <option value="10">Ten</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      {}
      <ul>
        {products.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Products;
