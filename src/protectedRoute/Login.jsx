import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
      <section className="lg:h-[200px]"></section>
      <div className="lg:flex shadow-2xl rounded-2xl p-5 lg:w-[100%]">
        <h1 className="text-[20px] font-medium p-2 flex justify-center lg:hidden">
          Log In
        </h1>
        <div className="lg:w[50%]">
          <img
            src="/images/login.jpg"
            className="lg:h-[500px] rounded"
            alt="imges"
          />
        </div>
        <div className="lg:flex flex-col items-center justify-center hover:shadow-xl rounded-2xl lg:w-[50%]">
          <h1 className="hidden lg:block  p-2 pb-5 text-2xl font-bold underline">
            Log In
          </h1>
          <Form onFinish={finish} className="p-2">
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
            <div>
              <p>
                haven't register? <Link to="/register">Register</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
