import AdminHeader from "@/components/admin/adminHeader";


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
      
    </>
  );
}
