import { socialPositions } from "@/data/socialPositions";
import { FiUsers, FiHeart, FiBook, FiAward } from "react-icons/fi";

const icons = [FiUsers, FiUsers, FiBook, FiHeart];

export default function SocialActivities() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12">Social Activities & Leadership</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {socialPositions.map((position, index) => {
            const Icon = icons[index] || FiAward;
            return (
              <div key={index} className="card hover:border-primary-300 border-2 border-transparent transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-4 rounded-lg flex-shrink-0">
                    <Icon className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{position.position}</h3>
                    <p className="text-gray-700 font-medium mb-1">{position.organization}</p>
                    {position.location && (
                      <p className="text-gray-600 text-sm">{position.location}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 card bg-gradient-to-r from-primary-50 to-accent-50 max-w-3xl mx-auto text-center">
          <h3 className="font-semibold text-xl mb-3">Commitment to Community</h3>
          <p className="text-gray-700">
            Through various social organizations and foundations, I am dedicated to serving the community,
            supporting education, healthcare, and social welfare initiatives in Nakla, Sherpur, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

