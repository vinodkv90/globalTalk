import { Dela_Gothic_One, Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import PublicLayout from "@/components/PublicLayout";

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic-one",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${delaGothicOne.variable} ${montserrat.variable}`}>
        <PublicLayout>
          {children}
        </PublicLayout>
      </body>
    </html>
  );
}
