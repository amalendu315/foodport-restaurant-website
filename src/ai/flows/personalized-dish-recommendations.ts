'use server';
/**
 * @fileOverview Personalized dish recommendations flow.
 *
 * - getPersonalizedDishRecommendations - A function that returns personalized dish recommendations.
 * - PersonalizedDishRecommendationsInput - The input type for the getPersonalizedDishRecommendations function.
 * - PersonalizedDishRecommendationsOutput - The return type for the getPersonalizedDishRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedDishRecommendationsInputSchema = z.object({
    orderHistory: z.array(z.string()).describe('The user order history as an array of dish names.'),
    dietaryPreferences: z.array(z.enum(['Veg', 'Egg', 'Chicken', 'Fish'])).describe('The user dietary preferences.'),
    currentFoodTrends: z.string().describe('Current food trends.'),
});
export type PersonalizedDishRecommendationsInput = z.infer<typeof PersonalizedDishRecommendationsInputSchema>;

const PersonalizedDishRecommendationsOutputSchema = z.object({
    recommendations: z.array(z.string()).describe('An array of personalized dish recommendations.'),
});
export type PersonalizedDishRecommendationsOutput = z.infer<typeof PersonalizedDishRecommendationsOutputSchema>;

export async function getPersonalizedDishRecommendations(input: PersonalizedDishRecommendationsInput): Promise<PersonalizedDishRecommendationsOutput> {
    return personalizedDishRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
    name: 'personalizedDishRecommendationsPrompt',
    input: {schema: PersonalizedDishRecommendationsInputSchema},
    output: {schema: PersonalizedDishRecommendationsOutputSchema},
    prompt: `You are a restaurant expert with a deep understanding of Chinese, Mughlai & Indian cuisine.

Based on the user's order history, dietary preferences, and current food trends, provide personalized dish recommendations.

Order History: {{#if orderHistory}}{{#each orderHistory}}- {{{this}}}\n{{/each}}{{else}}No order history available.{{/if}}
Dietary Preferences: {{#if dietaryPreferences}}{{#each dietaryPreferences}}- {{{this}}}\n{{/each}}{{else}}No dietary preferences specified.{{/if}}
Current Food Trends: {{{currentFoodTrends}}}

Recommendations:`, // Ensure the model returns an array of strings
});

const personalizedDishRecommendationsFlow = ai.defineFlow(
    {
        name: 'personalizedDishRecommendationsFlow',
        inputSchema: PersonalizedDishRecommendationsInputSchema,
        outputSchema: PersonalizedDishRecommendationsOutputSchema,
    },
    async input => {
        const {output} = await prompt(input);
        return output!;
    }
);
