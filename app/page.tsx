import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">

  <h1 className="text-2xl font-bold text-blue-500">
    GlobalEdu
  </h1>

  <div className="hidden md:flex gap-8 text-slate-300">

    <a href="#about" className="hover:text-white">
      About
    </a>

    <a href="#destinations" className="hover:text-white">
      Destinations
    </a>

    <a href="#services" className="hover:text-white">
      Services
    </a>

    <a href="#contact" className="hover:text-white">
      Contact
    </a>

  </div>

</nav>

      {/* Hero */}
      <section className="py-28 px-8 text-center">
<div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
    Trusted Study Abroad Guidance
  </div>
  <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto">
    Study Abroad with Confidence
  </h1>

  <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-9">
    We help students secure admission into top universities across the United Kingdom, Canada, Australia, Ireland, Germany, Portugal, Spain, and other leading study destinations through professional guidance and personalized support.
  </p>

  <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

    <a
      href="#contact"
      className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700 transition"
    >
      Book Free Consultation
    </a>

    <a
      href="#services"
      className="border border-slate-600 px-8 py-4 rounded-lg hover:bg-slate-800 transition"
    >
      Explore Destinations
    </a>

  </div>

</section>

      {/* About */}
<section id="about" className="py-24 px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    <div>
      <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
        About GlobalEdu
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Helping Students Make Confident Study Abroad Decisions
      </h2>

      <p className="text-slate-300 text-lg leading-8 mb-6">
        GlobalEdu is designed to support students who want to study abroad
        by providing clear guidance, destination support, admission assistance,
        and personalized consultation throughout their application journey.
      </p>

      <p className="text-slate-300 text-lg leading-8">
        Our goal is to make international education more accessible by helping
        students understand their options, prepare strong applications, and
        connect with the right opportunities.
      </p>
      <div className="grid grid-cols-2 gap-6 mt-10">

  <div>
    <h3 className="text-3xl font-bold text-blue-500">50+</h3>
    <p className="text-slate-300 mt-2">
      Partner Universities
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-blue-500">400+</h3>
    <p className="text-slate-300 mt-2">
     Students Successfully Guided
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-blue-500">8+</h3>
    <p className="text-slate-300 mt-2">
      Study Destinations
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-blue-500">95%</h3>
    <p className="text-slate-300 mt-2">
      Visa Success Rate
    </p>
  </div>

</div>
    </div>

    <div className="grid grid-cols-1 gap-6">
      <div className="border border-slate-700 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">
          Student-Centered Guidance
        </h3>
        <p className="text-slate-300">
          We focus on each student's academic background, goals, budget,
          and preferred destination.
        </p>
      </div>

      <div className="border border-slate-700 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">
          Admission Support
        </h3>
        <p className="text-slate-300">
          We help students understand admission requirements, program options,
          and application steps.
        </p>
      </div>

      <div className="border border-slate-700 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">
          Global Opportunities
        </h3>
        <p className="text-slate-300">
          We guide students exploring study options across the UK, Canada,
          Australia, Ireland, Germany, Portugal, Spain, and more.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Study Destinations */}
<section id="destinations" className="py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
      Study Destinations
    </div>

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Explore Your Future Destination
    </h2>

    <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-8">
      Discover study opportunities across leading international education
      destinations and find the right country for your academic and career goals.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-left">
      {[
  ["/flags/gb.svg", "United Kingdom", "60+ Universities", ["Engineering", "Business", "Medicine"]],
  ["/flags/ca.svg", "Canada", "30+ Universities", ["Computer Science", "Healthcare", "Business"]],
  ["/flags/au.svg", "Australia", "30+ Universities", ["Nursing", "Information Technology", "Business"]],
  ["/flags/ie.svg", "Ireland", "10+ Universities", ["Data Science", "Artificial Intelligence", "Business"]],
  ["/flags/de.svg", "Germany", "10+ Universities", ["Engineering", "Manufacturing", "Computer Science"]],
  ["/flags/pt.svg", "Portugal", "5+ Universities", ["Tourism", "Business", "Hospitality"]],
  ["/flags/es.svg", "Spain", "5+ Universities", ["Architecture", "Hospitality", "Business"]],
  ["/flags/us.svg", "United States", "60+ Universities", ["Computer Science", "Engineering", "Business"]],
].map((destination) => (
        <div
          key={destination[1] as string}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
        >
          <Image
  src={destination[0] as string}
  alt={`${destination[1] as string} flag`}
  width={80}
  height={50}
  className="mb-6 h-12 w-20 rounded-md object-cover"
/>

          <h3 className="text-2xl font-bold mb-3">
            {destination[1] as string}
          </h3>

          <p className="text-blue-400 font-semibold mb-4">
            {destination[2] as string}
          </p>

          <ul className="text-slate-300 space-y-2 mb-8">
            {(destination[3] as string[]).map((course) => (
              <li key={course}>• {course}</li>
            ))}
          </ul>

          <button className="text-blue-400 font-semibold hover:text-blue-300 transition">
            Learn More →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services */}
<section id="services" className="py-24 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
        Our Services
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Support at Every Step of Your Journey
      </h2>

      <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-8">
        From choosing the right program to preparing for departure, GlobalEdu
        provides practical guidance throughout the international education
        process.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "University Admission",
          description:
            "Get support selecting suitable universities, understanding entry requirements, and preparing strong applications.",
        },
        {
          title: "Visa Guidance",
          description:
            "Receive clear guidance on visa documents, application steps, timelines, and interview preparation.",
        },
        {
          title: "Scholarship Support",
          description:
            "Explore scholarship opportunities and receive help preparing the documents needed for funding applications.",
        },
        {
          title: "Course and Career Guidance",
          description:
            "Choose programs that match your academic background, interests, and long-term career goals.",
        },
        {
          title: "Accommodation Support",
          description:
            "Understand available housing options and receive guidance on choosing safe and suitable accommodation.",
        },
        {
          title: "Pre-Departure Support",
          description:
            "Prepare for travel, arrival, documentation, budgeting, and the transition into your new study destination.",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="h-full bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">
            {service.title}
          </h3>

          <p className="text-slate-300 leading-7">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Lead Generation */}
      <section className="p-20">
        Lead Generation Form
      </section>

      {/* Footer */}
      <section className="p-10 border-t border-slate-800 text-center">
        Footer
      </section>

    </main>
  );
}