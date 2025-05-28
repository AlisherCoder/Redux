import { Button, Form, Input, InputNumber, message, Space } from "antd";
import { usePostUserMutation } from "../redux/api/user.api";
import type { FormProps } from "antd";
import React from "react";

type FieldType = {
   fname: string;
   lname: string;
   age: number;
   city: string;
};

const App: React.FC = () => {
   const [form] = Form.useForm<FieldType>();

   const [createUser, { isLoading }] = usePostUserMutation();

   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      createUser(values)
         .unwrap()
         .then(() => succes());

      form.resetFields();
   };

   const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   const [messageApi, contextHolder] = message.useMessage();

   const succes = () => {
      messageApi.open({
         type: "success",
         content: "Created user successfully",
      });
   };

   return (
      <div className='flex justify-center flex-col items-center gap-5 py-10'>
         {contextHolder}
         <h1 className='text-2xl mb-2.5'>Create user</h1>
         <Form
            form={form}
            name='basic'
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            style={{ width: 250 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='on'
            layout='vertical'
            className=''
         >
            <Form.Item<FieldType>
               label='First Name'
               name='fname'
               rules={[{ required: true, message: "Please input user fname!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Last Name'
               name='lname'
               rules={[{ required: true, message: "Please input user lname!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='City'
               name='city'
               rules={[{ required: true, message: "Please input user city!" }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Age'
               name='age'
               rules={[{ required: true, message: "Please input user age!" }]}
            >
               <InputNumber />
            </Form.Item>

            <Form.Item label={null}>
               <Space>
                  <Button type='primary' htmlType='submit' loading={isLoading}>
                     Submit
                  </Button>
                  <Button htmlType='reset'>Reset</Button>
               </Space>
            </Form.Item>
         </Form>
      </div>
   );
};

export default App;
