import {ProjectBlock} from "@/components/projects/ProjectBlock";
import {SectionHeader} from "@/components/SectionHeader";
import {SocialLinks} from "@/components/social/SocialLinks";
import {
    applicationProjects,
    featuredProjects,
    libraryProjects,
} from "@/content/projects";
import {profile} from "@/content/profile";
import {assetPath} from "@/lib/asset-path";

export default function HomePage() {
    return (
        <main id="top" className="flex flex-col">
            <section
                id="contacts"
                className="order-1 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-18 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
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
                className="order-4 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
            >
                <SectionHeader
                    eyebrow="About"
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
                            Programing Languages
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {profile.programLanguages.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                                >
                                    {technology.startsWith("🇬🇧") ? (
                                        <>
                                            <img
                                                src={assetPath("/images/flags/flag-for-flag-united-kingdom-svgrepo-com.svg")}
                                                alt="United Kingdom flag"
                                                className="joypixels h-[1em] w-[1em] object-contain"
                                            />
                                            {technology.replace(/^🇬🇧/, "")}
                                        </>
                                    ) : technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
                        <p className="font-script text-3xl leading-none text-[color:var(--accent)]">
                            Mobile stack
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {profile.mobileTools.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
                        <p className="font-script text-3xl leading-none text-[color:var(--accent)]">
                            Backend stack
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {profile.backendTools.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
                        <p className="font-script text-3xl leading-none text-[color:var(--accent)]">
                            Architecture
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {profile.architecture.map((technology) => (
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
                className="order-2 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
            >
                <SectionHeader
                    eyebrow="Applications"
                />
                <div className="mt-10 grid gap-8">
                    {applicationProjects.map((project) => (
                        <ProjectBlock key={project.slug} project={project}/>
                    ))}
                </div>
            </section>

            <section
                id="libraries"
                className="order-3 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
            >
                <SectionHeader
                    eyebrow="Libraries"
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
