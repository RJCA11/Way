import React from "react";
import CcisLogo from "../assets/CcisLogo.png";

const CcisBuilding = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-5">
        <div className="text-center">
          <div>
            <img src={CcisLogo} alt="" style={{ width: "100px" }} />
          </div>
          <div className="text-3xl mt-2 font-semibold text-white text-center">
            COLLEGE OF COMPUTER <br /> AND INFORMATION SCIENCES
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center content-center">
        <div className="text-xl mt-5 font-semibold text-white mb-4 sm:mb-0">
          <span className="block sm:inline">About :</span>
          <ul className="text-lg list-none">
            <li>To provide quality information technology</li>
            <li>education geared toward producing competent</li>
            <li>and ethical IT professionals through relevant</li>
            <li>course offering, research, and extension endeavors.</li>
          </ul>
        </div>
        <div className="text-xl mt-5 font-semibold text-white sm:ml-8">
          <span className="block sm:inline">Courses :</span> <br />
          <ul className="text-lg list-none">
            <li>Bachelor of Science In Computer Science</li>
            <li>Bachelor of Science In Information Technology</li>
            <li>Bachelor of Science In Information System</li>
            <li>
              Bachelor of Science In Entertainment and Multimedia Computing
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-semibold text-2xl">Facilities</h3>
      </div>
    </div>
  );
};

export default CcisBuilding;
