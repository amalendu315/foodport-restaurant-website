"use client";

import { motion } from "framer-motion";
import { IndianRupee, Truck, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ValuePropCardProps {
    icon: "upi" | "rupee" | "truck";
    title: string;
    description: string;
    className?: string;
}

const icons = {
    upi: Wallet,
    rupee: IndianRupee,
    truck: Truck,
};

const ValuePropCard = ({ icon, title, description, className }: ValuePropCardProps) => {
    const Icon = icons[icon];

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className={cn("h-full", className)}
        >
            <Card className="h-full text-center transition-shadow hover:shadow-lg">
                <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="font-headline text-xl">{title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ValuePropCard;
