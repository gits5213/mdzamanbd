import { education } from "@/data/education";
import { FiBook, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <div className="card mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary-100 p-3 rounded-lg">
          <FiAward className="text-primary-600 text-2xl" />
        </div>
        <h2 className="heading-secondary mb-0">Educational Qualifications</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border-l-4 border-primary-600 pl-6 py-4 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{edu.degree}</h3>
                <div className="flex items-center space-x-2 text-gray-700 mb-1">
                  <FiBook className="text-primary-600" />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                <p className="text-gray-600">{edu.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> The combination of academic excellence in Chemistry and professional
          expertise in Computer Engineering reflects a commitment to both traditional education and
          modern technological advancement.
        </p>
      </div>
    </div>
  );
}

