<template>
  <footer class="footer bg-dark text-light pt-5 pb-3">
    <div class="container text-center">
      <!-- Brand -->
      <div class="mb-3">
        <h5 class="fw-bold">Al<span class="text-primary">Farizki</span></h5>
        <p class="small text-light">Full-Stack Web Developer | Portfolio pribadi untuk menampilkan proyek dan skill.</p>
      </div>

      <!-- Social Media -->
      <div class="mb-3">
        <a href="https://github.com/alfaamarss" target="_blank" class="footer-social mx-2">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-al-farizki/" target="_blank" class="footer-social mx-2">
          <i class="bi bi-linkedin"></i>
        </a>
        <!-- Tambah sosial media lain kalau perlu -->
      </div>

      <!-- Copyright -->
      <div class="text-center mt-3">
        <small class="text-light">&copy; 2026 AlFarizki. All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Tidak perlu script
</script>

<style scoped>
.footer {
  border-top: 1px solid #444; /* border top halus supaya terlihat pemisah */
}

/* Social icon style */
.footer-social {
  color: #fff; /* teks icon putih supaya terlihat di dark bg */
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.footer-social:hover {
  color: #0d6efd; /* hover biru */
  transform: scale(1.2); /* efek zoom ringan */
}

/* Responsive spacing untuk mobile */
@media (max-width: 576px) {
  .footer-social {
    font-size: 1.3rem;
    margin: 0 0.5rem;
  }
}
</style>
