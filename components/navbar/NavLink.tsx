"use client";

import { NavbarItem } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <NavbarItem
      isActive={isActive}
      as={Link}
      href={href}
      className={`
        text-xl uppercase font-medium transition-all duration-200 
        px-4 py-2 rounded-md cursor-pointer
        ${isActive 
          ? 'text-navbar-active bg-navbar-hover font-semibold' 
          : 'text-navbar-default hover:text-navbar-active hover:bg-navbar-hover'
        }
      `}
    >
      {label}
    </NavbarItem>
  );
}