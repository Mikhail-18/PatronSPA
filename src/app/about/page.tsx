import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Code, Wind, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Sobre este proyecto</CardTitle>
          <CardDescription>
            Una demostración de los principios modernos de desarrollo web.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p>
                La <strong>Single Page Application</strong> es un proyecto diseñado para mostrar una experiencia fluida de Aplicación de Página Única (SPA) dentro de un marco de trabajo robusto. Esta aplicación está construida sobre los potentes cimientos de Next.js y su App Router.
              </p>
              <p>
                Nuestro objetivo es ofrecer una interfaz que sea a la vez atractiva y de alto rendimiento, aprovechando los componentes de servidor para la velocidad y manteniendo una experiencia de cliente rica e interactiva.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Representación abstracta de rutas y componentes"
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
              <h3 className="font-semibold">Rendimiento Primero</h3>
              <p className="text-sm text-muted-foreground">Utilizando Next.js para compilaciones optimizadas y cargas de página rápidas.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
              <Code className="w-10 h-10 mb-2 text-primary" />
              <h3 className="font-semibold">Stack Moderno</h3>
              <p className="text-sm text-muted-foreground">Construido con React, TypeScript, y estilizado con Tailwind CSS.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background">
              <Wind className="w-10 h-10 mb-2 text-primary" />
              <h3 className="font-semibold">UI/UX Limpia</h3>
              <p className="text-sm text-muted-foreground">Un diseño minimalista e intuitivo para una experiencia de usuario fluida.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
