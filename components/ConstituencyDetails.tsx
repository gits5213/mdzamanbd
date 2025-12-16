import { naklaInfo, nalitabariInfo, constituencyInfo } from "@/data/constituency";
import { FiMapPin, FiUsers, FiFlag, FiGlobe, FiExternalLink, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ConstituencyDetails() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="card bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
        <h2 className="heading-secondary mb-4">Constituency Overview</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <FiMapPin className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Constituency</h3>
            <p className="text-gray-700">{constituencyInfo.name}</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <FiFlag className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Upazilas</h3>
            <p className="text-gray-700">{constituencyInfo.upazilas.join(" & ")}</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <FiGlobe className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-1">District</h3>
            <p className="text-gray-700">{constituencyInfo.district}</p>
          </div>
        </div>
      </div>

      {/* Nakla Details */}
      <div className="card border-2 border-primary-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-600 text-white p-3 rounded-lg">
              <FiMapPin className="text-2xl" />
            </div>
            <h2 className="heading-secondary mb-0">{naklaInfo.name}</h2>
          </div>
          <a
            href={naklaInfo.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm inline-flex items-center"
          >
            Official Site <FiExternalLink className="ml-2" />
          </a>
        </div>

        <p className="text-gray-700 mb-6 text-lg">{naklaInfo.description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg text-center">
            <FiUsers className="text-primary-600 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Total Voters</p>
            <p className="text-2xl font-bold text-gray-900">
              {naklaInfo.totalVoters.toLocaleString()}
            </p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg text-center">
            <FiUsers className="text-primary-600 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Male Voters</p>
            <p className="text-2xl font-bold text-gray-900">
              {naklaInfo.maleVoters.toLocaleString()}
            </p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg text-center">
            <FiUsers className="text-primary-600 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Female Voters</p>
            <p className="text-2xl font-bold text-gray-900">
              {naklaInfo.femaleVoters.toLocaleString()}
            </p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg text-center">
            <FiFlag className="text-primary-600 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Unions</p>
            <p className="text-2xl font-bold text-gray-900">{naklaInfo.totalUnions}</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Polling Centers:</strong> {naklaInfo.totalPollingCenters} centers serve the
            voters across {naklaInfo.totalUnions} unions in Nakla Upazila.
          </p>
        </div>
      </div>

      {/* Nalitabari Details */}
      <div className="card border-2 border-accent-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-accent-600 text-white p-3 rounded-lg">
              <FiMapPin className="text-2xl" />
            </div>
            <h2 className="heading-secondary mb-0">{nalitabariInfo.name}</h2>
          </div>
          <a
            href={nalitabariInfo.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm inline-flex items-center border-accent-600 text-accent-600 hover:bg-accent-50"
          >
            Official Site <FiExternalLink className="ml-2" />
          </a>
        </div>

        <p className="text-gray-700 mb-6 text-lg">{nalitabariInfo.description}</p>

        {nalitabariInfo.electionArea && (
          <div className="mb-4 p-3 bg-accent-50 rounded-lg border-l-4 border-accent-600">
            <p className="text-sm text-gray-700">
              <strong>Election Area:</strong> {nalitabariInfo.electionArea}
            </p>
            {nalitabariInfo.source && (
              <p className="text-xs text-gray-600 mt-1">
                <strong>Source:</strong> {nalitabariInfo.source}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-accent-50 p-4 rounded-lg text-center">
            <FiFlag className="text-accent-600 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Unions</p>
            <p className="text-2xl font-bold text-gray-900">{nalitabariInfo.totalUnions}</p>
          </div>
          <div className="bg-accent-50 p-4 rounded-lg text-center">
            <FiMapPin className="text-accent-600 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Polling Centers</p>
            <p className="text-2xl font-bold text-gray-900">{nalitabariInfo.totalPollingCenters}</p>
          </div>
          {nalitabariInfo.totalVoters > 0 ? (
            <>
              <div className="bg-accent-50 p-4 rounded-lg text-center">
                <FiUsers className="text-accent-600 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Total Voters</p>
                <p className="text-2xl font-bold text-gray-900">
                  {nalitabariInfo.totalVoters.toLocaleString()}
                </p>
              </div>
              <div className="bg-accent-50 p-4 rounded-lg text-center">
                <FiUsers className="text-accent-600 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Male / Female</p>
                <p className="text-lg font-bold text-gray-900">
                  {nalitabariInfo.maleVoters.toLocaleString()} / {nalitabariInfo.femaleVoters.toLocaleString()}
                </p>
              </div>
            </>
          ) : (
            <div className="bg-accent-50 p-4 rounded-lg text-center md:col-span-2">
              <FiUsers className="text-accent-600 text-2xl mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Voter Statistics</p>
              <p className="text-sm text-gray-700">Detailed voter data being compiled</p>
            </div>
          )}
        </div>

        <div className="bg-accent-50 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Commitment to Development</h3>
          <p className="text-gray-700 mb-3">
            Nalitabari Upazila, together with Nakla, forms the Sherpur-2 constituency. Our vision
            encompasses comprehensive development across both upazilas, ensuring equal opportunities
            and progress for all residents. We are committed to working closely with local
            administration, community leaders, and citizens to address the unique needs and
            challenges of each area.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> Polling center data is based on the 12th National Parliament Election
            polling station location policy. Detailed voter statistics are being compiled from the official
            election commission documents.
          </p>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment</h3>
        <p className="text-lg text-center text-primary-100 max-w-3xl mx-auto mb-6">
          As a candidate for Sherpur-2 constituency, I am dedicated to serving both Nakla and
          Nalitabari upazilas with equal commitment. Together, we will work towards infrastructure
          development, education enhancement, healthcare improvement, and economic growth that
          benefits all residents.
        </p>
        <div className="text-center">
          <Link
            href="/unions"
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            View Complete Union & School Directory
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

