
import ApplicantsHeader from "@/components/applicant/applicantsHeader";
import Footer from "@/components/footer/Footer";

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
      <Footer />
    </>
  );
}
