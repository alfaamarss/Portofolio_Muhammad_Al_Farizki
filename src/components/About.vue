<template>
  <section class="container py-5 mt-5 section" id="about">
    <div class="row align-items-center g-5">
      <!-- FOTO -->
      <div class="col-md-4 d-flex justify-content-center">
        <div class="card border-0 shadow-sm text-center p-4 rounded-4 profile-card">
          <img src="@/assets/img/Profile.png" alt="Muhammad Al Farizki" class="img-fluid mx-auto mb-3 profile-img" draggable="false" />
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
          <a href="https://github.com/alfaamarss" target="_blank" class="btn btn-dark px-4"> GitHub </a>

          <a href="https://www.linkedin.com/in/muhammad-al-farizki/" target="_blank" class="btn btn-outline-primary px-4"> LinkedIn </a>
          <button class="btn btn-outline-secondary px-4" @click="confirmDownload">Download CV</button>
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
import Swal from "sweetalert2";

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

function confirmDownload() {
  Swal.fire({
    title: "Download CV?",
    text: "Apakah Anda ingin mengunduh CV Muhammad Al Farizki?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Ya, Download",
    cancelButtonText: "Batal",
    reverseButtons: true,
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
      });
    }
  });
}
</script>

<style scoped>
/* ===== DESKTOP (DEFAULT) ===== */
.profile-card {
  transform: translateY(-40px);
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

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  /* reset animasi */
  .profile-card {
    transform: none;
    margin-top: 1rem;
  }

  .profile-card:hover {
    transform: none;
  }

  /* foto lebih kecil */
  .profile-img {
    max-width: 140px;
  }

  /* text center biar rapi */
  #about h2,
  #about p {
    text-align: center;
  }

  /* typing text biar ga kepanjangan */
  .typing-text {
    display: inline-block;
    max-width: 100%;
    text-align: center;
  }

  /* button full & center */
  #about .btn {
    width: 100%;
  }

  #about .mt-4 {
    justify-content: center;
  }

  /* github chart jangan kepotong */
  .github-card {
    overflow-x: auto;
  }
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
