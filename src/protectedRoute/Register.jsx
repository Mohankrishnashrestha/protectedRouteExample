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
          full_name: data.full_name,
          phone_numebr: data.phone_number,
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
      <div className="lg:flex lg:w-[100%] shadow p-5">
        <h1 className="text-[20px] font-medium p-2 flex justify-center lg:hidden">
          Log In
        </h1>
        <div className="lg:w-[50%] p-2">
          <img
            src="/images/register.jpg"
            alt="register image"
            className="lg:h-[500px] rounded-2xl w-full hidden lg:block"
          />
        </div>
        <div className="lg:w-[50%] lg:flex p-5 justify-center flex-col  rounded-2xl hover:shadow-xl items-center">
          <h1 className="hidden lg:block  p-2 pb-5 text-2xl font-bold underline">
            Register
          </h1>
          <Form onFinish={handle}>
            <Form.Item
              label="Full Name"
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Please Enter the the Full Name",
                },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
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
              label="Phone No:"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please Enter the Phone Number",
                },
              ]}
            >
              <Input type="number" placeholder="0000000000" />
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
    </div>
  );
}

export default Register;
