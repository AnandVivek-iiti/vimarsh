import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#e6eaef] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">About</h2>

        {/* Description */}
        <p className="text-m text-gray-800 leading-relaxed max-w-5xl mb-14">
          The Academic Outreach Initiatives at IIT Indore are designed to foster
          meaningful engagement with the academic community and society at
          large, promoting knowledge exchange and social responsibility. These
          initiatives enable IIT Indore to disseminate its scientific research
          to a diverse audience—including students, academic peers, industry
          professionals, and the general public— while also incorporating
          valuable feedback to refine research questions and methodologies.
          <br></br>
          <br></br>
          Through seminars, workshops, and collaborative projects, IIT Indore
          seeks to bridge the gap between academia and society by inspiring
          future researchers, supporting industry innovation, and contributing
          to broader societal progress. These objectives are pursued through the
          Outreach Cell, functioning under the Institute Seminars and Outreach
          Committee.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Director Image */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <Image
                src="/pics/People/director.png"
                alt="Prof. Suhas S. Joshi, Director IIT Indore"
                width={400}
                height={500}
                className="rounded-lg object-cover mx-auto"
              />

              {/* Director Name */}
              <p className="mt-4 text-gray-800 text-lg font-medium italic">
                Prof. Suhas S. Joshi
              </p>
              <p className="text-m text-gray-500">Director, IIT Indore</p>
            </div>
          </div>

          {/* Note from Director */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              A note from Director&apos;s Desk
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Established in 2009, the Indian Institute of Technology Indore has
              steadily grown into a centre of excellence in education, research,
              and innovation, with a strong emphasis on engagement beyond
              institutional boundaries. As a second-generation IIT, the
              Institute was envisioned to serve not only as a hub of advanced
              learning but also as a conduit for knowledge dissemination and
              societal outreach.
              <br />
              <br />
              Interdisciplinarity lies at the core of IIT Indore’s academic and
              research philosophy. By fostering collaboration across
              engineering, sciences, and the humanities, the Institute
              encourages the exchange of ideas that address complex societal and
              technological challenges. This integrative culture enables
              meaningful dialogue between academia, industry, and the wider
              public.
              <br />
              <br />
              With a dedicated faculty body of over 210 members, including
              internationally recognised scholars, IIT Indore actively
              contributes to national and global research ecosystems. Our
              extensive network of international collaborations further enhances
              academic exchange and outreach, strengthening the Institute’s
              global footprint.
              <br />
              <br />
              The Institute’s involvement in major national initiatives,
              including the ₹100 crore project under the DST National Mission on
              Cyber-Physical Systems, reflects its commitment to advancing
              frontier technologies while nurturing skilled human resources.
              Through its outreach initiatives, IIT Indore remains committed to
              sharing knowledge, inspiring young minds, and fostering a culture
              of curiosity, innovation, and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
