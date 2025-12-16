export default function ReserveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F6F3FF] via-[#EEE9FF] to-white">
      {children}
    </div>
  );
}
