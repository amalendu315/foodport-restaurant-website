"use client";

import { useState, useMemo, type FC } from "react";
import type { Dish, Category } from "@/lib/types";
import { DISHES, CATEGORIES } from "@/lib/data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import DishCard from "@/components/website_components/dish-card";
import AiRecommendationsDialog from "@/components/website_components/ai-recommendations-dialog";

const MenuPage = () => {
    const [dishes] = useState<Dish[]>(DISHES);
    const [categories] = useState<Category[]>(CATEGORIES);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
    const [foodType, setFoodType] = useState<string | "all">("all");
    const [priceRange, setPriceRange] = useState<[number]>([800]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortOrder, setSortOrder] = useState("popularity");
    const [selectedFilterCategories, setSelectedFilterCategories] = useState<string[]>([]);

    const filteredDishes = useMemo(() => {
        return dishes
            .filter((dish) =>
                dish.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(
                (dish) =>
                    selectedCategory === "all" || dish.category === selectedCategory
            )
            .filter(
                (dish) => foodType === "all" || (foodType === "Veg" && dish.vegType === 'Veg') || (foodType === "Non-Veg" && (dish.vegType === 'Non-Veg' || dish.vegType === 'Egg'))
            )
            .filter(dish => dish.sizes.some(s => s.price <= priceRange[0]))
            .filter(dish => !inStockOnly || dish.inStock)
            .filter(dish => selectedFilterCategories.length === 0 || selectedFilterCategories.includes(dish.category))
            .sort((a, b) => {
                if (sortOrder === "price-asc") {
                    return a.sizes[0].price - b.sizes[0].price;
                }
                if (sortOrder === "price-desc") {
                    return b.sizes[0].price - a.sizes[0].price;
                }
                return 0; // for popularity
            });
    }, [searchQuery, selectedCategory, foodType, priceRange, inStockOnly, dishes, sortOrder, selectedFilterCategories]);

    const handleCategoryFilterChange = (categoryId: string) => {
        setSelectedFilterCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                <h1 className="font-headline text-4xl font-bold">Our Menu</h1>
                {/*<AiRecommendationsDialog />*/}
            </div>

            <div className="mb-8">
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {categories.map((category) => (
                            <CarouselItem key={category.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                                <div onClick={() => setSelectedCategory(category.name)} className="cursor-pointer">
                                    <Card className="overflow-hidden">
                                        <CardContent className="relative aspect-[4/3] p-0">
                                            <Image
                                                src={category.image.imageUrl}
                                                alt={category.name}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                data-ai-hint={category.image.imageHint}
                                                className="object-cover transition-transform hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40" />
                                            <h3 className="absolute bottom-2 left-2 font-headline text-lg font-bold text-white">
                                                {category.name}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <aside className="md:col-span-1">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-headline text-2xl font-bold mb-4">Filters</h3>
                            <div className="space-y-6">
                                <div>
                                    <Label className="font-semibold">Food Type</Label>
                                    <RadioGroup value={foodType} onValueChange={setFoodType} className="mt-2 space-y-2">
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="all" id="ft-all" /><Label htmlFor="ft-all">All</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="Veg" id="ft-veg" /><Label htmlFor="ft-veg">Veg</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="Non-Veg" id="ft-non-veg" /><Label htmlFor="ft-non-veg">Non-Veg</Label></div>
                                    </RadioGroup>
                                </div>
                                <div>
                                    <Label className="font-semibold">Categories</Label>
                                    <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
                                        {categories.map(cat => (
                                            <div key={cat.id} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`cat-${cat.id}`}
                                                    onCheckedChange={() => handleCategoryFilterChange(cat.name)}
                                                    checked={selectedFilterCategories.includes(cat.name)}
                                                />
                                                <Label htmlFor={`cat-${cat.id}`}>{cat.name}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="price-range" className="font-semibold">Price Range</Label>
                                    <div className="text-right text-primary font-bold">Up to ₹{priceRange[0]}</div>
                                    <Slider id="price-range" min={50} max={800} step={10} value={priceRange} onValueChange={()=>{}} className="mt-2"/>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="in-stock" checked={inStockOnly} onCheckedChange={setInStockOnly} />
                                        <Label htmlFor="in-stock" className="font-semibold">In Stock Only</Label>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </aside>

                <main className="md:col-span-3">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                        <div className="relative w-full md:max-w-xs">
                            <Input placeholder="Search dishes..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                        </div>
                        <div className="w-full md:w-auto">
                            <Select value={sortOrder} onValueChange={setSortOrder}>
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popularity">Popularity</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredDishes.map(dish => (
                            <DishCard key={dish.id} dish={dish} />
                        ))}
                    </div>
                    {filteredDishes.length === 0 && (
                        <div className="text-center py-16 text-muted-foreground">
                            <p className="text-lg">No dishes found.</p>
                            <p>Try adjusting your filters.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MenuPage;
