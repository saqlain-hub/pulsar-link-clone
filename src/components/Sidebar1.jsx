import React from "react";
import ProfileComp from "../components/ProfileComp";
import Menus from "../components/Menus";
import Interactions from "../components/Interactions";
const Sidebar1 = ({ open, setOpen }) => {
  return (
    <main
      className={`w-full p-3 duration-300 origin-left overflow-y-auto overflow-x-hidden`}
    >
      <section className="mb-9">
        <ProfileComp open={open} setOpen={setOpen} />
      </section>
      <section className="mb-9">
        <Menus open={open} setOpen={setOpen} />
      </section>
      <section>
        <Interactions open={open} setOpen={setOpen} />
      </section>
    </main>
  );
};

export default Sidebar1;
