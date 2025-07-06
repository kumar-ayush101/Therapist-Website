export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      desc: "Guiding you through techniques and insights to manage overwhelming thoughts and regain calm.",
      img: "/anxietyStress.jpeg" 
    },
    {
      title: "Relationship Counseling",
      desc: "Helping couples and individuals build stronger, healthier connections through understanding and communication.",
      img: "/relationshipCounselling.jpeg"
    },
    {
      title: "Trauma Recovery",
      desc: "Offering a safe, compassionate space to process past traumas and move towards healing.",
      img: "/traumaRecovery.jpeg"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 py-20 bg-gray-50" id="services">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Services</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={service.img} alt={service.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
