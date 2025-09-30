"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const WHATSAPP_NUMBER = "9572729138";
const CALL_NUMBER = "9572729138";
const WHATSAPP_MESSAGE = "Hello! I'd like to place an order.";

export default function StickyContactDock() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Use a timeout to delay the appearance, making it less intrusive on load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    const callUrl = `tel:${CALL_NUMBER}`;

    const handleVibrate = () => {
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
            navigator.vibrate(50); // Vibrate for 50ms
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 sm:flex-row sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
                    style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
                >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleVibrate}
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:bg-green-600"
                                >
                                    <MessageSquare className="h-7 w-7" />
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="left">
                                <p>Chat on WhatsApp</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href={callUrl}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleVibrate}
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:bg-primary/90"
                                >
                                    <Phone className="h-7 w-7" />
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="left">
                                <p>Call Us</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
