<template>
  <HeaderComponents />
  <div class="p-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="flex items-center space-x-2">
          <label class="text-lg font-bold" for="date">1. Ngày</label>
          <div class="relative">
            <select
              class="bg-gray-800 text-white py-2 px-4 rounded-md"
              v-model="selectedDate"
              @change="filterShowtimesByDate"
            >
              <option value="">Chọn ngày</option>
              <option v-for="date in uniqueShowDates" :key="date" :value="date">
                {{ date }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <label class="text-lg font-bold" for="movie">2. Phim</label>
          <div class="relative w-full">
            <select
              class="bg-gray-800 text-white py-2 px-4 rounded-md w-full"
              v-model="selectedMovie"
              @change="fetchCinemasByMovie(selectedMovie)"
            >
              <option value="">Chọn Phim</option>
              <option
                v-for="showtime in filteredShowtimes"
                :key="showtime.showtimeId"
                :value="showtime.movieId"
              >
                {{ showtime.movie ? showtime.movie.title : "Không có phim" }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <label class="text-lg font-bold" for="cinema">3. Rạp</label>
          <div class="relative w-full">
            <p>{{ cinemas }}</p>
            <select
              class="bg-gray-800 text-white py-2 px-4 rounded-md w-full"
              v-model="selectedCinema"
              @change="fetchMoviesByCinema(selectedCinema)"
            >
              <option value="">Chọn Rạp</option>
              <option
                v-for="cinema in cinemas"
                :key="cinema.id"
                :value="cinema.id"
              >
                {{ showtime.cinema ? showtime.cinema.name : "Không có rạp" }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="errorMessage" class="text-red-500 text-center mt-4">
        {{ errorMessage }}
      </div>
      <hr class="border-gray-600 my-4" />
      <div
        v-for="showtime in showtimes"
        :key="showtime.showtimeId"
        class="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray my-4 py-4"
      >
        <div>
          <img
            alt="Movie poster for Nhà Gia Tiền"
            class="w-full rounded-md mb-4"
            height="600"
            src="https://storage.googleapis.com/a1aa/image/ko0jsk5Ayd8kx_MahbqtAEMoVYUeol5au8eEL8kLt-I.jpg"
            width="400"
          />
          <div class="text-lg font-bold mb-2">
            <i class="fas fa-video"></i>
            {{ showtime.movie.title }} (T18)
          </div>
          <div class="text-sm mb-1">
            <i class="fas fa-film"></i>
            {{ showtime.movie.genre }}
          </div>
          <div class="text-sm mb-1">
            <i class="fas fa-clock"></i>
            {{ showtime.movie.duration }} min
          </div>
          <div class="text-sm">
            <i class="fas fa-exclamation-triangle"></i>
            T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
          </div>
        </div>
        <div>
          <div class="overflow-hidden">
            <div class="text-xl font-bold mb-2 text-alight">Cinestar</div>
            <div class="text-lg font-bold mb-1 truncate">
              <i class="fas fa-building"></i>
              {{ showtime.cinema.name }}
            </div>
            <div class="text-sm mb-2 truncate">
              <i class="fas fa-map-marker-alt"></i>
              {{ showtime.cinema.address }}
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex flex-wrap gap-2 p-2 border border-gray-400 rounded-md bg-gray-800 text-white text-sm shadow-sm"
          >
            <div
              v-for="time in showtime.showTime"
              :key="time"
              class="inline-flex items-center justify-center px-3 py-1 border border-gray-500 rounded-md max-w-max"
            >
              {{ formatTime(time) }}
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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 container mx-auto max-w-7xl">
        <div class="text-center" v-for="movie in allMovies" :key="movie.id">
          <div class="relative">
            <img
              :alt="movie.title"
              class="w-full h-[450px] object-cover"
              :src="movie.bannerUrl"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1"
            >
              20
            </div>
            <div
              class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1"
            >
              T18
            </div>
          </div>
          <h3 class="mt-4 font-bold">{{ movie.title }}</h3>
          <div class="flex justify-center mt-2">
            <button
              @click="goToDetails(movie.movieId)"
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2"
            >
              ĐẶT VÉ
            </button>
            <button
              @click="viewTrailer(movie.trailerUrl)"
              class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2"
            >
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
  name: "ShowtimesComponent",
  components: {
    HeaderComponents,
    FooterComponents,
  },
  data() {
    return {
      showtimes: [],
      selectedDate: "",
      selectedMovie: "",
      selectedCinema: "",
      movies: [],
      cinemas: [],
      errorMessage: "",
      isLoading: false,
      uniqueShowDates: [],
      filteredShowtimes: [],
      allMovies: [],
    };
  },
  mounted() {
    this.getShowtimes();
    this.getAllMovies();
  },

  methods: {
    async getAllMovies() {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/movies";
        const response = await axios.get(apiUrl);

        // If get movie is successful, store token in cookies
        if (response.status === 200) {
          const data = response.data?.movies;
          this.allMovies = data?.map((m) => {
            return {
              movieId: m.movie_id,
              title: m.title,
              genre: m.genre,
              releaseYear: m.release_date,
              trailerUrl: m.trailer_url,
              bannerUrl: m.banner_url,
              director: m.director,
              cast: m.cast,
              description: m.description,
              releaseDate: m.release_date,
              duration: m.duration,
              content: m.content,
            };
          });
        }

        // Show success message
        console.log("Get all movies successful:", response.data);
      } catch (error) {
        console.error(
          "Get all movies error:",
          error.response ? error.response.data : error.message
        );
      }
    },

    goToDetails(movieId) {
      this.$router.push({ name: "MovieDetailView", params: { id: movieId } });
    },

    // 🟢 Xem trailer
    viewTrailer(url) {
      window.open(url, "_blank");
    },

    async getShowtimes() {
      try {
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          const data = response.data?.showtimes || [];

          // Nhóm showtimes theo movie + cinema + show_date
          const grouped = {};

          data.forEach((s) => {
            const key = `${s.movie_id}_${s.cinema_id}_${s.show_date}`;

            if (!grouped[key]) {
              grouped[key] = {
                showtimeId: s.showtime_id, // có thể dùng cái đầu tiên làm id
                movieId: s.movie_id,
                cinemaId: s.cinema_id,
                showDate: s.show_date,
                showTime: new Set([s.show_time]), // Sử dụng Set để loại bỏ giờ trùng
                movie: s.Movie
                  ? {
                      id: s.Movie.movie_id,
                      title: s.Movie.title,
                      genre: s.Movie.genre,
                      duration: s.Movie.duration,
                    }
                  : null,
                cinema: s.Cinema
                  ? {
                      id: s.Cinema.cinema_id,
                      name: s.Cinema.name,
                      address: s.Cinema.address,
                    }
                  : null,
              };
            } else {
              grouped[key].showTime.add(s.show_time); // Thêm giờ vào Set để loại bỏ trùng
            }
          });

          // Chuyển Set thành mảng lại để hiển thị
          this.showtimes = Object.values(grouped).map((showtime) => ({
            ...showtime,
            showTime: [...showtime.showTime], // Chuyển Set thành mảng
          }));

          // Lấy danh sách ngày duy nhất
          const uniqueDates = [
            ...new Set(this.showtimes.map((s) => s.showDate)),
          ];
          this.uniqueShowDates = uniqueDates.map((date) =>
            this.formatDate(date)
          );

          // Lọc theo ngày nếu đã chọn
          if (this.selectedDate) {
            this.filterShowtimesByDate();
          }
        }
      } catch (error) {
        console.error(
          "❌ Lỗi khi tải lịch chiếu:",
          error.response?.data || error.message
        );
      }
    },
    filterShowtimesByDate() {
      if (this.selectedDate) {
        // Lọc các lịch chiếu theo ngày đã chọn
        this.filteredShowtimes = this.showtimes.filter(
          (showtime) => showtime.showDate === this.selectedDate
        );

        // Cập nhật lại danh sách phim và rạp cho ngày đã chọn
        this.fetchMoviesAndCinemasForSelectedDate();
      }
    },
    fetchMoviesAndCinemasForSelectedDate() {
      // Lọc các bộ phim từ filteredShowtimes
      this.movies = this.filteredShowtimes
        .map((showtime) => showtime.movie)
        .filter(
          (movie, index, self) =>
            self.findIndex((m) => m.id === movie.id) === index
        ); // Loại bỏ trùng lặp

      // Lọc các rạp từ filteredShowtimes
      this.cinemas = this.filteredShowtimes
        .map((showtime) => showtime.cinema)
        .filter(
          (cinema, index, self) =>
            self.findIndex((c) => c.id === cinema.id) === index
        ); // Loại bỏ trùng lặp

      // Hiển thị thông báo lỗi nếu không có phim hoặc rạp
      this.errorMessage = this.movies.length
        ? ""
        : "Không có phim nào vào ngày này!";
      this.errorMessage = this.cinemas.length
        ? ""
        : "Không có rạp chiếu vào ngày này!";
    },

    async fetchCinemasByMovie(movieId) {
      try {
        this.selectedCinema = "";
        this.cinemas = []; // Reset rạp và phim hiển thị

        if (!movieId) {
          this.errorMessage = "Vui lòng chọn phim!";
          return;
        }

        // Lọc danh sách rạp có chiếu phim đó trong ngày đã chọn
        this.cinemas = this.filteredShowtimes
          .filter((s) => s.movieId === movieId && s.cinema) // Lọc đúng movieId
          .map((s) => s.cinema);

        // Loại bỏ trùng lặp
        this.cinemas = [
          ...new Map(this.cinemas.map((c) => [c.id, c])).values(),
        ];

        this.errorMessage = this.cinemas.length
          ? ""
          : "Không có rạp nào chiếu phim này!";
      } catch (error) {
        this.errorMessage = "Lỗi khi tải danh sách rạp!";
      }
    },

    async fetchMoviesByCinema(cinemaId) {
      try {
        this.selectedMovie = ""; // Reset chọn phim khi chọn rạp mới
        this.movies = []; // Reset danh sách phim hiển thị

        if (!cinemaId) {
          this.errorMessage = "Vui lòng chọn rạp!";
          return;
        }

        // Lọc danh sách phim có trong rạp vào ngày đã chọn
        this.movies = this.filteredShowtimes
          .filter((s) => s.cinemaId === cinemaId && s.movie)
          .map((s) => s.movie);

        // Loại bỏ trùng lặp
        this.movies = [...new Map(this.movies.map((m) => [m.id, m])).values()];

        this.errorMessage = this.movies.length
          ? ""
          : "Không có phim nào trong rạp này!";
      } catch (error) {
        this.errorMessage = "Lỗi khi tải danh sách phim!";
      }
    },
    formatTime(time) {
      if (!time) return "";
      const [hour, minute] = time.split(":");
      return `${hour}:${minute}`;
    },

    formatDate(dateString) {
      if (!dateString) return "";
      const [year, month, day] = dateString.split("-");
      return `${day}/${month}/${year}`;
    },
  },
};
</script>