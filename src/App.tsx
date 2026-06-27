/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Portfolio1 } from "./components/Portfolio1";
import { Portfolio2 } from "./components/Portfolio2";
import { Portfolio4 } from "./components/Portfolio4";
import { Section3 } from "./components/Section3";
import { BooksScene } from "./components/BooksScene";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="w-full bg-light">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio4 />
      <Section3 />
      <BooksScene />
      <Footer />
    </main>
  );
}
