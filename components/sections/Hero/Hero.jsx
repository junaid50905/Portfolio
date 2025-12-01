import Image from 'next/image';

import Laravel from '@/public/images/technologies/1.avif';
import ReactImage from '@/public/images/technologies/2.avif';

import NextjsSvgIcon from '@/public/images/technologies/3.avif';
import GraphQl from '@/public/images/technologies/4.avif';
import MySql from '@/public/images/technologies/5.avif';
import Nodejs from '@/public/images/technologies/6.avif';

import ProfileImage from '@/public/images/profile-image.jpg';

export default function Hero() {
  return (
    <section>
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white">

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Image width={300} height={300} src={Laravel} className="absolute top-40 left-[30%] w-50 z-30" alt="Laravel" />
          <Image width={300} height={300} src={Nodejs} className="absolute top-80 left-[25%] w-50 z-30" alt="Nodejs" />
          <Image width={300} height={300} src={GraphQl} className="absolute bottom-50 left-[30%] w-50 z-30" alt="GraphQl" />

          <Image width={300} height={300} src={ReactImage} className="absolute top-40 right-[30%] w-50" z-30 alt="React" />
          <Image width={300} height={300} src={NextjsSvgIcon} className="absolute top-80 right-[25%] w-50 z-30" alt="Next.js" />
          <Image width={300} height={300} src={MySql} className="absolute bottom-50 right-[25%] w-60 z-30" alt="MySQL" />
        </div>

        {/* Background Name Text */}
        <h1 className="
          absolute 
          text-[10vw] 
          font-extrabold 
          text-black 
          opacity-100
          select-none 
          z-0 
          leading-none 
          tracking-tight
        ">
          Junaid Hossain
        </h1>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Hi, Im <span className="italic">Junaid!</span>
          </h2>

          <p className="mt-2 text-lg text-gray-600">Software Engineer</p>

          {/* Profile Image */}
          <div className="mt-6 rounded-4xl shadow-xl">
            <Image 
              width={1000} 
              height={1000}
              src={ProfileImage}
              alt="Profile"
              className="w-80 h-80 rounded-4xl object-cover"
            />
          </div>

          {/* Happy Clients */}
          <div className="flex items-center gap-2 mt-4 text-gray-600">
            <Image width={40} height={40} src="/avatars/a1.png" alt="client1" className="w-7 h-7 rounded-full border" />
            <Image width={40} height={40} src="/avatars/a2.png" alt="client2" className="w-7 h-7 rounded-full border -ml-3" />
            <Image width={40} height={40} src="/avatars/a3.png" alt="client3" className="w-7 h-7 rounded-full border -ml-3" />
            <span className="ml-2">80+ Happy Clients</span>
          </div>

          {/* CTA */}
          <button className="mt-6 px-10 py-4 bg-white border border-gray-300 shadow-lg rounded-full text-lg font-semibold hover:shadow-xl transition">
            Lets Work Together!
          </button>
        </div>
      </div>
    </section>
  );
}
