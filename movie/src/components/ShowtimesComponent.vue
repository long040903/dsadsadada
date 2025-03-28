<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const selectedDate = ref("Hôm Nay 03/03");
const selectedMovie = ref("");
const selectedCinema = ref("");
const movies = ref([]);
const cinemas = ref([]);
const schedules = ref([]);

const fetchMovies = async () => {
  try {
    const response = await axios.get("https://api.example.com/movies");
    movies.value = response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
  }
};

const fetchCinemas = async () => {
  try {
    const response = await axios.get("https://api.example.com/cinemas");
    cinemas.value = response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách rạp:", error);
  }
};

const fetchSchedules = async (movieId, cinemaId) => {
  try {
    const response = await axios.get(`https://api.example.com/schedules?movie=${movieId}&cinema=${cinemaId}`);
    schedules.value = response.data;
  } catch (error) {
    console.error("Lỗi khi lấy lịch chiếu:", error);
  }
};

// Gọi API khi component được mount
onMounted(() => {
  fetchMovies();
  fetchCinemas();
});
</script>

<template>
  <HeaderComponents />
  <div class="p-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
        <div class="p-2 border-[#a9a9a9] border rounded-lg">
          <div class="flex justify-between mb-2">
            <label class="text-2xl text-yellow-300">1. Ngày</label>
            <i class="fas fa-calendar-alt text-yellow-300 text-2xl"></i>
          </div>
          <input class="bg-white text-black py-2 px-4 rounded-md w-full font-semibold" v-model="selectedDate" type="text" />
        </div>

        <!-- Dropdown chọn phim -->
        <div class="p-2 border-[#a9a9a9] border rounded-lg col-span-2">
          <div class="flex justify-between mb-2">
            <label class="text-2xl text-yellow-300">2. Phim</label>
            <i class="fas fa-film text-yellow-300 text-2xl"></i>
          </div>
          <select class="bg-white text-black py-2 px-4 rounded-md w-full font-semibold" v-model="selectedMovie" @change="fetchSchedules(selectedMovie, selectedCinema)">
            <option value="" disabled>Chọn Phim</option>
            <option v-for="movie in movies" :key="movie.id" :value="movie.id">{{ movie.title }}</option>
          </select>
        </div>

        <!-- Dropdown chọn rạp -->
        <div class="p-2 border-[#a9a9a9] border rounded-lg">
          <div class="flex justify-between mb-2">
            <label class="text-2xl text-yellow-300">3. Rạp</label>
            <i class="fas fa-map-marker-alt text-yellow-300 text-2xl"></i>
          </div>
          <select class="bg-white text-black py-2 px-4 rounded-md w-full font-semibold" v-model="selectedCinema" @change="fetchSchedules(selectedMovie, selectedCinema)">
            <option value="" disabled>Chọn Rạp</option>
            <option v-for="cinema in cinemas" :key="cinema.id" :value="cinema.id">{{ cinema.name }}</option>
          </select>
        </div>
      </div>

      <hr class="border-gray-600 my-6" />

      <!-- Danh sách lịch chiếu -->
      <div v-if="schedules.length > 0">
        <h3 class="text-lg font-bold mb-2">Lịch chiếu</h3>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="schedule in schedules" :key="schedule.id" class="p-2 border rounded-md text-center">
            <span class="text-yellow-300 font-semibold">{{ schedule.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
