import { UtensilsCrossed, Loader2 } from "lucide-react";

export default function LoadingOverlay() {
    return (
        <div
            id="loading-overlay"
            className="fixed inset-0 z-[101] flex flex-col items-center justify-center bg-background text-foreground grainy-bg transition-opacity duration-300 ease-in-out"
            role="status"
            aria-busy="true"
            aria-live="polite"
        >
            <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-10 w-10 text-primary" />
                <span className="font-headline text-4xl font-bold">FoodPort</span>
            </div>
            <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <p>Loading your experience...</p>
            </div>
            <div className="absolute bottom-8 text-sm text-muted-foreground">
                Preparing your delicious journey...
            </div>
        </div>
    );
}
