import React from "react";
import { Rating } from "react-simple-star-rating";
import Card from "../UI/Card";
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  const { title, price, description, category, image, rating } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div className={classes.details}>
        <div className={classes.ref}></div>
          <img src={image} />
          <div class={classes.info}>
            <h3>Category</h3>
            <h3>{category}</h3>
            <p className={classes.description}>{description}</p>
            <Rating initialValue={rating.rate} allowFraction readonly/> <p>{rating.rate}</p>
            <p>({rating.count} customers rated)</p>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
