import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Image from "next/image";
import logo from "../../logo.webp"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tetty Accessories",
  description:
    "Handmade headbands, tiaras, wreaths, hair elastics and other accessories",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
// get all of our pages
  const pages = await getPages();


  return (
    <html lang="en">
      <body className="container mx-auto p-10">
        <header className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          
          </Link>

          <div className="flex items-center gap-3">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-5">{children}</main>
      </body>
    </html>
  );
}
