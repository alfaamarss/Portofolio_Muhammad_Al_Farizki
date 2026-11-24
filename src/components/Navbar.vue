<template>
  <header
    class="navbar-wrapper fixed-top"
    :class="{ 'nav-hidden': !showNavbar && !isMobileOpen, 'nav-scrolled': isScrolled }"
  >
    <div class="container">
      <nav class="nav-pill d-flex align-items-center justify-content-between" aria-label="Main navigation">
        <a class="brand-link d-flex align-items-center gap-2 text-decoration-none" href="#home" @click="closeMenu">
          <span class="brand-monogram">AF</span>
          <span class="brand-text">Al Farizki<span class="brand-dot">.</span></span>
        </a>

        <ul class="nav-menu d-none d-lg-flex align-items-center list-unstyled mb-0 gap-1">
          <li v-for="item in navItems" :key="item.id">
            <a
              class="nav-item-link"
              :class="{ active: activeSection === item.id }"
              :href="`#${item.id}`"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="d-none d-lg-flex align-items-center gap-2">
          <a href="#contact" class="nav-cta text-decoration-none">
            <span>Let's Talk</span>
            <i class="bi bi-arrow-up-right"></i>
          </a>
        </div>

        <button
          class="mobile-toggle d-lg-none"
          type="button"
          :aria-expanded="isMobileOpen"
          aria-label="Toggle navigation menu"
          @click="isMobileOpen = !isMobileOpen"
        >
          <i class="bi" :class="isMobileOpen ? 'bi-x-lg' : 'bi-list'"></i>
        </button>
      </nav>

      <transition name="mobile-drop">
        <div v-if="isMobileOpen" class="mobile-drawer d-lg-none mt-2">
          <ul class="list-unstyled mb-3 d-flex flex-column gap-1">
            <li v-for="item in navItems" :key="item.id">
              <a
                class="mobile-nav-link"
                :class="{ active: activeSection === item.id }"
                :href="`#${item.id}`"
                @click="closeMenu"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
          <a href="#contact" class="nav-cta w-100 justify-content-center text-decoration-none" @click="closeMenu">
            <span>Let's Talk</span>
            <i class="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const showNavbar = ref(true);
const isScrolled = ref(false);
const isMobileOpen = ref(false);
const activeSection = ref("about");
let lastScroll = 0;

const closeMenu = () => {
  isMobileOpen.value = false;
};

const handleScroll = () => {
  const currentScroll = window.scrollY;
  isScrolled.value = currentScroll > 24;

  if (currentScroll > lastScroll && currentScroll > 120) {
    showNavbar.value = false;
  } else {
    showNavbar.value = true;
  }
  lastScroll = currentScroll;

  const scrollPos = currentScroll + 180;
  for (let i = navItems.length - 1; i >= 0; i--) {
    const el = document.getElementById(navItems[i].id);
    if (el && el.offsetTop <= scrollPos) {
      activeSection.value = navItems[i].id;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-wrapper {
  padding: 1rem 0;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
  z-index: 1030;
}

.nav-scrolled {
  padding: 0.65rem 0;
}

.nav-hidden {
  transform: translateY(-115%);
}

.nav-pill {
  padding: 0.6rem 0.85rem 0.6rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(226, 232, 240, 0.7);
  transition: all 0.3s ease;
}

.nav-scrolled .nav-pill {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(203, 213, 225, 0.85);
  box-shadow:
    0 10px 30px -10px rgba(15, 23, 42, 0.08),
    0 2px 6px -1px rgba(15, 23, 42, 0.04);
}

.brand-monogram {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
}

.brand-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.brand-dot {
  color: #2563eb;
}

.nav-item-link {
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #475569;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.nav-item-link:hover {
  color: #0f172a;
  background: rgba(241, 245, 249, 0.8);
}

.nav-item-link.active {
  color: #2563eb;
  background: #eff6ff;
  font-weight: 600;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  background: #0f172a;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.nav-cta:hover {
  background: #2563eb;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px -6px rgba(37, 99, 235, 0.45);
}

.mobile-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #0f172a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s ease;
}

.mobile-toggle:hover {
  background: #f8fafc;
}

.mobile-drawer {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(16px);
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.12);
}

.mobile-nav-link {
  display: block;
  text-decoration: none;
  padding: 0.65rem 1rem;
  border-radius: 12px;
  font-weight: 500;
  color: #334155;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 600;
}

.mobile-drop-enter-active,
.mobile-drop-leave-active {
  transition: all 0.22s ease;
}

.mobile-drop-enter-from,
.mobile-drop-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>
