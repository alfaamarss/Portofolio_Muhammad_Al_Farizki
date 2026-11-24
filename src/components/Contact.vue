<template>
  <section id="contact" class="contact-section py-5">
    <div class="container py-lg-4">
      <div class="contact-card position-relative overflow-hidden">
        <div class="contact-grid-overlay" aria-hidden="true"></div>
        <div class="contact-glow glow-1" aria-hidden="true"></div>
        <div class="contact-glow glow-2" aria-hidden="true"></div>

        <div class="position-relative z-1">
          <span class="contact-eyebrow">
            <span class="avail-dot"></span>
            GET IN TOUCH
          </span>

          <h2 class="contact-title">
            Let's build something
            <span class="d-block contact-gradient-text">great together.</span>
          </h2>

          <p class="contact-description">
            I'm actively open to full-time developer roles, internships, and freelance collaborations. Whether you're hiring a full-stack engineer or need a technical partner — reach out, I'd love to connect.
          </p>

          <div class="email-box">
            <div class="email-left">
              <span class="email-icon">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <span class="email-address">muhammadalfa10@gmail.com</span>
            </div>

            <button
              type="button"
              class="copy-btn"
              :class="{ copied: isCopied }"
              aria-label="Copy email address"
              @click="copyEmail"
            >
              <i class="bi" :class="isCopied ? 'bi-check2' : 'bi-copy'"></i>
              <span>{{ isCopied ? "Copied!" : "Copy" }}</span>
            </button>
          </div>

          <div class="location-meta">
            <i class="bi bi-geo-alt-fill text-primary"></i>
            <span>Banten, Indonesia · Available for remote &amp; on-site roles</span>
          </div>

          <div class="contact-actions">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadalfa10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-btn primary"
            >
              <i class="bi bi-send-fill"></i>
              <span>Send Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-al-farizki/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-btn"
            >
              <i class="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/alfaamarss"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-btn"
            >
              <i class="bi bi-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isCopied = ref(false);
let copyTimer = null;

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("muhammadalfa10@gmail.com");
    isCopied.value = true;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      isCopied.value = false;
    }, 2200);
  } catch {
    window.location.href = "mailto:muhammadalfa10@gmail.com";
  }
};
</script>

<style scoped>
.contact-section {
  background: #ffffff;
}

.contact-card {
  max-width: 980px;
  margin: 0 auto;
  padding: 4rem 3.5rem;
  border-radius: 28px;
  background: linear-gradient(135deg, #090d16 0%, #0f172a 55%, #172554 100%);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 28px 60px -18px rgba(15, 23, 42, 0.35);
  color: #ffffff;
}

.contact-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px);
  background-size: 26px 26px;
  mask-image: radial-gradient(circle at 75% 30%, #000 15%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at 75% 30%, #000 15%, transparent 75%);
  pointer-events: none;
}

.contact-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.glow-1 {
  width: 340px;
  height: 340px;
  top: -80px;
  right: -60px;
  background: rgba(59, 130, 246, 0.28);
}

.glow-2 {
  width: 260px;
  height: 260px;
  bottom: -90px;
  left: 10%;
  background: rgba(124, 58, 237, 0.2);
}

.contact-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.25);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
}

.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
}

.contact-title {
  font-size: clamp(2.25rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.08;
  margin-top: 1.25rem;
  margin-bottom: 1.15rem;
  letter-spacing: -0.03em;
}

.contact-gradient-text {
  background: linear-gradient(90deg, #60a5fa 0%, #c084fc 60%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  max-width: 620px;
  color: rgba(226, 232, 240, 0.78);
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 2rem;
}

.email-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  padding: 0.65rem 0.75rem 0.65rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
}

.email-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.email-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.18);
  color: #60a5fa;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.email-address {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: #f8fafc;
  overflow: hidden;
  text-overflow: ellipsis;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.18);
}

.copy-btn.copied {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(52, 211, 153, 0.45);
  color: #6ee7b7;
}

.location-meta {
  margin-top: 1.25rem;
  color: rgba(203, 213, 225, 0.68);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.contact-btn {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.3rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  transform: translateY(-2px);
}

.contact-btn.primary {
  background: #2563eb;
  border-color: #3b82f6;
  box-shadow: 0 10px 24px -8px rgba(37, 99, 235, 0.6);
}

.contact-btn.primary:hover {
  background: #1d4ed8;
  box-shadow: 0 14px 28px -8px rgba(37, 99, 235, 0.75);
}

@media (max-width: 767.98px) {
  .contact-card {
    padding: 2.5rem 1.5rem;
    border-radius: 22px;
  }

  .email-box {
    flex-direction: column;
    align-items: stretch;
  }

  .copy-btn {
    justify-content: center;
  }
}
</style>
