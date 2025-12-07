import React from "react";

export default function TechStack() {
  const items = [
    {
      title: "Frontend",
      list: [
        { name: "React", desc: "For building fast, interactive UIs", icon: "⚛️" },
        { name: "Next.js", desc: "React framework with routing & SSR", icon: "⏭️" },
        { name: "TypeScript", desc: "Typed JavaScript for safer code", icon: "🟦" },
      ],
    },
    {
      title: "Backend",
      list: [
        { name: "Node.js", desc: "JavaScript runtime for servers", icon: "🟢" },
        { name: "Express", desc: "Minimal framework for APIs", icon: "🚂" },
        { name: "MongoDB", desc: "Flexible NoSQL database system", icon: "🍃" },
      ],
    },
    {
      title: "Tools & DevOps",
      list: [
        { name: "Git & GitHub", desc: "Version control and collaboration", icon: "🐙" },
        { name: "Docker", desc: "Containers for isolated environments", icon: "🐳" },
      ],
    },
    {
      title: "Design & Workflow",
      list: [
        { name: "Figma", desc: "UI/UX design tool", icon: "🎨" },
        { name: "Notion", desc: "Planning and docs in one place", icon: "📝" },
      ],
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
              Tech Stack
            </span>
      <h2 className="text-4xl font-bold mb-10">What I Use</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((group) => (
          <div key={group.title}>
            <h3 className="text-gray-600 text-lg font-semibold mb-4 border-b pb-2">{group.title}</h3>
            <div className="space-y-4">
              {group.list.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-4 p-2 border-b hover:bg-gray-50 transition"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
