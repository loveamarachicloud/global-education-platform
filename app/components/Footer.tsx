export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
  <h3 className="text-xl font-bold text-white">
    Global Education
  </h3>

  <p className="mt-4 text-sm leading-6">
    Helping students achieve their dreams of studying abroad through trusted guidance and personalized support.
  </p>
</div>

          <div>
  <h3 className="text-lg font-semibold text-white">
    Quick Links
  </h3>

  <ul className="mt-4 space-y-3">
    <li>
      <a href="#about" className="transition hover:text-blue-400">
        About
      </a>
    </li>

    <li>
      <a href="#destinations" className="transition hover:text-blue-400">
        Destinations
      </a>
    </li>

    <li>
      <a href="#services" className="transition hover:text-blue-400">
        Services
      </a>
    </li>

    <li>
      <a href="#consultation" className="transition hover:text-blue-400">
        Consultation
      </a>
    </li>
  </ul>
</div>

          <div>
  <h3 className="text-lg font-semibold text-white">
    Study Destinations
  </h3>

  <ul className="mt-4 space-y-3">
    <li>
      <a href="#destinations" className="transition hover:text-blue-400">
        United Kingdom
      </a>
    </li>

    <li>
      <a href="#destinations" className="transition hover:text-blue-400">
        Canada
      </a>
    </li>

    <li>
      <a href="#destinations" className="transition hover:text-blue-400">
        Australia
      </a>
    </li>

    <li>
      <a href="#destinations" className="transition hover:text-blue-400">
        United States
      </a>
    </li>
  </ul>
</div>

          <div>
  <h3 className="text-lg font-semibold text-white">
    Contact
  </h3>

  <ul className="mt-4 space-y-3">
    <li>
  <a
    href="mailto:geosintl123@gmail.com"
    className="transition hover:text-blue-400"
  >
    Email: geosintl123@gmail.com
  </a>
</li>
    <li>
  <a
    href="tel:+2348137164580"
    className="transition hover:text-blue-400"
  >
    Phone: +234 8137164580
  </a>
</li>

    <li>Abuja, Nigeria</li>
  </ul>
</div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
  <p>© 2026 Global Education Platform. All rights reserved.</p>
</div>
      </div>
    </footer>
  );
}