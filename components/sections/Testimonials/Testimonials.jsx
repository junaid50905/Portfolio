"use client";
import Image from "next/image";
import { IconChecks } from "@tabler/icons-react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "Luminex",
      date: "Nov 22, 2025",
      name: "Emma Collins",
      username: "@emma_creates",
      image: "",
      text: "As someone with zero coding experience, I was worried about building my website. But this template made it so simple.",
    },
    {
      company: "Nordex Studio",
      date: "Dec 14, 2025",
      name: "Daniel Brooks",
      username: "@daniel_designs",
      image: "/avatars/daniel.jpg",
      text: "I thought launching a site would take months. But this template helped me go live in days, without needing coding skills.",
    },
    {
      company: "Aurelia Brands",
      date: "Oct 30, 2025",
      name: "Sophia Turner",
      username: "@sophia_branding",
      image: "/avatars/sophia.jpg",
      text: "I was worried about building my website. But this simple template made everything so easy.",
    },
    {
      company: "Vertex Digital",
      date: "Nov 05, 2025",
      name: "Liam Carter",
      username: "@liam_carter_x",
      image: "/avatars/liam.jpg",
      text: "I never imagined building a site could be this easy. The template guided me at every stage and now my website feels truly premium.",
    },
    {
      company: "Nova Collective",
      date: "Sep 18, 2025",
      name: "Ava Mitchell",
      username: "@ava_creative",
      image: "/avatars/ava.jpg",
      text: "From colors to layouts, customizing was effortless. I finally have a website that looks great and works perfectly.",
    },
    {
      company: "Ignite Works",
      date: "Dec 02, 2025",
      name: "Noah Reed",
      username: "@noah_builds",
      image: "/avatars/noah.jpg",
      text: "As a first-time founder, I had no idea where to start. This template gave me confidence and made the process smooth.",
    },
    {
      company: "Elysian Studio",
      date: "Oct 11, 2025",
      name: "Isabella Hayes",
      username: "@isabella_hayes",
      image: "/avatars/isabella.jpg",
      text: "Every detail was thought through. In just a week my brand had a website I’m proud of.",
    },
    {
      company: "Orion Labs",
      date: "Nov 28, 2025",
      name: "Ethan Ward",
      username: "@ethan_ward_x",
      image: "/avatars/ethan.jpg",
      text: "I was skeptical about templates, but this one feels custom-made. Now my site fits my brand perfectly.",
    },
    {
      company: "Stellar Edge",
      date: "Sep 25, 2025",
      name: "Olivia Scott",
      username: "@olivia_scott",
      image: "/avatars/olivia.jpg",
      text: "The whole experience was faster than I expected. In days, my polished site was aligned with my identity.",
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="text-center mb-12">
        <span className="px-4 py-1 bg-white border rounded-full text-sm shadow-sm">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
          Turns out, founders seek <br /> websites that just work
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-all"
          >
            <p className="text-sm text-gray-500 font-medium mb-4">
              {item.company} <span className="text-gray-400"> / {item.date}</span>
            </p>

            <div className="flex items-center gap-3 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="flex items-center gap-1 font-semibold text-gray-900">
                  {item.name}
                  <IconChecks size={16} className="text-blue-500" />
                </h4>
                <p className="text-sm text-gray-500">{item.username}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
