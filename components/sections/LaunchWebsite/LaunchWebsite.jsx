import PrimaryBtn from "@/components/ui/Buttons/PrimaryBtn/PrimaryBtn";
import { IconBoltFilled } from '@tabler/icons-react';
import CircleIcon from "@/components/ui/Icons/IconOne.jsx";
import { IconQuestionMark } from '@tabler/icons-react';



export default function LaunchWebsite() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <div>
          {/* Top Section */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 text-sm">Boost your presence</span>
              <h2 className="text-7xl font-bold mt-1">
                Launch Your Website <br /> Fast & Smart
              </h2>
            </div>

            <div>
              <PrimaryBtn text="View All Projects" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Top Card */}
            <div className="p-6 rounded-2xl bg-white shadow-sm border">
              <div>
                <div className="flex">
                  <CircleIcon
                    icon={<IconBoltFilled className="text-white" />}
                    bg="bg-red-500"
                    size="w-12 h-11"
                  />
                  <div className="ms-4">
                    <h3 className="font-bold mb-2 text-2xl">
                      Affordable premium custom websites at a fraction of the cost.
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Premium Custom Websites — Without the Premium Price
                    </p>
                    <p className="text-gray-600 mb-4">
                      Get a fully customized website at a fraction of the cost
                    </p>
                  </div>
                </div>
              </div>


              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-20 flex items-center">
                      <CircleIcon
                        icon={<IconQuestionMark className="text-white" />}
                        bg="bg-gray-200"
                        size="w-5 h-5"
                      />
                      <span className="ms-2">Agency</span>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-700 bg-gray-300 w-[100%] rounded-r-sm ms-4 p-3 text-center">Up to $5,000</div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="w-10 h-10 rounded-full object-fit-cover" />
                    </div>
                  </div>
                  <div className="font-semibold text-white bg-blue-500 w-[20%] rounded-r-sm ms-4 p-3 text-center">$1,000</div>
                </div>
              </div>
            </div>

            {/* Right Top Card */}
            <div className="p-6 rounded-2xl bg-white shadow-sm border flex flex-col justify-between">
              <div>
                <div>
                    <h3 className="font-bold mb-2 text-2xl">
                      Seamless Design Process  
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get a top-tier website without the high costs.
                    </p>
                  </div>
                <ul className="space-y-2 text-gray-700">
                  <li>+ Submit your request</li>
                  <li>+ Purchase your package</li>
                  <li>+ Receive in under 30 days</li>
                </ul>
              </div>
              <div className="mt-6 flex justify-center">
                <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white shadow-sm border lg:col-span-1">
              <h3 className="text-lg font-semibold mb-2">Support Up to 3 Revision Post-Month</h3>
              <p className="text-gray-600">
                Includes expert guidance after your launch, keeping the final polish.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white shadow-sm border lg:col-span-1">
              <h3 className="text-lg font-semibold mb-2">Support For 1 Month After Customizing</h3>
              <p className="text-gray-600">
                Enjoy expert support ensuring everything runs smoothly.
              </p>
            </div>

            {/* Card 3 (spans 2 columns) */}
            <div className="p-6 rounded-2xl bg-black text-white shadow-sm border border-gray-800 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Streamlined Design Journey</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Diverse Template Options</li>
                <li>Tailored Customization</li>
                <li>Unlimited Revisions</li>
                <li>Enhanced Performance</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
