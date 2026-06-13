import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Horizon Privacy Policy | nvshink",
  description:
    "Privacy policy for Horizon, an Android app for tilt, bubble level, compass, and sensor-driven utility features.",
};

const policySections = [
  {
    title: "What data Horizon uses",
    body:
      "Horizon uses motion and orientation sensor data to show tilt, bubble level, and compass information. The app also stores your calibration and settings preferences on your device.",
  },
  {
    title: "Location access",
    body:
      "Location permission is requested only for the compass screen so the app can show your coordinates and calculate sun and moon direction for your current position. You can deny this permission and continue using the rest of the app.",
  },
  {
    title: "Data sharing",
    body:
      "Horizon does not sell your personal data and does not share your sensor readings, coordinates, or settings with third parties.",
  },
  {
    title: "Storage and retention",
    body:
      "Calibration values and app preferences are stored locally on your device until you clear the app data or uninstall the app.",
  },
  {
    title: "Your control",
    body:
      "You control location access through Android system permissions. You can also reset calibration and remove app data at any time from your device settings.",
  },
  {
    title: "Contact",
    body:
      "If you have privacy questions, contact us at nvshink.dev@gmail.com.",
  },
  {
    title: "Policy updates",
    body:
      "We may update this policy when the app features or data practices change. The latest version will be available in the app settings and on this page.",
  },
];

export default function HorizonPrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#a9b1a8] bg-[linear-gradient(160deg,_#eef4e2,_#d9e0c9_42%,_#bcc7ab)] p-8 shadow-[0_26px_70px_rgba(89,98,74,0.18)] sm:p-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#50624b]">
            Horizon App
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#192117] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#44503e]">
            Horizon is designed to work primarily on your device. We collect
            only the data needed to provide the app features described on
            screen.
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[#5d6856]">
            Last updated: June 13, 2026
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.74fr_1.26fr]">
        <aside className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Summary
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            <li className="rounded-2xl bg-[color:var(--background)] px-4 py-3">
              Sensor data is used only to power orientation and level features.
            </li>
            <li className="rounded-2xl bg-[color:var(--background)] px-4 py-3">
              Location access is optional and limited to compass-related
              features.
            </li>
            <li className="rounded-2xl bg-[color:var(--background)] px-4 py-3">
              Calibration values and preferences stay on your device.
            </li>
            <li className="rounded-2xl bg-[color:var(--background)] px-4 py-3">
              Horizon does not sell personal data.
            </li>
          </ul>
          <a
            href="mailto:nvshink.dev@gmail.com"
            className="mt-6 inline-flex rounded-full border border-[#50624b]/20 bg-white px-5 py-3 text-sm font-medium text-[#192117] transition hover:border-[#50624b] hover:text-[#50624b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          >
            nvshink.dev@gmail.com
          </a>
        </aside>

        <div className="space-y-6">
          {policySections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(23,23,23,0.06)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects/horizon"
          className="inline-flex items-center rounded-full border border-[color:var(--foreground)]/15 px-5 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          Back to Horizon
        </Link>
        <Link
          href="/#applications"
          className="inline-flex items-center rounded-full border border-[color:var(--foreground)]/15 bg-white/70 px-5 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          Back to projects
        </Link>
      </div>
    </main>
  );
}
