import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Main from "./pages/Main";
import MainLayout from "./components/layouts/Layout";
import UpdateProduct from "./pages/UpdateProduct";
import CreateProduct from "./pages/CreateProduct";
import Payment from "./pages/Payment";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";
import Message from "./pages/Message";
import UpdateNews from "./pages/UpdateNews";
import CreateNews from "./pages/CreateNews";
import News from "./pages/News";

function AppRouter(): ReactElement {

  return (
    <Switch>
       <MainLayout exact path={"/message"} Component={Message} />
      <MainLayout exact path={"/payment"} Component={Payment} />
      <MainLayout exact path={"/transaction"} Component={Transaction} />
      <MainLayout exact path={"/product"} Component={Product} />
      <MainLayout exact path={"/news"} Component={News} />
      <MainLayout exact path={"/create-product"} Component={CreateProduct} />
      <MainLayout exact path={"/update-product"} Component={UpdateProduct} />
      <MainLayout exact path={"/create-news"} Component={CreateNews} />
      <MainLayout exact path={"/update-news"} Component={UpdateNews} />
      <Route exact path={"/login"} component={Login} />
      <MainLayout path={"/"} Component={Main} />
    </Switch>
  );
}

export default AppRouter;
