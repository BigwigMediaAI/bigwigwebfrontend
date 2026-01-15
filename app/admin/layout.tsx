// app/admin/layout.tsx
import AdminLayout from "../../Components/AdminLayout";

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
