import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Code, Wind, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">About This Application</CardTitle>
          <CardDescription>
            A demonstration of modern web development principles.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p>
                The <strong>React Router Explorer</strong> is a project designed to showcase a fluid, Single Page Application (SPA) experience within a robust framework. While the name pays homage to the classic `react-router`, this application is built on the powerful shoulders of Next.js and its App Router.
              </p>
              <p>
                Our goal is to deliver an interface that is both beautiful and highly performant, leveraging server components for speed and maintaining a rich, interactive client-side experience.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Abstract representation of routes and components"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="abstract technology"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
              <Zap className="w-10 h-10 mb-2 text-primary" />
              <h3 className="font-semibold">Performance First</h3>
              <p className="text-sm text-muted-foreground">Utilizing Next.js for optimized builds and fast page loads.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
              <Code className="w-10 h-10 mb-2 text-primary" />
              <h3 className="font-semibold">Modern Stack</h3>
              <p className="text-sm text-muted-foreground">Built with React, TypeScript, and styled with Tailwind CSS.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
              <Wind className="w-10 h-10 mb-2 text-primary" />
              <h3 className="font-semibold">Clean UI/UX</h3>
              <p className="text-sm text-muted-foreground">A minimal and intuitive design for a seamless user experience.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
