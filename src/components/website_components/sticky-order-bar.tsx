"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

const StickyOrderBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            // Show after scrolling 40% of the page height
            const shouldBeVisible = latest > window.innerHeight * 0.4;
            if (shouldBeVisible && !isDismissed) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [scrollY, isDismissed]);

    useEffect(() => {
        // Check session storage on mount
        const dismissed = sessionStorage.getItem('stickyOrderBarDismissed');
        if (dismissed === 'true') {
            setIsDismissed(true);
            setIsVisible(false);
        }
    }, []);


    const handleDismiss = () => {
        setIsDismissed(true);
        setIsVisible(false);
        sessionStorage.setItem('stickyOrderBarDismissed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
                >
                    <div className="flex items-center gap-4 rounded-full border bg-background p-2 pr-4 shadow-2xl">
                        <p className="ml-4 text-sm font-medium text-foreground hidden sm:block">Ready to order?</p>
                        <Button asChild className="font-bold rounded-full">
                            <Link href="/menu">View Menu <ArrowRight /></Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={handleDismiss}>
                            <X className="h-4 w-4" />
                            <span className="sr-only">Dismiss</span>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyOrderBar;
