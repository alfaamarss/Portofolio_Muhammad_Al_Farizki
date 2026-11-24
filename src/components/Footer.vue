<template>
  <footer id="footer" class="site-footer">
    <div class="container">
      <div class="footer-top d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 pb-4">
        <div class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
          <a href="#home" class="footer-brand d-inline-flex align-items-center gap-2 text-decoration-none mb-2">
            <span class="footer-monogram">AF</span>
            <span class="footer-brand-name">Muhammad Al Farizki<span class="text-primary">.</span></span>
          </a>
          <p class="footer-tagline mb-0">
            Fullstack Web Developer — Building reliable web platforms with Laravel &amp; Vue.js.
          </p>
        </div>

        <ul class="footer-nav list-unstyled d-flex flex-wrap justify-content-center gap-4 mb-0">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-bottom d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 pt-4">
        <small class="copyright-text">
          &copy; {{ new Date().getFullYear() }} Muhammad Al Farizki. All rights reserved.
        </small>

        <div class="d-flex align-items-center gap-2">
          <a
            href="https://github.com/alfaamarss"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-icon-btn"
            aria-label="GitHub"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-al-farizki/"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-icon-btn"
            aria-label="LinkedIn"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:muhammadalfa10@gmail.com"
            class="footer-icon-btn"
            aria-label="Email"
          >
            <i class="bi bi-envelope-fill"></i>
          </a>
          <a href="#home" class="back-top-btn text-decoration-none ms-2" aria-label="Back to top">
            <i class="bi bi-arrow-up"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: #090d16;
  color: #94a3b8;
  padding: 3.5rem 0 2.25rem;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
}

.footer-top {
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.footer-monogram {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.78rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.footer-brand-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.05rem;
  color: #f8fafc;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #64748b;
}

.footer-nav a {
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #ffffff;
}

.copyright-text {
  font-size: 0.82rem;
  color: #64748b;
}

.footer-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-icon-btn:hover {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
  transform: translateY(-2px);
}

.back-top-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.14);
  border: 1px solid rgba(96, 165, 250, 0.3);
  color: #60a5fa;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.back-top-btn:hover {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
  transform: translateY(-2px);
}
</style>
