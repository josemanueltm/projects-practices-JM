<script setup>
import { ref } from 'vue'
import WeatherForm from './components/WeatherForm.vue'
import WeatherResult from './components/WeatherResult.vue'

const apiKey = '99d7dc568798d27e4f614cfb468aeb09'
const units = 'metric'
const lang = 'es'

const weather = ref(null)

async function getLatLon(city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()

  if (!data.length) {
    throw new Error('Ciudad no encontrada')
  }

  return {
    lat: data[0].lat,
    lon: data[0].lon
  }
}

async function getWeather(city) {
  try {
    const { lat, lon } = await getLatLon(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`
    const res = await fetch(url)
    const data = await res.json()

    if (res.ok) {
      weather.value = data
    } else {
      alert(data.message)
    }
  } catch (error) {
    alert('Error al obtener el clima: ' + error.message)
  }
}
</script>

<template>
  <div class="container">
    <h1>🌤️ Clima en tu ciudad</h1>
    <WeatherForm @search-weather="getWeather" />
    <WeatherResult :weather="weather" v-if="weather" />
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 40px;
}

.container {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
}
</style>
