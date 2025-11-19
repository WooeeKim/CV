import { projects } from "../data/projects";

export function SelectedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="space-y-6 py-12">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold">Selected Projects</h2>
        <p className="text-xs text-gray-500">
          대표작만 간단히, 상세는 추후 확장 가능
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div>
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-xs text-gray-500">
                {project.course} · {project.year}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-1 text-[11px] text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                className="text-sm font-medium text-slate underline decoration-1 underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                보기
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
