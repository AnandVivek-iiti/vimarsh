import Image from "next/image";

const teamMembers = [
  { name: "Kavyansh", role: "Outreach" },
  { name: "Anand Vivek", role: "Web Dev" },
  { name: "Shruti", role: "Creatives" },
  { name: "Samarth", role: "Social Media" },
  { name: "Abhishek", role: "OPNL" },
  { name: "Jayshil", role: "Marketing" },
];

export default function TeamPage() {
  return (
    <main className="bg-[#e6eaef] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-12">
          Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              {/* Placeholder silhouette */}
              <Image
                src="/pics/placeholder.png"
                alt={member.name}
                width={120}
                height={140}
                className="mx-auto mb-4"
              />

              <h3 className="font-medium text-gray-900">
                {member.role}
              </h3>

              <p className="text-sm text-gray-600">
                {member.name}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-3 text-gray-700">
                <span>in</span>
                <span>◎</span>
                <span>✉</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
