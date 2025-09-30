"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "The Chicken Biryani is out of this world! Best I've had in Jamshedpur. The delivery was quick and the food was hot. Highly recommended!",
        name: "Ankit S.",
        rating: 5,
    },
    {
        quote: "FoodPort is my go-to for delicious Indian food. The Paneer Butter Masala is creamy and flavorful, and their rotis are always soft and fresh.",
        name: "Priya K.",
        rating: 5,
    },
    {
        quote: "I ordered the Chilli Chicken and Hakka Noodles, and it felt like a trip to a genuine Chinese kitchen. The quality and taste are consistently excellent.",
        name: "Rahul G.",
        rating: 4,
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="relative mx-auto max-w-2xl h-48">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full"
                >
                    <Card className="border-2 border-primary/20 shadow-lg">
                        <CardContent className="p-6 text-center">
                            <p className="text-lg italic text-muted-foreground">"{testimonials[index].quote}"</p>
                            <div className="mt-4">
                                <p className="font-bold">{testimonials[index].name}</p>
                                <div className="mt-1 flex justify-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < testimonials[index].rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`}/>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Testimonials;
