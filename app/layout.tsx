import SideNavBar from "@/components/global/SideNavBar";
import TopNavBar from "@/components/global/TopNavBar";
import "./globals.css";

export const metadata = {
  title: "Youtube",
  description: "A youtube ui clone built with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen bg-zinc-900 text-zinc-100 ">
          <TopNavBar />
          <div className="flex h-full">
            <SideNavBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
