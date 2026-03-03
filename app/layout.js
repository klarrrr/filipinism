import { Poppins, Inter  } from "next/font/google";
import "./globals.css";
import Header from "./component/header";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: "Filipinism",
  description: "Master English with Confidence - An interactive learning platform for Filipino 11th graders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overscroll-none">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-(--soft-gray)`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
