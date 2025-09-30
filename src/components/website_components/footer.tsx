import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-muted-foreground">
                            Your favorite destination for Chinese, Mughlai & Indian cuisine.
                            Order direct and enjoy exclusive savings.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold">Contact & Hours</h3>
                        <div className="mt-4 space-y-2 text-muted-foreground">
                            <p>
                                <strong>Address:</strong> Near Giri Namkeen, Ghorabandha Main
                                Road, Telco, Jamshedpur
                            </p>
                            <p>
                                <strong>Phone:</strong>{" "}
                                <a href="tel:9572729138" className="hover:text-primary">
                                    9572729138
                                </a>
                            </p>
                            <p>
                                <strong>Hours:</strong> 11:00 AM – 11:00 PM
                            </p>
                            <p>
                                <strong>Pincodes:</strong> 831001, 831002, 831004
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li>
                                <Link href="/menu" className="hover:text-primary">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/account" className="hover:text-primary">
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Terms & Policies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} FoodPort. All Rights Reserved.
                    </p>
                    <div className="mt-4 flex gap-2 sm:mt-0">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Made with passion by AuraKode.
                    </p>
                </div>
            </div>
        </footer>
    );
}
