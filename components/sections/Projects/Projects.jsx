"use client";

import Image from "next/image";
import { cn } from "@/lib/utils"; // optional helper (remove if not using)
import PrimaryBtn from "@/components/ui/Buttons/PrimaryBtn/PrimaryBtn";

import Project1 from '@/public//images/projects/1.png';
import Project2 from '@/public//images/projects/2.png';
import Project3 from '@/public//images/projects/3.png';
import Project4 from '@/public//images/projects/4.png';
import Project5 from '@/public//images/projects/5.webp';
import Project6 from '@/public//images/projects/6.png';







const projects = [
  {
    title: "Brog — Digital Design Agency Portfolio",
    img: Project1,
  },
  {
    title: "Prime Studio — Website Saas Template",
    img: Project2,
  },
  {
    title: "HelloX — Design Agency Portfolio",
    img: Project3,
  },
  {
    title: "Prismorama — Personal Web Portfolio",
    img: Project5,
  },
  {
    title: "Crawford — Photography Portfolio",
    img: Project4,
  },
  {
    title: "Boostio — SaaS Landing Page",
    img: Project6,
  },
];

export default function Projects() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 text-sm">Works</span>
            <h2 className="text-7xl font-bold mt-1">
              Browse Latest <br /> Works
            </h2>
          </div>

          <div>
            <PrimaryBtn text="View All Projects" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <Card key={idx} title={p.title} img={p.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card Component ---------------- */

function Card({ title, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3 border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition group cursor-pointer">

      {/* Window Top Bar */}
      <div className="flex space-x-2 pb-3 px-1">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Image Wrapper (Fixed Height + Scroll on Hover) */}
      <div className="rounded-xl overflow-hidden mb-3 h-[60vh] relative">
        <div className="transition-transform duration-[55000ms] ease-out group-hover:-translate-y-[60%]">
          <Image
            src={img}
            width={600}
            height={1000}
            alt={title}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 leading-snug text-sm">
        {title}
      </h3>
    </div>
  );
}

