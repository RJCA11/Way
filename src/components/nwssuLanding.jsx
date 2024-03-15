import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import NwssuLogo from "../assets/NwssuLogo.png";
import NwssuHeader from "./nwssuHeader";

const NwssuLanding = () => {
  return (
    <div className="bg-green-900 h-lvh ">
      <div>
        <NwssuHeader />
      </div>
      <div className=" flex flex-row justify-center items-center space-x-40 space-y-16">
        <div className="space-y-10">
          <div
            className=" text-white text-4xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Navigate NwSSU Life with Ease:
            <br /> Your Map to Hassle-Free Exploration!
          </div>
          <div className=" flex flex-row justify-center items-center space-x-10 ">
            <div>
              <Link to={"/nwssuMap"}>
                <Button
                  type="primary"
                  size="large"
                  className=" font-bold text-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  GO TO MAP
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/AdminLogin"}>
                <Button
                  type="primary"
                  size="large"
                  className=" font-bold text-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  ADMIN
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={NwssuLogo} alt="" srcset="" style={{ width: "500px" }} />
        </div>
      </div>
    </div>
  );
};

export default NwssuLanding;
