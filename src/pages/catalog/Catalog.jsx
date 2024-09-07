import { useContext, useEffect } from "react";
import ProductList from "../../components/product-list/ProductList";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Catalog.scss";

const Catalog = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="list">
      {/* Browser */}
      <ProductList products={products} />
    </div>
  );
};

export default Catalog;
