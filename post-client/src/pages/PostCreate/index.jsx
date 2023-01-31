import { Form, Input, Button } from "antd";
import axios from "axios";
import "./index.less";

const PostCreate = () => {
  const [form] = Form.useForm();
  const onFormFinish = async (values) => {
    console.log("Success:", values);

    await axios.post("http://posts.com/posts/create", values);

    form.resetFields();
  };
  return (
    <div className="container">
      <h1>Create Post!!!</h1>
      <Form name="basic" onFinish={onFormFinish} form={form}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostCreate;
