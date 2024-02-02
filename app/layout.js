import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Building a House in Germany Blog - Viebrockhaus Maxime 300 with a Cellar",
  description:
    "Building a House in Germany Blog - Viebrockhaus Maxime 300 with a Cellar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <main className="w-7xl max-w-7xl mx-auto flex flex-col md:flex-row items-start md:gap-8 mt-16 px-2">
            <div>{children}</div>
            <Aside />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
