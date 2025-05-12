<template>
  <section class="section-block about-container" id="about">
    <h3>
      {{ $t('about.title') }}
    </h3>
    <p>{{ $t('about.description') }}</p>
    <div class="button-about-container">
      <button>{{ $t('about.webDeveloper') }}</button>
      <button>{{ $t('about.microcomputerTechnician') }}</button>
      <button>{{ $t('about.gameDeveloper') }}</button>
    </div>
    <div class="cv-container">
      <a href="https://drive.google.com/file/d/14OwENh0twymWtcm-oAUzKr44NXPbi9vq/view?usp=sharing" class="download-btn"
        download>
        <i class="fas fa-download"></i>
        <span>{{ $t('about.downloadCV') }}</span>
      </a>
    </div>
    <div class="social-icons-container">
      <a href="https://www.linkedin.com/in/josemanueltorresmena/" target="_blank" aria-label="LinkedIn"
        class="social-icons">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/josemanueltm/projects-practices-JM" target="_blank" aria-label="GitHub"
        class="social-icons">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>
</template>