import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';


import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../setup/store';
import { actionMessageGets } from '../modules/message/action';
import MessageModal from '../components/common/MessageModal';


interface DataType {
  key: string;
  title: string;
  time: number;
  content:string

}

const columns: ColumnsType<DataType> = [
  {
    title: '#',
    render: (_,__,index) => <a>{index+1}</a>,
  },
  {
    title: 'Tin nhắn',
    dataIndex: 'title',
    key: 'title',
    render: (text,record) => <MessageModal title={text} content={record.content}/>,
  },
 
  {
    title: 'Thời gian',
    key: 'time',
    dataIndex: 'time',
    
  },
  
];



const Message: FC = () => {
  const dispatch=useDispatch<AppDispatch>()
  const {messages}=useSelector((state:RootState)=>state.messageReducer)
  const {partner}=useSelector((state:RootState)=>state.partnerReducer)
  useEffect(()=>{
    dispatch(actionMessageGets({limit:12,offset:0,partnerID:partner?.id}))
  },[])
  
  return <Table columns={columns}  className="w-1/2 m-auto" dataSource={messages.map(item=>{
    return {
      key:item.id,
      title:item.title,
      time:item.updatedAt,
      content:item.content
    }
  })} />
};

export default Message;