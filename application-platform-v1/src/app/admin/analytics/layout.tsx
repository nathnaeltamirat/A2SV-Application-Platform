import AdminHeader from "@/components/admin/adminHeader";
import Footer2 from "@/components/footer/Footer2";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-100">
        <AdminHeader active="analytics" />
        {children}
        
      </div>
      <Footer2/>
    </>
  );
}
