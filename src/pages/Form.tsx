import type { FormProps } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/features/student.slice";

type FieldType = {
   id?: number;
   fname: string;
   lname?: string;
   age: number;
   image?: string;
   username: string;
   password: string;
   phonenumber?: string;
};

const App: React.FC = () => {
   const [form] = Form.useForm<FieldType>();
   const dispatch = useDispatch();

   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      values = {
         ...values,
         image: "https://images.unsplash.com/photo-1596496356933-e55641d98edf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
         <h1 className='text-2xl mb-2.5'>Add student</h1>
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
               label='First Name'
               name='fname'
               rules={[{ required: true, message: "Please input student fname!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Last Name'
               name='lname'
               rules={[{ required: false, message: "Please input student lname!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Age'
               name='age'
               rules={[{ required: true, message: "Please input student age!" }]}
            >
               <InputNumber style={{ width: 208 }} />
            </Form.Item>

            <Form.Item<FieldType>
               label='UserName'
               name='username'
               rules={[{ required: true, message: "Please input student username!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Password'
               name='password'
               rules={[{ required: true, message: "Please input student password!" }]}
            >
               <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
               label='Phone number'
               name='phonenumber'
               rules={[{ required: false, message: "Please input student phonenumber!" }]}
            >
               <Input />
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
