import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CookingPot, ExternalLink, Package, Bike } from "lucide-react";

export default function TrackOrderPage({ params }: { params: { orderId: string } }) {
    const statuses = [
        { name: 'Preparing', icon: CookingPot, complete: true },
        { name: 'Out for Delivery', icon: Bike, complete: true },
        { name: 'Delivered', icon: Package, complete: false },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-headline text-4xl font-bold mb-2 text-center">Track Your Order</h1>
            <p className="text-center text-muted-foreground mb-8">Order ID: #{params.orderId}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Map</CardTitle>
                            <CardDescription>Simulated driver location. This is not a real map.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                <p className="text-muted-foreground">Map Placeholder</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Status</CardTitle>
                            <CardDescription>Expected delivery: 10:30 PM</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="relative pl-6">
                                <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-border"></div>
                                {statuses.map((status, index) => (
                                    <div key={index} className="relative mb-6">
                                        <div className={`absolute -left-[32px] top-1.5 h-6 w-6 rounded-full flex items-center justify-center ${status.complete ? 'bg-primary' : 'bg-muted'}`}>
                                            {status.complete ? <CheckCircle className="h-4 w-4 text-primary-foreground" /> : <status.icon className="h-4 w-4 text-muted-foreground" />}
                                        </div>
                                        <p className={`font-semibold ${status.complete ? 'text-foreground' : 'text-muted-foreground'}`}>
                                            {status.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
