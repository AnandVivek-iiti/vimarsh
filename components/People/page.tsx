import Image from "next/image";

const teamMembers = [
  {
    name: "Prof. Raghunath Sahoo",
    role: "Convenor",
    dept: "Professor, Department of Physics",
    email: "raghunath@iiti.ac.in",
    image: "/pics/image.png",
  },
  {
    name: "Dr. Priyansh Singh",
    role: "Member",
    dept: "Assistant Professor, Department of Civil Engineering",
    email: "priyansh@iiti.ac.in",
    image: "/pics/placeholder.png",
  },
  {
    name: "Dr. Kalandri C Pradhan",
    role: "Member",
    dept: "Assistant Professor, Humanities and Social Sciences",
    email: "kcpradhan@iiti.ac.in",
    image: "/pics/placeholder.png",
  },
  {
    name: "DR Administration",
    role: "Member",
    dept: "Outreach Office",
    email: "outreach@iiti.ac.in",
    image: "/pics/placeholder.png",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-[#e6eaef] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-gray-900">
          Committee Members
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={180}
                height={220}
                className="mx-auto rounded-md object-cover"
              />

              <h3 className="mt-4 font-medium text-gray-900">
                {member.name}
              </h3>

              <p className="text-sm text-gray-600">
                {member.role}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                {member.dept}
              </p>

              <p className="text-xs text-gray-600 mt-3">
                Contact:{" "}
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
