<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar" :class="{ 'navbar-hidden': !showNavbar, 'navbar-scrolled': isScrolled }">
    <div class="container py-2">
      <a class="navbar-brand fw-bold fs-4 text-dark" href="#home">Al Farizki</a>

      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" @click="toggleCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center gap-lg-4 mobile-center">
          <li class="nav-item">
            <a class="nav-link fw-medium" href="#about" @click="closeCollapse"> About </a>
          </li>

          <li class="nav-item">
            <a class="nav-link fw-medium" href="#projects" @click="closeCollapse"> Projects </a>
          </li>

          <li class="nav-item">
            <a class="nav-link fw-medium" href="#education " @click="closeCollapse"> Skills </a>
          </li>

          <li class="nav-item">
            <a class="nav-link fw-medium" href="#experience" @click="closeCollapse"> Experience </a>
          </li>

          <li class="nav-item">
            <a class="nav-link fw-medium" href="#footer" @click="closeCollapse"> Contact </a>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showNavbar = ref(true);
const isScrolled = ref(false);
let lastScroll = 0;
const collapseEl = ref(null);

const toggleCollapse = () => {
  collapseEl.value = document.getElementById("navbarNav");
};

const closeCollapse = () => {
  if (collapseEl.value && collapseEl.value.classList.contains("show")) {
    // Pastikan variabel bootstrap tersedia secara global di project kamu
    const bsCollapse = bootstrap.Collapse.getInstance(collapseEl.value);
    if (bsCollapse) bsCollapse.hide();
  }
};

const handleScroll = () => {
  const currentScroll = window.pageYOffset;

  // Deteksi jika halaman sudah di-scroll dari atas untuk efek shadow/background
  isScrolled.value = currentScroll > 20;

  if (currentScroll > lastScroll && currentScroll > 80) {
    // scroll down
    showNavbar.value = false;
  } else {
    // scroll up
    showNavbar.value = true;
  }
  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Transisi dasar Navbar */
.custom-navbar {
  background-color: transparent;
  transition:
    top 0.3s ease-in-out,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  top: 0;
}

/* Efek saat discroll (muncul background putih dan shadow) */
.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

/* Auto-hide navbar */
.navbar-hidden {
  top: -100px; /* Sembunyikan di atas layar */
}

/* Kustomisasi Link */
.nav-link {
  color: #6b7280; /* Text muted */
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #111827; /* Text dark saat hover */
}

/* Efek garis bawah (opsional, disesuaikan agar lebih tipis & modern) */
.nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3b82f6; /* Warna primary biru */
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 80%;
}

/* Tombol Hire Me */
.btn-primary {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.btn-primary:hover {
  background-color: #2563eb;
  border-color: #2563eb;
}

/* Tata letak Mobile */
@media (max-width: 991.98px) {
  .custom-navbar {
    background-color: #ffffff; /* Selalu solid putih di mobile agar menu tidak tembus pandang */
  }

  .mobile-center {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 1.5rem;
    padding-bottom: 1rem;
  }

  .nav-link::after {
    display: none; /* Hilangkan efek garis bawah di mobile agar lebih bersih */
  }
}
</style>
