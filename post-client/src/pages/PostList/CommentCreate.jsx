import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

export default ({postId}) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content: values.content
    });

    form.resetFields();
  }
  
  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="New Comment" name="content">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
