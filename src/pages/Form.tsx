import type { FormProps } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/features/eletronics.slice";

type FieldType = {
   name: string;
   price: number;
   count: number;
   id?: number;
   image?: string;
};

const App: React.FC = () => {
   const [form] = Form.useForm<FieldType>();
   const dispatch = useDispatch();

   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      values = {
         ...values,
         image: "https://api.idea.uz/storage/products/December2024/CdNI3iKk2MQvuuKmrFkN.png",
         id: new Date().getTime(),
      };

      dispatch(create(values));

      form.resetFields();
   };

   const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <div className='flex justify-center flex-col items-center gap-5 py-10'>
         <h1 className='text-2xl mb-2.5'>Create product</h1>
         <Form
            form={form}
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='on'
         >
            <Form.Item<FieldType>
               label='Name'
               name='name'
               rules={[{ required: true, message: "Please input product name!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Count'
               name='count'
               rules={[{ required: true, message: "Please input product count!" }]}
            >
               <InputNumber style={{ width: 177 }} />
            </Form.Item>

            <Form.Item<FieldType>
               label='Price'
               name='price'
               rules={[{ required: true, message: "Please input product price!" }]}
            >
               <InputNumber style={{ width: 177 }} />
            </Form.Item>

            <Form.Item label={null}>
               <Button type='primary' htmlType='submit'>
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default App;
