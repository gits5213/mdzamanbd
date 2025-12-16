import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";
import { FiUser, FiBriefcase, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary text-center mb-12">About the Candidate</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiUser className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Name</h3>
                  <p className="text-gray-600">{personalInfo.name}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiBriefcase className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Profession</h3>
                  <p className="text-gray-600 text-sm">
                    Senior Software Engineer & Development Manager
                    <br />
                    <span className="text-xs">American Airlines, USA</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiMapPin className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Constituency</h3>
                  <p className="text-gray-600">Sherpur-2 (Nakla-Nalitabari)</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiBriefcase className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Social Leadership</h3>
                  <p className="text-gray-600 text-sm">
                    General Secretary, Greater Mymensingh Association USA
                    <br />
                    Executive Director, LiSu Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about" className="btn-primary inline-flex items-center">
              Read Full Biography
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

