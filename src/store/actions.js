import { uiActions } from "./ui-slice";
import { productActions } from "./product-slice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      return data;
    };
    dispatch(uiActions.resetLoading());
    try {
      const data = await fetchData();
      const loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          title: data[key].title,
          description: data[key].description,
          category: data[key].category,
          image: data[key].image,
          rating: data[key].rating
        });
      }
      dispatch(productActions.receiveProducts(loadedProducts));
    } catch (error) {
      dispatch(uiActions.catchError(error.message));
    }
    dispatch(uiActions.resetLoading());
  };
};
