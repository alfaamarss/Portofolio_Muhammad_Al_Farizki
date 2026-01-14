<template>
  <section class="container py-5 mt-5" id="about">
    <div class="row align-items-center g-5">
      <!-- FOTO -->
      <div class="col-md-4 d-flex justify-content-center">
        <div class="card border-0 shadow-sm text-center p-4 rounded-4 profile-card">
          <img src="@/assets/img/profile.png" alt="Muhammad Al Farizki" class="img-fluid mx-auto mb-3 profile-img" draggable="false" />
          <h5 class="fw-bold mb-1">Muhammad Al Farizki</h5>
          <small class="text-muted">Full-Stack Web Developer</small>
        </div>
      </div>

      <!-- DESKRIPSI -->
      <div class="col-md-8">
        <h2 class="fw-bold mb-3">
          Hello I Am
          <span class="text-primary typing-text">{{ displayText }}</span>
          <span class="cursor">|</span>
        </h2>

        <p class="lh-lg text">
          I am an Informatics Engineering student from Indonesia with hands-on experience in developing web applications using
          <strong>Laravel</strong> and <strong>Vue.js</strong>. I have experience in building backend systems, integrating <strong>REST APIs</strong>, and developing responsive frontend interfaces through academic projects and the
          <strong>Magang Berdampak</strong> program as a Full-Stack Developer Intern.
        </p>

        <p class="lh-lg text">
          Certified <strong>Junior Web Developer (BNSP)</strong> with strong problem-solving skills, accustomed to working in collaborative teams, and highly motivated to continuously improve technical and professional skills.
        </p>

        <!-- BUTTON -->
        <div class="mt-4 d-flex gap-3 flex-wrap">
          <a href="https://github.com/username" target="_blank" class="btn btn-dark px-4"> GitHub </a>

          <a href="https://linkedin.com/in/username" target="_blank" class="btn btn-outline-primary px-4"> LinkedIn </a>

          <a href="/cv.pdf" class="btn btn-outline-secondary px-4"> Download CV </a>
        </div>

        <!-- DIVIDER -->
        <hr class="my-5 opacity-25" />

        <!-- GITHUB CONTRIBUTIONS -->
        <div>
          <h5 class="fw-bold mb-3">GitHub Contributions</h5>

          <div class="github-card p-3 rounded-4 shadow-sm bg-white text-center">
            <img src="https://ghchart.rshah.org/alfaamarss" alt="GitHub Contribution Chart" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const texts = ["Muhammad Al Farizki", "Full-Stack Developer"];
const displayText = ref("");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const delayAfterTyping = 1500;

function typeEffect() {
  const current = texts[textIndex];

  if (!isDeleting) {
    displayText.value = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => (isDeleting = true), delayAfterTyping);
    }
  } else {
    displayText.value = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

onMounted(() => {
  typeEffect();
});
</script>

<style scoped>
.profile-card {
  transform: translateY(-110px); /* atur -20 / -30 / -40 sesuai selera */
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-36px);
}

.profile-img {
  max-width: 180px;
  user-select: none;
}

.typing-text {
  white-space: nowrap;
}

.cursor {
  display: inline-block;
  margin-left: 4px;
  animation: blink 1s infinite;
}

.github-card img {
  max-width: 100%;
}

@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
</style>
