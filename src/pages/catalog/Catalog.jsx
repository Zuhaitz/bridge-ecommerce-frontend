import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/product-list/ProductList";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Catalog.scss";

const Catalog = () => {
  const { products, getProducts } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setResult(products);
    setSearch("");
  }, [products]);

  useEffect(() => {
    if (search === "") return setResult(products);

    setResult(
      products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search]);

  const onSearchChangeHandler = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <section className="catalog">
      <div className="catalog__search">
        <input
          type="text"
          value={search}
          onChange={onSearchChangeHandler}
          placeholder="Search..."
          className="catalog__searchName"
          autoComplete="off"
        />
      </div>

      <ProductList products={result} />
    </section>
  );
};

export default Catalog;
