import Image from "next/image";
import Navbar from "../Navbar";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
          <Image
            src="/pics/IITI-logo.png"
            alt="IIT Indore Logo"
            width={90}
            height={90}
            priority
          />

          <div className="text-center flex-grow">
            <h1 className="text-3xl md:text-4xl font-normal text-black">
              Institute Seminars and Outreach Committee
            </h1>
            <div className="h-[2px] bg-black w-3/4 mx-auto my-2" />
            <p className="text-xl text-gray-800">
              Indian Institute of Technology Indore
            </p>
          </div>

          <Image
            src="/pics/IITI-logo.png"
            alt="IIT Indore Logo"
            width={90}
            height={90}
            priority
          />
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative w-full min-h-screen overflow-hidden"
      >
        <Navbar />

        <Image
          src="/pics/Home.png"
          alt="IIT Indore Abhinandan Bhavan"
          fill
          priority
          className="object-cover object-center"
        />
      </section>
    </main>
  );
}
