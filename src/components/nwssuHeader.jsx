import React from "react";
import NwssuLogo from "../assets/NwssuLogo.png";
const NwssuHeader = () => {
  return (
    <div className="flex flex-row justify-evenly items-center h-32 bg-green-700 ">
      <div className="flex flex-row justify-start space-x-4  text-white">
        <div>
          <img src={NwssuLogo} alt="" srcset="" className=" w-28" />
        </div>
        <div
          className=" flex justify-center items-center font-black text-3xl"
          style={{ fontFamily: "Poppins" }}
        >
          NORTHWEST SAMAR STATE UNIVERSITY WAYFINDER
        </div>
      </div>
    </div>
  );
};

export default NwssuHeader;
