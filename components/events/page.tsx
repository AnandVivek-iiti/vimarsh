"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Youtube, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Event = {
  id: number;
  speaker: string;
  title: string;
  series: string;
  date: string;
  image: string;
  pdf: string;
  video: string;
};

export default function EventsPage() {
  const events: Event[] = [
       {
      id: 1,
      speaker:
        "Prof. Tanusri Saha-Dasgupta, FNA, FASc, FTWAS, APS Fellow, J.C. Bose National Fellow, Director, S.N. Bose National Centre for Basic Sciences, Kolkata",
      title: "Understanding Earth's Interior by Computation",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "02nd February 2026",
      image: "/ForWebpage/T.SahaDasgupta.png",
      pdf: "/ForWebpage/earth-interior-computation.pdf",
      video: "",
    },
    {
      id: 2,
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
      id: 3,
      speaker: "Prof. Amit Roy, FNASc, Former Director, IUAC, New Delhi",
      title: "Vimarsh lecture",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "6th November 2024",
      image: "/ForWebpage/AmitRoy/AmitRoy-Flyer.png",
      pdf: "/ForWebpage/AmitRoy/l1pdf.pdf",
      video: "https://www.youtube.com",
    },
    {
      id: 4,
      speaker: "Padma Shri Prof. Jemmis Eluvathingal Devassy, IISc Bangalore",
      title: "Inquisitive Minds and Innovative Questions",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "29th August 2024",
      image: "/ForWebpage/Jemmis/Lecture_poster.png",
      pdf: "/ForWebpage/Jemmis/Lecture_ppt.docx",
      video: "https://www.youtube.com",
    },
    {
      id: 5,
      speaker: "Professor H.C. Verma, Padma Shri",
      title: "My Educational Experiments",
      series: "The VIMARSH Institute Public Lectures series at IIT Indore",
      date: "28th March 2025",
      image: "/ForWebpage/H.C.Verma/HCV-copy.png",
      pdf: "/ForWebpage/H.C.Verma/HCV-copy.pdf",
      video: "https://www.youtube.com",
    },
    {
      id: 6,
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
        <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center md:text-left">
          Events
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}

function EventCard({ event }: { event: Event }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to disable flip on desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full [perspective:1000px] h-[550px] md:h-auto">
      <motion.div
        animate={{ rotateY: isMobile && isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative w-full h-full md:flex md:flex-row md:items-stretch md:gap-10 md:bg-white md:rounded-xl md:shadow-md md:border md:p-8 [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE (Poster) */}
        <div className="absolute inset-0 w-full h-full md:relative md:w-72 md:h-72 flex flex-col bg-white rounded-xl shadow-lg border overflow-hidden [backface-visibility:hidden]">
          <div className="relative flex-grow w-full min-h-[300px] md:min-h-0">
            <Image
              src={event.image}
              alt={event.speaker}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 288px"
            />
          </div>
          {/* Mobile Flip Button */}
          <button
            onClick={() => setIsFlipped(true)}
            className="md:hidden bg-black text-white py-4 flex items-center justify-center gap-2 font-medium"
          >
            More Details
          </button>
        </div>


        {/* BACK SIDE (Details) */}
        <div
          className={`absolute inset-0 w-full h-full md:relative md:flex-grow flex flex-col justify-center p-8 bg-white rounded-xl border-2 border-black md:border-none md:p-0 [backface-visibility:hidden]
          ${isMobile ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}
        >
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {event.speaker}
            </h2>
            <p className="text-gray-700 mt-3 text-lg leading-relaxed italic border-l-4 border-blue-500 pl-4">
              {event.title}
            </p>
            <p className="text-sm text-gray-500 mt-4 uppercase tracking-wider font-semibold">
              {event.series}
            </p>
            <p className="text-xl text-blue-600 font-black mt-2">
              {event.date}
            </p>

            <div className="flex items-center gap-6 mt-8">
              <span className="font-bold text-lg text-black uppercase">
                Resources:
              </span>
              <div className="flex gap-4">
                <a
                  href={event.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center p-3 bg-red-500 text-white rounded-full hover:scale-110 transition-transform shadow-md"
                  title="Watch Video"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href={event.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center p-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
                  title="Download PDF/Flyer"
                >
                  <FileText className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Back to Poster Button (Mobile Only) */}
            <button
              onClick={() => setIsFlipped(false)}
              className="md:hidden mt-auto pt-8 text-black font-bold underline flex items-center justify-center gap-2"
            >
              ← Back to Poster
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
