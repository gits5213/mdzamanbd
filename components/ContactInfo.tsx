import { personalInfo } from "@/data/personalInfo";
import { FiPhone, FiMail, FiMapPin, FiGlobe, FiClock } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="card">
      <h2 className="heading-secondary mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <FiPhone className="text-primary-600 mr-2" />
            Phone Numbers
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-sm text-gray-600 mb-1">Bangladesh</p>
              <a
                href={`tel:${personalInfo.phone.bd.replace(/\s/g, "")}`}
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                {personalInfo.phone.bd}
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-sm text-gray-600 mb-1">United States</p>
              <a
                href={`tel:${personalInfo.phone.usa.replace(/\s/g, "")}`}
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                {personalInfo.phone.usa}
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <FiMail className="text-primary-600 mr-2" />
            Email
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <FiMapPin className="text-primary-600 mr-2" />
            Addresses
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2 font-medium">Permanent Address (Bangladesh)</p>
              <p className="text-gray-900">{personalInfo.permanentAddress}</p>
              <p className="text-gray-600 text-sm mt-1">Kaya Kori (Baliganj Bazar), Nakla, Sherpur, Mymensingh</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2 font-medium">Present Address (USA)</p>
              <p className="text-gray-900">{personalInfo.presentAddress}</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <FiClock className="text-primary-600 mr-2" />
            Office Hours
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Bangladesh Time:</strong> Available for calls and meetings
          </p>
          <p className="text-gray-700 mb-2">
            <strong>USA Time:</strong> Available for calls and meetings
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Please feel free to reach out via phone or email. We will respond as soon as possible.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <FiGlobe className="mr-2" />
            Social Media & Online Presence
          </h3>
          <p className="text-primary-100">
            Follow our campaign updates and connect with us through our official channels.
            More information coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}

