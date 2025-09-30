"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
    as?: ElementType;
    text: string;
    className?: string;
    stagger?: number;
    delay?: number;
}

const AnimatedHeadline = ({
                              as: Comp = "h1",
                              text,
                              className,
                              stagger = 0.05,
                              delay = 0,
                          }: AnimatedHeadlineProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const headlineVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <Comp ref={ref} className={cn("flex flex-wrap", className)}>
            <motion.span
                variants={headlineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="sr-only"
            >
                {text}
            </motion.span>
            <motion.span
                aria-hidden
                variants={headlineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap"
            >
                {text.split(" ").map((word, i) => (
                    <motion.span key={i} variants={wordVariants} className="mr-[0.25em]">
                        {word}
                    </motion.span>
                ))}
            </motion.span>
        </Comp>
    );
};

export default AnimatedHeadline;
