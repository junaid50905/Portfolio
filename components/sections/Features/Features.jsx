import { IconBolt, IconPalette, IconUsers, IconDeviceMobile, IconWorld, IconHelp } from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      icon: <IconBolt className="w-8 h-8 text-purple-600" />,
      title: "Lightning Fast Turnaround",
      desc: [
        "Design requests delivered in days quality.",
        "We meet deadlines efficiently and smoothly.",
        "Launch projects fast and stay ahead.",
      ],
    },
    {
      icon: <IconPalette className="w-8 h-8 text-pink-600" />,
      title: "Custom Design Branding",
      desc: [
        "Projects tailored to your brand with layouts.",
        "We craft elements to match your style.",
        "Create a cohesive design that stands out.",
      ],
    },
    {
      icon: <IconUsers className="w-8 h-8 text-violet-600" />,
      title: "Seamless Collaboration",
      desc: [
        "Work with us in real-time for feedback.",
        "Stay engaged at every step for results.",
        "Ensure a workflow tailored to vision.",
      ],
    },
    {
      icon: <IconDeviceMobile className="w-8 h-8 text-purple-600" />,
      title: "Mobile-First Design",
      desc: [
        "Templates responsive for sharp screen.",
        "Optimized for mobile to enhance access.",
        "Deliver a seamless device experience.",
      ],
    },
    {
      icon: <IconWorld className="w-8 h-8 text-indigo-600" />,
      title: "Scalable & Future-Proof",
      desc: [
        "Website grows with new pages ready.",
        "Designed for future trends and scale.",
        "Support success as needs evolve.",
      ],
    },
    {
      icon: <IconHelp className="w-8 h-8 text-purple-600" />,
      title: "Ongoing Support",
      desc: [
        "Team aids post-launch with updates.",
        "Continuous help for issues or fixes.",
        "Keep project running efficiently over time.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm bg-white shadow rounded-full text-gray-600">Smart Design & Swift Results</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight text-gray-900">
          You Deserve <br /> More Than Ordinary
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <ul className="text-gray-600 space-y-1 text-sm leading-relaxed">
              {item.desc.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
