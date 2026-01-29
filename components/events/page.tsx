import Image from "next/image";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      speaker: "Dr. Kiran Seth, Founder of SPIC MCAY and Eminent Scholar",
      title: "Save the Tiger and maybe the Rudra Veena: Indian Knowledge System in Modern Contexts.",
      category: "VIMARSH",
      date: "16th January 2025",
      image: "/pics/event.png"
    },
    {
      id: 2,
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      speaker: "Prof. Amit Roy, FNASc, Former Director, IUAC, New Delhi",
      title: "Sure, I would like to do great research",
      category: "VIMARSH",
      date: "6th November 2024",
      image: "/pics/event.png"
    },
    {
      id: 4,
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      speaker: "Padma Shri Prof. Jemmis Eluvathingal Devassy, IISc Bangalore (former Director, IISER Trivandrum)",
      title: "Inquisitive Minds and Innovative Questions",
      category: "VIMARSH",
      date: "29th August 2024",
      image: "/pics/event.png"
    },
    {
      id: 5,
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      speaker: "Professor H.C. Verma, Padma Shri",
      title: "My Educational Experiments",
      category: "VIMARSH",
      date: "March 28, 2025",
      image: "/pics/event.png"
    },
    {
      id: 7,
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      speaker: "Prof. Indranil Manna, JC Bose Fellow, Vice Chancellor, Birla Institute of Technology Mesra",
      title: "Science–Engineering–Technology Synergy Needed for Technological Self-Reliance",
      category: "VIMARSH",
      date: "20th March 2023",
      image: "/pics/event.png"
    }
  ];

  return (
    <main className="bg-[#f4f6f8] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-gray-900">
          Events
        </h1>

        <div className="space-y-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white rounded-xl shadow-md p-10"
            >
              {/* Event Details */}
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  {event.series}
                </p>

                <p className="text-sm text-gray-800 mb-2">
                  <strong>Speaker:</strong> {event.speaker}
                </p>

                <p className="text-sm text-gray-800 mb-4">
                  <strong>Title:</strong> {event.title}
                </p>

                <p className="text-sm text-gray-800">
                  <strong>Date:</strong> {event.date}
                </p>
              </div>

              {/* Poster */}
              <div className="flex justify-center">
                <Image
                  src={event.image}
                  alt={`${event.title} Poster`}
                  width={360}
                  height={500}
                  className="rounded-lg shadow-md object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}