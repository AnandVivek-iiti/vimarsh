export default function DepartmentalOutreachPage() {
  const departments = [
    {
      name: "Department of Astronomy, Astrophysics and Space Engineering (DAASE)",
      link: "https://sites.google.com/view/daase/home",
    },
    {
      name: "Department of Biosciences and Biomedical Engineering",
      link: "https://bsbe.iiti.ac.in/",
    },
    {
      name: "Department of Chemical Engineering",
      link: "https://chemical.iiti.ac.in/main/events",
    },
    {
      name: "Department of Chemistry",
      link: "https://chemistry.iiti.ac.in/news-events/seminars/",
    },
    {
      name: "Department of Civil Engineering",
      link: "https://ce.iiti.ac.in/seminars.php",
    },
    {
      name: "Department of Computer Science and Engineering",
      link: "https://cse.iiti.ac.in/outreach.php",
    },
    {
      name: "Department of Electrical Engineering",
      link: "https://ee.iiti.ac.in/",
    },
    {
      name: "School of Humanities and Social Sciences",
      link: "https://hss.iiti.ac.in/",
    },
    {
      name: "Department of Mathematics",
      link: "https://math.iiti.ac.in/events-all/",
    },
    {
      name: "Department of Metallurgical Engineering and Materials Science",
      link: "https://mems.iiti.ac.in/",
    },
    {
      name: "Department of Physics",
      link: "https://physics.iiti.ac.in/news-and-activities/",
    },
  ];

  return (
    <main className="bg-[#e6eaef] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-12">
          Departmental Outreach:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <p className="text-m text-gray-800 mb-4">{dept.name}</p>

              <a
                href={dept.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1 text-m rounded-md bg-green-600 text-white hover:bg-green-700 transition"
              >
                Click for more details
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
