import React from "react";
import NwssuLogo from "../assets/NwssuLogo.png";
import BuildingLogo from "../assets/BuildingLogo.png";
import FacultyLogo from "../assets/FacultyLogo.png";
import ThreedLogo from "../assets/ThreedLogo.png";

import { useOutlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LeftCircleFilled } from "@ant-design/icons";

const Comlayout = () => {
  const { Content, Sider } = Layout;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout
      style={{
        height: "100vh" /* For 100% screen height */,
        width: "100vw" /* For 100% screen width */,
      }}
    >
      <Sider width={220} style={{ background: "#157f3d" }}>
        <div className="flex flex-row mt-8">
          <div>
            <Link to={"/"}>
              <img src={NwssuLogo} alt="" className="w-20" />
            </Link>
          </div>

          <div className=" flex justify-center items-center text-xl font-black text-white ">
            <Link to={"/"} className="text-white">
              WAYFINDER
            </Link>
          </div>
        </div>
        <Menu
          theme="dark"
          className=" space-y-4 mt-5 font-bold text-lg bg-green-700 "
          defaultSelectedKeys={location.pathname}
          onClick={handleMenuClick}
          items={[
            // NwssuMap Component
            {
              key: "/ComBuilding",
              label: (
                <div className=" flex flex-row items-center space-x-2">
                  <img
                    src={BuildingLogo}
                    alt=""
                    srcset=""
                    style={{ width: "24px" }}
                  />
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    Com College
                  </span>
                </div>
              ),
            },

            {
              key: "/ComFaculty",
              label: (
                <div className=" flex flex-row items-center space-x-2">
                  <img
                    src={FacultyLogo}
                    alt=""
                    srcset=""
                    style={{ width: "24px" }}
                  />
                  <span
                    style={{
                      color: "white",

                      fontFamily: "Poppins",
                    }}
                  >
                    Com Faculty
                  </span>
                </div>
              ),
            },

            {
              key: "/Com3Dmodel",
              label: (
                <div className=" flex flex-row items-center space-x-2">
                  <img
                    src={ThreedLogo}
                    alt=""
                    srcset=""
                    style={{ width: "24px" }}
                  />
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    Com 3Dmodel
                  </span>
                </div>
              ),
            },

            {
              key: "/NwssuBuilding",
              label: (
                <span style={{ color: "white", fontFamily: "Poppins" }}>
                  Back
                </span>
              ),
              icon: (
                <LeftCircleFilled
                  style={{ fontSize: "20px", color: "white" }}
                />
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="bg-green-900">
          <p>{outlet}</p>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Comlayout;
