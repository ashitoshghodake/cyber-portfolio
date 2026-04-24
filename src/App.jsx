import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Binary,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  ExternalLink,
  Github,
  GraduationCap,
  Inbox,
  Linkedin,
  Mail,
  Menu,
  Radar,
  ScanSearch,
  Shield,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import {
  certifications,
  coursework,
  experiences,
  navLinks,
  profile,
  projects,
  skillGroups,
} from "./data/portfolio";

const heroRoles = [
  "SOC Operations",
  "Threat Detection",
  "Incident Response",
  "VAPT & Pentesting",
];

const sectionIcons = {
  "Cyber Security Tools": Shield,
  "VAPT Tools": ScanSearch,
  "SOC Skills": Radar,
  "Technical Skills": TerminalSquare,
};

function useTypingAnimation(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const speed = isDeleting ? 45 : 95;

    const timeout = window.setTimeout(() => {
      setDisplayText((current) => {
        if (!isDeleting) {
          const next = currentWord.slice(0, current.length + 1);
          if (next === currentWord) {
            window.setTimeout(() => setIsDeleting(true), 1200);
          }
          return next;
        }

        const next = currentWord.slice(0, Math.max(current.length - 1, 0));
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
        }
        return next;
      });
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.18 },
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl" data-reveal>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyber-500/20 bg-cyber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyber-300">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const typingText = useTypingAnimation(heroRoles);
  useRevealOnScroll();

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [formState]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="relative overflow-hidden bg-cyber-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,233,182,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(22,78,99,0.35),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-glow bg-[size:42px_42px] opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyber-500/10 to-transparent" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-cyber-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="font-display text-lg font-bold tracking-[0.22em] text-cyber-300">
            ASHITOSH.G
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyber-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyber-500/50 hover:text-cyber-300 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-cyber-900/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-cyber-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-20 lg:px-8 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-500/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyber-300 shadow-glow">
                <Shield className="h-4 w-4" />
                Cyber Defense Portfolio
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">{profile.title}</p>
              <p className="mt-3 max-w-2xl text-base text-cyber-300 sm:text-lg">{profile.tagline}</p>

              <div className="mt-8 flex min-h-[2rem] items-center gap-3 text-sm uppercase tracking-[0.28em] text-slate-400 sm:text-base">
                <Binary className="h-5 w-5 text-cyber-400" />
                <span>{typingText}</span>
                <span className="h-6 w-[2px] animate-pulseSoft bg-cyber-400" />
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="button-primary">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="button-secondary">
                  Contact Me
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative" data-reveal>
              <div className="absolute inset-6 rounded-[2rem] bg-cyber-500/10 blur-3xl" />
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-intense">
                <div className="absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyber-500/15 to-transparent" />
                  <div className="absolute inset-x-6 top-0 h-28 bg-gradient-to-b from-cyber-400/20 to-transparent blur-2xl" />
                  <div className="absolute inset-x-0 top-0 h-20 animate-scan bg-gradient-to-b from-transparent via-cyber-500/10 to-transparent" />
                </div>

                <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyber-300">Live SOC Snapshot</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Defense Console</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-cyber-500/30 bg-cyber-500/10 px-3 py-1 text-xs text-cyber-300">
                    <span className="h-2 w-2 rounded-full bg-cyber-400" />
                    Monitoring Active
                  </div>
                </div>

                <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Focus Area", "Threat Detection"],
                    ["Environment", "SOC + Blue Team"],
                    ["Core Workflow", "Analyze | Detect | Respond"],
                    ["Tooling", "Snort | Wazuh | Splunk"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
                      <p className="mt-3 text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-6 rounded-2xl border border-cyber-500/20 bg-slate-950/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Threat Readiness</p>
                      <p className="mt-2 text-3xl font-bold text-white">24/7</p>
                    </div>
                    <AlertTriangle className="h-9 w-9 text-cyber-400" />
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyber-500 to-cyber-300" />
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    Security operations mindset with hands-on monitoring, alert triage, and response-oriented analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="About Me"
              title="A focused analyst with a defender's mindset."
              description="I bring together security monitoring, validation, and investigation to help organizations stay ahead of threats."
            />

            <div className="glass-panel rounded-[2rem] p-8" data-reveal>
              <p className="text-lg leading-8 text-slate-300">{profile.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Passionate about cybersecurity and continuous learning",
                  "Hands-on with SOC operations and monitoring workflows",
                  "Experienced in VAPT and penetration testing practices",
                  "Focused on threat detection and incident response readiness",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    <div className="mb-3 inline-flex rounded-full border border-cyber-500/20 bg-cyber-500/10 p-2 text-cyber-300">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Security tooling and analyst workflows built for real environments."
            description="This stack reflects the operational and assessment tools I use to monitor, investigate, test, and strengthen security posture."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = sectionIcons[group.title] || Shield;
              return (
                <article
                  key={group.title}
                  data-reveal
                  className="group glass-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyber-500/30 hover:shadow-glow"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="rounded-2xl border border-cyber-500/20 bg-cyber-500/10 p-3 text-cyber-300 transition group-hover:shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyber-500/40 hover:text-cyber-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Hands-on cyber security projects across monitoring, detection, and SIEM pipelines."
            description="Each project highlights practical implementation work around IDS/IPS tooling, telemetry pipelines, and analyst-ready visibility."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                data-reveal
                className="project-card relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyber-500 via-cyan-400 to-cyber-300" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyber-300">Project {index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm text-cyber-300">{project.stack}</p>
                  </div>
                  <div className="rounded-2xl border border-cyber-500/20 bg-cyber-500/10 p-3 text-cyber-300">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-sm text-slate-200">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyber-300" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience in security assessment, SOC workflows, and digital forensics."
            description="My internships shaped both the offensive and defensive sides of security, from VAPT to investigations and monitoring."
          />

          <div className="mt-10 space-y-6">
            {experiences.map((experience) => (
              <article key={experience.role} data-reveal className="glass-panel rounded-[1.75rem] p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 inline-flex rounded-2xl border border-cyber-500/20 bg-cyber-500/10 p-3 text-cyber-300">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-2 text-base text-cyber-300">{experience.organization}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {experience.duration}
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {experience.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-slate-200">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyber-400" />
                      <p className="leading-7">{point}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel rounded-[1.75rem] p-8" data-reveal>
              <div className="mb-5 inline-flex rounded-2xl border border-cyber-500/20 bg-cyber-500/10 p-3 text-cyber-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyber-300">Education</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">BBA (Computer Application)</h3>
              <p className="mt-4 text-lg text-slate-300">{profile.collegeName}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-400">
                <span>India</span>
                <span>|</span>
                <span>{profile.educationDuration}</span>
              </div>
              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Relevant Coursework</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {coursework.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="glass-panel rounded-[1.75rem] p-8" data-reveal>
              <div className="mb-5 inline-flex rounded-2xl border border-cyber-500/20 bg-cyber-500/10 p-3 text-cyber-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyber-300">Certifications</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Certification Vault</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Reserved space for future certifications, training programs, and verified achievements.
              </p>
              <div className="mt-8 space-y-4">
                {certifications.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-slate-200"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-cyber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="glass-panel rounded-[1.75rem] p-8" data-reveal>
              <p className="text-xs uppercase tracking-[0.24em] text-cyber-300">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Let's connect and build stronger defenses.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Reach out for internships, analyst opportunities, security collaborations, or portfolio discussions.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <Github className="h-5 w-5 text-cyber-300" />
                  <span>GitHub</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-slate-500" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <Linkedin className="h-5 w-5 text-cyber-300" />
                  <span>LinkedIn</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-slate-500" />
                </a>
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <Mail className="h-5 w-5 text-cyber-300" />
                  <span>{profile.email}</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-slate-500" />
                </a>
              </div>
            </article>

            <article className="glass-panel rounded-[1.75rem] p-8" data-reveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl border border-cyber-500/20 bg-cyber-500/10 p-3 text-cyber-300">
                  <Inbox className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Contact Form</h3>
                  <p className="text-sm text-slate-400">This opens your email client with the message prefilled.</p>
                </div>
              </div>

              <form className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input-field"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="input-field"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Message</span>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your opportunity, project, or question."
                    className="input-field resize-none"
                  />
                </label>
                <a href={mailtoHref} className="button-primary w-full justify-center">
                  Send Message
                  <Mail className="h-4 w-4" />
                </a>
              </form>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-cyber-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>(c) 2026 Ashitosh Ghodake. Crafted for a modern cyber security presence.</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-cyber-300">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-cyber-300">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
