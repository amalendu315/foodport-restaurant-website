"use client";

import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { CATEGORIES } from "@/lib/data";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';

const MenuPeek = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
        >
            <CarouselContent>
                {CATEGORIES.slice(0, 8).map((category, index) => (
                    <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/3">
                        <TiltCard category={category} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    );
};


function TiltCard({ category }: { category: typeof CATEGORIES[0]}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-150, 150], [10, -10]);
    const rotateY = useTransform(x, [-150, 150], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const { clientX, clientY } = event;
        const xPos = clientX - rect.left - rect.width / 2;
        const yPos = clientY - rect.top - rect.height / 2;
        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                perspective: 1000
            }}
            className="w-full"
        >
            <Link href={`/menu?category=${category.name}`}>
                <Card className="overflow-hidden transition-shadow hover:shadow-2xl">
                    <CardContent className="relative aspect-[4/3] p-0">
                        <Image
                            src={category.image.imageUrl}
                            alt={category.name}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            data-ai-hint={category.image.imageHint}
                            className="object-cover"
                            style={{ transform: "translateZ(20px)" }}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <h3 className="absolute bottom-4 left-4 font-headline text-2xl font-bold text-white" style={{ transform: "translateZ(50px)" }}>
                            {category.name}
                        </h3>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    )
}

export default MenuPeek;
