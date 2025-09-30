import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <UtensilsCrossed className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">
        FoodPort
      </span>
        </Link>
    );
}
