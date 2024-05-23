import { getWeddings } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";


export default async function Wedding() {

const projects = await getWeddings();

    return (
      <div>
            Wedding
            


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <Link
              href={`/wedding/${project.slug}`}
              key={project._id}
              className="text-center border border-solid border-cyan-500 rounded-md m-1 p-3 hover:scale-105 hover:border-blue-600 hover:border-2 transition"
            >
              {project.name}

              {project.image && (
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={250}
                  height={100}
                  className="object-cover rounded-lg border border-gray-500 m-auto"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
}