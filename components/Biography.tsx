import { personalInfo } from "@/data/personalInfo";
import { FiUser, FiCalendar, FiMapPin, FiGlobe } from "react-icons/fi";

export default function Biography() {
  return (
    <div className="card mb-8">
      <h2 className="heading-secondary mb-6">Biography</h2>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Md. Shahnewaz Zaman, known as Shanto, is a dedicated community leader and professional
          committed to serving the people of Sherpur-2 constituency (Nakla-Nalitabari). Born on
          November 11, 1983, in Bajardi, Nakla, Sherpur, he has built a successful career in
          technology while maintaining strong connections to his roots and community.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-start space-x-3">
            <FiUser className="text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <strong className="text-gray-900">Full Name:</strong>
              <p className="text-gray-700">{personalInfo.name}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FiCalendar className="text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <strong className="text-gray-900">Date of Birth:</strong>
              <p className="text-gray-700">{personalInfo.dateOfBirth}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FiMapPin className="text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <strong className="text-gray-900">Permanent Address:</strong>
              <p className="text-gray-700">{personalInfo.permanentAddress}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FiGlobe className="text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <strong className="text-gray-900">Nationality:</strong>
              <p className="text-gray-700">{personalInfo.nationality}</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
          <h3 className="font-semibold text-lg mb-3">Family Background</h3>
          <p className="text-gray-700 mb-2">
            <strong>Father:</strong> {personalInfo.fatherName}
          </p>
          <p className="text-gray-700">
            <strong>Mother:</strong> {personalInfo.motherName}
          </p>
        </div>
      </div>
    </div>
  );
}

