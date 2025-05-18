<script setup>
defineProps({
  weather: Object
})
</script>

<template>
  <div class="weather">
    <h2>{{ weather.name }}, {{ weather.sys.country }}</h2>
    <p>{{ weather.weather[0].description }}</p>
    <p>🌡️ {{ Math.round(weather.main.temp) }}°C</p>
    <p>💨 Viento: {{ weather.wind.speed }} m/s</p>
    <img :src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'" alt="Icono clima" />
  </div>
</template>

<style scoped>
.weather {
  padding: 1rem;
  background-color: #f1f8ff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.weather h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #0077ff;
}

.weather p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.weather img {
  width: 80px;
  margin-top: 10px;
}
</style>
