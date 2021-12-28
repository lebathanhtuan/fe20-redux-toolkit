import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/reducers/user.reducer";
import productReducer from "./redux/reducers/product.reducer";

export default configureStore({
  reducer: {
    productReducer: productReducer,
    userReducer: userReducer,
  },
});
