import Image from "next/image";
import Navbar from "../Navbar";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <Image
            src="/pics/IITI-logo.png"
            alt="IIT Indore Logo"
            width={80}
            height={80}
            priority
          />

          <div className="text-center flex-grow">
            <h1 className="text-2xl md:text-3xl font-semibold text-black">
              Institute Seminars and Outreach Committee
            </h1>
            <div className="h-0.5 bg-black w-3/6 mx-auto my-2" />
            <p className="text-m text-gray-600">
              Institute Institute of Technology Indore
            </p>
          </div>

          <Image
            src="/pics/IITI-logo.png"
            alt="IIT Indore Logo"
            width={80}
            height={80}
            priority
          />
        </div>
      </header>

      {/* HERO WITH NAVBAR OVERLAY */}
      <section className="relative w-full h-screen">
        <Image
          src="/pics/Home.png"
          alt="IIT Indore Abhinandan Bhavan"
          fill
          priority
          className="object-cover object-center"
        />

        {/* NAVBAR OVERLAY */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
        </div>
      </section>
    </main>
  );
}