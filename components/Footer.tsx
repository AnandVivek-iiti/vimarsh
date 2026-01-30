import { Mail, Youtube, Globe } from "lucide-react";

const faculty = [
  {
    name: "Prof. Raghunath Sahoo",
    linkedin: "https://www.linkedin.com/in/raghunath-sahoo-0464971a4/",
  },
  {
    name: "Dr. Priyansh Singh",
    linkedin: "https://www.linkedin.com/in/catchpriyansh/",
  },
  {
    name: "Dr. Kalandi C Pradhan",
    linkedin:
      "https://www.linkedin.com/in/dr-kalandi-charan-pradhan-570ba3203/",
  },
  {
    name: "Mr. Tanmay Harsh   (AR Administration)",
    linkedin: "https://www.linkedin.com/in/tanmay-vaishnav-9a180673/",
  }
];

const students = [
  {
    name: "Kavyansh Raj Singh",
    linkedin: "https://www.linkedin.com/in/kavyanshsingh/",
  },
  {
    name: "Anand Vivek",
    linkedin: "https://www.linkedin.com/in/anandvivek1223/",
  },
  {
    name: "Shruti Turare",
    linkedin: "https://in.linkedin.com/in/shruti-turare-a5184a286",
  },
  {
    name: "Samarth Dhanuka",
    linkedin: "https://linkedin.com/in/dhanuka-samarth",
  },
  {
    name: "Abhishek Nigam",
    linkedin: "https://www.linkedin.com/in/abhisheknigam8001",
  },
  {
    name: "Jayshil Mendhe",
    linkedin: "https://www.linkedin.com/in/jayshilmendhe",
  },
  {
    name: "Rishabh Tiwari",
    linkedin: "https://www.linkedin.com/in/rishabh-tiwari-6e9k4r2f0/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Identity */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Outreach Cell
          </h3>
          <p className="text-sm leading-relaxed">
            Institute Seminars and Outreach Committee
            <br />
            Indian Institute of Technology Indore
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:outreachcell@iiti.ac.in"
                className="hover:underline"
              >
                outreachcell@iiti.ac.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a
                href="https://vimarsh-iiti.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                vimarsh-iiti.onrender.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="w-4 h-4" />
              <a
                href="https://www.youtube.com/@OutreachCell-iiti"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Outreach Cell – IIT Indore
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Faculty */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Faculty</h4>
          <ul className="text-sm space-y-1">
            {faculty.map((person) => (
              <li key={person.name}>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {person.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Student Team */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Student Team
          </h4>
          <ul className="text-sm space-y-1">
            {students.map((person) => (
              <li key={person.name}>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {person.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Outreach Cell, IIT Indore
      </div>
    </footer>
  );
}
