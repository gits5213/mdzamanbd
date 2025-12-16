import Link from "next/link";
import { constituencyInfo, naklaInfo, nalitabariInfo } from "@/data/constituency";
import { FiMapPin, FiUsers, FiFlag, FiArrowRight } from "react-icons/fi";

export default function ConstituencyInfo() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-4">Sherpur-2 Constituency</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Serving the people of Nakla and Nalitabari Upazilas
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Nakla Card */}
          <div className="card border-2 border-primary-200 hover:border-primary-400 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 text-white p-3 rounded-lg">
                <FiMapPin className="text-xl" />
              </div>
              <h3 className="font-bold text-xl">{naklaInfo.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{naklaInfo.description}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <FiUsers className="text-primary-600" />
                <span className="text-gray-700">
                  <strong>Total Voters:</strong> {naklaInfo.totalVoters.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FiFlag className="text-primary-600" />
                <span className="text-gray-700">
                  <strong>Unions:</strong> {naklaInfo.totalUnions} | <strong>Polling Centers:</strong> {naklaInfo.totalPollingCenters}
                </span>
              </div>
            </div>
            <a
              href={naklaInfo.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
            >
              Visit Official Website <FiArrowRight className="ml-1" />
            </a>
          </div>

          {/* Nalitabari Card */}
          <div className="card border-2 border-accent-200 hover:border-accent-400 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent-600 text-white p-3 rounded-lg">
                <FiMapPin className="text-xl" />
              </div>
              <h3 className="font-bold text-xl">{nalitabariInfo.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{nalitabariInfo.description}</p>
            <div className="mb-4">
              <p className="text-sm text-gray-700">
                Working together with Nakla to serve the people of Sherpur-2 constituency
                and ensure comprehensive development across both upazilas.
              </p>
            </div>
            <a
              href={nalitabariInfo.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 font-medium text-sm inline-flex items-center"
            >
              Visit Official Website <FiArrowRight className="ml-1" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link href="/constituency" className="btn-primary inline-flex items-center">
            Learn More About the Constituency
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

