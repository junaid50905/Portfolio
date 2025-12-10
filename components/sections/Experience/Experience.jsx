import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";

import AamraLogo from "@/public/images/Aamra.png";
import MentorsLogo from "@/public/images/mentorsLogo.png";

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* Title */}
      <h2 className="text-7xl font-bold mb-12">Experience</h2>

      {/* Experience List */}
      <div className="flex flex-col gap-12">

        {/* === EXPERIENCE 1 === */}
        <div className="flex items-start gap-4 w-full">

          {/* Logo */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
            <Image
              src={AamraLogo}
              alt="Aamra company logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full">
            <p className="text-lg font-medium text-gray-800 mt-2">
              Aamra Company Ltd
            </p>

            <div className="flex items-center gap-1 mt-1">
              <p className="text-xl font-semibold text-gray-900">
                Software Developer
              </p>
              <IconCheck size={20} className="text-green-500" />
            </div>

            <p className="text-gray-500 text-sm mt-1">
              Aug 2023 – Present (3 m) • Bangalore Urban, India • Full-Time
            </p>
          </div>

        </div>

        {/* === EXPERIENCE 2 === */}
        <div className="flex items-start gap-4 w-full">

          {/* Logo */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
            <Image
              src={MentorsLogo}
              alt="Mentors company logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full">
            <p className="text-lg font-medium text-gray-800 mt-2">
              Mentors
            </p>

            <div className="flex items-center gap-1 mt-1">
              <p className="text-xl font-semibold text-gray-900">
                Software Developer
              </p>
              <IconCheck size={20} className="text-green-500" />
            </div>

            <p className="text-gray-500 text-sm mt-1">
              Aug 2023 – Present (3 m) • Bangalore Urban, India • Full-Time
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
