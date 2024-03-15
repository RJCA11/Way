import React from "react";
import ReactDOM from "react-dom/client";

import "antd/dist/reset.css";
import "./index.css";
import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./routers/routers";
import themeJson from "../themeJson.json";

const router = createBrowserRouter(Router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={themeJson}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
