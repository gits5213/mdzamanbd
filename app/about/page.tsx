import Biography from "@/components/Biography";
import Education from "@/components/Education";
import PersonalInfo from "@/components/PersonalInfo";

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="heading-primary text-center">About Md. Shahnewaz Zaman</h1>
        <Biography />
        <Education />
        <PersonalInfo />
      </div>
    </div>
  );
}

