import {
  Button,
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Space,
  Table,
  Tag,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UnorderedListOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../setup/store";
import { actionNewsGets, actionNewsRemove } from "../modules/news/action";
import { time } from "console";
interface DataType {
  key: string;
  title: string;
  updatedAt: string;
  status:string
}

const News: React.FC = () => {
  const { newsList } = useSelector((state: RootState) => state.newsReducer);
  const { partner } = useSelector((state: RootState) => state.partnerReducer);
  const dispatch = useDispatch<AppDispatch>();

 //search with name
 const [keyword, SetKeyword] = useState<string | null>(null);

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      render: (text, record, index) => <a>{++index}</a>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        
        if (text == 0) {
          return (
            <Tag
              className="text-sky-600 hover:text-sky-600 text-sm"
              color="processing"
            >
              Đang duyệt
            </Tag>
          );
        } else if (text == 1) {
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
      dataIndex: "updatedAt",
      key: "updatedAt",
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
                <Menu.Item>
                  <NavLink
                    to={{
                      pathname: "/update-news",
                      state: text.key,
                    }}
                  >
                   Sửa 
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    dispatch(
                      actionNewsRemove({
                        id: text.key,
                        refesh: {
                          limit: 1000,
                          offset: 0,
                          partnerId: partner?.id,
                        },
                      })
                    );
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
      actionNewsGets({
        limit: 1000,
        offset: 0,
        partnerId: partner?.id,
      })
    );
  }, []);

  return (
    <div className="w-2/3 m-auto">
      <Row justify="space-between" className="mb-6">
        <Col>
          <NavLink to="/create-news">
            <button
              className="ml-1  bg-green-500 hover:bg-green-600 text-white  py-2 px-4"
              
            >
              Tạo bài viết
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
        columns={columns}
        dataSource={newsList.map((item: any) => {
          return {
            key: item.id,
            title: item.title,
status:item.status,
            updatedAt: new Date(item.updatedAt).toLocaleDateString("vn-VN"),
          };
        }).filter((item) => {
          if (keyword === null) {
            return true;
          } else {
            return (item.title as string)
              .toLowerCase()
              .includes(keyword.toLowerCase());
          }
        })}
      />
    </div>
  );
};

export default News;
