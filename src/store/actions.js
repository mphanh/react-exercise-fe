import { uiActions } from "./ui-slice";
import { productActions } from "./product-slice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
    //   let headers = new Headers();

    //   headers.append("Content-Type", "application/json");
    //   headers.append("Accept", "application/json");
    //   headers.append("Origin", "http://localhost:3000");
      const response = await fetch("https://fakestoreapi.com/products");
        // headers,
        // method: "GET",
        // mode: "cors",
    //   });
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
        });
      }
      dispatch(productActions.receiveProducts(loadedProducts));
    } catch (error) {
      dispatch(uiActions.catchError(error.message));
    }
    dispatch(uiActions.resetLoading());
  };
};
