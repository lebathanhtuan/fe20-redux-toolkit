import { createReducer } from "@reduxjs/toolkit";
import { productListData } from "../../db/product";

const initialState = {
  productList: productListData,
  productDetail: {},
};

const productReducer = createReducer(initialState, {
  // GET_PRODUCT_LIST: (state, action) => {
  //   return {
  //     ...state,
  //     productList: action.payload,
  //   };
  // },
  GET_PRODUCT_DETAIL: (state, action) => {
    const newProductDetail = state.productList.find(
      (item) => item.id.toString() === action.payload
    );
    return {
      ...state,
      productDetail: newProductDetail,
    };
  },
  CREATE_PRODUCT: (state, action) => {
    return {
      ...state,
      productList: [...state.productList, action.payload],
    };
  },
  LOGOUT: (state, action) => {
    return {
      ...state,
      productList: [],
    };
  },
});

export default productReducer;
