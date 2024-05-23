import { getWedding } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


type Props = {
  params: { wedding: string };
};

export default async function weddingItem({ params }: Props) {
const slug = params.wedding;
  const project = await getWedding(slug);

    return (
      <div>
        <header className="flex items-center justify-between">
          <h1 className="text-5xl text-center drop-shadow font-bold font-serif mt-1">
            {project.name}
          </h1>
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener norefferer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-800 hover:text-white transition"
          >
            View Project
          </a>
        </header>

        <div className="text-lg text-gray-500 mt-5">
          <PortableText value={project.content} />
        </div>
        <Image
          src={project.image}
          alt={project.alt}
          width={600}
          height={400}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
    );
}