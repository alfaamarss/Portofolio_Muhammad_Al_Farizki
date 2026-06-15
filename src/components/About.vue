<template>
  <div class="portfolio-container d-flex align-items-center position-relative overflow-hidden">
    <!-- Dekorasi Background Sabtle -->
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>

    <section class="container pt-5 mt-5 position-relative z-1" id="about">
      <div class="row align-items-center g-5">
        <!-- Kolom Profil (Kiri) -->
        <div class="col-lg-4 d-flex flex-column align-items-center text-center animate-fade-up">
          <div class="profile-img-wrapper mb-4 shadow-sm">
            <img src="@/assets/img/Profile.png" alt="Muhammad Al Farizki" class="img-fluid rounded-circle profile-img"
              draggable="false" />
          </div>
          <h5 class="fw-bold mb-1 text-dark">Muhammad Al Farizki</h5>
          <small class="text-muted mb-3 d-block fw-medium">Full-Stack Web Developer</small>

          <span
            class="badge bg-success-subtle text-success px-3 py-2 rounded-pill border border-success-subtle fw-medium d-inline-flex align-items-center gap-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            BNSP Certified
          </span>
        </div>

        <!-- Kolom Konten Utama (Kanan) -->
        <div class="col-lg-8 px-md-4">
          <div
            class="opp-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4 border shadow-sm animate-fade-up delay-1">
            <span class="status-dot"></span>
            Open to opportunities
          </div>

          <h1 class="fw-bolder mb-4 hero-title animate-fade-up delay-2">
            Designing logic. <br class="d-none d-lg-block" />
            Building interfaces. <br class="d-none d-lg-block" />
            <span class="text-gradient">Delivering performance.</span>
          </h1>

          <p class="fs-6 text-secondary mb-4 hero-desc lh-lg pe-lg-5 animate-fade-up delay-3">
            I'm <strong class="text-dark">Muhammad Al Farizki</strong>, an Informatics student and BNSP-certified
            full-stack developer. I bridge robust backend logic with dynamic user interfaces to build secure,
            production-grade
            applications that perform at scale.
          </p>
          <div class="mt-4 d-flex gap-3 flex-wrap mb-5 animate-fade-up delay-4">
            <a href="#projects"
              class="btn btn-primary px-4 py-2 rounded-3 fw-medium shadow-sm d-flex align-items-center gap-2 btn-hover-lift text-decoration-none w-auto d-inline-flex">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <button
              class="btn btn-outline-secondary px-4 py-2 rounded-3 fw-medium d-flex align-items-center gap-2 border-2 btn-hover-lift"
              @click="confirmDownload">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>
          </div>

          <!-- Social Links -->
          <div class="d-flex flex-wrap align-items-center gap-4 social-footer mt-2 animate-fade-up delay-5">
            <div class="d-flex gap-3">
              <a href="https://github.com/alfaamarss" target="_blank" class="social-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-al-farizki/" target="_blank" class="social-icon"
                aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:muhammadalfa10@gmail.com" class="social-icon" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <div class="vr bg-secondary opacity-25 d-none d-md-block" style="width: 2px; height: 24px"></div>
            <span class="text-muted fs-7 d-none d-md-block">Available for freelance</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";

function confirmDownload() {
  Swal.fire({
    title: "Download CV?",
    text: "Apakah Anda ingin mengunduh CV Muhammad Al Farizki?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Ya, Download",
    cancelButtonText: "Batal",
    reverseButtons: true,
    customClass: {
      popup: "rounded-4",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const link = document.createElement("a");
      link.href = "/Cv_Muhammad_Al_Farizki.pdf";
      link.download = "Cv_Muhammad_Al_Farizki.pdf";
      link.click();

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "CV sedang diunduh",
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: "rounded-4",
        },
      });
    }
  });
}
</script>

<style scoped>
/* Typografi & Background */
.portfolio-container {
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  background-color: #fcfcfd;
  min-height: 100vh;
}

/* Dekorasi Latar Belakang (Subtle Blobs) */
.bg-shape {
  position: absolute;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.4;
  border-radius: 50%;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: #bfdbfe;
  top: -10%;
  right: -5%;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: #d1fae5;
  bottom: -10%;
  left: -5%;
}

/* Kustomisasi Profil Image */
.profile-img-wrapper {
  padding: 8px;
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #3b82f6, #10b981) border-box;
  border-radius: 50%;
  display: inline-block;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.profile-img-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3) !important;
}

.profile-img {
  width: 240px;
  height: 240px;
  object-fit: cover;
}

/* Badge Opportunities */
.opp-badge {
  background-color: #eff6ff;
  border-color: #bfdbfe !important;
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 0 2px #d1fae5;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }

  70% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Judul Utama & Teks Gradien */
.hero-title {
  font-size: 3.75rem;
  color: #111827;
  letter-spacing: -1.5px;
  line-height: 1.15;
}

.text-gradient {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-success-subtle {
  background-color: #ecfdf5 !important;
}

.text-success {
  color: #10b981 !important;
}

/* Tombol */
.btn-primary {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.btn-outline-secondary {
  color: #374151;
  border-color: #d1d5db;
  background-color: white;
}

.btn-hover-lift {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hover-lift:hover {
  transform: translateY(-3px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
}

.btn-primary.btn-hover-lift:hover {
  background-color: #2563eb;
  border-color: #2563eb;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3) !important;
}

.btn-outline-secondary.btn-hover-lift:hover {
  background-color: #f9fafb;
  color: #111827;
}

/* Ikon Sosial */
.social-icon {
  color: #6b7280;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  color: #3b82f6;
  background-color: #eff6ff;
  transform: translateY(-3px);
}

.fs-7 {
  font-size: 0.875rem;
}

/* Animasi Muncul (Fade-up) */
.animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-1 {
  animation-delay: 0.1s;
}

.delay-2 {
  animation-delay: 0.2s;
}

.delay-3 {
  animation-delay: 0.3s;
}

.delay-4 {
  animation-delay: 0.4s;
}

.delay-5 {
  animation-delay: 0.5s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsif Mobile */
@media (max-width: 991px) {
  .hero-title {
    font-size: 2.75rem;
    text-align: center;
  }

  .hero-desc {
    text-align: center;
  }

  .opp-badge {
    margin: 0 auto 1.5rem auto;
    display: flex !important;
    width: fit-content;
  }

  .mt-4.d-flex.gap-3.flex-wrap {
    justify-content: center;
  }

  .social-footer {
    justify-content: center;
    flex-direction: column;
    gap: 1rem !important;
  }

  .profile-img {
    width: 200px;
    height: 200px;
  }
}
</style>
