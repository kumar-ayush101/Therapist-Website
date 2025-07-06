export default function About() {
  return (
    <section className="max-w-4xl mx-auto p-6 py-16" id="about">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
  src="/therapistPerson.jpeg"
  alt="Dr. Serena Blake"
  className="w-64 h-64 rounded-full object-cover shadow-lg"
/>

        <div>
          <h2 className="text-3xl font-bold mb-4">About Dr. Blake</h2>
          <p className="mb-4">Dr. Serena Blake is a licensed clinical psychologist (PsyD) in Los Angeles, with 8 years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.</p>
          <p>Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
        </div>
      </div>
    </section>
  );
}
