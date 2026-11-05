import { links, about, projects, stack, education } from "./data";
import Tags from "./Tags";
import ProjectList from "./ProjectList";

// "rodrigo" -> 2 bits per DNA base (A, C, G, T)
const BASES = "ACGT";
const dna = [..."rodrigo"].flatMap((ch) => {
  const n = ch.charCodeAt(0);
  return [6, 4, 2, 0].map((shift) => BASES[(n >> shift) & 3]);
});
const baseColor = { A: "bg-a", C: "bg-c", G: "bg-g", T: "bg-t" };

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="mb-5 text-xl font-bold lowercase">
        <span className="text-a">$ </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:gap-16">
      {/* left column: stays on screen while the right column scrolls (large screens) */}
      <aside className="py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-80 lg:shrink-0 lg:flex-col lg:justify-between lg:self-start lg:py-16">
        <div>
          <p className="mb-3 text-sm text-muted">
            <span className="text-a">rodrigo@porto</span>:<span className="text-g">~</span>$ whoami
          </p>
          <h1 className="text-5xl font-extrabold leading-none tracking-tighter sm:text-6xl">
            Rodrigo<span className="cursor" aria-hidden="true" />
          </h1>
          <p className="mt-5">
            Computer science graduate, now studying bioinformatics at the University of Porto. I like
            building tools that solve real problems, from student logistics to games and cloud platforms.
          </p>
          <div className="mt-6 flex flex-wrap gap-0.5" aria-hidden="true">
            {dna.map((b, i) => (
              <span
                key={i}
                className={`seq-letter grid h-5 w-4 place-items-center rounded-sm text-xs font-semibold text-bg ${baseColor[b]}`}
                style={{ animationDelay: `${i * 25}ms` }}
              >
                {b}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted"># my name, encoded as DNA bases</p>
          <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-a lg:flex-col">
            <a href="#about" className="hover:underline">./about</a>
            <a href="#projects" className="hover:underline">./projects</a>
            <a href="#stack" className="hover:underline">./stack</a>
            <a href="#education" className="hover:underline">./education</a>
          </nav>
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="mb-3 text-sm text-muted"># based in Porto, Portugal</p>
          <div className="flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="rounded border border-a px-3 py-1 text-sm text-a transition-colors hover:bg-a hover:text-bg"
              >
                {l.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* right column: the content that scrolls */}
      <main className="min-w-0 flex-1 pb-12 lg:py-16">
        <Section id="about" title="about">
          <div className="max-w-2xl space-y-4">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="projects" title="projects">
          <ProjectList projects={projects} />
        </Section>

        <Section id="stack" title="tech stack">
          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-[11rem_1fr]">
            {stack.map((s) => (
              <div key={s.group} className="contents">
                <h3 className="pt-1 text-sm text-muted"># {s.group.toLowerCase()}</h3>
                <Tags items={s.items} big />
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="education">
          <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[11rem_1fr]">
            {education.map((e) => (
              <div key={e.when} className="contents">
                <dt className="text-c">{e.when.toLowerCase()}</dt>
                <dd>{e.what}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <footer className="border-t border-line pt-8 text-xs text-muted">
          {"// built with Next.js, React and Tailwind CSS · © 2026 Rodrigo"}
        </footer>
      </main>
    </div>
  );
}