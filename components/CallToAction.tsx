import Link from "next/link";
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Building a Better Future
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Together, we can create a corruption-free, transparent, and just society
          </p>
          <p className="text-lg mb-10 text-primary-50 max-w-2xl mx-auto">
            Your support and participation are essential in bringing positive change to
            Nakla-Nalitabari and Sherpur-2 constituency. Let's work together for a better tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center shadow-lg"
            >
              <FiMessageCircle className="mr-2" />
              Get In Touch
            </Link>
            <a
              href="tel:+8801728014014"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors inline-flex items-center border-2 border-white/30"
            >
              <FiPhone className="mr-2" />
              Call Us
            </a>
            <a
              href="mailto:info@mdzamanbd.com"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center border-2 border-white"
            >
              <FiMail className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

