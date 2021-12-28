import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetailAction } from "../../../redux/actions";

import * as S from "./styles";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductDetailAction(id));
  }, []);

  if (!productDetail) return <div>404 Not Found</div>;
  return (
    <>
      <div>Tên: {productDetail.name}</div>
      <div>Giá: {productDetail.price?.toLocaleString()} ₫</div>
      <S.CustomButton>Thêm vào giỏ</S.CustomButton>
    </>
  );
};

export default ProductDetail;
