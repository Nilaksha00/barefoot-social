import { ImageTiles } from "@/components/sections/shared/ImageTiles";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/content/home";

/** Eat. Drink. Stay. Surf. as four large photo blocks, each linking to its page. */
export function Pillars() {
  return (
    <section id="explore" className="scroll-mt-20 pb-28 md:pb-32">
      <Container>
        <Reveal>
          <Eyebrow>Under one roof</Eyebrow>
          <h2 className="mt-4 text-heading uppercase">Eat. Drink. Stay. Surf.</h2>
        </Reveal>
        <ImageTiles tiles={pillars} columns={4} className="mt-12 md:mt-14" />
      </Container>
    </section>
  );
}
