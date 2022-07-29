import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { UnorderedListOutlined } from "@ant-design/icons";

import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../setup/store";
import { actionTransactionGets } from "../modules/transaction/actions";

interface DataType {
  key: string;
  time: string;
  name: string;
  money: number;
  state: string;
  order: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    render: (_, __, index) => <a>{index + 1}</a>,
  },
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên bản vẽ",
    dataIndex: "order",
    key: "order",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá bán",
    dataIndex: "money",
    key: "money",
    render: (text) => <a>{text.toLocaleString()}</a>,
  },
  {
    title: "Tên khách hàng",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Trạng thái",
    key: "state",
    render: (text) => {
      if (text.state == 1) {
        return (
          <Tag
            className="text-lime-500  hover:text-lime-600 text-sm"
            color="success"
          >
            Thành công
          </Tag>
        );
      }else if(text.state == 0){
        return  <Tag
        className="text-sky-600 hover:text-sky-600 text-sm"
        color="processing"
      >
        Đang chờ
      </Tag>
      }else if(text.state == -1){
        return  <Tag
        className="text-red-600 hover:text-red-600 text-sm"
        color="error"
      >
        Thất bại
      </Tag>
      }
    },
  },
];

const Transaction: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { partner } = useSelector((state: RootState) => state.partnerReducer);
  const { transactions } = useSelector(
    (state: RootState) => state.transactionReducer
  );
  useEffect(() => {
    dispatch(
      actionTransactionGets({ limit: 10, offset: 0, partnerID: partner?.id })
    );
  }, []);

  return (
    <Table
      className="w-4/5 m-auto"
      columns={columns}
      dataSource={transactions.map((item) => {
        return {
          key: item.id,
          time:
            new Date(item.updatedAt).toLocaleTimeString("vn-VN") +
            " - " +
            new Date(item.updatedAt).toLocaleDateString("vn-VN"),
          name: item.Customer.fullname,
          money: item.Product.price,
          order: item.Product.title,
          state: item.state,
        };
      })}
    />
  );
};

export default Transaction;
