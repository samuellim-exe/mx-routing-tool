import React from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "./ui/menubar";
// import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link to="/">Routing Sheet</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* <DarkModeToggle /> */}
    </Menubar>
  );
};

export default Navigation;
