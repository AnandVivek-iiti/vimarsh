import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="bg-[#f4f6f8] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-gray-900">
          Upcoming Event
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white rounded-xl shadow-md p-10">
          {/* Event Details */}
          <div>
            <p className="text-sm text-gray-700 mb-4">
              The VIMARSH Institute Public Lectures series at IIT Indore
            </p>

            <p className="text-sm text-gray-800 mb-2">
              <strong>Speaker:</strong> Dr. Kiran Seth, Founder of SPIC MACAY and
              Eminent Scholar
            </p>

            <p className="text-sm text-gray-800 mb-4">
              <strong>Title:</strong> Save the Tiger and maybe the Rudra Veena:
              Indian Knowledge System in Modern Contexts
            </p>

            <p className="text-sm text-gray-800">
              <strong>Date:</strong> 16th January 2025
            </p>
          </div>

          {/* Poster */}
          <div className="flex justify-center">
            <Image
              src="/pics/event.png"
              alt="Upcoming Event Poster"
              width={360}
              height={500}
              className="rounded-lg shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
