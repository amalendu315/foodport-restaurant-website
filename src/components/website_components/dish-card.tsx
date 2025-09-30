"use client";

import Image from "next/image";
import type { Dish, DishSize } from "@/lib/types";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useState } from "react";
import QuantitySelector from "./quantity-selector";
import VegIndicator from "./veg-indicator";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    const [selectedSize, setSelectedSize] = useState<DishSize>(dish.sizes[0].size);
    const [quantity, setQuantity] = useState(1);
    const { toast } = useToast();

    const selectedPrice = dish.sizes.find(s => s.size === selectedSize)?.price || 0;

    const handleAddToCart = () => {
        toast({
            title: "Added to cart!",
            description: `${quantity} x ${dish.name} (${selectedSize})`,
        });
    };

    return (
        <Card className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
                <div className="relative aspect-video">
                    <Image
                        src={dish.image.imageUrl}
                        alt={dish.name}
                        data-ai-hint={dish.image.imageHint}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-4">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-headline text-xl mb-1">{dish.name}</CardTitle>
                    <VegIndicator vegType={dish.vegType} />
                </div>
                <CardDescription className="text-sm">{dish.description}</CardDescription>

                {dish.sizes.length > 1 && (
                    <div className="mt-4">
                        <RadioGroup value={selectedSize} onValueChange={(value: DishSize) => setSelectedSize(value)} className="flex gap-4">
                            {dish.sizes.map(({size, price}) => (
                                <div key={size} className="flex items-center space-x-2">
                                    <RadioGroupItem value={size} id={`${dish.id}-${size}`} />
                                    <Label htmlFor={`${dish.id}-${size}`} className="cursor-pointer">
                                        {size} <span className="font-semibold">(₹{price})</span>
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <div className="flex w-full items-center justify-between gap-2">
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    <Button onClick={handleAddToCart} disabled={!dish.inStock} className="flex-1 font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                        {dish.inStock ? (
                            <>
                                <ShoppingCart className="mr-2 h-4 w-4" /> Add <span className="ml-2">₹{selectedPrice * quantity}</span>
                            </>
                        ) : "Out of Stock"}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
