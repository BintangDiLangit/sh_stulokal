"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { BackgroundShapes } from "./background-shapes";

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center relative bg-[#8B2635] overflow-hidden">
      <BackgroundShapes />
      
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-8 p-4 z-10">
        {/* Left side - Login Form */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">
                Enter your email and password to login to your account.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  className="h-12"
                />
              </div>
            </div>

            <Button className="w-full h-12 bg-[#8B2635] hover:bg-[#7A1F2D] text-white">
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-12">
              <CircleUserRound className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>

            <div className="space-y-2 text-center text-sm">
              <Link href="/forgot-password" className="text-[#8B2635] hover:underline">
                I forgot my password
              </Link>
              <div className="text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#8B2635] hover:underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Right side - Welcome Message */}
        <div className="hidden lg:flex flex-col justify-center text-white p-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">Welcome to</h1>
            <h2 className="text-6xl font-bold">Stulokal.</h2>
          </div>
        </div>
      </div>
    </main>
  );
}