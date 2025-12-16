"use client";

import { useState } from "react";
import { nalitabariUnionsList, getAllSchools, School } from "@/data/unions";
import { naklaUnionsList, getAllNaklaSchools } from "@/data/naklaUnions";
import { FiMapPin, FiUsers, FiBook, FiSearch, FiChevronDown, FiChevronUp, FiAward, FiFlag } from "react-icons/fi";

type Upazila = "nakla" | "nalitabari" | "all";

export default function UnionsListing() {
  const [selectedUpazila, setSelectedUpazila] = useState<Upazila>("all");
  const [expandedUnion, setExpandedUnion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "primary" | "high" | "madrasa" | "college">("all");

  const naklaSchools = getAllNaklaSchools();
  const nalitabariSchools = getAllSchools();
  const allSchools = [...naklaSchools, ...nalitabariSchools];
  
  // Get unions based on selected upazila
  const getUnionsList = () => {
    if (selectedUpazila === "nakla") return naklaUnionsList;
    if (selectedUpazila === "nalitabari") return nalitabariUnionsList;
    return [...naklaUnionsList, ...nalitabariUnionsList];
  };

  const unionsList = getUnionsList();
  
  const filteredSchools = allSchools.filter((school, index) => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || school.type === filterType;
    const isNaklaSchool = index < naklaSchools.length;
    const matchesUpazila = selectedUpazila === "all" || 
      (selectedUpazila === "nakla" && isNaklaSchool) ||
      (selectedUpazila === "nalitabari" && !isNaklaSchool);
    return matchesSearch && matchesType && matchesUpazila;
  });

  const toggleUnion = (unionName: string) => {
    setExpandedUnion(expandedUnion === unionName ? null : unionName);
  };

  const getSchoolTypeLabel = (type: School["type"]) => {
    const labels = {
      primary: "Primary School",
      high: "High School",
      madrasa: "Madrasa",
      college: "College",
      other: "Other",
    };
    return labels[type];
  };

  const getSchoolTypeColor = (type: School["type"]) => {
    const colors = {
      primary: "bg-blue-100 text-blue-700 border-blue-300",
      high: "bg-green-100 text-green-700 border-green-300",
      madrasa: "bg-purple-100 text-purple-700 border-purple-300",
      college: "bg-orange-100 text-orange-700 border-orange-300",
      other: "bg-gray-100 text-gray-700 border-gray-300",
    };
    return colors[type];
  };

  const getUpazilaBadge = (unionIndex: number, totalNakla: number) => {
    const isNakla = unionIndex < totalNakla;
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${
        isNakla 
          ? "bg-primary-100 text-primary-700 border border-primary-300" 
          : "bg-accent-100 text-accent-700 border border-accent-300"
      }`}>
        {isNakla ? "Nakla" : "Nalitabari"}
      </span>
    );
  };

  const isNaklaUnion = (unionIndex: number, totalNakla: number) => {
    return unionIndex < totalNakla;
  };

  return (
    <div className="space-y-8">
      {/* Upazila Filter Tabs */}
      <div className="card bg-white border-2 border-gray-200">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedUpazila("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedUpazila === "all"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Upazilas
          </button>
          <button
            onClick={() => setSelectedUpazila("nakla")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedUpazila === "nakla"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Nakla
          </button>
          <button
            onClick={() => setSelectedUpazila("nalitabari")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedUpazila === "nalitabari"
                ? "bg-accent-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Nalitabari
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
          <div className="flex items-center space-x-4">
            <div className="bg-primary-600 text-white p-4 rounded-lg">
              <FiFlag className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Unions</p>
              <p className="text-3xl font-bold text-gray-900">{unionsList.length}</p>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200">
          <div className="flex items-center space-x-4">
            <div className="bg-accent-600 text-white p-4 rounded-lg">
              <FiAward className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Schools</p>
              <p className="text-3xl font-bold text-gray-900">
                {selectedUpazila === "nakla" 
                  ? naklaSchools.length 
                  : selectedUpazila === "nalitabari"
                  ? nalitabariSchools.length
                  : allSchools.length}
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 text-white p-4 rounded-lg">
              <FiUsers className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Polling Centers</p>
              <p className="text-3xl font-bold text-gray-900">
                {selectedUpazila === "nakla" ? "79" : selectedUpazila === "nalitabari" ? "81" : "160"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="card bg-white border-2 border-gray-200">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search schools by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as typeof filterType)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All School Types</option>
            <option value="primary">Primary Schools</option>
            <option value="high">High Schools</option>
            <option value="madrasa">Madrasas</option>
            <option value="college">Colleges</option>
          </select>
        </div>
      </div>

      {/* Unions List */}
      <div className="space-y-4">
        <h2 className="heading-secondary flex items-center">
          <FiFlag className="mr-3 text-primary-600" />
          {selectedUpazila === "all" 
            ? "Unions of Nakla & Nalitabari Upazilas" 
            : selectedUpazila === "nakla"
            ? "Unions of Nakla Upazila"
            : "Unions of Nalitabari Upazila"}
        </h2>

        {unionsList.map((union, index) => {
          const totalNakla = naklaUnionsList.length;
          const isNakla = index < totalNakla;
          return (
          <div
            key={`${union.name}-${index}`}
            className="card border-2 border-gray-200 hover:border-primary-300 transition-all"
          >
            <button
              onClick={() => toggleUnion(`${union.name}-${index}`)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center space-x-4">
                <div className={`${
                  isNakla ? "bg-primary-600" : "bg-accent-600"
                } text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-gray-900">{union.name}</h3>
                    {selectedUpazila === "all" && getUpazilaBadge(index, totalNakla)}
                  </div>
                  {union.nameBangla && (
                    <p className="text-sm text-gray-600">{union.nameBangla}</p>
                  )}
                  {union.totalVoters && (
                    <p className="text-xs text-gray-500 mt-1">
                      {union.totalVoters.toLocaleString()} voters • {union.schools.length} schools
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {union.schools.length > 0 && (
                  <span className="text-sm text-gray-600">
                    {union.schools.length} {union.schools.length === 1 ? "school" : "schools"}
                  </span>
                )}
                {expandedUnion === `${union.name}-${index}` ? (
                  <FiChevronUp className="text-gray-400" size={24} />
                ) : (
                  <FiChevronDown className="text-gray-400" size={24} />
                )}
              </div>
            </button>

            {expandedUnion === `${union.name}-${index}` && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                {union.schools.length > 0 ? (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <FiBook className="mr-2 text-primary-600" />
                      Schools in {union.name}
                    </h4>
                    {union.schools.map((school) => (
                      <div
                        key={school.serialNo}
                        className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h5 className="font-semibold text-gray-900">{school.name}</h5>
                              <span
                                className={`px-2 py-1 rounded text-xs font-medium border ${getSchoolTypeColor(
                                  school.type
                                )}`}
                              >
                                {getSchoolTypeLabel(school.type)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <FiMapPin className="text-primary-600" />
                                <span>{school.location}</span>
                              </div>
                              {school.booths && (
                                <div className="flex items-center space-x-1">
                                  <FiBook className="text-primary-600" />
                                  <span>{school.booths} booths</span>
                                </div>
                              )}
                              {school.voters && (
                                <div className="flex items-center space-x-1">
                                  <FiUsers className="text-primary-600" />
                                  <span>{school.voters.toLocaleString()} voters</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FiBook className="mx-auto mb-2 text-gray-400" size={32} />
                    <p>School data for {union.name} is being compiled</p>
                    <p className="text-sm mt-1">Please check back soon for complete information</p>
                  </div>
                )}
              </div>
            )}
          </div>
          );
        })}
      </div>

      {/* All Schools List */}
      {searchTerm || filterType !== "all" ? (
        <div className="mt-12">
          <h2 className="heading-secondary flex items-center mb-6">
            <FiSearch className="mr-3 text-primary-600" />
            Search Results ({filteredSchools.length})
          </h2>
          {filteredSchools.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredSchools.map((school, index) => (
                <div
                  key={index}
                  className="card border-2 border-gray-200 hover:border-primary-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h5 className="font-semibold text-gray-900 flex-1">{school.name}</h5>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium border ml-2 ${getSchoolTypeColor(
                        school.type
                      )}`}
                    >
                      {getSchoolTypeLabel(school.type)}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-primary-600" />
                      <span>{school.location}</span>
                    </div>
                    {school.booths && (
                      <div className="flex items-center space-x-2">
                        <FiBook className="text-primary-600" />
                        <span>{school.booths} polling booths</span>
                      </div>
                    )}
                    {school.voters && (
                      <div className="flex items-center space-x-2">
                        <FiUsers className="text-primary-600" />
                        <span>{school.voters.toLocaleString()} voters</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12 bg-gray-50">
              <FiSearch className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 text-lg">No schools found matching your search</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
