import Image from "next/image";
import { Youtube, FileText } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      speaker: "Dr. Kiran Seth, Founder of SPIC MCAY and Eminent Scholar",
      title:
        "Save the Tiger and maybe the Rudra Veena: Indian Knowledge System in Modern Contexts.",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "16th January 2025",
      image: "/ForWebpage/spicmacay.png",
      pdf: "/ForWebpage/spicmacay.png",
      video: "https://www.youtube.com",
    },
    {
      id: 2,
      speaker: "Prof. Amit Roy, FNASc, Former Director, IUAC, New Delhi",
      title: "Sure, I would like to do great research",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "6th November 2024",
      image: "/ForWebpage/AmitRoy/AmitRoy-Flyer.png",
      pdf: "/ForWebpage/AmitRoy/l1pdf.pdf",
      video: "https://www.youtube.com",
    },
    {
      id: 3,
      speaker: "Padma Shri Prof. Jemmis Eluvathingal Devassy, IISc Bangalore",
      title: "Inquisitive Minds and Innovative Questions",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "29th August 2024",
      image: "/ForWebpage/Jemmis/Lecture_poster.png",
      pdf: "/ForWebpage/Jemmis/Lecture_ppt.docx",
      video: "https://www.youtube.com",
    },
    {
      id: 4,
      speaker: "Professor H.C. Verma, Padma Shri",
      title: "My Educational Experiments",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "28th March 2025",
      image: "/ForWebpage/H.C.Verma/HCV-copy.png",
      pdf: "/ForWebpage/H.C.Verma/HCV-copy.pdf",
      video: "https://www.youtube.com",
    },
    {
      id: 5,
      speaker: "Prof. Indranil Manna, Vice Chancellor, BIT Mesra",
      title:
        "Science–Engineering–Technology Synergy Needed for Technological Self-Reliance",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "20th March 2023",
      image: "/ForWebpage/I.Manna/Lecture_poster.jpg",
      pdf: "/ForWebpage/I.Manna/Lecture_notes.pdf",
      video: "https://www.youtube.com",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Events</h1>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md border p-10 flex gap-10"
            >
              {/* Image */}
              <div className="w-68 h-68 relative border">
                <Image
                  src={event.image}
                  alt={event.speaker}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h2
                  className="text-2xl  font-semibold text-gray-900"
                >
                  {event.speaker}
                </h2>

                <p className="text-base text-gray-600 mb-2">{event.title}</p>

                <p className="text-m text-gray-500">{event.series}</p>

                <p className="text-base text-blue-600 font-medium mt-1">
                  {event.date}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-3">
                  <p className="text-xl text-black ">watch now</p>
                  <br />
                  <a
                    href={event.video}
                    target="_blank"
                    className="w-8 h-8 bg-black rounded flex items-center justify-center"
                  >
                    <br />

                    <Youtube className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href={event.pdf}
                    target="_blank"
                    className="w-10 h-10 border-2 border-black rounded flex items-center justify-center"
                  >
                    <FileText className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
