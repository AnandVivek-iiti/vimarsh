// import Image from "next/image";
// import { Youtube, FileText } from "lucide-react";

// export default function EventsPage() {
//   const events = [
//     {
//       id: 1,
//       speaker: "Dr. Kiran Seth, Founder of SPIC MCAY and Eminent Scholar",
//       title:
//         "Save the Tiger and maybe the Rudra Veena: Indian Knowledge System in Modern Contexts.",
//       series: "The VIMARSH Institute Public Lectures series at IIT Indore",
//       date: "16th January 2025",
//       image: "/ForWebpage/spicmacay.png",
//       pdf: "/ForWebpage/spicmacay.png",
//       video: "https://www.youtube.com",
//     },
//     {
//       id: 2,
//       speaker: "Prof. Amit Roy, FNASc, Former Director, IUAC, New Delhi",
//       title: "Sure, I would like to do great research",
//       series: "The VIMARSH Institute Public Lectures series at IIT Indore",
//       date: "6th November 2024",
//       image: "/ForWebpage/AmitRoy/AmitRoy-Flyer.png",
//       pdf: "/ForWebpage/AmitRoy/l1pdf.pdf",
//       video: "https://www.youtube.com",
//     },
//     {
//       id: 3,
//       speaker: "Padma Shri Prof. Jemmis Eluvathingal Devassy, IISc Bangalore",
//       title: "Inquisitive Minds and Innovative Questions",
//       series: "The VIMARSH Institute Public Lectures series at IIT Indore",
//       date: "29th August 2024",
//       image: "/ForWebpage/Jemmis/Lecture_poster.png",
//       pdf: "/ForWebpage/Jemmis/Lecture_ppt.docx",
//       video: "https://www.youtube.com",
//     },
//     {
//       id: 4,
//       speaker: "Professor H.C. Verma, Padma Shri",
//       title: "My Educational Experiments",
//       series: "The VIMARSH Institute Public Lectures series at IIT Indore",
//       date: "28th March 2025",
//       image: "/ForWebpage/H.C.Verma/HCV-copy.png",
//       pdf: "/ForWebpage/H.C.Verma/HCV-copy.pdf",
//       video: "https://www.youtube.com",
//     },
//     {
//       id: 5,
//       speaker: "Prof. Indranil Manna, Vice Chancellor, BIT Mesra",
//       title:
//         "Science–Engineering–Technology Synergy Needed for Technological Self-Reliance",
//       series: "The VIMARSH Institute Public Lectures series at IIT Indore",
//       date: "20th March 2023",
//       image: "/ForWebpage/I.Manna/Lecture_poster.jpg",
//       pdf: "/ForWebpage/I.Manna/Lecture_notes.pdf",
//       video: "https://www.youtube.com",
//     },
//   ];

//   return (
//     <main className="bg-gray-50 min-h-screen py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-gray-900">Events</h1>

//         <div className="space-y-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-white rounded-xl shadow-md border p-10 flex gap-10"
//             >
//               {/* Image */}
//               <div className="w-68 h-68 relative border">
//                 <Image
//                   src={event.image}
//                   alt={event.speaker}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex-grow">
//                 <h2
//                   className="text-2xl  font-semibold text-gray-900"
//                 >
//                   {event.speaker}
//                 </h2>

//                 <p className="text-base text-gray-600 mb-2">{event.title}</p>

//                 <p className="text-m text-gray-500">{event.series}</p>

//                 <p className="text-base text-blue-600 font-medium mt-1">
//                   {event.date}
//                 </p>

//                 {/* Actions */}
//                 <div className="flex items-center gap-4 mt-3">
//                   <p className="text-xl text-black ">watch now</p>
//                   <br />
//                   <a
//                     href={event.video}
//                     target="_blank"
//                     className="w-8 h-8 bg-black rounded flex items-center justify-center"
//                   >
//                     <br />

//                     <Youtube className="w-4 h-4 text-white" />
//                   </a>

//                   <a
//                     href={event.pdf}
//                     target="_blank"
//                     className="w-10 h-10 border-2 border-black rounded flex items-center justify-center"
//                   >
//                     <FileText className="w-4 h-4 text-black" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { Youtube, FileText, RotateCw } from "lucide-react";
import { motion } from "framer-motion";
/* =======================
   TYPE DEFINITIONS
======================= */
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

/* =======================
   PAGE COMPONENT
======================= */
export default function EventsPage() {
  const events: Event[] = [
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
      title: "Vimarsh lecture",
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

  return (
    <div className="group perspective-1000 h-[500px] md:h-auto">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full md:flex md:flex-row md:items-center md:gap-10 md:bg-white md:rounded-xl md:shadow-md md:border md:p-8 md:!rotate-y-0"
      >
        <div
          className="absolute inset-0 backface-hidden md:relative md:inset-auto md:w-72 md:h-72 flex flex-col bg-white rounded-xl shadow-lg border overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative flex-grow w-full h-full">
            <Image
              src={event.image}
              alt={event.speaker}
              fill
              className="object-contain p-2"
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

        <div
          className="absolute inset-0 backface-hidden md:relative md:inset-auto md:flex-grow flex flex-col justify-center p-8 bg-white rounded-xl border-2 border-black md:border-none md:p-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="md:[transform:rotateY(0deg!important)] h-full flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {event.speaker}
            </h2>
            <p className="text-gray-800 mt-2 italic">{event.title}</p>
            {/* <p className="text-sm text-gray-400 mt-4 uppercase tracking-wider">{event.series}</p> */}
            <p className="text-lg text-blue-600 font-bold mt-2">{event.date}</p>

            <div className="flex items-center gap-4 mt-8">
              <span className="font-bold text-lg text-black uppercase text-lg">
                Watch :{" "}
              </span>
              <a
                href={event.video}
                target="_blank"
                className="p-2 bg-red-400 text-white rounded-full hover:scale-110 transition-transform"
              >
                <Youtube className="w-6 h-5" />
              </a>
              <a
                href={event.pdf}
                target="_blank"
                className="p-2 border-2 border-black text-gray-500 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => setIsFlipped(false)}
              className="md:hidden mt-8 text-m text-black font-bold underline flex items-center gap-1"
            >
              Back to Poster
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
