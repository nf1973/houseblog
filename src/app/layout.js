import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
