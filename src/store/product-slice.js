import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filteredItems: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchProduct(state, actions) {
      if (actions.payload.title !== "") {
        state.filteredItems = state.items.filter((item) =>
          item.title.toLowerCase().includes(actions.payload.title.toLowerCase())
        );
      } else {
        state.filteredItems = state.items;
      }
      const min = actions.payload.min === "" ? 0 : actions.payload.min;
      const max = actions.payload.max === "" ? 1000 : actions.payload.max;
      state.filteredItems = state.filteredItems.filter(
        (item) => item.price >= parseInt(min) && item.price <= parseInt(max)
      );
    },
    receiveProducts(state, action) {
      const newProducts = action.payload;
      newProducts.map((item) => {
        state.items.push({
          id: item.id,
          price: item.price,
          title: item.title,
          description: item.description,
          category: item.category,
          image: item.image,
          rating: item.rating
        });
      });
      state.filteredItems = state.items;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
