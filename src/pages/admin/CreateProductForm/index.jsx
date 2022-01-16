import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, InputNumber, Button, Card, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTERS } from "../../../constants/routers";

import { createProductAction } from "../../../redux/actions";

const CreateProductForm = ({ nameValue, setNameValue, userInfo }) => {
  const [createProductForm] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateProduct = (values) => {
    dispatch(createProductAction({ id: uuidv4(), ...values }));
    navigate(ROUTERS.ADMIN.PRODUCTS);
  };

  return (
    <div>
      <h2>Form tạo sản phẩm</h2>
      <Card style={{ width: 300, margin: "0 auto" }}>
        <Form
          form={createProductForm}
          name="createProductForm"
          layout="vertical"
          initialValues={{
            name: "",
            price: 0,
            isNew: false,
          }}
          onFinish={(values) => handleCreateProduct(values)}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            validateFirst
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập tên sản phẩm!",
              },
              {
                min: 4,
                message: "Tên sản phẩm phải có ít nhất 4 ký tự!",
              },
              {
                max: 50,
                message: "Tên sản phẩm không được vượt quá 50 ký tự!",
              },
            ]}
          >
            <Input placeholder="Tên sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập giá sản phẩm!",
              },
              {
                type: "number",
                min: 10000,
                message: "Giá sản phẩm phải lớn hơn 10.000₫!",
              },
            ]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item name="isNew" valuePropName="checked">
            <Checkbox>Is New</Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateProductForm;
