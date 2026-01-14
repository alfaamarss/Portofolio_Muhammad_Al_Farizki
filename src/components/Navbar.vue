<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#home"> Al<span class="text-primary">Farizki</span> </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education">Pendidikan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Proyek</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skill</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// no logic needed
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
.nav-link:hover {
  color: #0d6efd;
}
</style>
