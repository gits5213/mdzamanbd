import ConstituencyDetails from "@/components/ConstituencyDetails";

export default function ConstituencyPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="heading-primary text-center">Sherpur-2 Constituency</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Nakla & Nalitabari Upazilas
        </p>
        <ConstituencyDetails />
      </div>
    </div>
  );
}

