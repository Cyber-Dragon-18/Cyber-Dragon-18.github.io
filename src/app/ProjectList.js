"use client"; // this component uses state, so it runs in the browser

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const INITIAL = 4; // how many projects to show before "show all"

export default function ProjectList({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      {projects.length > INITIAL && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-5 text-sm text-a hover:underline"
        >
          {showAll ? "$ show less" : `$ show all ${projects.length} projects`}
        </button>
      )}
    </>
  );
}