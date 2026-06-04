import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { PlatformBadges } from "@/components/projects/PlatformBadges";
import type { PortfolioProject } from "@/types/project";

type HorizonBlockProps = {
  project: PortfolioProject;
};

export function HorizonBlock({ project }: HorizonBlockProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#a9b1a8] bg-[linear-gradient(160deg,_#f0f2e8,_#d7dcc7_42%,_#bbc4a8)] p-6 shadow-[0_26px_70px_rgba(89,98,74,0.18)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="mx-auto flex max-w-[17rem] justify-center rounded-[2rem] border border-black/10 bg-[#232b20] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <div className="w-full rounded-[1.6rem] bg-[#101510] p-4 text-white">
            <div className="mx-auto h-1.5 w-16 rounded-full bg-white/10" />
            <div className="mt-5 rounded-[1.4rem] border border-lime-200/15 bg-[radial-gradient(circle_at_center,_rgba(212,244,180,0.2),_transparent_45%),_#151b14] p-5">
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-lime-100/15">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-lime-100/20">
                  <div className="absolute h-24 w-[2px] -rotate-45 rounded-full bg-lime-200" />
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.24em] text-lime-100/60">
                      North
                    </p>
                    <p className="mt-1 text-3xl font-semibold">48°</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-lime-100/60">
                <span>Pitch 3°</span>
                <span>Roll 1°</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#50624b]">
            Precision Utility
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#192117]">
            {project.title}
          </h3>
          <p className="mt-3 text-lg text-[#44503e]">{project.tagline}</p>
          <p className="mt-5 text-sm leading-7 text-[#5d6856]">
            {project.description}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <PlatformBadges platforms={project.platforms} />
            <ProjectTechStack stack={project.stack} />
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </div>
  );
}
