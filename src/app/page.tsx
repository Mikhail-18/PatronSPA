import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Info, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-headline">
          Bienvenido querido Profesor
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Esta es una aplicación moderna de React que demuestra patrones de navegación de Aplicación de Página Única (SPA: Single Page Application) usando Next.js. Permite cargar una sola página web y actualizar dinámicamente el contenido sin recargar la página. Explora las diferentes páginas para ver las transiciones fluidas en acción.
        </p>
      </section>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <HomeIcon className="w-8 h-8 text-primary" />
            <div className="space-y-1">
              <CardTitle>Inicio</CardTitle>
              <CardDescription>El punto de partida de tu viaje.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Esta es la página principal de aterrizaje. Proporciona una visión general de las características y el propósito de la aplicación.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Info className="w-8 h-8 text-primary" />
            <div className="space-y-1">
              <CardTitle>Sobre este proyecto</CardTitle>
              <CardDescription>Aprende más sobre el proyecto.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Descubre la historia detrás de esta aplicación, su stack tecnológico y su filosofía de desarrollo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
