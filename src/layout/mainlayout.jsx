import React from "react";
import NwssuLogo from "../assets/NwssuLogo.png";
import BuildingLogo from "../assets/BuildingLogo.png";
import MapLogo from "../assets/MapLogo.png";
import { useOutlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LeftCircleFilled, SettingFilled } from "@ant-design/icons";

const Mainlayout = () => {
  const { Content, Sider } = Layout;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout className="min-h-screen">
      <Sider width={220} style={{ background: "#157f3d" }}>
        <div className="flex flex-row mt-8">
          <div>
            <Link to={"/"}>
              <img src={NwssuLogo} alt="" className="w-20" />
            </Link>
          </div>

          <div className="flex justify-center items-center text-xl font-black text-white ml-1">
            <Link to={"/"} className="text-white hover:text-white">
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
              key: "/nwssuMap",
              label: (
                <div className="flex flex-row items-center space-x-2">
                  <img
                    src={MapLogo}
                    alt=""
                    srcset=""
                    style={{ width: "30px" }}
                  />
                  <span
                    style={{
                      color: "white",
                      marginLeft: "5px",
                      fontFamily: "Poppins",
                    }}
                  >
                    NwSSU Map
                  </span>
                </div>
              ),
            },
            // NwssuBuilding Component
            {
              key: "/NwssuBuilding",
              label: (
                <div className="flex flex-row items-center space-x-2">
                  <img
                    src={BuildingLogo}
                    alt=""
                    srcset=""
                    style={{ width: "24px" }}
                  />

                  <span
                    style={{
                      color: "white",
                      marginLeft: "10px",
                      fontFamily: "Poppins",
                    }}
                  >
                    NwSSU Colleges
                  </span>
                </div>
              ),
            },
            // NwssuSettings Component
            {
              key: "/NwssuUserGuide",
              label: (
                <span style={{ color: "white", fontFamily: "Poppins" }}>
                  User Guide
                </span>
              ),
              icon: (
                <SettingFilled style={{ fontSize: "24px", color: "white" }} />
              ),
            },
            // LandingPage Component
            {
              key: "/",
              label: (
                <span style={{ color: "white", fontFamily: "Poppins" }}>
                  Back
                </span>
              ),
              icon: (
                <LeftCircleFilled
                  style={{ fontSize: "24px", color: "white" }}
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

export default Mainlayout;
