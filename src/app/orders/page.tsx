import Link from "next/link";

export default function OrdersPage() {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold">My Orders</h1>
            <p className="mt-4 text-muted-foreground">View your order history and track current orders.</p>
            <p className="mt-2">
                Example: <Link href="/track/test-order-123" className="text-primary underline">Track Order #test-order-123</Link>
            </p>
        </div>
    );
}
