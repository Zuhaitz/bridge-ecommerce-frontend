import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/product-list/ProductList";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Catalog.scss";

const Catalog = () => {
  const { products, getProducts } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setResult(products);
    setPrice("");
    setSearch("");
  }, [products]);

  useEffect(() => {
    filterSearch();
  }, [search, price]);

  const onSearchChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setSearch(value);
    } else {
      setPrice(value);
    }
  };

  const filterSearch = () => {
    setResult(
      products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      }),
    );

    if (price) {
      setResult(
        result.filter((product) => {
          return product.price === Number(price);
        }),
      );
    }
  };

  return (
    <section className="catalog">
      <div className="catalog__search">
        <input
          type="text"
          name="name"
          value={search}
          onChange={onSearchChangeHandler}
          placeholder="Search..."
          className="catalog__searchName"
          autoComplete="off"
        />

        <input
          type="number"
          name="price"
          value={price}
          onChange={onSearchChangeHandler}
          placeholder="0"
          className="catalog__searchPrice"
          autoComplete="off"
        />
      </div>

      <ProductList products={result} />
    </section>
  );
};

export default Catalog;
