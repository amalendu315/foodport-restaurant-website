"use client";

import { useState, useEffect, type ElementType } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "typewriter-has-run";

interface TypeOnceProps {
    as?: ElementType;
    text: string;
    className?: string;
    speed?: number;
}

const TypeOnce = ({ as: Comp = "p", text, className, speed = 0.05 }: TypeOnceProps) => {
    const [hasRun, setHasRun] = useState(true); // Default to true to avoid SSR/hydration issues
    const [displayText, setDisplayText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // This effect runs only on the client
        const hasRunInStorage = localStorage.getItem(STORAGE_KEY) === "true";
        setHasRun(hasRunInStorage);
        if (!hasRunInStorage && isInView) {
            setIsAnimating(true);
        }
    }, [isInView]);

    useEffect(() => {
        if (isAnimating) {
            localStorage.setItem(STORAGE_KEY, "true");
            let i = 0;
            const interval = setInterval(() => {
                setDisplayText(text.substring(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                }
            }, speed * 1000);
            return () => clearInterval(interval);
        }
    }, [isAnimating, text, speed]);

    if (hasRun || !isAnimating) {
        return (
            <Comp ref={ref} className={className}>{text}</Comp>
        );
    }

    return (
        <Comp ref={ref} className={cn(className, "relative")}>
            {displayText}
            <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute ml-1 h-full w-[2px] bg-foreground"
                aria-hidden
            />
        </Comp>
    );
};

export default TypeOnce;
