export function resolveProjectLink(project: any) {
  if (project.demoUrl) {
    return {
      url: project.demoUrl,
      label: "Live Demo",
      type: "demo" as const,
    };
  }

  if (project.githubUrl) {
    return {
      url: project.githubUrl,
      label: "Github",
      type: "github" as const,
    };
  }

  return null;
}

export function ProjectPreview({ project }: any) {
  const previewImage = project.preview;

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0B1220] aspect-video">
      {previewImage ? (
        <img
          src={previewImage}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-zinc-500">
          No preview available
        </div>
      )}
    </div>
  );
}
