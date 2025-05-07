import React from "react";
import logo from "../../assets/logowithname.svg";
function Header() {
  return (
    <section className="">
      <div className="flex items-center justify-between px-10 py-10">
        <div className="w-[70%]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex justify-between items-center text-[#BBDFFF] space-x-15 text-md ">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Courses</div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Contact</div>
        </div>
      </div>
    </section>
    

  );
}

export default Header;
