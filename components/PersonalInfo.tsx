import { personalInfo } from "@/data/personalInfo";
import { FiBriefcase, FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";

export default function PersonalInfo() {
  return (
    <div className="card">
      <h2 className="heading-secondary mb-6">Personal & Professional Information</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <FiBriefcase className="text-primary-600 mr-2" />
            Professional Career
          </h3>
          <div className="space-y-3">
            {personalInfo.profession.map((prof, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-600">
                <p className="text-gray-700">{prof}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <FiMapPin className="text-primary-600 mr-2" />
              Addresses
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Present Address</p>
                <p className="text-gray-900">{personalInfo.presentAddress}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Permanent Address</p>
                <p className="text-gray-900">{personalInfo.permanentAddress}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <FiPhone className="text-primary-600 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Bangladesh</p>
                <a
                  href={`tel:${personalInfo.phone.bd.replace(/\s/g, "")}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {personalInfo.phone.bd}
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">United States</p>
                <a
                  href={`tel:${personalInfo.phone.usa.replace(/\s/g, "")}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {personalInfo.phone.usa}
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <FiGlobe className="text-primary-600 mr-2" />
            Personal Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Gender</p>
              <p className="text-gray-900 font-medium">{personalInfo.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Religion</p>
              <p className="text-gray-900 font-medium">{personalInfo.religion}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Nationality</p>
              <p className="text-gray-900 font-medium">{personalInfo.nationality}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date of Birth</p>
              <p className="text-gray-900 font-medium">{personalInfo.dateOfBirth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

