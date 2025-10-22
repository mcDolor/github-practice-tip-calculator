import "./globals.css";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tip Calculator",
  description: "Frontend Mentor Challenge – Tip Calculator App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-grey-200 text-green-900 min-h-screen flex items-center justify-center p-6`}>
        {children}
      </body>
    </html>
  );
}