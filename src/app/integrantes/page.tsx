import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const teamMembers = [
  "Guillen Herrera Mijail Franco",
  "Namay Cabanillas, Angel Leonard",
  "Malpartida Lujan, Maria Cristina",
  "BRYAN THOMAS SZOTT SANGAMA",
];

export default function IntegrantesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 text-primary" />
            <div>
              <CardTitle className="text-3xl font-headline">Integrantes del Grupo</CardTitle>
              <CardDescription>
                Conoce al equipo detrás de este proyecto.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 list-disc list-inside">
            {teamMembers.map((member, index) => (
              <li key={index} className="text-lg text-foreground">
                {member}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
