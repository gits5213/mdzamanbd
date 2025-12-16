import Link from "next/link";
import { visionStatement } from "@/data/vision";
import { FiTarget, FiShield, FiHeart, FiArrowRight } from "react-icons/fi";

export default function VisionSection() {
  const icons = [FiTarget, FiShield, FiHeart];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary text-center mb-4">Political Vision</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {visionStatement.main}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {visionStatement.foundations.map((foundation, index) => {
              const Icon = icons[index];
              return (
                <div key={foundation.title} className="card text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{foundation.title}</h3>
                  <p className="text-gray-600 text-sm">{foundation.description}</p>
                </div>
              );
            })}
          </div>

          <div className="card bg-primary-50 border-2 border-primary-200">
            <h3 className="font-semibold text-xl mb-4 text-center">Key Objectives</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {visionStatement.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/vision" className="btn-primary inline-flex items-center">
              Learn More About Our Vision
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

