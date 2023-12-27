import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar1 from "../components/Sidebar1";
import { useState } from "react";
const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto h-full">
      <div className="flex gap-4 px-4">
        <main className="bg-green-200 py-8 w-full lg:w-[80%] md:px-0 px-4">
          <Outlet /> {/**Homepage */}
        </main>
        <aside className="hidden max-h-[530px] overflow-auto xl:block sticky top-14 w-[38rem] bg-gray-200">
          <Sidebar1 />
        </aside>
      </div>
    </div>
  );
};

export default Layout;
