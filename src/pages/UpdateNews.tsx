import { Button, Col, Row } from "antd";
import React, { FC, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { fetchAxios } from "../setup/axios";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  actionNewsCreate,
  actionNewsGet,
  actionNewsUpdateId,
} from "../modules/news/action";
import { AppDispatch, RootState } from "../setup/store";

type Props = {};
//adapter//
function uploadAdapter(loader: any) {
  return {
    upload: () => {
      return new Promise((resolve: any, reject: any) => {
        const body = new FormData();

        loader.file.then((file: any) => {
          body.append("photoProduct", file);
          fetchAxios("http://localhost:4000/api/product/upload", {
            method: "post",
            data: body,
          })
            .then((res: any) => {
              resolve({
                default: "http://localhost:4000/api/img/product/" + res.url,
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

function uploadPlugin(editor: any) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return uploadAdapter(loader);
  };
}
//adapter//

const CreateUpdateNews: FC = (props: Props) => {
  const { register, handleSubmit, setValue, reset, getValues } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { news } = useSelector((state: RootState) => state.newsReducer);
  const { state, pathname } = useLocation();
  const onSubmit = handleSubmit((data) => {
    console.log(state,data)
    const formData = new FormData();

    Object.entries(data).forEach((item) => {

      if (item[0] !== "photo") {
        formData.append(item[0], item[1]);
      } else if (item[0] === "photo") {
        formData.append(item[0], item[1][0]);
      }
    });
    dispatch(actionNewsUpdateId({ id: state, data: formData }));
  });
  useEffect(() => {
    dispatch(actionNewsGet(state as string));
   
  }, [state]);

  useEffect(() => {
    reset(news);
  }, [news]);

  return (
    <div className="w-1/2 m-auto">
      <Row gutter={20}>
        <Col span={16}>
          <p className="my-2">Tiêu đề</p>
          <input
            {...register("title")}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
          />
        </Col>
        <Col span={8}>
          <p className="my-2">Hình ảnh</p>
          <input
            {...register("photo")}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="file"
          />
        </Col>
        <Col span={24}>
          <p className="my-2">Mô tả ngắn gọn</p>
          <textarea
            {...register("description")}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            rows={4}
          />
        </Col>
        <Col span={24}>
          <p className="my-2">Nội dung</p>
          <CKEditor
            config={{
              extraPlugins: [uploadPlugin],
            }}
            editor={ClassicEditor}
            data={getValues("content")}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();

              setValue("content", data);
            }}
          />
        </Col>
        <Col span={24}>
          <Button
            className="mt-10 w-full text-white "
            onClick={onSubmit}
            type="primary"
            size="large"
            danger
          >
            XÁC NHẬN
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreateUpdateNews;
