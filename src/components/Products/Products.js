import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { fetchProducts } from "../../store/actions";

const Products = () => {
  const loading = useSelector((state) => state.ui.loading);
  const items = useSelector((state) => state.product.filteredItems);
  const error = useSelector((state) => state.ui.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.catchError(null));
    dispatch(fetchProducts());
  }, [fetchProducts]);

  let content = null;
  if (items.length === 0 && error === null && !loading) {
    content = <h2>No products found!</h2>;
  } else if (error !== null) {
    content = <p className={classes.errortext}>{error}</p>;
  } else if(loading) {
    content = <h2>Loading...</h2>;
  } else {
    content = items.map((product) => (
      <ul key={product.id}>
        <ProductItem
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      </ul>
    ));
  }

  return <section className={classes.products}>{content}</section>;
};

export default Products;
