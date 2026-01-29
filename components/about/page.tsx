import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#e6eaef] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          About
        </h2>

        {/* Description */}
        <p className="text-m text-gray-800 leading-relaxed max-w-5xl mb-14">
          The Academic Outreach Initiatives at IIT Indore are designed to foster
          impactful associations with the academic community and society,
          promoting knowledge exchange and social responsibility. These
          initiatives enable IIT Indore to share its scientific research with a
          diverse audience, from students and academic peers to industry
          professionals and the general public, while also incorporating
          valuable feedback to refine research inquiries and methodologies. By
          engaging in seminars, workshops, and collaborative projects, IIT
          Indore aims to bridge the gap between academia and society, inspiring
          future researchers, supporting industry advancements, and
          contributing to societal progress. The current composition of the
          Seminar and Outreach Committee at IIT Indore is as follows:
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Director Image */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-md p-4">
              <Image
                src="/pics/director.png"
                alt="Director IIT Indore"
                width={280}
                height={360}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Note from Director */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              A note from Director&apos;s Desk
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Indian Institute of Technology Indore (IIT Indore), established in
              2009 as a second-generation IIT in Indore, India, is renowned for
              its excellence in education and research. Offering a diverse
              array of programs, the institution&apos;s hallmark is its
              rigorous curriculum which blends theory and practice and strongly
              emphasizes research and innovation.
              <br />
              <br />
              IIT Indore maintains a strong global presence, having established
              over 100 MoUs worldwide and securing more than 35 bilateral
              research grants with foreign institutes. IIT Indore has around
              210 Faculty members, including experienced senior members from
              established IITs and young, vibrant scholars with global academic
              backgrounds, many of whom are listed among the top 2% of
              scientists in the world.
              <br />
              <br />
              Additionally, a mega project worth Rs 100 Cr under the DST
              National Mission on Cyber-Physical Systems is dedicated to
              developing cutting-edge technologies and training a skilled
              workforce in this domain. This project stands as a testament to
              IIT Indore&apos;s commitment to fostering advancements in critical
              technological spheres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
