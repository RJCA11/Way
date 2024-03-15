import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CcjsBuilding = () => {
  return (
    <div>
      <Link to={"/NwssuBuilding"}>
        <Button>BACK</Button>
      </Link>
    </div>
  );
};

export default CcjsBuilding;
