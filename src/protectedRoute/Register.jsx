import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../apiconfig";

function Register() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return <Navigate to="/home" />;
  }
  const handle = async (data) => {
    try {
      await axios.post(
        `${API_BASE_URL}/api/v1/register`,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center ">
      <section className="h-[100px]"></section>
      <div className="w-[500px] shadow p-5">
        <Form onFinish={handle}>
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
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Register
            </Button>
          </Form.Item>
          <div>
            <p>
              Already register? <Link to="/login">Login </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
