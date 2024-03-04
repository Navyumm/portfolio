"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="z-99 bg-black " style={{ position: 'sticky', top: 20,  }}>
            <div className={cn(" inset-x-0 max-w-2xl mx-auto z-50 border-solid border-2 border-white-500 rounded-full lg:text-xl md:text-xl sm:text-xl mt-14 mb-16 ", className)} >
                <Menu setActive={setActive}>
                    <Link href={"/"} className="p-1">
                        <MenuItem setActive={setActive} active={active} item="Home">
                        </MenuItem>
                    </Link>
                    <Link href={"/"} className="p-1">
                        <MenuItem setActive={setActive} active={active} item="About">
                        </MenuItem>
                    </Link>
                    <Link href={"/"} className="p-1">
                        <MenuItem setActive={setActive} active={active} item="Skill">
                        </MenuItem>
                    </Link>
                    <Link href={"/"} className="p-1">
                        <MenuItem setActive={setActive} active={active} item="Projects">
                        </MenuItem>
                    </Link>
                    <Link href={"/contact"} className="p-1">
                        <MenuItem setActive={setActive} active={active} item="Contact">
                        </MenuItem>
                    </Link>
                    <Link href={"/contact"} className="bg-blue-600 p-1 rounded-xl">
                        <MenuItem setActive={setActive} active={active} item="Resume" >
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
            
        </div>

    )
}

export default Navbar