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
      <section className="p-20">
        About Us
      </section>

      {/* Study Destinations */}
      <section className="p-20">
        Study Destinations
      </section>

      {/* Services */}
      <section className="p-20">
        Services
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