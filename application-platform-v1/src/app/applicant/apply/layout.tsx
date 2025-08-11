
import ApplicantsHeader from "@/components/applicant/applicantsHeader";
import Footer2 from "@/components/footer/Footer2";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="bg-gray-100 min-h-screen ">
   
        {children}
      </div>
      <Footer2 />
    </>
  );
}
