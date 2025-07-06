export default function Hero() {
  return (
    <section className="w-full h-screen bg-[url('/therapistBackground.jpeg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Dr. Serena Blake, PsyD</h1>
      <h2 className="text-xl md:text-2xl mb-6">Helping you navigate anxiety, relationships & trauma</h2>
      <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg transition">Book a Free Consult</a>
    </section>
  );
}
