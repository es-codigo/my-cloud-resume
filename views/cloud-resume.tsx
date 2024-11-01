import { Bell, Menu, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col bg-white p-4 md:flex">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Welcome to My Cloud Resume</h1>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-500" />
            <Bell className="h-6 w-6 text-gray-500" />
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              J
            </div>
          </div>
        </header>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <QuickAccessItem icon="🧑‍💻" title="Skills" />
              <QuickAccessItem icon="🏆" title="Projects" />
              <QuickAccessItem icon="📚" title="Education" />
              <QuickAccessItem icon="💼" title="Experience" />
              <QuickAccessItem icon="🌟" title="Achievements" />
              <QuickAccessItem icon="📞" title="Contact" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Cloud Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experienced in cloud technologies and modern web development.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm">AWS</Button>
                <Button variant="outline" size="sm">Google Cloud</Button>
                <Button variant="outline" size="sm">Azure</Button>
                <Button variant="outline" size="sm">Docker</Button>
                <Button variant="outline" size="sm">Kubernetes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <ProjectCard
                title="Cloud-native App"
                description="Developed a scalable, microservices-based application using Kubernetes and Docker."
              />
              <ProjectCard
                title="Serverless API"
                description="Built a high-performance API using AWS Lambda and API Gateway."
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function Sidebar() {
  return (
    <>
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          J
        </div>
        <span className="text-lg font-semibold">John Doe</span>
      </div>
      <nav className="space-y-2">
        <NavItem icon="📊" label="Dashboard" />
        <NavItem icon="🧑‍💻" label="Skills" />
        <NavItem icon="🏆" label="Projects" />
        <NavItem icon="📚" label="Education" />
        <NavItem icon="💼" label="Experience" />
        <NavItem icon="🌟" label="Achievements" />
        <NavItem icon="📞" label="Contact" />
      </nav>
    </>
  )
}

function NavItem({ icon, label }: { icon: string; label: string }) {
  return (
    <Link
      href="#"
      className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

function QuickAccessItem({ icon, title }: { icon: string; title: string }) {
  return (
    <Button variant="outline" className="h-24 flex-col items-center justify-center space-y-2">
      <span className="text-2xl">{icon}</span>
      <span>{title}</span>
    </Button>
  )
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}