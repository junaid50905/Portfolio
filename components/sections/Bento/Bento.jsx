import {
  IconMail,
  IconMessage,
  IconMicrophone,
  IconBrandWhatsapp,
  IconCheck,
  IconMessageCircle,
} from "@tabler/icons-react";
import Image from "next/image";


import ProfileImage2 from "@/public/images/profile-image2.avif";

export default function Bento() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* LEFT CARD */}
        <div className="relative rounded-3xl shadow overflow-hidden h-[480px]">

          {/* Image */}
          <Image
            src={ProfileImage2}
            alt="Model"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-white" />

          {/* Chat Bubble 1 */}
          <div className="absolute top-3 right-5 w-[260px] bg-blue-500 opacity-70 text-gray-50 text-xs rounded-2xl px-4 py-2 shadow leading-snug">
            Alright, am I officially allowed to start or am I still in the “thinking about it” zone? 🤔
          </div>

          {/* Chat Bubble 2 */}
          <div className="absolute top-25 left-4 w-[260px] bg-black/10 text-white text-[11px] rounded-2xl px-4 py-2 backdrop-blur-md shadow leading-snug">
            You’re green-lit! The order is confirmed — go build something awesome 🚀
          </div>


          {/* Bottom Text Content */}
          <div className="absolute bottom-5 left-5 right-5">

            {/* Blur Glass Base */}
            <div className="backdrop-blur-lg rounded-2xl p-4">

              <h2 className="font-bold text-xl text-black">
                Collaborative intelligence
              </h2>

              <p className="text-gray-700 mt-1 text-sm leading-tight">
                Sub-agents work together seamlessly to handle complex scenarios,
                achieving superior results through coordinated effort.
              </p>

            </div>

          </div>

        </div>



        {/* CENTER PANEL */}
        <div className="flex flex-col gap-6">

          {/* LANGUAGES */}
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex gap-4 mb-4">
              <button className="border rounded-full px-3 py-1">EN</button>
              <button className="border rounded-full px-3 py-1 bg-gray-100">UK</button>
              <button className="border rounded-full px-3 py-1">FR</button>
            </div>

            <p className="font-bold text-xl">All major languages</p>
            <p className="text-sm text-gray-500 mt-1">Automatically detect</p>
          </div>

          {/* MULTITASKING */}
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex items-center gap-3 mb-2">
              <IconCheck className="text-green-500" />
              <p className="text-sm">
                Enrich contact details from lead data
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <IconCheck className="text-green-500" />
              <p className="text-sm">
                Identify leads using Linkedin or Apollo
              </p>
            </div>

            <h3 className="font-bold text-xl">Multitasking</h3>
            <p className="text-gray-500 text-sm">
              Any task done by a human
            </p>
          </div>

        </div>


        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-6">

          {/* DAILY CONVERSATIONS */}
          <div className="bg-white rounded-3xl shadow p-6 text-center">
            <IconMessageCircle className="mx-auto text-blue-500" size={32} />
            <h1 className="text-4xl font-bold mt-2">300K</h1>
            <p className="text-gray-500">Daily Conversations</p>
          </div>

          {/* OMNI CHANNEL */}
          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="font-bold text-xl">Omni channel</h2>
            <p className="text-gray-500 text-sm mb-4">Email, chat, SMS etc</p>

            <div className="flex gap-4">
              <div className="p-3 rounded-full bg-gray-100">
                <IconMail />
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                <IconMessage />
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                <IconMicrophone />
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                <IconBrandWhatsapp />
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
