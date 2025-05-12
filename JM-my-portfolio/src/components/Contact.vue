<script>
import emailjs from 'emailjs-com'

export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    }
  },
  methods: {
    handleSubmit() {
      const { name, email, subject, message } = this.form

      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
      }

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // <- reemplaza con tu Public Key
        )
        .then(() => {
          this.form = {
            name: "",
            email: "",
            subject: "",
            message: "",
          }
        })
        .catch((error) => {
          console.error("Error al enviar:", error)
          alert(this.$t('contact.errorSendingMessage'))  // Usamos traducción para el mensaje de error
        })
    }
  }
}
</script>



<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">&lt; {{ $t('contact.title') }} /&gt;</h2> <!-- Traducido aquí -->
    <p class="section-subtitle"><strong>{{ $t('contact.subtitle') }}</strong></p> <!-- Traducido aquí -->
    <p class="section-text">
      {{ $t('contact.description') }}
    </p>

    <div class="contact-container">
      <div class="contact-info">
        <div class="info-box">
          <i class="fas fa-envelope icon"></i>
          <div>
            <h4>{{ $t('contact.email') }}</h4> <!-- Traducido aquí -->
            <p>josemanuelsmryoni@gmail.com</p>
          </div>
        </div>
        <div class="info-box">
          <i class="fas fa-map-marker-alt icon"></i>
          <div>
            <h4>{{ $t('contact.location') }}</h4> <!-- Traducido aquí -->
            <p>Sevilla, España</p>
          </div>
        </div>
        <div class="info-box">
          <h4>{{ $t('contact.connect') }}</h4> <!-- Traducido aquí -->
          <div class="social-icons-contact">
            <a href="https://github.com/josemanueltm/projects-practices-JM" target="_blank"><i
                class="fab fa-github"></i></a>
            <a href="mailto:josemanuelsmryoni@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <h3>{{ $t('contact.sendMessage') }}</h3>
        <div class="form-row">
          <input type="text" v-model="form.name" :placeholder="$t('contact.yourName')" required />
          <input type="email" v-model="form.email" :placeholder="$t('contact.yourEmail')" required />
        </div>
        <input type="text" v-model="form.subject" :placeholder="$t('contact.subject')" required />
        <textarea v-model="form.message" :placeholder="$t('contact.message')" rows="5" required></textarea>
        <button type="submit">{{ $t('contact.sendButton') }}</button>
      </form>

    </div>
  </section>
</template>
