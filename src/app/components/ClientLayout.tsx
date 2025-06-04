"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between py-4 px-6 md:px-12 bg-background text-foreground border-b border-gray-200 dark:border-gray-800"
        >
          <Link
            href="/"
            className="text-xl font-bold focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Home"
          >
            Likha AI
          </Link>
          <ul className="flex gap-6 items-center" role="menubar">
            <li role="none">
              <Link
                role="menuitem"
                href="/about"
                className="hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="/services"
                className="hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
              >
                Services
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="/contact"
                className="hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <a
              href="mailto:info@codecraftbyfranzyn.com"
              className="bg-blue-600 text-white rounded-full px-4 py-2 font-semibold shadow hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-500 transition-colors"
              aria-label="Email us"
            >
              Email Us
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 py-8 px-6 md:px-12 bg-background text-foreground text-center flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Likha AI. All rights reserved.
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="mailto:info@codecraftbyfranzyn.com"
            className="underline hover:text-blue-600 focus:outline focus:outline-2 focus:outline-blue-500"
          >
            info@codecraftbyfranzyn.com
          </a>
          <span className="hidden md:inline">|</span>
          <Link
            href="/contact"
            className="underline hover:text-blue-600 focus:outline focus:outline-2 focus:outline-blue-500"
          >
            Contact
          </Link>
        </div>
      </footer>
    </>
  );
}
