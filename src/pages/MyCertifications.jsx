import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useMemo, useState } from "react";

// Local certificate images (these are in src/, so imports are correct)
import certificate2 from "../Assets/Certifications/AIDataAnalystInternshipCertificate.png";
import certificate4 from "../Assets/Certifications/DataAnalystAccentureCertification.png";
import certificate5 from "../Assets/Certifications/SEAccentureForageCertification.png";

/**
 * Professional portfolio-style Certifications page:
 * - 3-column grid on desktop
 * - Filter chips (All / AI & Data / Engineering / Tools)
 * - Issuer badges (acts like clean “logos” without adding new asset dependencies)
 * - Modal: large preview + Verify link + Download (if local file)
 */

const FILTERS = ["All", "AI & Data", "Engineering", "Tools"];

// Keep dates consistent: "Mon YYYY"
const certifications = [
  {
    id: 1,
    title: "AI Proficiency",
    issuer: "Credly",
    date: "Jul 2025",
    category: "AI & Data",
    url: "https://www.credly.com/badges/376c3063-cd8b-4c88-a2c8-0c15c38e99a1/linked_in_profile",
  },
  {
    id: 2,
    title: "AI Data Analyst Internship Certificate – Excelerate",
    issuer: "RIT",
    date: "Jul 2025",
    category: "AI & Data",
    file: certificate2,
  },
  {
    id: 3,
    title: "Programming with JavaScript",
    issuer: "Meta · Coursera",
    date: "Jan 2024",
    category: "Engineering",
    url: "https://coursera.org/share/2a49391822e6914ff9bf86e760d8880c",
  },
  {
    id: 4,
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Accenture North America",
    date: "Apr 2025",
    category: "AI & Data",
    file: certificate4,
  },
  {
    id: 5,
    title: "Software Engineering Job Simulation",
    issuer: "Accenture Nordics",
    date: "Apr 2025",
    category: "Engineering",
    file: certificate5,
  },
  {
    id: 6,
    title: "Java Developer",
    issuer: "HackerRank",
    date: "Oct 2020",
    category: "Engineering",
    url: "https://www.hackerrank.com/certificates/c26a4627033b",
  },
  {
    id: 7,
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft · LinkedIn",
    date: "Jul 2025",
    category: "AI & Data",
    url: "https://www.linkedin.com/learning/certificates/5f3670793e9ca28b31a4aff6fd70a651ff09ae15dfa0e3f086d4b429b2c89e1c",
  },
  {
    id: 8,
    title: "Version Control",
    issuer: "Meta · Coursera",
    date: "Jan 2024",
    category: "Engineering",
    url: "https://coursera.org/share/219b1048aceee0fdefba743507418cad",
  },
  {
    id: 9,
    title: "Excel Basics for Data Analysis",
    issuer: "IBM · Coursera",
    date: "Jan 2025",
    category: "Tools",
    url: "https://coursera.org/share/219b1048aceee0fdefba743507418cad",
  },
];

// Small “logo badge” generator (clean + consistent)
function issuerBadge(issuerRaw) {
  const issuer = (issuerRaw || "").toLowerCase();

  // pick short label + color vibe
  if (issuer.includes("credly")) return { label: "Credly", cls: "bg-emerald-600/90" };
  if (issuer === "rit" || issuer.includes("rit")) return { label: "RIT", cls: "bg-orange-600/90" };
  if (issuer.includes("meta")) return { label: "Meta", cls: "bg-sky-600/90" };
  if (issuer.includes("coursera")) return { label: "Coursera", cls: "bg-blue-700/90" };
  if (issuer.includes("accenture")) return { label: "Accenture", cls: "bg-violet-700/90" };
  if (issuer.includes("hackerrank")) return { label: "HackerRank", cls: "bg-green-700/90" };
  if (issuer.includes("microsoft")) return { label: "Microsoft", cls: "bg-indigo-700/90" };
  if (issuer.includes("linkedin")) return { label: "LinkedIn", cls: "bg-blue-600/90" };
  if (issuer.includes("ibm")) return { label: "IBM", cls: "bg-slate-700/90" };

  // fallback
  const fallback = issuerRaw?.split(/[·,]/)?.[0]?.trim() || "Cert";
  return { label: fallback.slice(0, 10), cls: "bg-gray-700/90" };
}

const MyCertifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredCerts = useMemo(() => {
    if (activeFilter === "All") return certifications;
    return certifications.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="certifications"
      className="relative py-14 px-4 bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#24477a]">Certifications</h2>
          <p className="mt-2 text-sm text-gray-600">
            Verified credentials and learning milestones (preview, verify, and download where available).
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => {
            const active = f === activeFilter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition border",
                  active
                    ? "bg-[#24477a] text-white border-[#24477a]"
                    : "bg-white/70 text-[#24477a] border-white/60 hover:bg-white",
                ].join(" ")}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid (3 columns on desktop) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, index) => {
            const badge = issuerBadge(cert.issuer);
            const hasPreview = Boolean(cert.file);
            const hasUrl = Boolean(cert.url);

            return (
              <div
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="group bg-white/85 dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-white/50"
              >
                {/* Preview / Thumbnail */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full text-left"
                  aria-label={`Open ${cert.title} certificate`}
                >
                  <div className="relative w-full aspect-video bg-white/60">
                    {hasPreview ? (
                      <img
                        src={cert.file}
                        alt={`${cert.title} certificate preview`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                        Preview not available
                      </div>
                    )}

                    {/* Issuer badge (acts like a logo) */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={[
                          "inline-flex items-center justify-center",
                          "h-8 px-3 rounded-full text-xs font-semibold text-white shadow",
                          badge.cls,
                        ].join(" ")}
                      >
                        {badge.label}
                      </span>
                    </div>

                    {/* subtle hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                  </div>
                </button>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#24477a] leading-snug">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-sm text-pink-700">
                    {cert.issuer} • {cert.date}
                  </p>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 rounded-xl bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 transition"
                    >
                      Preview
                    </button>

                    {hasUrl ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded-xl border border-indigo-600 text-indigo-700 py-2 text-sm font-medium hover:bg-indigo-50 transition"
                      >
                        Verify
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex-1 rounded-xl border border-gray-300 text-gray-400 py-2 text-sm font-medium cursor-not-allowed bg-white/60"
                        title="No verification link provided"
                      >
                        Verify
                      </button>
                    )}
                  </div>

                  {/* Small helper text */}
                  <p className="mt-3 text-xs text-gray-500">
                    {hasPreview ? "Preview image available" : "Verification link recommended"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div className="w-full max-w-4xl rounded-2xl bg-white overflow-hidden shadow-2xl">
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 p-5 border-b border-gray-200/70">
              <div>
                <h3 className="text-lg font-semibold text-[#24477a]">{selectedCert.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
                aria-label="Close certificate preview"
              >
                ×
              </button>
            </div>

            {/* Modal body */}
            <div className="p-5">
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                {selectedCert.file ? (
                  <img
                    src={selectedCert.file}
                    alt={`${selectedCert.title} certificate`}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="p-10 text-center text-gray-500">
                    No preview image available for this certification.
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-3">
                {selectedCert.url && (
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-indigo-600 text-white px-5 py-2 text-sm font-medium hover:bg-indigo-700 transition"
                  >
                    Verify credential
                  </a>
                )}

                {selectedCert.file && (
                  <a
                    href={selectedCert.file}
                    download
                    className="rounded-xl border border-indigo-600 text-indigo-700 px-5 py-2 text-sm font-medium hover:bg-indigo-50 transition"
                    title="Downloads the certificate image"
                  >
                    Download
                  </a>
                )}

                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-xl border border-gray-300 text-gray-700 px-5 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  Close
                </button>
              </div>

              {/* Small note */}
              <p className="mt-3 text-xs text-gray-500">
                Tip: For certifications without a preview image, add a screenshot or PDF in your Assets folder to enable preview + download.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyCertifications;

