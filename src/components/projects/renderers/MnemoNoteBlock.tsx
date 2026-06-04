import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { PlatformBadges } from "@/components/projects/PlatformBadges";
import type { PortfolioProject } from "@/types/project";

type MnemoNoteBlockProps = {
  project: PortfolioProject;
};

export function MnemoNoteBlock({ project }: MnemoNoteBlockProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-[radial-gradient(circle_at_top_left,_rgba(235,164,111,0.4),_transparent_32%),linear-gradient(135deg,_#1c1917,_#31261f_48%,_#6f4e37)] p-6 text-stone-100 shadow-[0_30px_80px_rgba(38,22,15,0.25)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200/80">
            Featured Application
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-lg text-stone-300">
            {project.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-300/90">
            {project.description}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <PlatformBadges platforms={project.platforms} />
            <ProjectTechStack stack={project.stack} />
            <ProjectLinks links={project.links} />
          </div>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-4 shadow-inner shadow-black/20">
          <div className="rounded-[1.25rem] border border-white/10 bg-stone-950/80 p-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-stone-900/90 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Documents
                </p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded-full bg-stone-700" />
                  <div className="h-2 w-5/6 rounded-full bg-stone-700" />
                  <div className="h-2 w-2/3 rounded-full bg-stone-700" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-900/90 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    Tasks
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="h-10 rounded-xl bg-orange-200/15" />
                    <div className="h-10 rounded-xl bg-orange-200/10" />
                  </div>
                </div>
                <div className="rounded-2xl bg-stone-900/90 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    Boards
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-xl bg-white/7" />
                    <div className="h-20 rounded-xl bg-white/10" />
                    <div className="h-20 rounded-xl bg-white/7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
