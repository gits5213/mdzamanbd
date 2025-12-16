import { visionStatement } from "@/data/vision";
import { FiTarget, FiShield, FiHeart, FiCheckCircle } from "react-icons/fi";

export default function VisionContent() {
  const foundationIcons = [FiTarget, FiShield, FiHeart];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Vision Statement */}
      <div className="card bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{visionStatement.main}</p>
        </div>
      </div>

      {/* Three Foundations */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Three Pillars of Our Movement
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visionStatement.foundations.map((foundation, index) => {
            const Icon = foundationIcons[index];
            return (
              <div key={foundation.title} className="card text-center hover:shadow-xl transition-shadow">
                <div className="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-3xl" />
                </div>
                <h4 className="font-bold text-xl mb-3 text-gray-900">{foundation.title}</h4>
                <p className="text-gray-700">{foundation.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Objectives */}
      <div className="card bg-white">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Our Key Objectives
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {visionStatement.objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-700">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Movement</h3>
        <p className="text-lg text-primary-100 mb-6">
          Together, we can transform Nakla-Nalitabari into a model upazila where every citizen
          can live with dignity, safety, and prosperity.
        </p>
        <p className="text-primary-50 italic">
          "Standing on Truth, Morality, and Service to Humanity"
        </p>
      </div>
    </div>
  );
}

