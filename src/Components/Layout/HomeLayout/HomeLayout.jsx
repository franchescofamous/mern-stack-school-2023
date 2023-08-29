import React from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "../HomeMenu/HomeMenu";

const HomeLayout = () => {
  return (
    <div>
      <section>
        <HomeMenu />
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
