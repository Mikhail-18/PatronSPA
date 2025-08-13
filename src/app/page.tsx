import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Info, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-headline">
          Welcome to React Router Explorer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          This is a modern React application demonstrating Single Page Application (SPA) navigation patterns using Next.js. Explore different pages to see the seamless transitions in action.
        </p>
      </section>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <HomeIcon className="w-8 h-8 text-primary" />
            <div className="space-y-1">
              <CardTitle>Home</CardTitle>
              <CardDescription>The starting point of your journey.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is the main landing page. It provides an overview of the application's features and purpose.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Info className="w-8 h-8 text-primary" />
            <div className="space-y-1">
              <CardTitle>About</CardTitle>
              <CardDescription>Learn more about the project.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Discover the story behind this application, its tech stack, and its development philosophy.
            </p>
            <Button asChild variant="link" className="px-0">
              <Link href="/about">Explore About Page &rarr;</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Mail className="w-8 h-8 text-primary" />
            <div className="space-y-1">
              <CardTitle>Contact</CardTitle>
              <CardDescription>Get in touch with us.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Have a question or feedback? We'd love to hear from you. Check out our contact form.
            </p>
            <Button asChild variant="link" className="px-0">
              <Link href="/contact">Go to Contact Page &rarr;</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
