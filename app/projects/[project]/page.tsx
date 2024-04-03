import { getProject } from '@/sanity/sanity-utils';
import React from 'react'

type Props = {
    params: {project: string}
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

  return (
    <div>{project.name}</div>
  )
}
