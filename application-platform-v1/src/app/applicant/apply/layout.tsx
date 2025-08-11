
import ApplicantsHeader from "@/components/applicant/applicantsHeader";


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
      
    </>
  );
}
