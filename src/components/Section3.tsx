import { OsmoDock } from "./OsmoDock";

export function Section3() {
  return (
    <section className="h-auto md:h-screen w-full relative overflow-hidden bg-white">
      <img 
        src="/assets/sections 3.png" 
        alt="Section 3" 
        className="w-full h-auto md:h-full md:object-cover block" 
      />
      <OsmoDock />
    </section>
  );
}
