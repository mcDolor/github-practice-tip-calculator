export const metadata = {
  title: "Splitter - Tip Calculator",
  description: "Calculate tip and split bill easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}