import React from "react";
import NwssuMap from "../../components/wssuMap";
import { InfoContext } from "../../context/useContext";

const Mapalgo = () => {
  handleCreatePath = () => {};
  return (
    <InfoContext.Provider value={{ handleCreatePath }}>
      {contextHolder}
      <NwssuMap />
    </InfoContext.Provider>
  );
};

export default Mapalgo;
