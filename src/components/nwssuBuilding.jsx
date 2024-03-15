import { Card, Spin } from "antd";
import { Link } from "react-router-dom";
import React from "react";

// Building Logos
import CcisLogo from "../assets/CcisLogo.png";
import CcjsLogo from "../assets/CcjsLogo.png";
import ComLogo from "../assets/ComLogo.png";
import CeaLogo from "../assets/CeaLogo.png";
import CoedLogo from "../assets/CoedLogo.png";
import CatLogo from "../assets/CatLogo.png";

// Building Pictures
import CcisPicture from "../assets/CcisPicture.png";
import CcjsPicture from "../assets/CcjsPicture.png";
import ComPicture from "../assets/ComPicture.png";

const NwssuBuilding = () => {
  return (
    <div>
      <div className=" flex flex-row justify-evenly content-center mt-16 ">
        <div>
          <Link to={"/CcisBuilding"}>
            <Card
              hoverable
              cover={
                <img src={CcjsPicture} style={{ width: 350, height: 200 }} />
              }
              style={{
                width: 350,
                height: 300,
              }}
            >
              <div className="flex flex-row justify-center items-center relative">
                <div className=" absolute mb-32">
                  <img
                    src={CcisLogo}
                    alt="Ccis Logo"
                    srcset=""
                    style={{ width: 80 }}
                  />
                </div>
                <div
                  className=" font-semibold text-xl mt-2 text-center "
                  style={{ fontFamily: "Poppins" }}
                >
                  COLLEGE OF COMPUTER INFORMATION SCIENCES
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div>
          <Link to={"/CcjsBuilding"}>
            <Card
              hoverable
              cover={
                <img src={CcjsPicture} style={{ width: 350, height: 200 }} />
              }
              style={{
                width: 350,
                height: 300,
              }}
            >
              <div className="flex flex-row justify-center items-center relative ">
                <div className=" absolute mb-32">
                  <img
                    src={CcjsLogo}
                    alt="Ccis Logo"
                    srcset=""
                    style={{ width: 80 }}
                  />
                </div>
                <div
                  className="text-xl text-center mt-2 font-semibold "
                  style={{ fontFamily: "Poppins" }}
                >
                  COLLEGE OF CRIMINAL <br /> JUSTICE AND SCIENCES
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div>
          <Link to={"/ComBuilding"}>
            <Card
              hoverable
              cover={
                <img src={ComPicture} style={{ width: 350, height: 200 }} />
              }
              style={{
                width: 350,
                height: 300,
              }}
            >
              <div className="flex flex-row justify-center items-center relative">
                <div className=" absolute mb-32">
                  <img
                    src={ComLogo}
                    alt="Ccis Logo"
                    srcset=""
                    style={{ width: 80, padding: 0, margin: 0 }}
                  />
                </div>
                <div
                  className="font-semibold text-xl text-center mt-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  COLLEGE OF
                  <br /> MANAGEMENT
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>

      <div className=" flex flex-row justify-evenly content-center mt-16">
        <div>
          <Link to={"/CeaBuilding"}>
            <Card
              hoverable
              cover={
                <img
                  src={CcisPicture}
                  style={{
                    width: 351,
                    height: 200,
                  }}
                />
              }
              style={{
                width: 350,
                height: 300,
                border: "none",
              }}
            >
              <div className="flex flex-row justify-center items-center relative">
                <div className=" absolute mb-32">
                  <img
                    src={CeaLogo}
                    alt="Ccis Logo"
                    srcset=""
                    style={{ width: 110 }}
                  />
                </div>
                <div
                  className=" font-semibold text-xl mt-2 text-center "
                  style={{ fontFamily: "Poppins" }}
                >
                  COLLEGE OF ENGINEERING AND ARCHITECTURE
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div>
          <Link to={"/CoedBuilding"}>
            <Card
              hoverable
              cover={
                <img src={CcjsPicture} style={{ width: 350, height: 200 }} />
              }
              style={{
                width: 350,
                height: 300,
              }}
            >
              <div className="flex flex-row justify-center items-center relative ">
                <div className=" absolute mb-32">
                  <img
                    src={CoedLogo}
                    alt="Ccis Logo"
                    srcset=""
                    style={{ width: 80, padding: 0, margin: 0 }}
                  />
                </div>
                <div
                  className="text-xl text-center mt-2 font-semibold "
                  style={{ fontFamily: "Poppins" }}
                >
                  COLLEGE <br /> OF EDUCATION
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div>
          <Link to={"/CatBuilding"}>
            <Card
              hoverable
              cover={
                <img src={ComPicture} style={{ width: 350, height: 200 }} />
              }
              style={{
                width: 350,
                height: 300,
              }}
            >
              <div className="flex flex-row justify-center items-center relative">
                <div className=" absolute mb-32">
                  <img
                    src={CatLogo}
                    alt="Ccis Logo"
                    srcset=""
                    style={{ width: 80, padding: 0, margin: 0 }}
                  />
                </div>
                <div
                  className="font-semibold text-xl text-center mt-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  COLLEGE OF ARGRICULTURE
                  <br />
                  AND TECHNOLOGY
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NwssuBuilding;
