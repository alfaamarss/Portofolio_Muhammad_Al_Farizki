<template>
  <section class="experience-section py-5" id="experience">
    <div class="container py-lg-4">
      <div class="mb-5">
        <span class="section-eyebrow">
          <i class="bi bi-briefcase"></i>
          Career &amp; Capabilities
        </span>
        <h2 class="section-heading mb-2">Experience &amp; Tech Stack</h2>
        <p class="section-lead mb-0">
          Hands-on industry experience shipping production web applications alongside the modern tools I use every day.
        </p>
      </div>

      <div class="row g-4 g-lg-5 align-items-start">
        <!-- Left Column: Work Experience Timeline -->
        <div class="col-lg-7">
          <div class="column-label mb-3">
            <i class="bi bi-building-check text-primary"></i>
            <span>WORK EXPERIENCE</span>
          </div>

          <div class="timeline-wrapper">
            <article class="exp-card">
              <div class="exp-timeline-node" aria-hidden="true"></div>

              <div class="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
                <div class="d-flex align-items-center gap-3">
                  <div class="company-avatar">CAI</div>
                  <div>
                    <h3 class="exp-role mb-1">Full Stack Web Developer Intern</h3>
                    <div class="exp-company">
                      <span>PT Citi Asia Internasional</span>
                      <span class="mx-1">•</span>
                      <span>Tangerang, Banten</span>
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-column align-items-start align-items-sm-end gap-1">
                  <span class="role-pill">Magang Berdampak</span>
                  <span class="exp-date">
                    <i class="bi bi-calendar3 me-1"></i>Aug 2025 – Dec 2025
                  </span>
                </div>
              </div>

              <p class="exp-summary mb-3">
                Developed Smart Cities &amp; Smart Enterprises solutions through the national Magang Berdampak 2025 program, contributing across backend architecture and frontend interfaces for enterprise-scale platforms.
              </p>

              <ul class="exp-bullets list-unstyled mb-4">
                <li>
                  <i class="bi bi-arrow-right-short text-primary"></i>
                  <span>Architected backend services, authentication flows, and RESTful APIs using Laravel and PHP.</span>
                </li>
                <li>
                  <i class="bi bi-arrow-right-short text-primary"></i>
                  <span>Built responsive, component-driven frontend interfaces with Vue.js and Bootstrap 5.</span>
                </li>
                <li>
                  <i class="bi bi-arrow-right-short text-primary"></i>
                  <span>Designed relational schemas and integrated modules with MySQL databases.</span>
                </li>
                <li>
                  <i class="bi bi-arrow-right-short text-primary"></i>
                  <span>Executed debugging, API testing, deployment pipelines, and query performance optimization.</span>
                </li>
                <li>
                  <i class="bi bi-arrow-right-short text-primary"></i>
                  <span>Authored OpenAPI / Swagger technical documentation and collaborated in agile Git sprints.</span>
                </li>
              </ul>

              <div class="d-flex flex-wrap gap-2 pt-3 border-top border-light-subtle">
                <span v-for="tech in expTags" :key="tech" class="stack-tag">{{ tech }}</span>
              </div>
            </article>
          </div>
        </div>

        <!-- Right Column: Categorized Tech Stack Bento -->
        <div class="col-lg-5">
          <div class="column-label mb-3">
            <i class="bi bi-cpu text-primary"></i>
            <span>TECHNICAL ARSENAL</span>
          </div>

          <div class="d-flex flex-column gap-3">
            <div v-for="group in skillGroups" :key="group.title" class="stack-group-card">
              <div class="d-flex align-items-center gap-2 mb-3">
                <span class="stack-group-icon" :class="group.colorClass">
                  <i class="bi" :class="group.icon"></i>
                </span>
                <div>
                  <h4 class="stack-group-title mb-0">{{ group.title }}</h4>
                  <small class="text-muted">{{ group.subtitle }}</small>
                </div>
              </div>

              <div class="d-flex flex-wrap gap-2">
                <span v-for="skill in group.items" :key="skill" class="skill-pill">
                  <span class="skill-dot" :class="group.dotClass"></span>
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const expTags = ["Laravel", "Vue.js", "PHP", "MySQL", "REST API", "Swagger", "Bootstrap", "Git"];

const skillGroups = [
  {
    title: "Backend & Architecture",
    subtitle: "Server-side logic & API design",
    icon: "bi-hdd-network",
    colorClass: "icon-blue",
    dotClass: "dot-blue",
    items: ["Laravel", "PHP", "RESTful API", "OpenAPI / Swagger", "N-Tier Architecture", "Authentication / JWT"],
  },
  {
    title: "Frontend & Interactive UI",
    subtitle: "Responsive interfaces & spatial web",
    icon: "bi-window-fullscreen",
    colorClass: "icon-violet",
    dotClass: "dot-violet",
    items: ["Vue.js 3", "JavaScript (ES6+)", "Bootstrap 5", "HTML5 & CSS3", "Leaflet.js (GIS)", "TailAdmin"],
  },
  {
    title: "Database & Workflow",
    subtitle: "Data persistence & team tooling",
    icon: "bi-database-check",
    colorClass: "icon-emerald",
    dotClass: "dot-emerald",
    items: ["MySQL", "Database Modeling", "Docker", "Git & GitHub", "Postman", "Vite"],
  },
];
</script>

<style scoped>
.experience-section {
  background-color: #ffffff;
}

.column-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #64748b;
}

.timeline-wrapper {
  position: relative;
  padding-left: 1.75rem;
}

.timeline-wrapper::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(180deg, #2563eb 0%, #bfdbfe 65%, transparent 100%);
}

.exp-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  padding: 1.75rem;
  box-shadow: 0 10px 28px -14px rgba(15, 23, 42, 0.07);
  transition: all 0.3s ease;
}

.exp-card:hover {
  border-color: #bfdbfe;
  box-shadow: 0 20px 40px -16px rgba(37, 99, 235, 0.12);
}

.exp-timeline-node {
  position: absolute;
  left: -1.75rem;
  top: 2rem;
  transform: translateX(1px);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #2563eb;
  border: 3px solid #dbeafe;
  box-shadow: 0 0 0 4px #ffffff;
}

.company-avatar {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.exp-role {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
}

.exp-company {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.role-pill {
  display: inline-block;
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #dbeafe;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.exp-date {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.exp-summary {
  color: #475569;
  font-size: 0.94rem;
  line-height: 1.7;
}

.exp-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
  margin-bottom: 0.55rem;
  color: #334155;
  font-size: 0.92rem;
  line-height: 1.6;
}

.exp-bullets i {
  font-size: 1.25rem;
  line-height: 1.25;
  flex-shrink: 0;
}

.stack-tag {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 500;
  padding: 0.28rem 0.65rem;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #334155;
}

/* Right Column Stack Bento */
.stack-group-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 1.35rem;
  transition: all 0.25s ease;
}

.stack-group-card:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  box-shadow: 0 12px 28px -12px rgba(15, 23, 42, 0.08);
}

.stack-group-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.icon-blue {
  background: #eff6ff;
  color: #2563eb;
}

.icon-violet {
  background: #f5f3ff;
  color: #7c3aed;
}

.icon-emerald {
  background: #ecfdf5;
  color: #059669;
}

.stack-group-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  font-size: 0.82rem;
  font-weight: 500;
  color: #1e293b;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.02);
  transition: all 0.2s ease;
}

.skill-pill:hover {
  border-color: #94a3b8;
  transform: translateY(-1px);
}

.skill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.dot-blue { background: #2563eb; }
.dot-violet { background: #7c3aed; }
.dot-emerald { background: #10b981; }

@media (max-width: 575.98px) {
  .timeline-wrapper {
    padding-left: 0;
  }

  .timeline-wrapper::before,
  .exp-timeline-node {
    display: none;
  }

  .exp-card {
    padding: 1.35rem;
  }
}
</style>
