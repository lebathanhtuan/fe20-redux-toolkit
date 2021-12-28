import React, { useState } from "react";
import { Row, Table, Tag, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ModifyProductModal from "./components/ModifyProductModal";
import { ROUTERS } from "../../../constants/routers";

import * as S from "./styles";

function ProductList() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const navigate = useNavigate();

  const { productList } = useSelector((state) => state.productReducer);

  const handleEditProduct = (item) => {
    setSelectedProduct(item);
    setIsShowModal(true);
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá sản phẩm",
      dataIndex: "price",
      key: "price",
      render: (value) => `${value.toLocaleString()}₫`,
    },
    {
      title: "Mới",
      dataIndex: "isNew",
      key: "isNew",
      render: (value) => value && <Tag color="red">Mới</Tag>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => {
        return (
          <Space>
            <Button
              type="primary"
              ghost
              onClick={() => handleEditProduct(item)}
            >
              Sửa
            </Button>
            <Button danger>Xóa</Button>
          </Space>
        );
      },
    },
  ];

  const dataSource = productList.map((item) => ({
    key: item.id,
    ...item,
  }));

  return (
    <>
      <Row justify="space-between">
        <S.Title>Danh sách sản phẩm</S.Title>
        <Button
          type="primary"
          onClick={() => navigate(ROUTERS.ADMIN.CREATE_PRODUCT)}
        >
          Tạo sản phẩm mới
        </Button>
      </Row>
      <Table columns={columns} dataSource={dataSource} />
      <ModifyProductModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        selectedProduct={selectedProduct}
      />
    </>
  );
}

export default ProductList;
