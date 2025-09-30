"use client";

import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

export default function QuantitySelector({ quantity, setQuantity }: QuantitySelectorProps) {
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(Math.max(1, quantity - 1));

    return (
        <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={decrement}>
                <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center font-bold">{quantity}</span>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={increment}>
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
}
