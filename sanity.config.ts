import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "1ya9e17o",
    dataset: "production",
    title: "Tetty",
    apiVersion: "2024-03-25",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config