<template>
  <section class="education-section py-5" id="education">
    <div class="container py-lg-4">
      <div class="mb-5">
        <span class="section-eyebrow">
          <i class="bi bi-mortarboard"></i>
          Academic &amp; Credentials
        </span>
        <h2 class="section-heading mb-2">Education &amp; Certifications</h2>
        <p class="section-lead mb-0">
          Academic foundation in Informatics Engineering backed by national professional certifications and intensive training programs.
        </p>
      </div>

      <div class="row g-4 g-lg-5">
        <!-- Left Column: Academic Education -->
        <div class="col-lg-5">
          <div class="column-header mb-3">
            <i class="bi bi-bank text-primary"></i>
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <article class="degree-card primary-degree mb-3">
            <div class="degree-accent-bar"></div>
            <div class="p-4">
              <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                <span class="year-pill active-pill">2023 – Present</span>
                <span class="location-tag"><i class="bi bi-geo-alt me-1"></i>South Tangerang</span>
              </div>

              <h3 class="degree-title mb-1">B.Sc. in Informatics Engineering</h3>
              <p class="university-name mb-4">Institut Teknologi Indonesia (ITI)</p>

              <div class="stats-grid">
                <div class="stat-box">
                  <span class="stat-label">GPA</span>
                  <span class="stat-val">3.49 <small>/ 4.00</small></span>
                </div>
                <div class="stat-box">
                  <span class="stat-label">CREDITS</span>
                  <span class="stat-val">101 <small>Passed</small></span>
                </div>
                <div class="stat-box">
                  <span class="stat-label">STATUS</span>
                  <span class="stat-val">Sem 6</span>
                </div>
              </div>
            </div>
          </article>

          <article class="degree-card mb-3">
            <div class="p-4">
              <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                <h4 class="h6 fw-bold text-dark mb-0">High School Diploma (Social Sciences)</h4>
                <span class="year-pill">Class of 2023</span>
              </div>
              <p class="university-name small mb-2">La Tansa Islamic Boarding School</p>
              <p class="text-muted small mb-0">
                Active in student organization leadership while pursuing self-directed computer science fundamentals.
              </p>
            </div>
          </article>

          <div class="coursework-box p-4">
            <span class="d-block coursework-label mb-3">RELEVANT COURSEWORK &amp; FOCUS</span>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="course in coursework" :key="course" class="course-chip">{{ course }}</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Certifications -->
        <div class="col-lg-7">
          <div class="column-header mb-3">
            <i class="bi bi-patch-check text-primary"></i>
            <span>CERTIFICATIONS &amp; TRAINING</span>
          </div>

          <div class="d-flex flex-column gap-3">
            <article v-for="cert in certifications" :key="cert.title + cert.issuer" class="cert-card">
              <div class="cert-badge" :class="cert.badgeClass">
                {{ cert.code }}
              </div>

              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                  <h3 class="cert-title mb-0">{{ cert.title }}</h3>
                  <span class="year-pill">{{ cert.year }}</span>
                </div>

                <p class="cert-issuer mb-1">{{ cert.issuer }}</p>
                <p class="cert-meta mb-0">
                  <i class="bi" :class="cert.metaIcon"></i>
                  <span>{{ cert.meta }}</span>
                </p>
              </div>
            </article>

            <div class="verified-note d-flex align-items-center gap-2">
              <i class="bi bi-shield-check text-success fs-6"></i>
              <span>All professional credentials can be publicly verified through their respective issuing authorities.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const coursework = [
  "Software Engineering",
  "Web Programming",
  "Database Systems",
  "Geographic Information Systems",
  "RESTful Web Services",
  "Data Structures",
];

const certifications = [
  {
    code: "CAI",
    badgeClass: "badge-blue",
    title: "Fullstack Developer — Magang Berdampak",
    issuer: "PT Citi Asia Internasional",
    year: "2025",
    metaIcon: "bi-layers",
    meta: "Competencies: Laravel, Vue.js, REST API, Enterprise City Super App",
  },
  {
    code: "BNSP",
    badgeClass: "badge-purple",
    title: "Certified Junior Web Developer",
    issuer: "Indonesian Professional Certification Authority (BNSP)",
    year: "2024",
    metaIcon: "bi-fingerprint",
    meta: "Credential ID: 62019 2513 4 0031047 2024",
  },
  {
    code: "DTS",
    badgeClass: "badge-emerald",
    title: "Junior Web Developer Bootcamp",
    issuer: "Digital Talent Scholarship (Kominfo RI)",
    year: "2024",
    metaIcon: "bi-code-square",
    meta: "Intensive Fullstack Web Development Training (Frontend & Backend)",
  },
  {
    code: "DCD",
    badgeClass: "badge-amber",
    title: "Web Programming Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2024",
    metaIcon: "bi-journal-code",
    meta: "Semantic HTML5, Modern CSS Layouts, and Structured JavaScript",
  },
];
</script>

<style scoped>
.education-section {
  background-color: #f8fafc;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.column-header {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #64748b;
}

.degree-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.25s ease;
}

.degree-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 12px 28px -12px rgba(15, 23, 42, 0.07);
}

.degree-accent-bar {
  height: 4px;
  background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
}

.degree-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
}

.university-name {
  color: #475569;
  font-weight: 600;
  font-size: 0.94rem;
}

.location-tag {
  font-size: 0.78rem;
  color: #64748b;
}

.year-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.active-pill {
  background: #eff6ff;
  color: #2563eb;
  border-color: #dbeafe;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.stat-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.75rem;
}

.stat-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.stat-val {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.98rem;
  color: #0f172a;
}

.stat-val small {
  font-weight: 500;
  font-size: 0.75rem;
  color: #64748b;
}

.coursework-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
}

.coursework-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.08em;
}

.course-chip {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #334155;
}

/* Certification Cards */
.cert-card {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  padding: 1.25rem 1.4rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  transition: all 0.25s ease;
}

.cert-card:hover {
  transform: translateY(-2px);
  border-color: #bfdbfe;
  box-shadow: 0 14px 28px -12px rgba(37, 99, 235, 0.1);
}

.cert-badge {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.badge-blue {
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #dbeafe;
}

.badge-purple {
  background: #f5f3ff;
  color: #7c3aed;
  border: 1px solid #ede9fe;
}

.badge-emerald {
  background: #ecfdf5;
  color: #059669;
  border: 1px solid #d1fae5;
}

.badge-amber {
  background: #fffbeb;
  color: #d97706;
  border: 1px solid #fef3c7;
}

.cert-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
}

.cert-issuer {
  font-size: 0.86rem;
  font-weight: 500;
  color: #475569;
}

.cert-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.79rem;
  color: #64748b;
}

.verified-note {
  padding: 0.85rem 1.15rem;
  border-radius: 14px;
  background: #ffffff;
  border: 1px dashed #cbd5e1;
  font-size: 0.8rem;
  color: #64748b;
}

@media (max-width: 575.98px) {
  .cert-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
