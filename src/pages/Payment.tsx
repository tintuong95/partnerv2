import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import {UnorderedListOutlined } from "@ant-design/icons"

import React, { FC } from 'react';

interface DataType {
  key: string;
  title: string;
  price: number;
  fullname: string;
  state: string;
  time:string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '#',
    render: (_,__,index) => <a>{index+1}</a>,
  },
  {
    title: 'Tên',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Giá bán',
    dataIndex: 'price',
    key: 'price',
    render: text => <a>{text.toLocaleString()}đ</a>,
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'fullname',
    key: 'fullname',
    render: text => <a>{text}đ</a>,
  },
  {
    title: 'Trạng thái',
    key: 'state',
    dataIndex: 'state',
    
  },
  
];

const data: DataType[] = [
  {
    key: '1',
    title: 'John Brown',
    price: 3000000,
    fullname: "Nguyền Hồng Anh",
    state: "Đang chờ",
    time:"10.10.2020"
  },
  {
    key: '2',
    title: 'John Brown',
    price: 3000000,
    fullname: "Nguyền Hồng Anh",
    state: "Đang chờ",
    time:"10.10.2020"
  },
  {
    key: '3',
    title: 'John Brown',
    price: 3000000,
    fullname: "Nguyền Hồng Anh",
    state: "Đang chờ",
    time:"10.10.2020"
  },
  {
    key: '4',
    title: 'John Brown',
    price: 3000000,
    fullname: "Nguyền Hồng Anh",
    state: "Đang chờ",
    time:"10.10.2020"
  },
  {
    key: '5',
    title: 'John Brown',
    price: 3000000,
    fullname: "Nguyền Hồng Anh",
    state: "Đang chờ",
    time:"10.10.2020"
  },
];

const Payment: FC = () => <Table className='w-1/2 m-auto' columns={columns} dataSource={data} />;

export default Payment;