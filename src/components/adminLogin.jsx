import React from "react";

import { Link } from "react-router-dom";
import NwssuLogo from "../assets/NwssuLogo.png";
import { Button, Form, Input } from "antd";

const AdminLogin = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-green-900 h-lvh">
      <div>
        <div className="flex flex-row justify-evenly h-32 bg-green-700 items-center">
          <div className="flex flex-row justify-start space-x-4  text-white">
            <div>
              <img src={NwssuLogo} alt="" srcset="" className=" w-28" />
            </div>
            <div
              className=" flex justify-center items-center font-black text-3xl"
              style={{ fontFamily: "Poppins" }}
            >
              NORTHWEST SAMAR STATE UNIVERSITY WAYFINDER PORTAL
            </div>
          </div>
          <Link to={"/"} className=" no-underline">
            <div
              className="text-white font-black text-3xl"
              style={{ fontFamily: "Poppins" }}
            >
              GO TO MAP
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-40 space-y-16">
        <div className="flex flex-col justify-center items-center rounded-md w-96 h-72 bg-green-700 mt-10">
          <h2
            className="font-bold text-white"
            style={{ fontFamily: "Poppins" }}
          >
            Admin Login
          </h2>
          <Form
            name="basic"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ fontWeight: "bold", fontFamily: "Poppins" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <img src={NwssuLogo} alt="" style={{ width: "500px" }} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
