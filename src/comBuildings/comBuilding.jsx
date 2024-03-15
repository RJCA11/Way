import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const ComBuilding = () => {
  return (
    <div>
      <Link to={"/NwssuBuilding"}>
        <Button>BACK</Button>
      </Link>
    </div>
  );
};

export default ComBuilding;
