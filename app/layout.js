import "./globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata = {
  title: "Top Travel",
  description: "Choose your destenation and let the rest for us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
