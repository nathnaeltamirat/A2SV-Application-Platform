import AdminHeader from "@/components/admin/adminHeader";



export default function CycleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-100">
        <AdminHeader active="cycles" />
        {children}
        
      </div>
      
    </>
  );
}
