// Landing Page
import NwssuLanding from "../components/nwssuLanding";
import AdminLogin from "../components/adminLogin";

// AdminLayout
// import Adminlayout from "../layout/adminLayout";
// import AdminMap from "../components/adminMap";

// Mainlayout
import Mainlayout from "../layout/mainlayout";
import NwssuMap from "../components/nwssuMap";
import NwssuBuilding from "../components/nwssuBuilding";
import NwssuUserGuide from "../components/nwssuUserguide";

// Ccislayout
import Ccislayout from "../layout/ccisLayout";
import CcisBuilding from "../ccisBuildings/ccisBuilding";
import CcisFaculty from "../ccisBuildings/ccisFaculty";
import Ccis3Dmodel from "../ccisBuildings/ccis3Dmodel";

// Ccjslayout
import Ccjslayout from "../layout/ccjsLayout";
import CcjsBuilding from "../ccjsBuildings/ccjsBuilding";
import CcjsFaculty from "../ccjsBuildings/ccjsFaculty";
import Ccjs3Dmodel from "../ccjsBuildings/ccjs3Dmodel";

// Comlayout
import Comlayout from "../layout/comLayout";
import ComBuilding from "../comBuildings/comBuilding";
import ComFaculty from "../comBuildings/comFaculty";
import Com3Dmodel from "../comBuildings/com3dmodel";

// Cealayout
import Cealayout from "../layout/ceaLayout";
import CeaBuilding from "../ceaBuildings/ceaBuilding";
import CeaFaculty from "../ceaBuildings/ceaFaculty";
import Cea3Dmodel from "../ceaBuildings/cea3Dmodel";

// Coedlayout
import Coedlayout from "../layout/coedLayout";
import CoedBuilding from "../coedBuildings/coedBuilding";
import CoedFaculty from "../coedBuildings/coedFaculty";
import Coed3Dmodel from "../coedBuildings/coed3Dmodel";

// Catlayout
import Catlayout from "../layout/catLayout";
import CatBuilding from "../catBuildings/catBuilding";
import CatFaculty from "../catBuildings/catFaculty";
import Cat3Dmodel from "../catBuildings/cat3Dmodel";

// Error Pages
import Error500Page from "../pages/errorsPage/500";
import Error404Page from "../pages/errorsPage/404";

const Router = [
  {
    path: "/",
    element: <NwssuLanding />,
  },

  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },

  {
    element: <Mainlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/nwssuMap",
        element: <NwssuMap />,
      },
      {
        path: "/nwssuBuilding",
        element: <NwssuBuilding />,
      },
      {
        path: "/nwssuUserGuide",
        element: <NwssuUserGuide />,
      },
      {
        path: "/sample",
        element: <App />,
      },
    ],
  },

  {
    element: <Ccislayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CcisBuilding",
        element: <CcisBuilding />,
      },
      {
        path: "/CcisFaculty",
        element: <CcisFaculty />,
      },
      {
        path: "/Ccis3Dmodel",
        element: <Ccis3Dmodel />,
      },
    ],
  },

  {
    element: <Ccjslayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CcjsBuilding",
        element: <CcjsBuilding />,
      },
      {
        path: "/CcjsFaculty",
        element: <CcjsFaculty />,
      },
      {
        path: "/Ccjs3Dmodel",
        element: <Ccjs3Dmodel />,
      },
    ],
  },

  {
    element: <Comlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/ComBuilding",
        element: <ComBuilding />,
      },
      {
        path: "/ComFaculty",
        element: <ComFaculty />,
      },
      {
        path: "/Com3Dmodel",
        element: <Com3Dmodel />,
      },
    ],
  },

  {
    element: <Cealayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CeaBuilding",
        element: <CeaBuilding />,
      },
      {
        path: "/CeaFaculty",
        element: <CeaFaculty />,
      },
      {
        path: "/Cea3Dmodel",
        element: <Cea3Dmodel />,
      },
    ],
  },

  {
    element: <Coedlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CoedBuilding",
        element: <CoedBuilding />,
      },
      {
        path: "/CoedFaculty",
        element: <CoedFaculty />,
      },
      {
        path: "/Coed3Dmodel",
        element: <Coed3Dmodel />,
      },
    ],
  },

  {
    element: <Catlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CatBuilding",
        element: <CatBuilding />,
      },
      {
        path: "/CatFaculty",
        element: <CatFaculty />,
      },
      {
        path: "/Coed3Dmodel",
        element: <Cat3Dmodel />,
      },
    ],
  },

  {
    path: "*",
    element: <Error404Page />,
  },
];

export default Router;
