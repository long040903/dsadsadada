<template>
  <HeaderComponents />
  <div class="p-4">
      <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div class="flex items-center space-x-2">
                  <label class="text-lg font-bold" for="date">
                      1. Ngày
                  </label>
                  <div class="relative">
                      <input class="bg-gray-800 text-white py-2 px-4 rounded-md" id="date" type="text"
                          value="Hôm Nay 03/03" />
                      <i
                          class="fas fa-calendar-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      </i>
                  </div>
              </div>
              <div class="flex items-center space-x-2">
                  <label class="text-lg font-bold" for="movie">
                      2. Phim
                  </label>
                  <div class="relative">
                      <input class="bg-gray-800 text-white py-2 px-4 rounded-md" id="movie" type="text"
                          value="Chọn Phim" />
                      <i class="fas fa-film absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      </i>
                  </div>
              </div>
              <div class="flex items-center space-x-2">
                  <label class="text-lg font-bold" for="cinema">
                      3. Rạp
                  </label>
                  <div class="relative">
                      <input class="bg-gray-800 text-white py-2 px-4 rounded-md" id="cinema" type="text"
                          value="Chọn Rạp" />
                      <i
                          class="fas fa-map-marker-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      </i>
                  </div>
              </div>
          </div>
          <hr class="border-gray-600 my-4" />
          <div v-for="showtime in showtimes" :key="showtime.showtimeId"  class="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray my-4 py-4">
            
              <div>
                  <img alt="Movie poster for Nhà Gia Tiền" class="w-full rounded-md mb-4" height="600"
                      src="https://storage.googleapis.com/a1aa/image/ko0jsk5Ayd8kx_MahbqtAEMoVYUeol5au8eEL8kLt-I.jpg"
                      width="400" />
                  <div class="text-lg font-bold mb-2">
                    {{ showtime.movie.title }} (T18)
                  </div>
                  <div class="text-sm mb-1">
                    {{ showtime.movie.genre }}
                  </div>
                  <div class="text-sm mb-1">
                    {{ showtime.movie.duration }} min
                  </div>                 
                  <div class="text-sm">
                      T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                  </div>
              </div>
              <div class="col-span-2">
                  <div class="mb-6">
                      <div v-if="showtime.cinema" class="flex justify-between items-start">
                          <div>
                              <div class="text-xl font-bold mb-2">
                                  Cinestar
                              </div>
                              <div class="text-lg font-bold mb-1">
                                {{ showtime.cinema.name }}
                              </div>
                              <div class="text-sm mb-2">
                                {{ showtime.cinema.address }}
                              </div>
                          </div>
                          <div class="grid grid-cols-8 gap-2">
                              <div v-for="time in showtime.showTime" :key="time" class="bg-gray-800 text-white text-center px-4 py-2 rounded-md">
                                  {{ time }}
                              </div>                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div class="container mx-auto py-8">
          <div class="text-center mb-8">
              <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                  XEM TẤT CẢ LỊCH CHIẾU
              </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div class="text-center">
                  <div class="relative">
                      <img alt="Movie poster for ĐẢO CUỒNG SÁT (T18)" class="w-full" height="450"
                          src="https://storage.googleapis.com/a1aa/image/5qm-Dhsrv8kysm1o34a3PsGvscwOVBJ8PsR5Bt42KJY.jpg"
                          width="300" />
                      <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                          20
                      </div>
                      <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                          T18
                      </div>
                  </div>
                  <h3 class="mt-4 font-bold">
                      ĐẢO CUỒNG SÁT (T18)
                  </h3>
                  <div class="flex justify-center mt-2">
                      <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                          ĐẶT VÉ
                      </button>
                      <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                          Xem Trailer
                      </button>
                  </div>
              </div>
              <div class="text-center">
                  <div class="relative">
                      <img alt="Movie poster for NỮ TU BÓNG TỐI (T16)" class="w-full" height="450"
                          src="https://storage.googleapis.com/a1aa/image/UC6i6AYdDspLugWqe-taeElLQ6r4O5g-iq0HPMvB4Tk.jpg"
                          width="300" />
                      <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                          20
                      </div>
                      <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                          T16
                      </div>
                  </div>
                  <h3 class="mt-4 font-bold">
                      NỮ TU BÓNG TỐI (T16)
                  </h3>
                  <div class="flex justify-center mt-2">
                      <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                          ĐẶT VÉ
                      </button>
                      <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                          Xem Trailer
                      </button>
                  </div>
              </div>
              <div class="text-center">
                  <div class="relative">
                      <img alt="Movie poster for VÕ ĐƯỜNG ĐẠI NÁO (T16)" class="w-full" height="450"
                          src="https://storage.googleapis.com/a1aa/image/ziK7Vwdp3fADgTqNvgDM3MmoQVEBCGEIS-cG2kFwjMs.jpg"
                          width="300" />
                      <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                          20
                      </div>
                      <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                          T16
                      </div>
                  </div>
                  <h3 class="mt-4 font-bold">
                      VÕ ĐƯỜNG ĐẠI NÁO (T16)
                  </h3>
                  <div class="flex justify-center mt-2">
                      <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                          ĐẶT VÉ
                      </button>
                      <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                          Xem Trailer
                      </button>
                  </div>
              </div>
              <div class="text-center">
                  <div class="relative">
                      <img alt="Movie poster for CUỘC ĐÀO TẨU TRÊN KHÔNG (T16)" class="w-full" height="450"
                          src="https://storage.googleapis.com/a1aa/image/BZjAV0tHP6YIiLl2LG4-za6CY5cwBKnOOM81RUNki64.jpg"
                          width="300" />
                      <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                          20
                      </div>
                      <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                          T16
                      </div>
                  </div>
                  <h3 class="mt-4 font-bold">
                      CUỘC ĐÀO TẨU TRÊN KHÔNG (T16)
                  </h3>
                  <div class="flex justify-center mt-2">
                      <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                          ĐẶT VÉ
                      </button>
                      <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                          Xem Trailer
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <FooterComponents />
</template>
<script>
import axios from "axios";
import HeaderComponents from "./HeaderComponent.vue";
import FooterComponents from "./FooterComponents.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponents,
    FooterComponents,
  },
  data() {
    return {
      showtimes: [], // Changed this to hold showtimes instead of movies
    };
  },
  mounted() {
    this.getShowtimes(); // Fetch the showtimes data
  },
  methods: {
    async getShowtimes() {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/showtimes"; // Fetch showtimes instead of movies
        const response = await axios.get(apiUrl);

        // If fetching showtimes is successful, store the showtimes in the data property
        if (response.status === 200) {
          const data = response.data?.showtimes;
          this.showtimes = data?.map((s) => {
            return {
              showtimeId: s.showtime_id,
              movieId: s.movie_id,
              cinemaId: s.cinema_id,
              showDate: s.show_date,
              showTime: s.show_time,
              movie: s.Movie ? {
                title: s.Movie.title,
                genre: s.Movie.genre,
                releaseYear: s.Movie.release_year,
                trailerUrl: s.Movie.trailer_url,
                bannerUrl: s.Movie.banner_url,
                director: s.Movie.director,
                cast: s.Movie.cast,
                description: s.Movie.description,
                releaseDate: s.Movie.release_date,
                duration: s.Movie.duration,
              } : null,
              cinema: s.Cinema, // Assuming you want to include cinema details if present
            };
          });
        }

        // Log successful response
        console.log("Get all showtimes successful:", response.data);

      } catch (error) {
        console.error(
          "Get all showtimes error:",
          error.response ? error.response.data : error.message
        );
      }
    },

    goToDetails: function (movieId) {
      this.$router.push({ name: "MovieDetailView", params: { id: movieId } });
    },
    
    viewTrailer: function (url) {
      window.open(url, "_blank");
    },
  },
};

</script>