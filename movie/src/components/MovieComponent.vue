<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div v-for="(movie, index) in uniqueMovies" :key="index">
      <img :alt="`Movie poster for ${movie.title}`" class="w-full rounded-md mb-4"
           :src="movie.banner_url || defaultImage" width="400" height="600" />
      <div class="text-lg font-bold mb-2">{{ movie.title }}</div>
      <div class="text-sm mb-1">{{ movie.genre }}</div>
      <div class="text-sm mb-1">{{ movie.duration }} phút</div>
      <div class="text-sm mb-1">Năm: {{ movie.release_year }}</div>
      <div class="text-sm">
        T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
      </div>
    </div>

    <div class="col-span-2">
      <div v-for="(cinema, index) in uniqueCinemas" :key="index" class="mb-6">
        <div class="flex justify-between items-start">
          <div>
            <div class="text-xl font-bold mb-2">Cinestar</div>
            <div class="text-lg font-bold mb-1">{{ cinema.name }}</div>
            <div class="text-sm mb-2">{{ cinema.address }}</div>
          </div>
          <div class="grid grid-cols-6 gap-2">
            <div v-for="showtime in filterShowtimesByCinema(cinema.cinema_id)" :key="showtime.showtime_id"
                 class="bg-gray-800 text-center py-2 rounded-md">
              {{ formatTime(showtime.show_time) }}
            </div>
          </div>
        </div>
        <hr class="border-gray-600 my-4" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showtimes: [],
      defaultImage: "https://via.placeholder.com/400x600", // Ảnh mặc định nếu không có banner_url
    };
  },
  computed: {
    uniqueMovies() {
      return [...new Map(this.showtimes.map((s) => [s.Movie.movie_id, s.Movie])).values()];
    },
    uniqueCinemas() {
      return [...new Map(this.showtimes.map((s) => [s.Cinema.cinema_id, s.Cinema])).values()];
    },
  },
  methods: {
    async fetchShowtimes() {
      try {
        const response = await axios.get("http://localhost:3000/api/showtimes");
        this.showtimes = response.data; 
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu lịch chiếu:", error);
      }
    },
    filterShowtimesByCinema(cinemaId) {
      return this.showtimes.filter((s) => s.cinema_id === cinemaId);
    },
    formatTime(timeString) {
      return timeString.slice(0, 5); // Chuyển "18:00:00" thành "18:00"
    },
  },
  mounted() {
    this.fetchShowtimes();
  },
};
</script>

<style scoped>
.bg-gray-800 {
  background-color: #333;
  color: white;
}
</style>
