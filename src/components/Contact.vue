<template>
  <section id="contact" class="contact-section py-5">
    <div class="container">
      <div class="contact-card">
        <span class="contact-label"> GET IN TOUCH </span>

        <h2 class="contact-title">
          Let's build something
          <br />
          great together.
        </h2>

        <p class="contact-description">I'm actively looking for full-time roles and freelance projects. Whether you're hiring a full-stack developer or need a technical partner — reach out, I'd love to talk.</p>

        <div class="email-box">
          <div class="email-left">
            <i class="bi bi-envelope"></i>
            <span>muhammadalfa10@gmail.com</span>
          </div>

          <button class="copy-btn" @click="copyEmail">
            <i class="bi bi-copy"></i>
          </button>
        </div>

        <div class="location">
          <i class="bi bi-geo-alt"></i>
          Banten, Indonesia · Available for remote work worldwide
        </div>

        <div class="contact-actions">
          <a href="https://github.com/alfaamarss" target="_blank" class="contact-btn">
            <i class="bi bi-github"></i>
            GitHub
          </a>

          <a href="https://linkedin.com/in/muhammad-al-farizki" target="_blank" class="contact-btn">
            <i class="bi bi-linkedin"></i>
            LinkedIn
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadalfa10@gmail.com" target="_blank" class="contact-btn primary">
            <i class="bi bi-envelope"></i>
            Send Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const copyEmail = async () => {
  await navigator.clipboard.writeText("muhammadalfa10@gmail.com");
};
</script>

<style scoped>
.contact-section {
  background: #f8fafc;
}

.contact-card {
  max-width: 900px;
  margin: auto;
  padding: 60px;
  border-radius: 24px;

  background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 40%), linear-gradient(90deg, #111827, #0f172a, #172554);

  color: white;
}

.contact-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #3b82f6;
}

.contact-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.05;
  margin-top: 16px;
  margin-bottom: 20px;
}

.contact-description {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 35px;
}

.email-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 520px;

  padding: 16px 20px;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(10px);
}

.email-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.email-left span {
  font-size: 14px;
}

.copy-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.copy-btn:hover {
  color: white;
}

.location {
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-actions {
  display: flex;
  gap: 12px;
  margin-top: 35px;
  flex-wrap: wrap;
}

.contact-btn {
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 18px;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.08);

  color: white;

  transition: 0.3s;
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.contact-btn.primary {
  background: #3b82f6;
  border-color: #3b82f6;
}

.contact-btn.primary:hover {
  background: #2563eb;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 35px 25px;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .email-box {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
