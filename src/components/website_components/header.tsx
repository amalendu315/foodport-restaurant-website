"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import ThemeToggle from "./theme-toggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/track/test-order-123", label: "Track Order" },
];

export default function Header() {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    <Logo />
                </div>

                {/* Mobile Logo */}
                <div className="flex items-center md:hidden">
                    <Logo />
                </div>

                <div className="ml-auto flex-1 md:ml-0 md:flex-grow-0 md:flex-shrink-0 md:basis-auto">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            className="w-full max-w-sm pl-9"
                            placeholder="Search 150+ dishes..."
                        />
                    </div>
                </div>

                <nav className="ml-auto hidden items-center gap-4 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="ml-4 flex items-center gap-1">
                    <div className="hidden md:flex">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href="/cart">
                                            <ShoppingCart className="h-5 w-5" />
                                            <span className="sr-only">Cart</span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>View Cart</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href="/login">
                                            <User className="h-5 w-5" />
                                            <span className="sr-only">Login</span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Account</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
            <motion.div
                className="h-0.5 origin-left bg-primary"
                style={{ scaleX }}
            />
        </header>
    );
}
