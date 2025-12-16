import Link from "next/link";
import { FiArrowRight, FiFlag } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
      }}></div>
      
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FiFlag className="text-yellow-300" />
            <span className="text-sm font-medium">Sherpur-2 Constituency</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Md. Shahnewaz Zaman
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 text-primary-100">
              (Shanto)
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-100">
            Candidate for Bangladesh Parliament
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-200">
            Nakla-Nalitabari | Election - Upcoming..
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-primary-50 max-w-2xl mx-auto leading-relaxed">
            Standing on the foundations of <strong>Truth</strong>, <strong>Morality</strong>, and{" "}
            <strong>Service to Humanity</strong> to build a corruption-free, transparent, and just society.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/vision" className="btn-primary text-lg px-8 py-4">
              Our Vision
              <FiArrowRight className="ml-2 inline" />
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

