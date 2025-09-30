"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Sparkles, Loader2 } from "lucide-react";
import { getPersonalizedDishRecommendations } from "@/ai/flows/personalized-dish-recommendations";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function AiRecommendationsDialog() {
    const [recommendations, setRecommendations] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetRecommendations = async () => {
        setIsLoading(true);
        setError(null);
        setRecommendations([]);

        try {
            const result = await getPersonalizedDishRecommendations({
                orderHistory: ["Chicken Biryani", "Paneer Butter Masala"],
                dietaryPreferences: ["Chicken", "Veg"],
                currentFoodTrends: "Healthy fusion bowls, regional Indian specialties",
            });
            setRecommendations(result.recommendations);
        } catch (e) {
            setError("Sorry, we couldn't get recommendations right now. Please try again later.");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button onClick={handleGetRecommendations} className="font-bold">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Personalized Recommendations
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="text-primary"/> Personalized For You
                    </DialogTitle>
                    <DialogDescription>
                        Based on your taste, here are some dishes we think you'll love.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    {isLoading && (
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Finding your next favorite dish...</span>
                        </div>
                    )}
                    {error && (
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {!isLoading && recommendations.length > 0 && (
                        <ul className="space-y-2">
                            {recommendations.map((rec, index) => (
                                <li key={index} className="rounded-md border bg-secondary/50 p-3 font-medium text-secondary-foreground">
                                    {rec}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
