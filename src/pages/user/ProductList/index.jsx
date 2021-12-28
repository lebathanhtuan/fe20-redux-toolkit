import React from "react";
import { useSelector } from "react-redux";

import Item from "./components/Item";
import * as S from "./styles";

function ProductList() {
  const { productList } = useSelector((state) => state.productReducer);

  const renderProductList = () => {
    return productList.map((item, index) => {
      return <Item key={index} item={item} />;
    });
  };

  return (
    <>
      <S.Title>Danh sách sản phẩm</S.Title>
      <S.List>{renderProductList()}</S.List>
    </>
  );
}

export default ProductList;
