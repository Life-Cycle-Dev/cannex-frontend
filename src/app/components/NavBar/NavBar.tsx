import React from "react";
import NavBarBase from "./NavBarBase";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import ContactButton from "./ContactButton";

interface Props {
  state?: "navbar" | "navbarMenu";
}

const Menus = [
  { title: "About Us", path: "/" },
  { title: "Products", path: "/" },
  { title: "Research & Development", path: "/" },
  { title: "Newsroom", path: "/" },
  { title: "Events & Updated", path: "/" },
  { title: "Partnership", path: "/" },
];

export default function NavBar({ state = "navbar" }: Props) {
  return (
    <div className="w-full">
      {state === "navbar" ? (
        <NavBarBase />
      ) : (
        <div className="w-[375px] h-full bg-white">
          <div className="w-full flex justify-end">
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
              <Hamburger state="close" />
            </div>
          </div>
          <div className="flex flex-col px-5">
            {Menus.map((menu) => (
              <Menu key={menu.title} title={menu.title} state="default" />
            ))}
            <ContactButton />
          </div>
        </div>
      )}
    </div>
  );
}
