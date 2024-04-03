import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "1ya9e17o",
        dataset: "production",
        apiVersion: "2024-03-25",
        useCdn: false
    });
    

   return client.fetch(
        groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        alt
    }`
)
};

export async function getProject(slug: string): Promise<Project> {
const client = createClient({
        projectId: "1ya9e17o",
        dataset: "production",
        apiVersion: "2024-03-25",
        useCdn: false
    });
    

   return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        alt
    }`,
       {slug}
)
}
