<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm" :class="{ 'navbar-hidden': !showNavbar }">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#home"> Al<span class="text-primary">Farizki</span> </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" @click="toggleCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3 mobile-center">
          <li class="nav-item"><a class="nav-link" href="#about" @click="closeCollapse">Tentang</a></li>
          <li class="nav-item"><a class="nav-link" href="#education" @click="closeCollapse">Pendidikan</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects" @click="closeCollapse">Proyek</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills" @click="closeCollapse">Skill</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showNavbar = ref(true);
let lastScroll = 0;
const collapseEl = ref(null);

const toggleCollapse = () => {
  collapseEl.value = document.getElementById("navbarNav");
};

const closeCollapse = () => {
  if (collapseEl.value && collapseEl.value.classList.contains("show")) {
    const bsCollapse = bootstrap.Collapse.getInstance(collapseEl.value);
    if (bsCollapse) bsCollapse.hide();
  }
};

const handleScroll = () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 50) {
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
.nav-link {
  position: relative;
  cursor: pointer;
  color: #ffffff;
  transition: color 0.3s;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0d6efd;
  transition: width 0.3s;
}

.nav-link:hover {
  color: #0d6efd;
}

.nav-link:hover::after {
  width: 100%;
}

/* Navbar center di mobile */
@media (max-width: 991.98px) {
  .mobile-center {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 1rem;
  }
}

/* Auto-hide navbar */
.navbar {
  transition: top 0.3s;
}
.navbar-hidden {
  top: -80px; /* sembunyikan di atas layar */
}
</style>
