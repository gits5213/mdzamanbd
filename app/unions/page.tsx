import UnionsListing from "@/components/UnionsListing";

export default function UnionsPage() {
  return (
    <div className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-primary">Unions & Schools Directory</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Complete listing of all unions and educational institutions serving as polling centers
            in Nakla & Nalitabari Upazilas, Sherpur-2 Constituency
          </p>
        </div>
        <UnionsListing />
      </div>
    </div>
  );
}

