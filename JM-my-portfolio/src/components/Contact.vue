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
          alert("Hubo un error al enviar el mensaje.")
        })
    }
  }
}
</script>



<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">&lt; Contacto /&gt;</h2>
    <p class="section-subtitle"><strong>¿Interesado en trabajar juntos?</strong></p>
    <p class="section-text">
      Estoy disponible para proyectos freelance, oportunidades de empleo o simplemente para conversar sobre desarrollo
      web. ¡Contáctame!
    </p>

    <div class="contact-container">
      <div class="contact-info">
        <div class="info-box">
          <i class="fas fa-envelope icon"></i>
          <div>
            <h4>Email</h4>
            <p>josemanuelsmryoni@gmail.com</p>
          </div>
        </div>
        <div class="info-box">
          <i class="fas fa-map-marker-alt icon"></i>
          <div>
            <h4>Ubicación</h4>
            <p>Sevilla, España</p>
          </div>
        </div>
        <div class="info-box">
          <h4>Conéctate conmigo</h4>
          <div class=" social-icons-contact">

            <a href="https://github.com/josemanueltm/projects-practices-JM" target="_blank"><i
                class="fab fa-github"></i></a>
            <a href="mailto:josemanuelsmryoni@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>


      <form class="contact-form" @submit.prevent="handleSubmit">
        <h3>Envíame un mensaje</h3>
        <div class="form-row">
          <input type="text" v-model="form.name" placeholder="Tu nombre" required />
          <input type="email" v-model="form.email" placeholder="tu@email.com" required />
        </div>
        <input type="text" v-model="form.subject" placeholder="Asunto de tu mensaje" required />
        <textarea v-model="form.message" placeholder="Escribe tu mensaje aquí..." rows="5" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  </section>
</template>