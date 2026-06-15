<template>
  <section class="bg-light py-5" id="projects">
    <div class="container py-lg-4">

      <div class="section-title-wrapper mb-5 text-center text-md-start">
        <span class="d-block text-primary fw-bolder text-uppercase tracking-wider section-subtitle">Featured Work</span>
        <h2 class="fw-bolder mt-2 text-dark section-title">Things I’ve built</h2>
        <p class="text-secondary fs-6 mt-3 max-width-p mx-auto mx-md-0">
          A showcase of my recent work in full-stack web development, featuring scalable SaaS platforms, interactive GIS mapping, and robust N-Tier architectures.
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 g-4 g-lg-5">

        <div class="col">
          <div class="card h-100 border-0 rounded-4 bg-white shadow-sm featured-card transition-all">
            <div class="featured-preview position-relative overflow-hidden rounded-top-4 d-flex align-items-center justify-content-center" style="aspect-ratio: 16/9">
              <img src="@/assets/docs/image.png" alt="City Super App Dashboard" class="hero-image w-100 h-100 object-fit-cover transition-all" />
              <div class="position-absolute top-0 end-0 m-3 badge bg-dark bg-opacity-75 text-white border border-secondary border-opacity-50 rounded-pill px-3 py-2 fw-normal project-badge">
                Internship Project
              </div>
            </div>

            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 42px; height: 42px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                  </svg>
                </div>
                <h4 class="fw-bold text-dark card-title mb-0">City Super App</h4>
              </div>

              <p class="text-secondary fs-6 mb-4 lh-base flex-grow-1">
                Production app built during internship at PT CITIASIA. Multi-module platform serving city services, events, marketplace, and news.
              </p>

              <div class="d-flex flex-wrap gap-2 mt-auto">
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">Laravel</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">Vue.js</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">REST API</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">MySQL</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">Docker</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 border-0 rounded-4 bg-white shadow-sm featured-card transition-all">
            <div class="featured-preview position-relative overflow-hidden rounded-top-4 d-flex align-items-center justify-content-center" style="aspect-ratio: 16/9">
              <img src="@/assets/img/Coffefinder.jpeg" alt="CoffeeFinder Pamulang Map" class="hero-image w-100 h-100 object-fit-cover transition-all" />
              <div class="position-absolute top-0 end-0 m-3 badge bg-dark bg-opacity-75 text-white border border-secondary border-opacity-50 rounded-pill px-3 py-2 fw-normal project-badge">
                Academic Project
              </div>
            </div>

            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="bg-warning-subtle text-warning rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 42px; height: 42px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4 class="fw-bold text-dark card-title mb-0">CoffeeFinder</h4>
              </div>

              <p class="text-secondary fs-6 mb-4 lh-base flex-grow-1">
                Web-based Geographic Information Systems (GIS) application for locating coffee spots. Built with customized interactive maps and a robust management interface.
              </p>

              <div class="d-flex flex-wrap gap-2 mt-auto">
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">Leaflet.js</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">TailAdmin</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">JavaScript</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">GIS</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 border-0 rounded-4 bg-white shadow-sm featured-card transition-all">
            <div class="featured-preview position-relative overflow-hidden rounded-top-4 d-flex align-items-center justify-content-center" style="aspect-ratio: 16/9">
              <img src="@/assets/img/profilex.png" alt="ProFileX Dashboard Interface" class="hero-image w-100 h-100 object-fit-cover transition-all" />
              <div class="position-absolute top-0 end-0 m-3 badge bg-dark bg-opacity-75 text-white border border-secondary border-opacity-50 rounded-pill px-3 py-2 fw-normal project-badge">
                Academic Project
              </div>
            </div>

            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="bg-info-subtle text-info rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 42px; height: 42px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4 class="fw-bold text-dark card-title mb-0">ProFileX</h4>
              </div>

              <p class="text-secondary fs-6 mb-4 lh-base flex-grow-1">
                An automated company profile builder for SMEs. Designed with scalable system architecture, dynamic history tracking, and organizational structure management.
              </p>

              <div class="d-flex flex-wrap gap-2 mt-auto">
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">SaaS</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">Web App</span>
                <span class="badge bg-light text-secondary border px-2 py-1 fw-medium">Architecture</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Typography & Layout Utility */
.max-width-p {
  max-width: 580px;
}

.tracking-wider {
  letter-spacing: 1.5px;
}

.section-subtitle {
  font-size: 0.85rem;
}

.section-title {
  font-size: 2.5rem;
  letter-spacing: -0.5px;
}

/* Transitions */
.transition-all {
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Card Hover Effects */
.featured-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.featured-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02) !important;
}

/* Image Zoom Effect */
.featured-preview {
  background-color: #e9ecef;
}

.featured-card:hover .hero-image {
  transform: scale(1.05);
}

/* Badge Blur Effect */
.project-badge {
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px); /* Safari support */
}

/* Responsiveness */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.1rem;
  }
}
</style>
