"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="relative" style={{ position: 'sticky', top: 20 }}>
            <div className={cn("sticky inset-x-0 max-w-2xl mx-auto z-50 border-solid border-2 border-white-500 rounded-full text-xl mt-10 mb-10", className)} >
                <Menu setActive={setActive}>
                    <Link href={"/"} className="p-2">
                        <MenuItem setActive={setActive} active={active} item="Home">
                        </MenuItem>
                    </Link>
                    <Link href={"/"} className="p-2">
                        <MenuItem setActive={setActive} active={active} item="About">
                        </MenuItem>
                    </Link>
                    <Link href={"/"} className="p-2">
                        <MenuItem setActive={setActive} active={active} item="Skill">
                        </MenuItem>
                    </Link>
                    <Link href={"/"} className="p-2">
                        <MenuItem setActive={setActive} active={active} item="Projects">
                        </MenuItem>
                    </Link>
                    <Link href={"/contact"} className="p-2">
                        <MenuItem setActive={setActive} active={active} item="Contact">
                        </MenuItem>
                    </Link>
                    <Link href={"/contact"} className="p-2 bg-blue-500 rounded-xl">
                        <MenuItem setActive={setActive} active={active} item="Resume" >
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
        </div>

    )
}

export default Navbar