'use client'

import { Bell, Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <nav className="grid gap-1 p-4">
              <Link
                href="#overview"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                  <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="18" rx="2" width="18" x="3" y="3" />
                    <path d="M9 7v10" />
                    <path d="M15 7v10" />
                  </svg>
                </div>
                Overview
              </Link>
              <Link
                href="#experience"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                  <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                Experience
              </Link>
              <Link
                href="#projects"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                  <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                Projects
              </Link>
              <Link
                href="#skills"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                  <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                  </svg>
                </div>
                Skills
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                  <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect height="8" rx="1" width="18" x="3" y="4" />
                    <path d="M4 12h16" />
                  </svg>
                </div>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <svg
              className=" h-6 w-6"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
            </svg>
            Portfolio
          </Link>
        </div>
        <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <input
                className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <span className="font-semibold">JD</span>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[300px] flex-col border-r bg-gray-100/40 px-4 py-6 dark:bg-gray-800/40 lg:flex">
          <nav className="grid gap-2">
            <Link
              href="#overview"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect height="18" rx="2" width="18" x="3" y="3" />
                  <path d="M9 7v10" />
                  <path d="M15 7v10" />
                </svg>
              </div>
              Overview
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              Experience
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              Projects
            </Link>
            <Link
              href="#skills"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12  2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
              </div>
              Skills
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                  <rect height="8" rx="1" width="18" x="3" y="4" />
                  <path d="M4 12h16" />
                </svg>
              </div>
              Contact
            </Link>
          </nav>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className=" h-6 w-6 text-blue-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome</h1>
              <p className="text-gray-500 dark:text-gray-400">You're viewing John Doe's Portfolio</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:bg-gray-100/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg
                      className=" h-4 w-4 text-blue-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">View Experience</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Check out my professional journey</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:bg-gray-100/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg
                      className=" h-4 w-4 text-blue-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Browse Projects</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Explore my portfolio of work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:bg-gray-100/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg
                      className=" h-4 w-4 text-blue-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect height="8" rx="1" width="18" x="3" y="4" />
                      <path d="M4 12h16" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Contact Me</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Get in touch for opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 rounded-lg bg-gray-100/50 p-6 dark:bg-gray-800/50">
            <h2 className="text-xl font-semibold">Featured Project</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Check out my latest work</p>
            <Button className="mt-4">View Project</Button>
          </div>
        </main>
      </div>
    </div>
  )
}