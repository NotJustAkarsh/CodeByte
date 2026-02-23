"use client";

import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/dark-mode";

export function ArticlesNavbar() {

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left Section - Logo & Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg md:text-xl lg:text-2xl font-bold">
                <span className="bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Code
                </span>
                <span className="text-foreground">Byte</span>
              </span>
            </Link>
          </div>

          {/* Right Section - Search & Actions */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <ModeToggle />

            {/* User Actions */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
