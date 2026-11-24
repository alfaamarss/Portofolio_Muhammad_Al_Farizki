<template>
  <section class="projects-section py-5" id="projects">
    <div class="container py-lg-4">
      <!-- Section Header -->
      <div class="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3">
        <div>
          <span class="section-eyebrow">
            <i class="bi bi-code-slash"></i>
            Featured Work
          </span>
          <h2 class="section-heading mb-2">Things I've Built</h2>
          <p class="section-lead mb-0">
            Production systems and academic engineering projects spanning Smart City ecosystems, interactive GIS mapping, and multi-tenant SaaS platforms.
          </p>
        </div>

        <a
          href="https://github.com/alfaamarss"
          target="_blank"
          rel="noopener noreferrer"
          class="github-more-link text-decoration-none align-self-start align-self-md-end"
        >
          <i class="bi bi-github"></i>
          <span>More on GitHub</span>
          <i class="bi bi-arrow-up-right"></i>
        </a>
      </div>

      <!-- Flagship Featured Project (Full Width) -->
      <article class="flagship-card mb-4 mb-lg-5">
        <div class="row g-0 align-items-stretch">
          <div class="col-lg-7 flagship-media-col d-flex flex-column justify-content-between p-3 p-md-4">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
              <span class="badge-pill badge-featured">
                <i class="bi bi-stars text-primary"></i>
                Flagship Internship Project
              </span>

              <!-- Interactive Preview Switcher -->
              <div class="preview-switcher" role="tablist" aria-label="City Super App preview mode">
                <button
                  type="button"
                  class="switch-btn"
                  :class="{ active: flagshipTab === 'ui' }"
                  @click="flagshipTab = 'ui'"
                >
                  App &amp; Dashboard
                </button>
                <button
                  type="button"
                  class="switch-btn"
                  :class="{ active: flagshipTab === 'api' }"
                  @click="flagshipTab = 'api'"
                >
                  Swagger API
                </button>
              </div>
            </div>

            <div class="mockup-stage" @click="openProject(projects[0])">
              <img
                :src="flagshipTab === 'ui' ? cityAppImg : cityApiImg"
                :alt="flagshipTab === 'ui' ? 'City Super App Mobile & Web Dashboard' : 'SuperApps Backend Swagger OpenAPI Documentation'"
                class="flagship-img"
                loading="lazy"
              />
            </div>
          </div>

          <div class="col-lg-5 p-4 p-xl-5 d-flex flex-column justify-content-between bg-white">
            <div>
              <div class="d-flex align-items-center gap-2 text-muted small fw-semibold mb-2">
                <i class="bi bi-building text-primary"></i>
                <span>PT Citi Asia Internasional</span>
                <span>•</span>
                <span>2025</span>
              </div>

              <h3 class="project-card-title mb-3">City Super App</h3>

              <p class="project-desc mb-4">
                Enterprise-grade Smart City platform serving public services, citizen reporting, city events, news, and local marketplaces with a unified RESTful backend and admin dashboard.
              </p>

              <ul class="feature-checklist list-unstyled mb-4">
                <li>
                  <i class="bi bi-check2-circle text-primary"></i>
                  <span>Engineered modular REST APIs &amp; authentication in Laravel</span>
                </li>
                <li>
                  <i class="bi bi-check2-circle text-primary"></i>
                  <span>Documented endpoints via OpenAPI / L5-Swagger UI</span>
                </li>
                <li>
                  <i class="bi bi-check2-circle text-primary"></i>
                  <span>Built responsive Vue.js management modules &amp; analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <div class="d-flex flex-wrap gap-2 mb-4">
                <span v-for="tag in projects[0].tags" :key="tag" class="tech-chip">{{ tag }}</span>
              </div>

              <button type="button" class="btn-project-detail" @click="openProject(projects[0])">
                <span>View Architecture &amp; Details</span>
                <i class="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </article>

      <!-- Secondary Projects Grid (Balanced 2-Column) -->
      <div class="row g-4">
        <div v-for="project in secondaryProjects" :key="project.id" class="col-lg-6">
          <article class="project-card h-100 d-flex flex-column" @click="openProject(project)">
            <!-- Browser / Mockup Frame -->
            <div class="card-media-wrapper" :class="project.frameStyle">
              <div class="browser-bar">
                <div class="browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="browser-url">{{ project.urlLabel }}</span>
                <span class="project-type-tag">{{ project.category }}</span>
              </div>

              <div class="card-img-box">
                <img
                  :src="project.image"
                  :alt="project.title"
                  :class="project.imgFit === 'contain' ? 'img-contain' : 'img-cover'"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-4 d-flex flex-column flex-grow-1">
              <div class="d-flex align-items-start justify-content-between gap-3 mb-2">
                <div class="d-flex align-items-center gap-2">
                  <span class="project-icon-box" :class="project.accentClass">
                    <i class="bi" :class="project.icon"></i>
                  </span>
                  <h3 class="h4 fw-bold text-dark mb-0">{{ project.title }}</h3>
                </div>
                <span class="card-arrow-icon" aria-hidden="true">
                  <i class="bi bi-arrow-up-right"></i>
                </span>
              </div>

              <p class="project-desc mt-2 mb-4 flex-grow-1">
                {{ project.description }}
              </p>

              <div class="d-flex flex-wrap gap-2 mt-auto pt-2 border-top border-light-subtle">
                <span v-for="tag in project.tags" :key="tag" class="tech-chip">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- Project Quick-View Modal -->
    <transition name="modal-fade">
      <div
        v-if="selectedProject"
        class="project-modal-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedProject.title"
        @click.self="closeProject"
      >
        <div class="project-modal-dialog">
          <div class="modal-top-bar d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <span class="badge-pill">{{ selectedProject.category }}</span>
              <span class="text-muted small">{{ selectedProject.subtitle }}</span>
            </div>
            <button type="button" class="modal-close-btn" aria-label="Close modal" @click="closeProject">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <div class="modal-body-scroll">
            <div class="modal-gallery mb-4">
              <img :src="activeModalImage" :alt="selectedProject.title" class="modal-main-img" />
              <div v-if="selectedProject.gallery && selectedProject.gallery.length > 1" class="d-flex justify-content-center gap-2 mt-3">
                <button
                  v-for="(imgItem, idx) in selectedProject.gallery"
                  :key="idx"
                  type="button"
                  class="gallery-thumb-btn"
                  :class="{ active: activeModalImage === imgItem.src }"
                  @click="activeModalImage = imgItem.src"
                >
                  {{ imgItem.label }}
                </button>
              </div>
            </div>

            <h3 class="fw-bold text-dark mb-2">{{ selectedProject.title }}</h3>
            <p class="text-secondary lh-lg mb-4">{{ selectedProject.longDescription }}</p>

            <h6 class="text-uppercase fw-bold small text-muted mb-3" style="letter-spacing: 0.08em">Key Highlights</h6>
            <ul class="feature-checklist list-unstyled mb-4">
              <li v-for="(point, i) in selectedProject.highlights" :key="i">
                <i class="bi bi-check2-circle text-primary"></i>
                <span>{{ point }}</span>
              </li>
            </ul>

            <h6 class="text-uppercase fw-bold small text-muted mb-2" style="letter-spacing: 0.08em">Technologies Used</h6>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="tag in selectedProject.tags" :key="tag" class="tech-chip">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import cityAppImg from "@/assets/docs/image.png";
import cityApiImg from "@/assets/docs/image2.png";
import coffeeImg from "@/assets/img/Coffefinder.jpeg";
import profilexImg from "@/assets/img/profilex.png";

const flagshipTab = ref("ui");
const selectedProject = ref(null);
const activeModalImage = ref("");

const projects = [
  {
    id: "city-super-app",
    title: "City Super App",
    subtitle: "PT Citi Asia Internasional • 2025",
    category: "Internship Project",
    image: cityAppImg,
    gallery: [
      { label: "Mobile & Admin Dashboard", src: cityAppImg },
      { label: "Swagger Backend API", src: cityApiImg },
    ],
    description:
      "Production app built during internship at PT CITIASIA. Multi-module platform serving city services, events, marketplace, and news.",
    longDescription:
      "Developed during the Magang Berdampak 2025 internship at PT Citi Asia Internasional. City Super App unifies municipal services, citizen issue reporting, public facility directories, local news, and community events into a cohesive mobile-and-web ecosystem.",
    highlights: [
      "Designed and implemented RESTful API endpoints for banners, citizen reports, public facilities, and news management.",
      "Created interactive OpenAPI / Swagger documentation to streamline mobile and frontend integration.",
      "Built responsive administrative dashboards in Vue.js for real-time report tracking and content moderation.",
      "Optimized relational MySQL queries and collaborated via Git workflows in an agile team.",
    ],
    tags: ["Laravel", "Vue.js", "REST API", "OpenAPI / Swagger", "MySQL", "Docker"],
  },
  {
    id: "coffeefinder",
    title: "CoffeeFinder",
    subtitle: "Web GIS Application",
    category: "Academic Project",
    urlLabel: "coffeefinder.gis/map",
    icon: "bi-geo-alt-fill",
    accentClass: "accent-amber",
    frameStyle: "frame-map",
    imgFit: "cover",
    image: coffeeImg,
    gallery: [{ label: "Interactive Map View", src: coffeeImg }],
    description:
      "Web-based Geographic Information Systems (GIS) application for discovering coffee shops around Pamulang & South Tangerang with smart facility filters.",
    longDescription:
      "CoffeeFinder is an interactive Geographic Information System (GIS) web app that helps users discover nearby coffee spots based on distance, ratings, and amenities (Outdoor, Indoor, Wi-Fi, Parking), backed by a TailAdmin management dashboard.",
    highlights: [
      "Interactive spatial map powered by Leaflet.js & OpenStreetMap custom markers.",
      "Real-time search and multi-criteria filtering (Indoor, Outdoor, Wi-Fi) with instant map synchronization.",
      "Comprehensive admin panel built with TailAdmin for managing spatial coordinates, photos, and cafe metadata.",
    ],
    tags: ["Leaflet.js", "JavaScript", "TailAdmin", "Web GIS", "OpenStreetMap"],
  },
  {
    id: "profilex",
    title: "ProFileX",
    subtitle: "No-Code SaaS Builder",
    category: "Academic Project",
    urlLabel: "profilex.app",
    icon: "bi-window-stack",
    accentClass: "accent-indigo",
    frameStyle: "frame-clean",
    imgFit: "contain",
    image: profilexImg,
    gallery: [{ label: "Landing & Product Mockup", src: profilexImg }],
    description:
      "Automated company profile builder for MSMEs & startups. Engineered with scalable N-Tier architecture, version history tracking, and instant publishing.",
    longDescription:
      "ProFileX empowers MSMEs, freelancers, and startups to build and publish professional company profile websites in minutes without writing code. Architected for maintainability with structured organizational management and dynamic content blocks.",
    highlights: [
      "Zero-coding workflow enabling rapid company profile generation and instant web publishing.",
      "Structured N-Tier system architecture supporting organizational charts and company milestone history.",
      "Clean, conversion-focused UI tailored for non-technical business owners.",
    ],
    tags: ["SaaS Architecture", "Fullstack Web", "N-Tier Design", "CMS Builder"],
  },
];

const secondaryProjects = computed(() => projects.slice(1));

function openProject(project) {
  selectedProject.value = project;
  activeModalImage.value = project.image;
  document.body.style.overflow = "hidden";
}

function closeProject() {
  selectedProject.value = null;
  document.body.style.overflow = "";
}

function handleKeydown(e) {
  if (e.key === "Escape" && selectedProject.value) {
    closeProject();
  }
}

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.projects-section {
  background-color: #f8fafc;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.github-more-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.22s ease;
}

.github-more-link:hover {
  border-color: #2563eb;
  color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -8px rgba(37, 99, 235, 0.25);
}

/* Flagship Card */
.flagship-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.06);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.flagship-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 24px 48px -16px rgba(15, 23, 42, 0.11);
}

.flagship-media-col {
  background: linear-gradient(145deg, #f8fafc 0%, #eff6ff 100%);
  border-right: 1px solid #e2e8f0;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  font-size: 0.78rem;
  font-weight: 600;
  color: #334155;
}

.preview-switcher {
  display: inline-flex;
  background: rgba(226, 232, 240, 0.65);
  padding: 3px;
  border-radius: 999px;
}

.switch-btn {
  border: none;
  background: transparent;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s ease;
}

.switch-btn.active {
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
}

.mockup-stage {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 310px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 24px -10px rgba(15, 23, 42, 0.06);
}

.flagship-img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.mockup-stage:hover .flagship-img {
  transform: scale(1.03);
}

.project-card-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
}

.project-desc {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.7;
}

.feature-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  color: #334155;
}

.feature-checklist i {
  margin-top: 2px;
  font-size: 1rem;
  flex-shrink: 0;
}

.tech-chip {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: #f8fafc;
  color: #334155;
  border: 1px solid #e2e8f0;
}

.btn-project-detail {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.2rem;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.22s ease;
}

.btn-project-detail:hover {
  background: #0f172a;
  border-color: #0f172a;
  color: #ffffff;
}

/* Secondary Project Cards */
.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 24px -12px rgba(15, 23, 42, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #bfdbfe;
  box-shadow: 0 22px 44px -16px rgba(37, 99, 235, 0.13);
}

.card-media-wrapper {
  padding: 1rem 1rem 0;
  background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
  border-bottom: 1px solid #e2e8f0;
}

.browser-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.85rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
}

.browser-dots {
  display: flex;
  gap: 5px;
}

.browser-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.browser-dots span:nth-child(1) { background: #fca5a5; }
.browser-dots span:nth-child(2) { background: #fcd34d; }
.browser-dots span:nth-child(3) { background: #86efac; }

.browser-url {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #64748b;
}

.project-type-tag {
  font-size: 0.68rem;
  font-weight: 600;
  color: #475569;
  background: #f1f5f9;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
}

.card-img-box {
  aspect-ratio: 16 / 9.5;
  background: #ffffff;
  border-left: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.img-contain {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .img-cover,
.project-card:hover .img-contain {
  transform: scale(1.04);
}

.project-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  flex-shrink: 0;
}

.accent-amber {
  background: #fef3c7;
  color: #d97706;
}

.accent-indigo {
  background: #e0e7ff;
  color: #4f46e5;
}

.card-arrow-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #64748b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.project-card:hover .card-arrow-icon {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
  transform: translate(2px, -2px);
}

/* Modal Styling */
.project-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1060;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.project-modal-dialog {
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-top-bar {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;
  background: #f8fafc;
}

.modal-close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #475569;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: #fee2e2;
  border-color: #fecaca;
  color: #dc2626;
}

.modal-body-scroll {
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-gallery {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
}

.modal-main-img {
  width: 100%;
  max-height: 340px;
  object-fit: contain;
  border-radius: 10px;
}

.gallery-thumb-btn {
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #475569;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.gallery-thumb-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.22s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 991.98px) {
  .flagship-media-col {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  .mockup-stage {
    min-height: 230px;
  }
}
</style>
