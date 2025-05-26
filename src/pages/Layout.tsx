import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/header/Header-mui";

const Layout = () => {
   return (
      <>
         <ResponsiveAppBar />
         <main>
            <Outlet />
         </main>
         {/* <Footer /> */}
      </>
   );
};

export default React.memo(Layout);
