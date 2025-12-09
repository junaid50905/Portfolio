"use client";
import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";

export default function FAQ() {
  const faqs = [
    { id: "01", question: "How far in advance should I book ?", answer: "Most clients book 2–4 weeks ahead. Early booking ensures faster turnaround and availability." },
    { id: "02", question: "Do I need design experience to use this?", answer: "No design experience needed. Everything is pre-designed and easy to edit visually." },
    { id: "03", question: "Can the template be customized to my brand?", answer: "Yes! You can change colors, fonts, layout blocks, and images to match your brand style." },
    { id: "04", question: "How long does it take to launch my site?", answer: "Most users launch within 3–5 days depending on how fast content is prepared." },
    { id: "05", question: "Is support available if I get stuck?", answer: "Absolutely. You’ll get step-by-step guidance and quick support responses." },
    { id: "06", question: "What if my business grows—will this scale?", answer: "The template is fully scalable and can handle more pages, traffic, and content easily." },
    { id: "07", question: "Will my website look good on mobile?", answer: "Yes, everything is fully responsive across all screen sizes." },
    { id: "08", question: "Do I need coding skills to edit later?", answer: "No coding skills needed. You can visually edit everything whenever you want." },
  ];

  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="px-4 py-1 bg-white border rounded-full text-sm shadow-sm">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
            Frequently asked <br /> questions.
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-900 font-medium flex items-center gap-3">
                  <span className="text-gray-400 font-semibold">{faq.id}/</span>
                  {faq.question}
                </p>

                {active === i ? (
                  <IconMinus size={20} className="text-gray-700" />
                ) : (
                  <IconPlus size={20} className="text-gray-700" />
                )}
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all ${
                  active === i ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
