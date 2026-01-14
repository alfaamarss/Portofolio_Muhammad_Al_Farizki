<template>
  <section class="py-5" id="projects">
    <div class="container">
      <h2 class="fw-bold mb-5 text-center">Projects</h2>

      <div class="row justify-content-center g-4">
        <div class="col-lg-10">
          <!-- PROJECT 1 -->
          <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 project-card">
            <div class="d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <h5 class="fw-bold mb-1">City Super App – Smart City Platform</h5>
                <p class="text-muted mb-2">PT Citi Asia Internasional • Full-Stack Developer Intern</p>
              </div>
              <span class="badge bg-primary-subtle text-primary fw-semibold"> Aug 2025 – Dec 2025 </span>
            </div>

            <p class="mt-3">Contributed to the development of an integrated smart city platform designed to support digital public services. Involved in backend development, API integration, and frontend implementation.</p>

            <ul class="ps-3 mb-3">
              <li>Developed backend features using <strong>Laravel</strong></li>
              <li>Integrated frontend with backend using <strong>Vue.js</strong></li>
              <li>Implemented <strong>REST APIs</strong> for authentication and user management</li>
              <li>Performed functional testing, debugging, and performance optimization</li>
              <li>Collaborated in a cross-functional development team and wrote technical documentation</li>
            </ul>

            <div class="tech-stack d-flex flex-wrap gap-3 mt-3">
              <!-- Laravel -->
              <div class="tech-item" title="Laravel">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
                  <path
                    fill="#ff5252"
                    d="M31.963 9.12c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a2 2 0 0 0-.162-.205a1 1 0 0 0-.088-.072a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a.7.7 0 0 0-.187.191a1 1 0 0 0-.064.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085a1 1 0 0 0-.037.265v5.382l-4 2V5.385a1 1 0 0 0-.037-.265c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a1 1 0 0 0-.063-.086a.7.7 0 0 0-.187-.191a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a1 1 0 0 0-.088.072a1 1 0 0 0-.1.119a1 1 0 0 0-.063.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085A1 1 0 0 0 0 5.385v19a1 1 0 0 0 .553.894l6 3l6 3c.014.007.03.005.046.011a.9.9 0 0 0 .802 0c.015-.006.032-.004.046-.01l12-6a1 1 0 0 0 .553-.895v-5.382l5.447-2.724a1 1 0 0 0 .553-.894v-6a1 1 0 0 0-.037-.265M9.236 21.385l4.211-2.106h.001L19 16.503l3.764 1.882L13 23.267ZM24 13.003v3.764l-4-2v-3.764Zm1-5.5l3.764 1.882L25 11.267l-3.764-1.882ZM8 19.767V9.003l4-2v10.764ZM7 3.503l3.764 1.882L7 7.267L3.236 5.385Zm-5 3.5l4 2v16.764l-4-2Zm6 16l4 2v3.764l-4-2Zm16 .764l-10 5v-3.764l10-5Zm6-9l-4 2v-3.764l4-2Z"
                  />
                </svg>
                <span>Laravel</span>
              </div>

              <!-- Vue -->
              <div class="tech-item" title="Vue.js">
                <svg viewBox="0 0 261.76 226.69">
                  <path fill="#41B883" d="M161.1 0l-30.38 52.66L100.34 0H0l130.72 226.69L261.76 0z" />
                  <path fill="#35495E" d="M161.1 0l-30.38 52.66L100.34 0H52.2l78.52 136.23L209.24 0z" />
                </svg>
                <span>Vue.js</span>
              </div>

              <!-- MySQL -->
              <div class="tech-item" title="MySQL">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="#6b92e2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M40.764 11.363c0 3.32-7.448 5.977-16.764 5.977S7.236 14.684 7.236 11.363C7.502 8.166 14.826 5.5 23.867 5.5c9.184 0 16.631 2.656 16.897 5.863M7.236 36.627V11.354m33.528 8.52c0 3.32-7.448 5.986-16.764 5.986S7.236 23.203 7.236 19.883m33.528 8.244c0 3.32-7.447 5.977-16.764 5.977S7.236 31.448 7.236 28.127m33.528 8.51c0 3.197-7.447 5.863-16.764 5.863S7.237 39.834 7.237 36.637m33.527 0V11.354"
                    stroke-width="1"
                  />
                </svg>
                <span>MySQL</span>
              </div>

              <!-- REST API -->
              <div class="tech-item" title="REST API">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
                  <path fill="#6b92e2" d="M8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm18-5h3v10h-3v2h8v-2h-3V11h3V9h-8zm-8 12h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4z" />
                </svg>
                <span>REST API</span>
              </div>
            </div>

            <!-- PROJECT DOCUMENTATION -->
            <div class="mt-4">
              <h6 class="fw-semibold mb-3 text-center text-muted text-uppercase">Project Documentation</h6>

              <div class="row g-3 justify-content-center">
                <div class="col-md-4 col-6">
                  <div class="doc-image">
                    <img src="@/assets/docs/image.png" alt="Dashboard" class="img-fluid rounded-3" />
                  </div>
                </div>

                <div class="col-md-4 col-6">
                  <div class="doc-image">
                    <img src="@/assets/docs/image2.png" alt="User Management" class="img-fluid rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PROJECT 2 -->
          <div class="card border-0 shadow-sm rounded-4 p-4 project-card">
            <div class="d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <h5 class="fw-bold mb-1">Web-Based Tourism Booking Application</h5>
                <p class="text-muted mb-2">Academic Project</p>
              </div>
              <span class="badge bg-secondary-subtle text-secondary fw-semibold"> Jan 2025 – Mar 2025 </span>
            </div>

            <p class="mt-3">Developed a web-based tourism booking application that allows users to view destination details and submit booking requests, with a simple admin panel for management purposes.</p>

            <ul class="ps-3 mb-3">
              <li>Built the application using <strong>PHP (Native)</strong> and <strong>MySQL</strong></li>
              <li>Implemented booking forms and destination detail pages</li>
              <li>Developed a basic admin panel for managing bookings</li>
              <li>Applied responsive UI design using <strong>Bootstrap</strong></li>
            </ul>

            <div class="tech-stack d-flex flex-wrap gap-3 mt-3">
              <!-- PHP -->
              <div class="tech-item" title="PHP">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128">
                  <path fill="url(#SVGC9rnueOH)" d="M0 64c0 18.593 28.654 33.667 64 33.667S128 82.593 128 64S99.345 30.333 64 30.333S0 45.407 0 64" />
                  <path fill="#777bb3" d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167c0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167" />
                  <path
                    d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53c1.306-1.006 2.207-2.747 2.68-5.175c.44-2.27.272-3.854-.5-4.71c-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585c2.088 2.39 2.734 5.734 1.917 9.935c-.333 1.711-.905 3.3-1.7 4.724a15.8 15.8 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083c-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z"
                  />
                  <path
                    fill="#fff"
                    d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089c.607.674.723 2.097.331 4.112c-.439 2.257-1.253 3.858-2.42 4.756c-1.194.92-3.138 1.386-5.773 1.386h-2.786zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944c1.977-.642 3.796-1.731 5.406-3.237a16.5 16.5 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931c.86-4.423.161-7.964-2.076-10.524c-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471q4.445.001 6.62-1.675q2.175-1.674 2.938-5.591q.728-3.762-.665-5.308q-1.395-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445q6.378 0 9.303 3.348t1.76 9.346q-.482 2.472-1.625 4.518q-1.145 2.048-2.991 3.747q-2.2 2.06-4.892 2.935q-2.691.876-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739z"
                  />
                  <path
                    d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87c-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321c1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56z"
                  />
                  <path
                    fill="#fff"
                    d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484c.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217c-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655m0 1.39l-1.743 8.968h6.496q6.131 0 8.457 2.14q2.328 2.138 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928q.495-2.547-.365-3.474q-.86-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z"
                  />
                  <path
                    d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53c1.304-1.006 2.206-2.747 2.679-5.175c.44-2.27.273-3.854-.5-4.71c-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585c2.089 2.39 2.734 5.734 1.917 9.935a15.9 15.9 0 0 1-1.699 4.724a15.8 15.8 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083c-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z"
                  />
                  <path
                    fill="#fff"
                    d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089c.61.674.724 2.097.333 4.112c-.44 2.257-1.254 3.858-2.421 4.756c-1.195.92-3.139 1.386-5.773 1.386h-2.786zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944c1.978-.642 3.797-1.731 5.408-3.238a16.5 16.5 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931c.86-4.423.162-7.964-2.076-10.524c-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47q4.445.001 6.622-1.675q2.175-1.674 2.936-5.591q.731-3.762-.665-5.308t-5.583-1.546h-5.035Zm10.563-19.445q6.378 0 9.303 3.348t1.759 9.346q-.48 2.472-1.624 4.518q-1.144 2.048-2.992 3.747q-2.2 2.06-4.892 2.935q-2.69.876-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133"
                  />
                  <defs>
                    <radialGradient id="SVGC9rnueOH" cx="0" cy="0" r="1" gradientTransform="translate(38.426 42.169)scale(84.04136)" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#aeb2d5" />
                      <stop offset=".3" stop-color="#aeb2d5" />
                      <stop offset=".75" stop-color="#484c89" />
                      <stop offset="1" stop-color="#484c89" />
                    </radialGradient>
                  </defs>
                </svg>
                <span>PHP</span>
              </div>

              <!-- MySQL -->
              <div class="tech-item" title="MySQL">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="#4479A1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M40.764 11.363c0 3.32-7.448 5.977-16.764 5.977S7.236 14.684 7.236 11.363
           C7.502 8.166 14.826 5.5 23.867 5.5c9.184 0 16.631 2.656 16.897 5.863
           M7.236 36.627V11.354
           m33.528 8.52c0 3.32-7.448 5.986-16.764 5.986S7.236 23.203 7.236 19.883
           m33.528 8.244c0 3.32-7.447 5.977-16.764 5.977S7.236 31.448 7.236 28.127
           m33.528 8.51c0 3.197-7.447 5.863-16.764 5.863S7.237 39.834 7.237 36.637
           m33.527 0V11.354"
                  />
                </svg>
                <span>MySQL</span>
              </div>

              <!-- Bootstrap -->
              <div class="tech-item" title="Bootstrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128">
                  <defs>
                    <linearGradient id="SVGog8GhbrR" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613)scale(.24566)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#9013fe" />
                      <stop offset="1" stop-color="#6610f2" />
                    </linearGradient>
                    <linearGradient id="SVGgmyambZz" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#f1e5fc" />
                    </linearGradient>
                    <filter id="SVGljEujZNk" width="197" height="249" x="161.9" y="135.46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>
                  <path
                    fill="url(#SVGog8GhbrR)"
                    d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
                  />
                  <path
                    fill="url(#SVGgmyambZz)"
                    d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
                    filter="url(#SVGljEujZNk)"
                    transform="translate(1.494 2.203)scale(.24566)"
                  />
                </svg>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.project-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.tech-stack {
  align-items: center;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 10px;
  background: #f8f9fa;
  transition: all 0.25s ease;
}

.tech-item svg {
  width: 22px;
  height: 22px;
}

.tech-item span {
  font-size: 0.85rem;
  font-weight: 600;
}

.tech-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.doc-image {
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.doc-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.doc-image img:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}
</style>
