import { courses } from "../data/courses";

export function CourseArchiveSection() {
  return (
    <section id="archive" className="space-y-6 py-12">
      <h2 className="text-xl font-semibold">Course Archive</h2>
      <p className="text-sm text-gray-600">
        수업별로 진행한 프로젝트를 간단히 아카이빙한 영역입니다.
      </p>
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">
                {course.name} · {course.semester}
              </h3>
              <span className="text-xs text-gray-500">
                {course.projects.length} projects
              </span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {course.projects.map((project) => (
                <li key={project.title} className="flex items-center gap-2">
                  <span aria-hidden>•</span>
                  {project.slug ? (
                    <a
                      href={`#project-${project.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
