import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar1 from "../components/Sidebar1";
import { useState } from "react";
const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <main className="flex gap-4 px-4">
        <section
          className={`rounded-b-sm
            bg-gray-400 hidden 
            ${!open && "w-[7rem]"} 
            duration-300 origin-left 
            max-h-[80vh] 
            overflow-hidden lg:flex flex-col 
            items-center sticky top-14 w-[30rem]`}
        >
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer w-full text-center py-1 bg-gray-300"
          >
            <p>x</p>
          </div>

          <Sidebar1 open={open} setOpen={setOpen} />
        </section>
        <section className="bg-green-200 py-8 w-full lg:w-[80%] md:px-0 px-4">
          <Outlet /> {/**Homepage */}
        </section>
        <section className="hidden max-h-[530px] overflow-auto xl:block sticky top-14 w-[38rem] bg-gray-200">
          <Sidebar1 />
        </section>
      </main>
    </div>
  );
};

export default Layout;
