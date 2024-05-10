import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();



  return <div>
    <h1 className="text-5xl text-center font-bold font-serif mt-1">Tetty Accessories</h1>
    <p className="p-3 text-center">We offers handmade headbands, tiaras, wreaths, hair elastics and other accessories made in floral and fancy style.</p>
    <h2 className="mt-5 mb-3 ml-2 font-extrabold" >Listings</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="text-center border border-solid border-cyan-500 rounded-md m-1 p-3 hover:scale-105 hover:border-blue-600 hover:border-2 transition">
          {project.name}
        
          {project.image &&
            (<Image
            src={project.image}
            alt={project.alt}
            width={250}
            height={100}
            className="object-cover rounded-lg border border-gray-500 m-auto"/>) }
          
        </Link>
      ))}
    </div>
    
  </div>
  ;
}
