import React from "react";
import Card from "../UI/Card";
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  const { title, price } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
      </Card>
    </li>
  );
};

export default ProductItem;
