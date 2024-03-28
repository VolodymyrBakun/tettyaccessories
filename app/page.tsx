import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();



  return <div>
    <h1 className="text-5xl text-center font-bold font-serif">Tetty Accessories</h1>
    <p className="p-3 text-center">We offers handmade headbands, tiaras, wreaths, hair elastics and other accessories made in floral and fancy style.</p>
    {projects.map((project) => (
      <div key={project._id}>{project.name}</div>
    ))}
  </div>
  ;
}
