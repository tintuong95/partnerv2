import { Button, Col, Dropdown, Input, Menu, Row, Table, Tag } from "antd";
import type { ColumnsType } from "antd/lib/table";
import {
  UnorderedListOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../setup/store";
import {
  actionProductDelete,
  actionProductGets,
  actionProductState,
} from "../modules/product/action";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  title: string;
  price: number;
  buy: string;
  size: string;
  state: string;
  time: string;
}

const Product: FC = () => {
  //search with name
  const [keyword, SetKeyword] = useState<string | null>(null);

  const { partner } = useSelector((state: RootState) => state.partnerReducer);
  const { products } = useSelector((state: RootState) => state.productReducer);
  const dispatch = useDispatch<AppDispatch>();
  //handle delete
  const handleDelete = (id: string): void => {
    dispatch(
      actionProductDelete({
        id: id,
        refesh: {
          limit: "1000",
          offset: "0",
          partnerID: partner?.id,
        },
      })
    );
  };
  //handle change state product
  const handleState = (id: string): void => {
    dispatch(actionProductState(id));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      render: (_, __, index) => <a>{index + 1}</a>,
    },
    {
      title: "Tên",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      key: "price",
      render: (text) => <a>{text.toLocaleString()}</a>,
    },
    {
      title: "Doanh số",
      dataIndex: "buy",
      key: "buy",
      render: (text) => <a>{Number(text).toLocaleString()}</a>,
    },
    {
      title: "Kích thước",
      key: "size",
      dataIndex: "size",
    },
    {
      title: "Diện tích XD",
      key: "area",
      render: () => <a>100 m2</a>,
    },
    {
      title: "Trạng thái",
      key: "state",
      render: (text) => {
        if (text.state == 0) {
          return (
            <Tag
              className="text-sky-600 hover:text-sky-600 text-sm"
              color="processing"
            >
              Đang duyệt
            </Tag>
          );
        } else if (text.state == 1) {
          return (
            <Tag
              className="text-lime-500  hover:text-lime-600 text-sm"
              color="success"
            >
              Thành công
            </Tag>
          );
        }
      },
    },
    {
      title: "Thời gian",
      key: "time",
      render: (text) => {
        return <a href="">{new Date(text.time).toLocaleDateString("vn-VN")}</a>;
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text) => (
        <a>
          <Dropdown
            className="text-slate-800"
            overlay={
              <Menu className="text-center " style={{ width: 120 }}>
                <Menu.Item
                  onClick={() => {
                    handleState(text.key);
                  }}
                >
                  Trạng thái
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to={{
                      pathname: "/update-product",
                      state: text.key,
                    }}
                  >
                    Sửa
                  </Link>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    handleDelete(text.key);
                  }}
                  danger
                >
                  Xóa
                </Menu.Item>
              </Menu>
            }
            placement="bottom"
          >
            <UnorderedListOutlined />
          </Dropdown>
        </a>
      ),
    },
  ];

  useEffect(() => {
    dispatch(
      actionProductGets({
        limit: "1000",
        offset: "0",
        partnerID: partner?.id,
      })
    );
  }, [partner, dispatch]);

  return (
    <>
      <Row justify="space-between">
        <Col>
          <NavLink to="/create-product">
            <button className="ml-1 bg-green-500 hover:bg-green-600 text-white  py-2 px-4">
              Tạo bản vẽ
            </button>
          </NavLink>
        </Col>
        <Col>
          <input
            className="bg-white  py-2 px-4"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              SetKeyword(e.target.value);
            }}
            placeholder="Nhập tên cần tìm"
            style={{ width: 200 }}
          />
          
        </Col>
      </Row>

      <Table
        className="mt-5"
        columns={columns}
        dataSource={products
          .map((item) => ({
            key: item.id,
            title: item.title,
            price: item.price,
            buy: `${Number(item.buy) * Number(item.price)}`,
            state: item.state,
            size: `${item.long} x ${item.width} m`,
            time: item.updatedAt,
          }))
          .filter((item) => {
            if (keyword === null) {
              return true;
            } else {
              return (item.title as string)
                .toLowerCase()
                .includes(keyword.toLowerCase());
            }
          })}
      />
    </>
  );
};

export default Product;
