import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { actionPartnerLogin } from "../modules/partner/action";
import { fetchAxios } from "../setup/axios";
import { AppDispatch } from "../setup/store";

type Props = {};

export default function Login({}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    dispatch(actionPartnerLogin(formData));
  });
  

  return (
    <section className="h-full gradient-form bg-gray-100 md:h-screen w-full bg-login ">
      <div className="flex justify-center items-center flex-wrap h-full  text-gray-800 ">
        <div className="block bg-white shadow-lg rounded-lg ">
         
          
          <p className="text-center font-bold text-sky-800 text-3xl mt-8">
            ĐĂNG NHẬP
          </p>
          <div className="lg:flex lg:flex-wrap g-0 p-10 pt-2 ">
            <form>
              <div className="mb-4">
                <p className="text-base my-3 ">Email</p>
                <input
                  {...register("username")}
                  type="text"
                  className="form-control block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Vui lòng nhập"
                />
              </div>
              <div className="mb-4">
              <p className="text-base my-3 ">Password</p>
                <input
                  {...register("password")}
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Vui lòng nhập"
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  onClick={onSubmit}
                  className="inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-green-400 hover:bg-green-500"
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  ĐĂNG NHẬP
                </button>
                <a className="text-gray-500" href="#!">
                  Quên mật khẩu?
                </a>
                
              </div>
              <p className="text-sm text-slate-400 ">Copyright by BL </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
