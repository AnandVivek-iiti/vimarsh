export default function DepartmentalOutreachPage() {
  const departments = Array(9).fill(
    "Department of Astronomy, Astrophysics and Space Engineering (DAASE)"
  );

  return (
    <main className="bg-[#e6eaef] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-12">
          Departmental Outreach:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <p className="text-sm text-gray-800 mb-4">
                {dept}
              </p>

              <button className="px-4 py-1 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 transition">
                Click for more details
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
