import React, { FC, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AppDispatch, RootState } from "../setup/store";
import {
  actionProductCreate,
  actionProductGet,
  actionProductUpdate,
} from "../modules/product/action";
import { TypeFormProduct } from "../modules/product/type";
import { useLocation } from "react-router-dom";
import { fetchProductGet } from "../modules/product/api";
import { fetchAxios } from "../setup/axios";

 //adapter//
 function uploadAdapter(loader: any) {
  return {
    upload: () => {
      return new Promise((resolve: any, reject: any) => {
        const body = new FormData();
      
        loader.file.then((file: any) => {
          body.append("photoProduct",file)
          fetchAxios(
            "http://localhost:4000/api/product/upload",
            {
              method: "post",
              data: body,
            }
          )
            
            .then((res: any) => {
              resolve({
                default:
                  "http://localhost:4000/api/img/product/"+res.url,
              });
            })
            .catch((err: any) => {
              reject(err);
            });
        });
      });
    },
  };
}

function uploadPlugin(editor:any){
  editor.plugins.get("FileRepository").createUploadAdapter =(loader:any)=>{
    return uploadAdapter(loader)
  }
}
//adapter//

const UpdateProduct: FC = () => {
  const { pathname, state } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const {product}=useSelector((state:RootState)=>state.productReducer)
  //************CREATE PROUDCT *********** */
  const { register, handleSubmit, setValue, reset,getValues } = useForm<TypeFormProduct>({
    defaultValues: {},
  });
  const onSubmit = handleSubmit((data) => {
    console.log("sdaf",data)
    const formData = new FormData();
    Object.entries(data).forEach((item: any[]) => {
      formData.append(item[0], item[1]);
      if (item[0] === "photo") {
        Object.entries(item[1]).forEach((value: any[]) => {
          formData.append("photo", value[1]);
        });
      }
    });
    dispatch(actionProductUpdate({ id: state as string, data: formData }))
  });
  //************END *********** */
 

 
  useEffect(()=>{
    dispatch(actionProductGet(state as string))
  },[state])

  useEffect(()=>{
    reset(product)
  },[state])

  return (
    <Form className="w-1/2 m-auto   " layout="vertical">
      <Form.Item>
        <Row gutter={25}>
          <Col span={12}>
            <p className="my-2">Tiêu đề</p>
            <input
              {...register("title")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Phong cách</p>
            <select
              {...register("style")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="">Vui lòng chọn</option>
              <option value="Cổ điển">Cổ điển</option>
              <option value="Hiện đại">Hiện đại</option>
            </select>
          </Col>
          <Col span={12}>
            <p className="my-2">Link bản vẽ</p>
            <input
              {...register("file")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Loại sản phẩm</p>
            <select
              {...register("typeID")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="">Vui lòng chọn</option>
              <option value="e7f3a25b-9ad4-4033-bfd7-d7705f133393">
                Nhà cấp 4
              </option>
              <option value="b83d3ba3-3bf3-4fb0-9e60-1e63cb44b121">
                Nhà phố
              </option>
              <option value="8c5f47fb-b7f5-4bdc-b0f0-97140c5fd197">
                Nhà vườn
              </option>
              <option value="9e13281a-a905-452f-814e-31386a3c375e">
                Biệt thự
              </option>
            </select>
          </Col>
          <Col span={12}>
            <p className="my-2">Chiều dài</p>
            <input
              {...register("long")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Chiều rộng</p>
            <input
              {...register("width")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Diện tích</p>
            <input
              {...register("area")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Số tầng</p>
            <input
              {...register("floor")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Số phòng ngủ</p>
            <input
              {...register("room")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Upload ảnh đại diện</p>
            <input
              {...register("photo")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="file"
            />
          </Col>

          <Col span={12}>
            <p className="my-2">Giá bán</p>
            <input
              {...register("price")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={24}>
            <p className="my-2">Giới thiệu ngắn gọn</p>
            <textarea
              {...register("description")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              rows={4}
            />
          </Col>
        </Row>
      </Form.Item>
      <Row>
        <Col span={24}>
          <p className="my-2">Nội dung </p>
          <CKEditor
          config={{
            extraPlugins:[uploadPlugin]
          }}
            editor={ClassicEditor}
            data={getValues("content")}
            
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
   
              setValue("content",data)
            }}
       
          />
        </Col>
      </Row>

      <Form.Item>
        <Button
          className="mt-10 w-full text-white "
          onClick={() => {
            onSubmit();
          }}
          type="primary"
          size="large"
          danger
        >
          XÁC NHẬN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProduct;
