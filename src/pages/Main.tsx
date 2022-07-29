import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../setup/store";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jun", "Jul", "Aug", "Jun", "Jul", "Aug", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Dataset 1",
      data: [5, 6, 7, 5, 6, 7, 1, 3, 5],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [3, 2, 1, 4, 5, 6, 2, 3, 4],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
type Props = {};

export default function Main({}: Props) {
 

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-md text-center p-5">
        <div>
            <img
              className="m-auto w-4/12"
              src={require("../assets/img/banknode1.png")}
              alt=""
            />
            <h1>Tổng lợi nhuận</h1>
            <h1  className="font-bold text-xl text-slate-600" >1.000.000 đ</h1>
          </div>
        </div>
        <div className="bg-white  rounded-md  text-center p-5 ">
          <div>
            <img
              className="m-auto w-4/12"
              src={require("../assets/img/banknode2.png")}
              alt=""
            />
            <h1>Tổng lợi nhuận</h1>
            <h1  className="font-bold text-xl text-slate-600">1.000.000 đ</h1>
          </div>
        </div>
        <div className="bg-white rounded-md text-center p-5">
        <div>
            <img
              className="m-auto w-4/12"
              src={require("../assets/img/banknode3.png")}
              alt=""
            />
            <h1>Tổng lợi nhuận</h1>
            <h1  className="font-bold text-xl text-slate-600">1.000.000 đ</h1>
          </div>
        </div>
        <div className="bg-white rounded-md text-center p-5">
        <div>
            <img
              className="m-auto w-4/12"
              src={require("../assets/img/banknode4.png")}
              alt=""
            />
            <h1>Tổng lợi nhuận</h1>
            <h1  className="font-bold text-xl text-slate-600">1.000.000 đ</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="bg-white">
          <Bar
            options={{ responsive: true, layout: { padding: 30 } }}
            data={data}
          />
        </div>
        <div className="bg-white">
          <Line
            options={{ responsive: true, layout: { padding: 30 } }}
            data={data}
          />
        </div>
      </div>
    </>
  );
}
