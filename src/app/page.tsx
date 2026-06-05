import {ProjectBlock} from "@/components/projects/ProjectBlock";
import {SectionHeader} from "@/components/SectionHeader";
import {SocialLinks} from "@/components/social/SocialLinks";
import {
    applicationProjects,
    featuredProjects,
    libraryProjects,
} from "@/content/projects";
import {profile} from "@/content/profile";

export default function HomePage() {
    return (
        <main id="top">
            <section
                className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-18 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
                <div>
                    <p className="font-script text-2xl leading-none text-[color:var(--accent)] sm:text-3xl">
                        {profile.handle}
                    </p>
                    <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
                        {profile.role}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-9 text-[color:var(--muted)] sm:text-xl">
                        {profile.summary}
                    </p>
                    <SocialLinks links={profile.socials} className="mt-8 flex flex-wrap gap-3"/>
                </div>
            </section>
            <section
                id="about"
                className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
            >
                <SectionHeader
                    eyebrow="About"
                    title="Kotlin Multiplatform as architecture, not just code sharing"
                    description="The main interest area is keeping product logic coherent across targets while preserving the strengths of each platform."
                />
                <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div
                        className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(23,23,23,0.06)] sm:p-8">
                        <div className="space-y-5 text-base leading-8 text-[color:var(--muted)]">
                            {profile.about.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <div
                        className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
                        <p className="font-script text-3xl leading-none text-[color:var(--accent)]">
                            Key technologies
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {profile.technologies.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section
                id="applications"
                className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
            >
                <SectionHeader
                    eyebrow="Applications"
                    title="Product work with distinct visual and technical direction"
                    description="Each application uses its own renderer so the homepage can stay maintainable while the projects still look intentionally different."
                />
                <div className="mt-10 grid gap-8">
                    {applicationProjects.map((project) => (
                        <ProjectBlock key={project.slug} project={project}/>
                    ))}
                </div>
            </section>

            <section
                id="libraries"
                className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
            >
                <SectionHeader
                    eyebrow="Libraries"
                    title="Reusable Kotlin modules with explicit API boundaries"
                    description="Library cards stay more technical: supported platforms, API sketch and direct repository/documentation links."
                />
                <div className="mt-10 grid gap-8">
                    {libraryProjects.map((project) => (
                        <ProjectBlock key={project.slug} project={project}/>
                    ))}
                </div>
            </section>
        </main>
    );
}
