import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar1 from "../components/Sidebar1";
import Followers from "../components/Followers";
import { useState } from "react";
import ProfileComp from "../components/ProfileComp";
const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto h-full mt-4">
      <div className="grid-container">
        <aside>
          <ProfileComp />
          <Followers />
        </aside>
        <main className="md:px-0 bg-green-200">
          <Outlet /> {/**Homepage */}
        </main>
        <aside className="hidden max-h-[530px] overflow-auto xl:block sticky top-14 w-[20rem] bg-gray-200">
          {/* <Sidebar1 /> */}
        </aside>
      </div>
    </div>
  );
};

export default Layout;
