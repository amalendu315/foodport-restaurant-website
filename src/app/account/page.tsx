import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AccountPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-headline text-4xl font-bold mb-8">My Account</h1>
            <Tabs defaultValue="orders" className="w-full">
                <TabsList>
                    <TabsTrigger value="orders">Past Orders</TabsTrigger>
                    <TabsTrigger value="addresses">Saved Addresses</TabsTrigger>
                </TabsList>
                <TabsContent value="orders">
                    <Card>
                        <CardHeader>
                            <CardTitle>Past Orders</CardTitle>
                            <CardDescription>Here is a list of your recent orders.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">No past orders found.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="addresses">
                    <Card>
                        <CardHeader>
                            <CardTitle>Saved Addresses</CardTitle>
                            <CardDescription>Manage your delivery addresses.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">No saved addresses found.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
