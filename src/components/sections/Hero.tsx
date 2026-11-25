import Elias from "@/components/ui/elias-author-hero";
import { hero } from "@/data/portfolio";

/** The editorial header at the top of the page. Content lives in `hero` in src/data/portfolio.ts. */
export function Hero() {
  return (
    <Elias
      id="home"
      brand={hero.brand}
      navLinks={hero.navLinks}
      navCta={hero.navCta}
      navStatus={hero.navStatus}
      name={hero.name}
      nameSize={hero.nameSize}
      intro={hero.intro}
      portrait={hero.portrait}
      books={hero.books}
      bookCard={hero.bookCard}
      letter={hero.letter}
      socialLinks={hero.socialLinks}
    />
  );
}
