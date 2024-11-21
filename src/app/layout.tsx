import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto font
import "./globals.css";
import LenisScroller from "@/components/util/LenisScroller";
import NavBar from "@/components/ui/NavBar";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Choose weights you need
});

export const metadata: Metadata = {
  title: "Prithvi Portfolio",
  description: `I am Pruthvik, a frontend developer with over 2 year of professional
          experience. Successfully building user-friendly websites with ReactJS
          & NextJS. I pay attention to small details, enjoy technical problems,
          and work well in teams. I like learning new technologies and always
          aim to improve my skills.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {" "}
        {/* Apply Roboto font */}
        {children}
        <NavBar></NavBar>
      </body>
      <LenisScroller></LenisScroller>
    </html>
  );
}
