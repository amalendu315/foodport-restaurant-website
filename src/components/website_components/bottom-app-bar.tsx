"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Utensils, Package, ShoppingCart, User } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/menu", label: "Menu", icon: Utensils },
    { href: "/orders", label: "Orders", icon: Package },
    { href: "/cart", label: "Cart", icon: ShoppingCart },
    { href: "/account", label: "Account", icon: User },
];

export default function BottomAppBar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 50) {
            setHidden(difference > 0);
            lastYRef.current = y;
        }
    });

    return (
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 z-40 h-[calc(56px+env(safe-area-inset-bottom))] w-full border-t bg-background/95 backdrop-blur-sm md:hidden"
        >
            <nav className="flex h-14 items-center justify-around" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 p-2 text-sm transition-colors",
                                isActive
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <div className="relative">
                                <item.icon className="h-6 w-6" />
                                {item.href === "/cart" && (
                                    <Badge
                                        variant="destructive"
                                        className="absolute -right-3 -top-1 h-5 w-5 justify-center rounded-full p-0 text-xs"
                                    >
                                        2
                                    </Badge>
                                )}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium",
                                    isActive ? "font-bold" : "font-normal"
                                )}
                            >
                {item.label}
              </span>
                        </Link>
                    );
                })}
            </nav>
        </motion.div>
    );
}
