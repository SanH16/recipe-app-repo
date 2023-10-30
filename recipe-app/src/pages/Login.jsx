import { auth } from "../configs/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import { APIauth } from "../apis/APIauth";
import { useForm } from "antd/es/form/Form";

export const Login = () => {
  const { form } = useForm();

  const navigate = useNavigate();
  console.log(auth?.currentUser?.email);
  const signIn = async ({ email, password }) => {
    try {
      await APIauth.signInWithCredentials({ email, password });
      message.success("success login");
      navigate("/");
    } catch (error) {
      message.error("login failed, your email or password is incorrect");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await APIauth.signInWithGoogleOAuth();

      message.success("success login");
      navigate("/");
    } catch (error) {
      message.error("login failed, google oauth is failed");
    }
  };
  return (
    <div>
      <Form form={form} onFinish={signIn}>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
          <Input placeholder="Email.." />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: "password is not valid" }]}>
          <Input type="password" placeholder="Password.." />
        </Form.Item>

        <Button name="signIn" htmlType="submit">
          Signin
        </Button>

        <Button icon={<GoogleOutlined />} onClick={signInWithGoogle}>
          Signin with google
        </Button>
      </Form>
      <div>
        <Paragraph>Doesn't have account ?</Paragraph>
        <Button>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};
