import Elias from "@/components/ui/elias-author-hero";
import { hero } from "@/data/portfolio";

/** The intro splash plays on the first visit of a browser session only; reloads go straight to the page.
 *  Read once when the page loads (outside React, so StrictMode's double render can't flip it). */
const showSplash = (() => {
  try {
    const seen = sessionStorage.getItem("hero-splash-seen") === "1";
    sessionStorage.setItem("hero-splash-seen", "1");
    return !seen;
  } catch {
    return true; // storage blocked: just show it
  }
})();

/** The editorial header at the top of the page. Content lives in `hero` in src/data/portfolio.ts. */
export function Hero() {
  return (
    <Elias
      id="home"
      showSplash={showSplash}
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
