import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Saved from "./Saved";
import Form from "./Form";

const MainRouters = () => {
   return useRoutes([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Home />,
            },
            {
               path: "/form",
               element: <Form />,
            },
            {
               path: "/saved",
               element: <Saved />,
            },
         ],
      },
   ]);
};

export default React.memo(MainRouters);
