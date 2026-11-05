import Image from "next/image";
import Tags from "./Tags";

// "Logistics App for AEFCUP" -> "logistics-app-for-aefcup"
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function ProjectCard({ title, text, tags, repo, status, image }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-panel">
      {/* fake terminal window bar */}
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-t" />
        <span className="h-2.5 w-2.5 rounded-full bg-c" />
        <span className="h-2.5 w-2.5 rounded-full bg-a" />
        <span className="ml-2 truncate text-xs text-muted">~/projects/{slug(title)}</span>
      </div>
      {image && (
        <div className="relative aspect-video border-b border-line">
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-bold text-a">{title}</h3>
        <p className="mb-3 line-clamp-3 text-sm">{text}</p>
        <div className="mt-auto">
          <Tags items={tags} />
          <p className="mt-3 text-sm">
            {repo ? (
              <a
                className="text-a underline-offset-4 hover:underline"
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                → view repository
              </a>
            ) : (
              <span className="text-c">{status}</span>
            )}
          </p>
        </div>
      </div>
    </article>
  );
}