import { useState } from "react";
import { Link } from "react-router-dom";


const SideBar = () => {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: <Link to='/admin/dashboard'>Dashboard</Link>, src: "Chart_fill" },
    { title: <Link to='/admin/dashboard/upload'>Upload Book</Link>, src: "Chat" },
    { title: "Inbox", src: "User", gap: true },
    { title: "Users", src: "Calendar" },
    { title: <Link to='/login'>Sign in</Link>, src: "Search" },
    { title: <Link to='/logout'>Log Out</Link>, src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
    return (
        <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-[#081A51] h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src="../assets/dashboard_Icons/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="../assets/dashboard_Icons/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
             Admin
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`../assets/dashboard_Icons/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default SideBar;