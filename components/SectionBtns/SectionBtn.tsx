"use client"

import Link from "next/link";

export default function SectionBtns() {
    


    return (
      <div className="flex gap-5">

        <Link
          href={`/wedding`}
          className="border border-solid border-gray-300 rounded-md p-3"
        >
          <p>Wedding</p>
        </Link>
        <Link
          href={`/projects`}
          className="border border-solid border-gray-300 rounded-md p-3"
        >
          <p>First Communion</p>
        </Link>
      </div>
    );
}