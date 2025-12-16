"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Heart,
    ShoppingCart,
    LogIn,
    ChevronDown,
    Store,
} from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState("Technology");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["About Us"];

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-[1100px]"
        >
            <motion.div
                animate={{
                    padding: isScrolled ? "10px 22px" : "16px 32px",
                    borderRadius: isScrolled ? "26px" : "36px",
                }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between backdrop-blur-xl bg-[#191A23]/65 border border-white/10 shadow-lg"
            >
                {/* LEFT SIDE: Brand + Navigation */}
                <div className="flex items-center gap-6">

                    {/* STYLA.AI Brand */}
                    <Link
                        href="/"
                        className="text-xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent tracking-tight"
                    >
                        STYLA.AI
                    </Link>

                    {/* LINKS */}
                    <ul className="hidden lg:flex items-center gap-6 text-sm text-white">
                        {navLinks.map((label) => (
                            <li
                                key={label}
                                onClick={() => setActive(label)}
                                className="relative cursor-pointer"
                            >
                                <span
                                    className={`relative z-10 px-4 py-2 rounded-full transition ${active === label
                                            ? "text-white"
                                            : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {label}
                                </span>

                                {active === label && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-md shadow-inner"
                                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT SIDE: Marketplace + Icons */}
                <div className="flex items-center gap-6 text-white">

                    {/* Marketplace */}

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/products"
                            className="hover:text-purple-300 transition focus:outline-none"
                        >
                            <Store className="w-5 h-5 cursor-pointer" />
                        </Link>

                        <Heart className="w-5 h-5 cursor-pointer hover:text-red-300 transition" />
                         <Link
                            href="/cart"
                            className="hover:text-purple-300 transition focus:outline-none"
                        >
                            <ShoppingCart className="w-5 h-5 cursor-pointer" />
                        </Link>
                        <LogIn className="w-5 h-5 cursor-pointer hover:text-green-300 transition" />
                    </div>

                </div>
            </motion.div>
        </motion.nav>
    );
}
