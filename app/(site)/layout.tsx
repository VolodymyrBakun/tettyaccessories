import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

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
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/">Tetty</Link>

          <div className="flex items-center gap-3">
            {pages.map((page) => (<Link key={page._id} href={`/${page.slug}`}>
              {page.title}
            </Link>))}
          </div>

</header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
