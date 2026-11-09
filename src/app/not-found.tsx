import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 pt-32 text-center">
      <LogoMark className="w-24" />
      <h1 className="mt-10 text-headline uppercase">Lost at sea</h1>
      <p className="mt-6 max-w-sm text-mute">This page drifted off. Let’s get you back to shore.</p>
      <Button href="/" className="mt-10">Back home</Button>
    </section>
  );
}
