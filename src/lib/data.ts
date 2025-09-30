import type { Category, Dish } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback to a default image if not found
        return { id: 'fallback', description: 'Food item', imageUrl: 'https://picsum.photos/seed/fallback/400/300', imageHint: 'food' };
    }
    return image;
};

export const CATEGORIES: Category[] = [
    { id: 'veg-soup', name: 'Veg Soup', image: getImage('veg-soup') },
    { id: 'non-veg-soup', name: 'Non-Veg Soup', image: getImage('non-veg-soup') },
    { id: 'momos', name: 'Momos', image: getImage('momos') },
    { id: 'chinese-veg-starters', name: 'Chinese Veg – Starters', image: getImage('chinese-veg-starters') },
    { id: 'chinese-veg-noodles', name: 'Chinese Veg – Noodles', image: getImage('chinese-veg-noodles') },
    { id: 'chinese-non-veg', name: 'Chinese Non-Veg', image: getImage('chinese-non-veg') },
    { id: 'biryani', name: 'Biryani', image: getImage('biryani') },
    { id: 'rolls', name: 'Rolls', image: getImage('rolls') },
    { id: 'kababs', name: 'Kababs', image: getImage('kababs') },
    { id: 'indian-snacks', name: 'Indian Snacks', image: getImage('indian-snacks') },
    { id: 'dal', name: 'Dal', image: getImage('dal') },
    { id: 'veg-indian', name: 'Veg Indian', image: getImage('veg-indian') },
    { id: 'non-veg-indian', name: 'Non-Veg Indian', image: getImage('non-veg-indian') },
    { id: 'rice', name: 'Rice (Veg & Non Veg)', image: getImage('rice') },
    { id: 'roti-paratha', name: 'Roti & Paratha', image: getImage('roti-paratha') },
    { id: 'house-specials', name: 'House Specials', image: getImage('house-specials') },
];

export const DISHES: Dish[] = [
    {
        id: 'd1',
        name: 'Tomato Soup',
        description: 'A classic creamy soup made from fresh, ripe tomatoes and aromatic herbs.',
        category: 'Veg Soup',
        vegType: 'Veg',
        sizes: [{ size: 'Regular', price: 120 }],
        inStock: true,
        image: getImage('dish-1'),
    },
    {
        id: 'd2',
        name: 'Veg Manchow Soup',
        description: 'A spicy and tangy soup loaded with chopped vegetables and crispy noodles.',
        category: 'Veg Soup',
        vegType: 'Veg',
        sizes: [{ size: 'Regular', price: 140 }],
        inStock: true,
        image: getImage('dish-2'),
    },
    {
        id: 'd3',
        name: 'Chicken Manchow Soup',
        description: 'A hearty soup with tender chicken, vegetables, and a spicy broth.',
        category: 'Non-Veg Soup',
        vegType: 'Non-Veg',
        sizes: [{ size: 'Regular', price: 160 }],
        inStock: true,
        image: getImage('dish-3'),
    },
    {
        id: 'd4',
        name: 'Steamed Veg Momos',
        description: 'Delicate dumplings filled with a savory mix of minced vegetables.',
        category: 'Momos',
        vegType: 'Veg',
        sizes: [{ size: 'Regular', price: 150 }],
        inStock: true,
        image: getImage('dish-4'),
    },
    {
        id: 'd5',
        name: 'Paneer Butter Masala',
        description: 'Soft paneer cubes simmered in a rich and creamy tomato-based gravy.',
        category: 'Veg Indian',
        vegType: 'Veg',
        sizes: [
            { size: 'Half', price: 180 },
            { size: 'Full', price: 320 },
        ],
        inStock: true,
        image: getImage('dish-11'),
    },
    {
        id: 'd6',
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice cooked with succulent chicken and fragrant spices.',
        category: 'Biryani',
        vegType: 'Non-Veg',
        sizes: [
            { size: 'Half', price: 250 },
            { size: 'Full', price: 450 },
        ],
        inStock: true,
        image: getImage('dish-6'),
    },
    {
        id: 'd7',
        name: 'Mutton Biryani',
        description: 'Tender mutton pieces layered with flavorful rice, a true classic.',
        category: 'Biryani',
        vegType: 'Non-Veg',
        sizes: [
            { size: 'Half', price: 300 },
            { size: 'Full', price: 550 },
        ],
        inStock: false,
        image: getImage('dish-7'),
    },
    {
        id: 'd8',
        name: 'Chicken Kati Roll',
        description: 'Spicy chicken tikka wrapped in a flaky paratha with onions and chutney.',
        category: 'Rolls',
        vegType: 'Non-Veg',
        sizes: [{ size: 'Regular', price: 180 }],
        inStock: true,
        image: getImage('dish-8'),
    },
    {
        id: 'd9',
        name: 'Butter Chicken',
        description: 'Grilled chicken cooked in a smooth, buttery and creamy tomato gravy.',
        category: 'Non-Veg Indian',
        vegType: 'Non-Veg',
        sizes: [
            { size: 'Half', price: 280 },
            { size: 'Full', price: 500 },
        ],
        inStock: true,
        image: getImage('dish-12'),
    },
    {
        id: 'd10',
        name: 'Dal Makhani',
        description: 'Black lentils slow-cooked with butter and cream for a rich, flavorful dish.',
        category: 'Dal',
        vegType: 'Veg',
        sizes: [
            { size: 'Half', price: 160 },
            { size: 'Full', price: 290 },
        ],
        inStock: true,
        image: getImage('dish-10'),
    },
];
