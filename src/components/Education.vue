<template>
  <section class="container py-5 mt-4" id="education">
    <div class="mb-5">
      <span class="text-primary fw-bold text-uppercase section-subtitle">education</span>
      <h2 class="fw-bolder mt-2 text-dark section-title">Education & Certifications</h2>
    </div>

    <div class="row g-5">
      <div class="col-lg-5">
        <div class="d-flex align-items-center gap-2 text-muted fw-semibold mb-3 column-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          EDUCATION
        </div>

        <div class="card border border-1 shadow-none rounded-4 mb-4 bg-white edu-card">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
              <h5 class="fw-bold mb-0 text-dark">S1 Teknik Informatika</h5>
              <span class="badge bg-primary-subtle text-primary fw-semibold year-badge">2023 – Sekarang</span>
            </div>

            <p class="mb-1 text-dark fw-medium fs-6">Institut Teknologi Indonesia (ITI)</p>
            <p class="text-muted fs-7 mb-4">Serpong, Tangerang Selatan</p>

            <hr class="opacity-10 mb-4" />

            <div class="row g-3 text-start">
              <div class="col-4">
                <span class="d-block text-muted text-uppercase fw-semibold fs-8 mb-1 tracking-wider">IPK</span>
                <span class="fw-bold text-dark">3.49 / 4.00</span>
              </div>
              <div class="col-4">
                <span class="d-block text-muted text-uppercase fw-semibold fs-8 mb-1 tracking-wider">SKS</span>
                <span class="fw-bold text-dark">101 Lulus</span>
              </div>
              <div class="col-4">
                <span class="d-block text-muted text-uppercase fw-semibold fs-8 mb-1 tracking-wider">STATUS</span>
                <span class="fw-bold text-dark">Semester 6</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card border border-1 shadow-none rounded-4 mb-4 bg-white">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
              <h6 class="fw-bold mb-0 text-dark">Jurusan Ilmu Pengetahuan Sosial (IPS)</h6>
              <span class="badge bg-light text-secondary border year-badge-sm">Lulus 2023</span>
            </div>
            <p class="mb-1 text-dark fw-medium fs-7">La Tansa Islamic Boarding School</p>
            <p class="text-muted fs-8 mb-0">Aktif dalam kegiatan organisasi siswa & belajar mandiri dasar komputer.</p>
          </div>
        </div>

        <div class="card border border-1 shadow-none rounded-4 bg-light-subtle">
          <div class="card-body p-4">
            <span class="d-block text-muted text-uppercase fw-semibold fs-8 mb-3 tracking-wider">COMPETENCIES & TOOLS</span>
            <div class="d-flex flex-wrap gap-2">
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">Laravel (Backend)</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">Vue.js (Frontend)</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">MySQL</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">REST API</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">PHP Native</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">Bootstrap</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">HTML & CSS</span>
              <span class="badge bg-white text-secondary border fw-medium px-3 py-2 course-pill">JavaScript</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="d-flex align-items-center gap-2 text-muted fw-semibold mb-3 column-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15l-2 5-9-5 9-5 2 5z"/><circle cx="12" cy="8" r="4"/></svg>
          CERTIFICATIONS & TRAINING
        </div>

        <div class="d-flex flex-column gap-3">

          <div class="card border border-1 shadow-none rounded-4 cert-card">
            <div class="card-body p-4 d-flex gap-4 align-items-center">
              <div class="cert-logo bg-primary-subtle text-primary">CAI</div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <h6 class="fw-bold mb-0 text-dark fs-6">Fullstack Developer — Magang Berdampak</h6>
                  <span class="badge bg-light text-secondary border year-badge-sm">2025</span>
                </div>
                <p class="mb-1 text-muted fs-7">PT Citi Asia Internasional</p>
                <div class="d-flex align-items-center gap-2 fs-8 text-muted">
                  <span>Kompetensi: Laravel, Vue.js, REST API, City Super App</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card border border-1 shadow-none rounded-4 cert-card">
            <div class="card-body p-4 d-flex gap-4 align-items-center">
              <div class="cert-logo bg-purple-subtle text-purple">BNSP</div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <h6 class="fw-bold mb-0 text-dark fs-6">Junior Web Developer</h6>
                  <span class="badge bg-light text-secondary border year-badge-sm">2024</span>
                </div>
                <p class="mb-1 text-muted fs-7">Badan Nasional Sertifikasi Profesi</p>
                <div class="d-flex align-items-center gap-2 fs-8 text-muted">
                  <span>ID: 62019 2513 4 0031047 2024</span>

                </div>
              </div>
            </div>
          </div>

          <div class="card border border-1 shadow-none rounded-4 cert-card">
            <div class="card-body p-4 d-flex gap-4 align-items-center">
              <div class="cert-logo bg-success-subtle text-success">DTS</div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <h6 class="fw-bold mb-0 text-dark fs-6">Junior Web Developer</h6>
                  <span class="badge bg-light text-secondary border year-badge-sm">2024</span>
                </div>
                <p class="mb-1 text-muted fs-7">Digital Talent Scholarship (Kominfo)</p>
                <div class="d-flex align-items-center gap-2 fs-8 text-muted">
                  <span>Pelatihan Intensif Web Development (Frontend & Backend)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card border border-1 shadow-none rounded-4 cert-card">
            <div class="card-body p-4 d-flex gap-4 align-items-center">
              <div class="cert-logo bg-warning-subtle text-warning-dark">DCD</div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <h6 class="fw-bold mb-0 text-dark fs-6">Belajar Dasar Pemrograman Web</h6>
                  <span class="badge bg-light text-secondary border year-badge-sm">2024</span>
                </div>
                <p class="mb-1 text-muted fs-7">Dicoding Indonesia</p>
                <div class="d-flex align-items-center gap-2 fs-8 text-muted">
                  <span>Materi: Dasar HTML, CSS, dan JavaScript Terstruktur</span>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-4 p-3 bg-light-subtle border border-1 d-flex align-items-center gap-2 text-muted fs-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Seluruh kredensial dapat diverifikasi secara publik melalui portal resmi penerbit sertifikat.
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component Script
</script>

<style scoped>
/* Typography & Utility */
.section-subtitle {
  letter-spacing: 1.5px;
  font-size: 0.85rem;
}

.section-title {
  font-size: 3rem;
  letter-spacing: -1px;
}

.column-header {
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.fs-7 { font-size: 0.9rem; }
.fs-8 { font-size: 0.8rem; }
.tracking-wider { letter-spacing: 1px; }

/* Custom Colors untuk Logo Badge */
.bg-purple-subtle { background-color: #f3e8ff !important; }
.text-purple { color: #a855f7 !important; }

.bg-warning-subtle { background-color: #fef3c7 !important; }
.text-warning-dark { color: #d97706 !important; }

.bg-light-subtle { background-color: #f8f9fa !important; }

/* Komponen Kartu */
.edu-card {
  border-top: 4px solid #3b82f6 !important; /* Aksen biru di atas kartu Education */
}

.course-pill {
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}

.cert-card {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: #ffffff;
}

.cert-card:hover {
  border-color: #e5e7eb !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) !important;
}

.cert-logo {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

/* Badge Tahun */
.year-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
}

.year-badge-sm {
  font-weight: 500;
  padding: 0.35rem 0.6rem;
  border-radius: 12px;
}

/* Responsif */
@media (max-width: 991.98px) {
  .section-title {
    font-size: 2.25rem;
  }

  .cert-card .card-body {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1rem !important;
  }
}
</style>
