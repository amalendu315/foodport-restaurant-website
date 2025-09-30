"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { PasswordInput } from "@/components/website_components/password-input";
import Image from "next/image";


export default function SignupPage() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background p-4">
            <div className="w-full max-w-4xl">
                <Card className="grid grid-cols-1 overflow-hidden shadow-2xl md:grid-cols-2">
                    <div className="flex flex-col justify-center p-8 sm:p-12">
                        <CardHeader className="p-0 text-left">
                            <CardTitle className="font-headline text-3xl">Create Your Account</CardTitle>
                            <CardDescription className="text-base">Join us to get started with your first order.</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-6 grid gap-4 p-0">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput id="password" required />
                            </div>
                        </CardContent>
                        <div className="mt-6 flex flex-col gap-4">
                            <Button className="w-full font-bold">Create Account</Button>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or
                            </span>
                                </div>
                            </div>
                            <div className="text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link href="/login" className="font-semibold text-primary underline-offset-4 hover:underline">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden aspect-square md:block">
                        <Image
                            src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxiaXJ5YW5pJTIwcmljZXxlbnwwfHx8fDE3NTkyNDUzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Delicious biryani"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 0, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 right-6 text-right text-white">
                            <h2 className="font-headline text-3xl font-bold">Fast. Fresh. Flavorful.</h2>
                            <p className="mt-2 text-lg text-white/90">Sign up in seconds.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
