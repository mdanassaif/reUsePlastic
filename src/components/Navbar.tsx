"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (

    
    <div
      className={cn("fixed top-7 inset-x-0 max-w-md mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Data"></MenuItem>
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item="Data"> */}
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/connections">Total Connections</HoveredLink>
            <HoveredLink href="/feedbacks">Companies feedback</HoveredLink>
            <HoveredLink href="/govermentallow">
              Goverment allowance
            </HoveredLink>
            <HoveredLink href="/profit">Profits</HoveredLink>
          </div> */}
        {/* </MenuItem> */}
      </Menu>
    </div>
  );
};

export default Navbar;
