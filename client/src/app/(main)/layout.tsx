import LayoutPage from "@/layouts/Page";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LayoutPage>{children}</LayoutPage>
    </section>
  );
}
