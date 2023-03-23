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
      <body>{children}</body>
    </html>
  );
}
