import React, { FC, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AppDispatch } from "../setup/store";
import {
  actionProductCreate,
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

const CreateProduct: FC = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  //************CREATE PROUDCT *********** */
  const { register, handleSubmit, setValue } = useForm<TypeFormProduct>({
    defaultValues: {},
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    const formData = new FormData();
        Object.entries(data).forEach((item: any[]) => {
          formData.append(item[0], item[1]);
          if (item[0] === "photo") {
            Object.entries(item[1]).forEach((value: any[]) => {
              formData.append("photo", value[1]);
            });
          }
        });
        dispatch(actionProductCreate(formData));
  });
  //************END *********** */


  //modal confirm

  return (
    <Form className="w-1/2 m-auto   " layout="vertical">
      <Form.Item>
        <Row gutter={25}>
          <Col span={12}>
            <p className="my-2">Ti??u ?????</p>
            <input
              {...register("title")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Phong c??ch</p>
            <select
              {...register("style")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="">Vui l??ng ch???n</option>
              <option value="C??? ??i???n">C??? ??i???n</option>
              <option value="Hi???n ?????i">Hi???n ?????i</option>
            </select>
          </Col>
          <Col span={12}>
            <p className="my-2">Link b???n v???</p>
            <input
              {...register("file")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Lo???i s???n ph???m</p>
            <select
              {...register("typeID")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="">Vui l??ng ch???n</option>
              <option value="e7f3a25b-9ad4-4033-bfd7-d7705f133393">
                Nh?? c???p 4
              </option>
              <option value="b83d3ba3-3bf3-4fb0-9e60-1e63cb44b121">
                Nh?? ph???
              </option>
              <option value="8c5f47fb-b7f5-4bdc-b0f0-97140c5fd197">
                Nh?? v?????n
              </option>
              <option value="9e13281a-a905-452f-814e-31386a3c375e">
                Bi???t th???
              </option>
            </select>
          </Col>
          <Col span={12}>
            <p className="my-2">Chi???u d??i</p>
            <input
              {...register("long")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Chi???u r???ng</p>
            <input
              {...register("width")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Di???n t??ch</p>
            <input
              {...register("area")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">S??? t???ng</p>
            <input
              {...register("floor")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">S??? ph??ng ng???</p>
            <input
              {...register("room")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={12}>
            <p className="my-2">Upload ???nh ?????i di???n</p>
            <input
              {...register("photo")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="file"
            />
          </Col>

          <Col span={12}>
            <p className="my-2">Gi?? b??n</p>
            <input
              {...register("price")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </Col>
          <Col span={24}>
            <p className="my-2">Gi???i thi???u ng???n g???n</p>
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
          <p className="my-2">N???i dung </p>
          <CKEditor
          config={{
            extraPlugins:[uploadPlugin]
          }}
            editor={ClassicEditor}
            data={"hihi"}
            onReady={(editor: any) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
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
          X??C NH???N
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProduct;
