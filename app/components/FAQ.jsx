"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "Do you accept insurance?", a: "No, but a superbill is provided for self-submission." },
    { q: "Are online sessions available?", a: "Yes—all virtual sessions via Zoom." },
    { q: "What is your cancellation policy?", a: "24-hour notice required." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-blue-400 mt-50 max-w-4xl mx-auto p-6 py-20 rounded-xl" id="faq">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-900">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left text-xl font-semibold text-blue-800 flex justify-between items-center transition"
          >
            {faq.q}
            <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>⌄</span>
          </button>
          {openIndex === index && (
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </section>
  );
}
