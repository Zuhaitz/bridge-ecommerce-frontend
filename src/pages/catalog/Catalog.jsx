import { useContext, useEffect } from "react";
import ProductList from "../../components/product-list/ProductList";
import { ProductContext } from "../../context/ProductContext/ProductState";

const Catalog = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* Browser */}
      <ProductList products={products} />
    </div>
  );
};

export default Catalog;
