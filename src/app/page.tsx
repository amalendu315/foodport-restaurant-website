import Link from "next/link";
import { ArrowRight, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHeadline from "@/components/website_components/animated-headline";
import TypeOnce from "@/components/website_components/type-once";
import ValuePropCard from "@/components/website_components/value-prop-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import MenuPeek from "@/components/website_components/menu-peek";
import Testimonials from "@/components/website_components/testimonials";
import LocationMap from "@/components/website_components/location-map";
import { Input } from "@/components/ui/input";
import StickyOrderBar from "@/components/website_components/sticky-order-bar";
import Image from "next/image";

const heroImage = PlaceHolderImages.find(img => img.id === 'house-specials');

export default function Home() {
    return (
        <>
            <div className="relative overflow-hidden">
                <section className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-8 px-4 py-8 md:grid-cols-2 md:py-16">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <AnimatedHeadline
                            as="h1"
                            className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
                            text="FoodPort Restaurant"
                        />
                        <TypeOnce
                            as="p"
                            className="mt-4 max-w-lg text-base text-muted-foreground md:text-xl"
                            text="Chinese, Mughlai & Indian delight. Order direct and save!"
                        />

                        <div className="mt-6 w-full max-w-sm md:hidden">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search 150+ dishes..." className="w-full pl-9" />
                            </div>
                        </div>

                        <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                            <Button asChild size="lg" className="w-full font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow md:w-auto">
                                <Link href="/menu">
                                    View Menu <ArrowRight />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="w-full font-bold md:w-auto">
                                <Link href="/track/test-order-123">
                                    Track Order
                                </Link>
                            </Button>
                        </div>
                        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground md:mt-4">
                            Near Giri Namkeen, Ghorabandha Main Road, Telco, Jamshedpur
                        </p>
                    </div>
                    <div className="relative hidden h-full min-h-[400px] w-full md:block">
                        {heroImage && (
                            <MenuPeek />
                        )}
                    </div>
                </section>
            </div>

            <section className="border-y bg-background/50">
                <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 lg:py-16">
                    <ValuePropCard
                        icon="upi"
                        title="UPI & Cards"
                        description="Fast, secure payments with your favorite method."
                    />
                    <ValuePropCard
                        icon="rupee"
                        title="Pay on Delivery"
                        description="Prefer cash? No problem. Pay when your order arrives."
                    />
                    <ValuePropCard
                        icon="truck"
                        title="Live Tracking"
                        description="Watch your meal's journey from our kitchen to your door."
                    />
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 lg:py-24">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-4xl font-bold">From Our Kitchen</h2>
                    <p className="mt-2 text-lg text-muted-foreground">A glimpse of our most-loved dishes</p>
                </div>
                <div className="md:hidden">
                    {heroImage && (
                        <Link href={`/menu?category=${heroImage.id}`}>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="100vw"
                                    data-ai-hint={heroImage.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-4 left-4 font-headline text-2xl font-bold text-white">
                                    {heroImage.description}
                                </h3>
                            </div>
                        </Link>
                    )}
                </div>
                <div className='hidden md:block'>
                    <MenuPeek />
                </div>
                <div className="mt-12 text-center">
                    <Button asChild variant="link" className="text-lg">
                        <Link href="/menu">View Full Menu <ArrowRight /></Link>
                    </Button>
                </div>
            </section>

            <section className="bg-secondary/50">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="mb-12 text-center">
                        <h2 className="font-headline text-4xl font-bold">What Our Customers Say</h2>
                        <div className="mt-2 flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                            <span className="ml-2 font-medium text-muted-foreground">4.8 from 500+ reviews</span>
                        </div>
                    </div>
                    <Testimonials />
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="font-headline text-4xl font-bold">Find Us</h2>
                        <div className="mt-4 space-y-4 text-muted-foreground">
                            <p>
                                <strong>Address:</strong> Near Giri Namkeen, Ghorabandha Main Road, Telco, Jamshedpur, Jharkhand 831004
                            </p>
                            <p>
                                <strong>Hours:</strong> 11:00 AM – 11:00 PM, Daily
                            </p>
                            <p>
                                <strong>Phone:</strong> <a href="tel:9572729138" className="text-primary hover:underline">9572729138</a>
                            </p>
                        </div>
                        <Button asChild className="mt-6 font-bold">
                            <a href="https://www.google.com/maps/search/?api=1&query=Giri+Namkeen+Ghorabandha+Main+Road+Telco+Jamshedpur" target="_blank" rel="noopener noreferrer">
                                Get Directions
                            </a>
                        </Button>
                    </div>
                    <LocationMap />
                </div>
            </section>

            <StickyOrderBar />
        </>
    );
}
