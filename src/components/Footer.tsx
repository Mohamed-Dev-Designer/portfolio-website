export function Footer() {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      <img
        src={`${import.meta.env.BASE_URL}assets/end.png`}
        alt="End"
        className="w-full h-auto object-contain"
      />
    </section>
  );
}
