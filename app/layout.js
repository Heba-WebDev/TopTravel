import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/components/globals/Navbar";

const ralway = Raleway({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Top Travel",
  description: "Choose your destenation and let the rest for us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ralway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
