import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full -mt-16">
      <Frown className="w-24 h-24 text-primary/50 mb-4" />
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Oops! Page not found.</p>
      <p className="mt-2 text-base text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
      <Button asChild className="mt-8">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
