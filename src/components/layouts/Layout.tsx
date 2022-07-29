import { ReactElement, useEffect } from "react";
import {
  SmileOutlined,
  MessageOutlined,
  UserOutlined,
  PlusCircleOutlined,
  HistoryOutlined,
  TableOutlined,
  FundProjectionScreenOutlined,
  TransactionOutlined,
} from "@ant-design/icons";

import { Avatar, Button, Divider } from "antd";
import { Layout, Menu } from "antd";
import { Route, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { history } from "../..";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../setup/store";
import { actionPartnerLogout, actionPartnerProfile } from "../../modules/partner/action";
const { Header, Content, Sider } = Layout;

export default function MainLayout({
  Component,
  ...children
}: any): ReactElement {
  const {pathname} =useLocation()
  const disptach = useDispatch<AppDispatch>();

  useEffect(() => {
    disptach(actionPartnerProfile());
  }, [pathname]);
  return (
    <Route
      {...children}
      render={(...propsRouter) => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider className="bg-sider ">
              <h1 className=" text-left mt-6 ml-4 text-xl font-medium text-white ">
                Banvenha.vn
              </h1>

              <Divider className="my-2" />
              <Menu mode="inline" className="bg-sider border-0">
              <Menu.Item icon={<FundProjectionScreenOutlined />}>
                  <NavLink to={"/"}>Tổng quan </NavLink>
                </Menu.Item>
              
                
              
                <Menu.Item icon={<TableOutlined />}>
                  <NavLink to={"/product"}>Bản vẽ </NavLink>
                </Menu.Item>
                
                <Menu.Item icon={<TableOutlined />}>
                  <NavLink to={"/news"}>Bài viết </NavLink>
                </Menu.Item>
                <Menu.Item icon={<HistoryOutlined />}>
                  <NavLink to={"/transaction"}>Giao dịch </NavLink>
                </Menu.Item>
                <Menu.Item icon={<TransactionOutlined />}>
                  <NavLink to={"/payment"}>Thanh toán </NavLink>
                </Menu.Item>
                <Menu.Item icon={<UserOutlined />}>
                  <NavLink to={"/"}>Thông tin </NavLink>
                </Menu.Item>
               
                <Menu.Item icon={<SmileOutlined />}>Hỗ trợ</Menu.Item>
                <Button size="large" className="btn-logout w-4/5 m-4" type="primary" danger onClick={()=>{disptach(actionPartnerLogout())}}>Logout</Button>
              </Menu>
            </Sider>
            <Layout>
              <Content className="pt-8 px-14">
                <Component {...propsRouter} />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    ></Route>
  );
}
