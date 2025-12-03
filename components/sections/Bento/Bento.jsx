import Image from "next/image";
import PrimaryBtn from "@/components/ui/Buttons/PrimaryBtn/PrimaryBtn";
import { IconBoltFilled, IconQuestionMark } from "@tabler/icons-react";
import CircleIcon from "@/components/ui/Icons/IconOne.jsx";
import ProfileImage2 from "@/public/images/profile-image2.avif";

export default function Bento() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        
        {/* Top Section */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
              Boost your presence
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mt-1 leading-tight">
              Launch Your Website <br /> Fast & Smart
            </h2>
          </div>

          <PrimaryBtn text="View All Projects" />
        </div>

        {/* GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* LEFT TALL IMAGE CARD */}
          <div className="md:col-span-3 md:row-span-2 relative rounded-3xl shadow overflow-hidden min-h-[500px]">
            <Image src={ProfileImage2} alt="Model" fill className="object-cover" priority />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-white" />

            <div className="absolute top-3 right-5 w-[220px] md:w-[260px] bg-blue-500/80 text-gray-50 text-xs rounded-2xl px-4 py-2 shadow">
              Alright, am I officially allowed to start or am I still in the “thinking about it” zone? 🤔
            </div>

            <div className="absolute top-24 left-4 w-[220px] md:w-[260px] bg-black/10 text-white text-[11px] rounded-2xl px-4 py-2 backdrop-blur-md shadow">
              You’re green-lit! The order is confirmed — go build something awesome 🚀
            </div>

            <div className="absolute bottom-5 inset-x-5">
              <div className="rounded-2xl p-4">
                <h2 className="font-bold text-xl text-black">Collaborative intelligence</h2>
                <p className="text-gray-700 mt-1 text-sm leading-tight">
                  Sub-agents work together seamlessly to handle complex scenarios.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 1 */}
          <div className="md:col-span-4 rounded-3xl bg-white shadow-sm border p-6">
            <div className="flex">
              <div className="w-5 h-5">
                <CircleIcon
                icon={<IconBoltFilled className="text-white" />}
                bg="bg-red-500"
              />
              </div>
              <div className="ms-10">
                <h3 className="font-bold mb-2 text-2xl">
                  Affordable premium custom websites at a fraction of the cost.
                </h3>
                <p className="text-gray-600 mb-4">Premium Custom Websites — Without the Premium Price. Get a fully customized website at a fraction of the cost</p>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center">
                <div className="w-20 flex items-center">
                  <CircleIcon
                    icon={<IconQuestionMark className="text-white" />}
                    bg="bg-gray-200"
                    size="w-5 h-5"
                  />
                  <span className="ms-2">Agency</span>
                </div>
                <div className="font-semibold text-gray-700 bg-gray-300 rounded-r-lg p-3 text-center flex-1 ms-3">
                  Up to $5,000
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-20">
                  <img
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="font-semibold text-white bg-blue-500 rounded-r-lg p-3 text-center flex-1 ms-3">
                  $1,000
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="md:col-span-5 rounded-3xl bg-white shadow-sm border p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2 text-2xl">Seamless Design Process</h3>
              <p className="text-gray-600 mb-4">Get a top-tier website without the high costs.</p>

              <ul className="space-y-2 text-gray-700">
                <li>+ Submit your request</li>
                <li>+ Purchase your package</li>
                <li>+ Receive in under 30 days</li>
              </ul>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2">
                Default
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="md:col-span-3 bg-white p-6 rounded-3xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Support Up to 3 Revision Post-Month</h3>
            <p className="text-gray-600">
              Includes expert guidance after your launch, keeping the final polish.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="md:col-span-3 bg-white p-6 rounded-3xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Support For 1 Month After Customizing</h3>
            <p className="text-gray-600">
              Enjoy expert support ensuring everything runs smoothly.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="md:col-span-3 bg-black text-white p-6 rounded-3xl shadow-sm border border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Streamlined Design Journey</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Diverse Template Options</li>
              <li>Tailored Customization</li>
              <li>Unlimited Revisions</li>
              <li>Enhanced Performance</li>
            </ul>
          </div>

        </div>
        {/* GRID END */}
      </div>
    </section>
  );
}
