import type { ImagePlaceholder } from './placeholder-images';

export type VegType = 'Veg' | 'Non-Veg' | 'Egg';

export type DishSize = 'Half' | 'Full' | 'Regular';

export interface Dish {
    id: string;
    name: string;
    description: string;
    category: string;
    vegType: VegType;
    sizes: {
        size: DishSize;
        price: number;
    }[];
    inStock: boolean;
    image: ImagePlaceholder;
}

export interface Category {
    id: string;
    name: string;
    image: ImagePlaceholder;
}
