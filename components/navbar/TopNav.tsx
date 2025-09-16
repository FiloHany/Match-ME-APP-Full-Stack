"use client";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
    return (
        <>
            <Navbar
                maxWidth="full"
                className="navbar-gradient-bg min-h-[64px]"
                classNames={{
                    base: "bg-transparent backdrop-blur-none",
                    wrapper: "px-6",
                    content: "gap-6",
                    item: "text-navbar-default hover:text-navbar-active data-[active=true]:text-navbar-active",
                    brand: "text-white",
                }}
            >
                <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
                    <GiSelfLove
                        size={40}
                        className="text-gray-200"
                    />
                    <div className="font-bold text-3xl">
                        <span className="text-gray-200">
                            MatchMe
                        </span>
                    </div>
                </NavbarBrand>
                
                <NavbarContent justify="center" className="hidden sm:flex">
                    <NavLink href="/members" label="Matches" />
                    <NavLink href="/lists" label="Lists" />
                    <NavLink href="/messages" label="Messages" />
                </NavbarContent>
                
                <NavbarContent justify="end" className="gap-3">
                    <Button
                        as={Link}
                        href="/auth/login"
                        variant="bordered"
                        size="sm"
                        className="navbar-button"
                    >
                        Login
                    </Button>
                    <Button
                        as={Link}
                        href="/auth/register"
                        variant="bordered"
                        size="sm"
                        className="navbar-button"
                    >
                        Register
                    </Button>
                </NavbarContent>
            </Navbar>
        </>
    );
}