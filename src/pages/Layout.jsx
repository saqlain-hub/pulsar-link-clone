import { Outlet } from "react-router-dom";
import Followers from "../components/Followers";
import { useState } from "react";
import ProfileComp from "../components/ProfileComp";
import Trends from "../components/Trends";
const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto h-full px-4">
      <div className="grid-container py-2">
        <aside className="overflow-y-scroll hidden lg:h-[450px] xl:h-[570px]  2xl:h-screen 2xl:overflow-hidden px-2 lg:block sticky top-16 ">
          <ProfileComp />
          <Followers />
        </aside>
        <main className="md:px-0 ">
          <Outlet /> {/**Homepage */}
        </main>
        <aside className="hidden max-h-[530px] overflow-hidden xl:block sticky top-16 bg-gray-200 rounded-md">
          <Trends />
        </aside>
      </div>
    </div>
  );
};

export default Layout;
