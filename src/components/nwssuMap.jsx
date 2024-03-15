import React, { useContext, useState } from "react";

import Map from "../assets/Map.png";

import { Button, Input, Space, Card, Dropdown, AutoComplete } from "antd";
import { UpOutlined } from "@ant-design/icons";
// import { InfoContext } from "../context/useContext";

const NwssuMap = () => {
  // const { handleCreatePath } = useContext(InfoContext);
  // const [value, setValue] = useState("");
  // const [options, setOptions] = useState([]);
  // const mockVal = (str, repeat = 1) => ({
  //   value: str.repeat(repeat),
  // });

  // const getPanelValue = (searchText) =>
  //   !searchText
  //     ? []
  //     : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  // const onSelect = (data) => {
  //   console.log("onSelect", data);
  // };

  // const onChange = (data) => {
  //   console.log("onChange", data);
  // };

  return (
    <div className="relative">
      <div className=" fixed ">
        <img src={Map} alt="" style={{ width: "1315px", height: "775px" }} />
      </div>
      <div className=" mt-5 ml-5 absolute ">
        <Card
          style={{
            width: 300,
            height: 190,
            background: "#157f3d",
            border: "none",
          }}
        >
          <div className="flex flex-col justify-center items-center content-center space-y-5 ">
            <div className="flex flex-row w-60 space-x-2">
              <Input placeholder="Enter starting point" />
            </div>
            <div className="flex flex-row w-60 space-x-2">
              <AutoComplete
                // value={value}
                // options={options}
                style={{
                  width: 240,
                }}
                // onSelect={onSelect}
                // onSearch={(text) => setOptions(getPanelValue(text))}
                // onChange={onChange}
                placeholder="Enter Destination"
              />
            </div>

            <Space>
              <Button
                type="primary"
                htmlType="submit"
                // onClick={handleCreatePath}
                style={{ fontWeight: "bold", fontFamily: "Poppins" }}
              >
                Create Path
              </Button>
              <Button
                type="primary"
                danger
                htmlType="button"
                // onClick={handleDeletePath}
                style={{ fontWeight: "bold", fontFamily: "Poppins" }}
              >
                Delete Path
              </Button>
            </Space>
          </div>
        </Card>
      </div>

      <div className="absolute">
        <div>
          <div
            style={{
              position: "fixed",
              marginTop: "440px",
              marginLeft: "30px",
            }}
            className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black custom-button"
          >
            A
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "557px", marginLeft: "30px" }}
        >
          <div
            id="buttonB"
            className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black custom-button"
          >
            B
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "535px", marginLeft: "300px" }}
        >
          <div
            id="buttonC"
            className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black custom-button"
          >
            C
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "530px", marginLeft: "548px" }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black custom-button">
            D
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "506px", marginLeft: "674px" }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black custom-button">
            E
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "475px", marginLeft: "762px" }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            F
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "442px", marginLeft: "850px" }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            G
          </div>
        </div>
        <div
          style={{ position: "fixed", marginTop: "490px", marginLeft: "900px" }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            H
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "560px",
            marginLeft: "950px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            I
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "585px",
            marginLeft: "870px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            J
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "658px",
            marginLeft: "1067px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            K
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "574px",
            marginLeft: "1145px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            L
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "577px",
            marginLeft: "1219px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            M
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "519px",
            marginLeft: "1190px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            N
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "440px",
            marginLeft: "1060px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            O
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "409px",
            marginLeft: "993px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            P
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "348px",
            marginLeft: "910px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            Q
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "303px",
            marginLeft: "825px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            R
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "230px",
            marginLeft: "700px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            S
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "200px",
            marginLeft: "525px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            T
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "228px",
            marginLeft: "147px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            W
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "415px",
            marginLeft: "110px",
          }}
        >
          <div className="flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            U
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            marginTop: "652px",
            marginLeft: "924px",
          }}
        >
          <div className=" flex justify-center items-center text-center rounded-full w-7 h-7 bg-white font-bold hover:text-black text-black">
            V
          </div>
        </div>
      </div>

      <div
        className="absolute"
        style={{ position: "fixed", marginTop: "730px", marginLeft: "500px" }}
      >
        <Button type="primary" size="Large">
          <Dropdown menu={{}} trigger={["click"]} placement="top">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                LEGEND
                <UpOutlined />
              </Space>
            </a>
          </Dropdown>
        </Button>
      </div>
    </div>
  );
};

export default NwssuMap;
