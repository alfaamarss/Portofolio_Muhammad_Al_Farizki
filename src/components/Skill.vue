<template>
  <section class="py-5 bg-light" id="experience">
    <div class="container">

      <div class="section-header mb-5">
        <span class="section-label">EXPERIENCE</span>
        <h2 class="fw-bold">Where I've Worked</h2>
        <p>
          Hands-on experience building production applications
          in collaborative team environments.
        </p>
      </div>

      <div class="timeline">

        <div class="timeline-item">
          <div class="timeline-dot"></div>

          <div class="experience-card">

            <div class="experience-header">
              <div>
                <h5>Full Stack Web Developer Intern</h5>
                <small>
                  PT Citi Asia Internasional • Tangerang, Banten
                </small>
              </div>

              <div class="text-end">
                <span class="badge-role">Internship</span>
                <small class="d-block mt-1">
                  Aug 2025 – Dec 2025
                </small>
              </div>
            </div>

            <p class="experience-desc">
              Developed Smart Cities & Smart Enterprises solutions through the
              Magang Berdampak 2025 program, contributing to both frontend and
              backend development for enterprise-scale applications.
            </p>

            <ul class="experience-list">
              <li>
                Built backend services, authentication systems, and REST APIs
                using Laravel and PHP.
              </li>

              <li>
                Developed responsive frontend interfaces using Vue.js and
                Bootstrap.
              </li>

              <li>
                Integrated frontend and backend modules with MySQL database.
              </li>

              <li>
                Performed debugging, testing, deployment, and performance
                optimization.
              </li>

              <li>
                Produced technical documentation and collaborated with team
                members throughout development cycles.
              </li>
            </ul>

            <div class="skill-tags">
              <span>Laravel</span>
              <span>Vue.js</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>REST API</span>
              <span>Bootstrap</span>
              <span>Git</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  max-width: 500px;
}

.section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #4f7cff;
}

.section-header h2 {
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 2.2rem;
}

.section-header p {
  color: #6b7280;
  line-height: 1.7;
}

.timeline {
  position: relative;
  padding-left: 35px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e5e7eb;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -29px;
  top: 18px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4f7cff;
}

.experience-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 24px;
  transition: all .3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 15px;
}

.experience-header h5 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.experience-header small {
  color: #6b7280;
}

.badge-role {
  background: #e8f1ff;
  color: #4f7cff;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
}

.experience-desc {
  color: #6b7280;
  margin-bottom: 15px;
}

.experience-list {
  margin-bottom: 18px;
}

.experience-list li {
  margin-bottom: 8px;
  color: #374151;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tags span {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
  }

  .text-end {
    text-align: left !important;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}
</style>
