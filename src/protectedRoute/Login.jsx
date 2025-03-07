import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../apiconfig";

function Login() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return <Navigate to="/home" />;
  }
  const finish = async (values) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/login/access-token`,
        {
          username: values.email,
          password: values.password,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(res.data.access_token);
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-6xl mx-auto  flex flex-col items-center">
      <section className="h-[100px]"></section>
      <div className="w-[500px] shadow p-5">
        <Form onFinish={finish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please Enter the Email",
              },
              {
                type: "email",
                message: "write as example@gmail.com",
              },
            ]}
          >
            <Input placeholder="someone@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Enter the Password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
