import { cn } from "@/lib/utils";
import type { VegType } from "@/lib/types";

interface VegIndicatorProps {
    vegType: VegType;
    className?: string;
}

export default function VegIndicator({ vegType, className }: VegIndicatorProps) {
    const colorClass =
        vegType === "Veg"
            ? "border-green-600 bg-green-600"
            : vegType === "Non-Veg"
                ? "border-red-600 bg-red-600"
                : "border-yellow-600 bg-yellow-600";

    return (
        <div
            title={vegType}
            className={cn(
                "flex h-5 w-5 items-center justify-center rounded-sm border-2",
                vegType === 'Veg' ? 'border-green-600' : 'border-red-600',
                className
            )}
        >
            <div
                className={cn(
                    "h-2.5 w-2.5 rounded-full",
                    vegType === 'Veg' ? 'bg-green-600' : 'bg-red-600'
                )}
            />
        </div>
    );
}
