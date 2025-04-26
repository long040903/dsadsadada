<template>
    <HeaderComponents />
    <div class="px-9">
  <main class="p-4">
    

    <div
      class="mt-4 flex justify-center items-center space-x-4 bg-white py-4 font-bold"
    >
      <span class="bg-white text-black px-4 py-2 rounded text-2xl"
        >ĐẶT VÉ NHANH</span
      >

      <!-- Chọn rạp -->
      <select
        v-model="selectedCinema"
        @change="onCinemaChange"
        class="bg-white text-black px-2 py-1 text-sm rounded-md border border-gray-300"
      >
        <option value="">Chọn Rạp</option>
        <option
          v-for="cinema in cinemas"
          :value="cinema.cinema_id"
          :key="cinema.cinema_id"
        >
          {{ cinema.name }}
        </option>
      </select>

      <!-- Chọn phim -->
      <select
        v-model="selectedMovie"
        @change="onMovieChange"
        :disabled="!selectedCinema"
        class="bg-white text-black px-2 py-1 text-sm rounded-md border border-gray-300"
      >
        <option value="">Chọn Phim</option>
        <option
          v-for="movie in filteredMovies"
          :value="movie.movie_id"
          :key="movie.movie_id"
        >
          {{ movie.title }} ({{ movie.duration }} phút)
        </option>
      </select>

      <!-- Chọn ngày -->
      <select
        v-model="selectedDate"
        @change="onDateChange"
        :disabled="!selectedMovie"
        class="bg-white text-black px-2 py-1 text-sm rounded-md border border-gray-300"
      >
        <option value="">Chọn Ngày</option>
        <option v-for="date in availableDates" :value="date" :key="date">
          {{ formatDate(date) }}
        </option>
      </select>

      <!-- Chọn suất -->
      <select
        v-model="selectedTime"
        :disabled="!selectedDate"
        class="bg-white text-black px-2 py-1 text-sm rounded-md border border-gray-300"
      >
        <option value="">Chọn Suất</option>
        <option
          v-for="time in availableTimes"
          :value="time.showtime_id"
          :key="time.showtime_id"
        >
          {{ formatTime(time.show_time) }}
        </option>
      </select>

      <button
        @click="bookTicketQuick"
        :disabled="!selectedTime"
        class="bg-purple-600 text-white text-sm px-3 py-1 rounded w-fit h-fit"
      >
        ĐẶT NGAY
      </button>
    </div>
  </main>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
    <h2 class="mt-8 text-center text-2xl font-bold">PHIM ĐANG CHIẾU</h2>
    <div class="container w-[80%] mx-auto py-8">
      <div class="flex justify-center space-x-6">
        <div
          v-for="movie in movies"
          :key="movie.movie_id"
          class="relative flex-1"
        >
          <img
            :alt="movie.title"
            class="w-full h-[423px] object-cover"
            :src="movie.bannerUrl"
          />
          <div
            class="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-xs"
          >
            2D
          </div>
          <div
            class="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs"
          >
            T18
          </div>
          <div
            class="absolute hidden inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-yellow-400"
          >
            <h3 class="text-lg font-bold">{{ movie.title }}</h3>
            <ul class="text-sm space-y-1">
              <li><i class="fas fa-film"></i> {{ movie.genre }}</li>
              <li><i class="fas fa-clock"></i> {{ movie.duration }}'</li>
              <li><i class="fas fa-globe"></i> Việt Nam</li>
              <li><i class="fas fa-map-marker-alt"></i> VN</li>
            </ul>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-lg font-semibold tracking-wider uppercase">
              {{ movie.title }}
            </h3>
            <div class="flex justify-between space-x-4 mt-2">
              <button
                class="bg-yellow-500 text-black px-4 py-2 rounded flex-1"
                @click="viewTrailer(movie)"
              >
                Xem Trailer
              </button>
              <button
                class="bg-yellow-500 text-black px-4 py-2 rounded flex-1"
                @click="bookTicket(movie.movieId)"
              >
                Đặt Vé
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-4 space-x-2">
        <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
      <div class="flex justify-center mt-4">
        <button
          class="bg-yellow-500 text-black px-6 py-2 rounded"
          @click="goToMovieList"
        >
          XEM THÊM
        </button>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-center text-3xl font-bold mb-8">PHIM SẮP CHIẾU</h1>
    <div class="flex justify-center space-x-4 overflow-x-auto">
      <!-- Movie 1 -->
      <div
        class="w-80 bg-gray-800 rounded-lg shadow-lg"
        v-for="movie in movies"
        :key="movie.id"
      >
        <div class="relative">
          <img
            :alt="movie.title"
            class="rounded-t-lg h-[384px] w-full object-cover"
            :src="movie.bannerUrl"
          />
          <div
            class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1 rounded"
          >
            20
          </div>
          <div
            class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1 rounded"
          >
            P
          </div>
        </div>
        <div class="p-4">
          <p class="text-center">Khởi chiếu: {{ movie.releaseDate }}</p>
          <h2 class="text-center font-bold">{{ movie.title }}</h2>
          <div class="flex justify-center mt-4 space-x-2">
            <button
              class="bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-2 px-4 rounded-full flex items-center whitespace-nowrap"
              @click="viewTrailer(movie)"
            >
              <i class="fas fa-play-circle mr-2"> </i>
              Xem Trailer
            </button>
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full flex items-center whitespace-nowrap"
              @click="bookTicket(movie.movieId)"
            >
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <button
        class="bg-yellow-500 text-black font-bold py-2 px-8 rounded-full"
        @click="goToMovieList"
      >
        XEM THÊM
      </button>
    </div>
  </div>
</div>
    <FooterComponents />
  </template>
  <script>
  import axios from "axios";
  import { toast } from "vue3-toastify";
  import HeaderComponents from "./HeaderComponent.vue";
  import FooterComponents from "./FooterComponents.vue";
  
  export default {
    name: "datvengayComponent",
    components: {
      HeaderComponents,
      FooterComponents,
    },
    data() {
      return {
        cinemas: [],
        movies: [],
        selectedCinema: "",
        filteredMovies: [],
        selectedMovie: "",
        availableDates: [],
        selectedDate: "",
        availableTimes: [],
        selectedTime: "",
      };
    },
    async mounted() {
      await this.fetchCinemas();
      await this.getAllMovies();
    },
    methods: {
      // Lấy danh sách tất cả rạp chiếu
      async fetchCinemas() {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/cinemas`
          );
          this.cinemas = response.data;
        } catch (error) {
          console.error("Error fetching cinemas:", error);
          toast.error("Không thể tải danh sách rạp chiếu");
        }
      },
  
      // Xử lý khi chọn rạp
      async onCinemaChange() {
        this.resetSelection();
  
        if (!this.selectedCinema) return;
  
        try {
          // Gọi API lấy showtimes theo cinema_id
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`,
            {
              params: {
                cinema_id: this.selectedCinema,
              },
            }
          );
  
          // Kiểm tra cấu trúc dữ liệu trả về
          const showtimes = this.normalizeShowtimesData(response.data);
  
          // Lọc danh sách phim duy nhất đang chiếu tại rạp này
          this.filteredMovies = this.getUniqueMoviesFromShowtimes(showtimes);
  
          console.log("Movies at selected cinema:", this.filteredMovies);
        } catch (error) {
          console.error("Error fetching cinema movies:", error);
          toast.error("Không thể tải danh sách phim theo rạp");
        }
      },
  
      // Xử lý khi chọn phim
      async onMovieChange() {
        this.resetTimeSelection(); // Reset các lựa chọn về thời gian
  
        if (!this.selectedCinema || !this.selectedMovie) {
          this.availableDates = [];
          return;
        }
  
        try {
          // Gọi API lấy showtimes theo cinema_id và movie_id
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`,
            {
              params: {
                cinema_id: this.selectedCinema,
                movie_id: this.selectedMovie,
              },
            }
          );
  
          // Chuẩn hóa dữ liệu trả về
          const showtimes = this.normalizeShowtimesData(response.data);
  
          // Lọc và sắp xếp các ngày chiếu
          this.availableDates = this.processAvailableDates(showtimes);
  
          console.log("Available dates:", this.availableDates);
        } catch (error) {
          console.error("Error fetching available dates:", error);
          toast.error("Không thể tải danh sách ngày chiếu");
          this.availableDates = [];
        }
      },
  
      // Helper method để xử lý danh sách ngày chiếu
      processAvailableDates(showtimes) {
        // Lọc showtimes hợp lệ
        const validShowtimes = showtimes.filter(
          (st) =>
            st.cinema_id == this.selectedCinema &&
            st.movie_id == this.selectedMovie &&
            st.show_date
        );
  
        // Trích xuất các ngày duy nhất
        const uniqueDates = [
          ...new Set(validShowtimes.map((st) => st.show_date)),
        ];
  
        // Sắp xếp ngày từ sớm nhất đến muộn nhất
        return uniqueDates.sort((a, b) => new Date(a) - new Date(b));
      },
      normalizeShowtimesData(data) {
        // Xử lý nhiều định dạng response khác nhau
        if (Array.isArray(data)) {
          return data; // Nếu data đã là mảng
        }
  
        if (data && typeof data === "object") {
          // Thử các key thông dụng
          return data.data || data.showtimes || data.results || [];
        }
  
        return []; // Mặc định trả về mảng rỗng
      },
      resetTimeSelection() {
        this.selectedDate = null;
        this.selectedTime = null;
        this.availableDates = [];
        this.availableTimes = [];
      },
  
      // Xử lý khi chọn ngày
      async onDateChange() {
        this.selectedTime = null;
        this.availableTimes = [];
  
        if (!this.selectedCinema || !this.selectedMovie || !this.selectedDate)
          return;
  
        try {
          // Gọi API lấy showtimes theo cinema_id, movie_id và ngày
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`,
            {
              params: {
                cinema_id: this.selectedCinema,
                movie_id: this.selectedMovie,
                show_date: this.selectedDate,
              },
            }
          );
  
          const showtimes = this.normalizeShowtimesData(response.data);
          this.availableTimes = this.formatShowtimesForDisplay(showtimes);
        } catch (error) {
          console.error("Error fetching showtimes:", error);
          toast.error("Không thể tải danh sách suất chiếu");
        }
      },
  
      async getAllMovies() {
        try {
          const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/movies";
          const response = await axios.get(apiUrl);
  
          // If get movie is successful, store token in cookies
          if (response.status === 200) {
            const data = response.data?.movies;
            this.movies = data?.map((m) => {
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
  
      // Helper methods
      resetSelection() {
        this.selectedMovie = null;
        this.selectedDate = null;
        this.selectedTime = null;
        this.filteredMovies = [];
        this.availableDates = [];
        this.availableTimes = [];
      },
  
      resetTimeSelection() {
        this.selectedDate = null;
        this.selectedTime = null;
        this.availableDates = [];
        this.availableTimes = [];
      },
  
      // Chuẩn hóa dữ liệu showtimes từ API
      normalizeShowtimesData(data) {
        // Xử lý nhiều định dạng response khác nhau
        const rawData = data?.data || data?.showtimes || data?.results || data;
        return Array.isArray(rawData) ? rawData : [];
      },
  
      // Lọc danh sách phim duy nhất từ showtimes
      getUniqueMoviesFromShowtimes(showtimes) {
        const movieMap = new Map();
  
        showtimes.forEach((showtime) => {
          // Chỉ lấy phim thuộc rạp đã chọn
          if (
            showtime.cinema_id == this.selectedCinema &&
            showtime.movie_id &&
            showtime.Movie &&
            !movieMap.has(showtime.movie_id)
          ) {
            movieMap.set(showtime.movie_id, {
              movie_id: showtime.movie_id,
              title: showtime.Movie.title,
              duration: showtime.Movie.duration,
              banner_url: showtime.Movie.banner_url,
            });
          }
        });
  
        return Array.from(movieMap.values());
      },
  
      // Lọc danh sách ngày duy nhất từ showtimes
      getUniqueDatesFromShowtimes(showtimes) {
        const dates = showtimes
          .filter(
            (st) =>
              st.cinema_id == this.selectedCinema &&
              st.movie_id == this.selectedMovie
          )
          .map((st) => st.show_date);
  
        return [...new Set(dates)].sort();
      },
  
      // Format danh sách suất chiếu
      formatShowtimesForDisplay(showtimes) {
        // Lọc showtimes hợp lệ
        const validShowtimes = showtimes.filter(
          (st) =>
            st.cinema_id == this.selectedCinema &&
            st.movie_id == this.selectedMovie &&
            st.show_date == this.selectedDate
        );
  
        // Tạo map để loại bỏ trùng giờ
        const timeMap = new Map();
  
        validShowtimes.forEach((st) => {
          // Lấy chỉ giờ:phút (bỏ qua giây) để so sánh
          const timeKey = st.show_time.substring(0, 5);
  
          if (!timeMap.has(timeKey)) {
            timeMap.set(timeKey, {
              showtime_id: st.showtime_id,
              show_time: st.show_time,
              movie_id: st.movie_id,
              cinema_id: st.cinema_id,
              // Giữ nguyên các thông tin khác nếu cần
              ...st,
            });
          }
        });
  
        // Chuyển map thành mảng và sắp xếp
        return Array.from(timeMap.values()).sort((a, b) =>
          a.show_time.localeCompare(b.show_time)
        );
      },
  
      // Định dạng ngày tháng
      formatDate(dateString) {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("vi-VN", options);
      },
      formatTime(timeString) {
        return timeString.substring(0, 5); // Chỉ hiển thị giờ:phút
      },
  
      // Xử lý đặt vé
      bookTicketQuick() {
        if (!this.selectedTime) {
          toast.error("Vui lòng chọn đầy đủ thông tin");
          return;
        }
  
        const selectedShowtime = this.availableTimes.find(
          (time) => time.showtime_id === this.selectedTime
        );
  
        if (selectedShowtime?.movie_id) {
          this.$router.push({
            name: "MovieDetailView",
            params: { id: selectedShowtime.movie_id },
            query: {
              showtime_id: this.selectedTime,
              cinema_id: this.selectedCinema,
              show_date: this.selectedDate,
            },
          });
        } else {
          toast.error("Không tìm thấy thông tin phim");
        }
      },
      viewTrailer(movie) {
        if (movie.trailerUrl) {
          // Mở trailer, có thể mở trong một cửa sổ mới hoặc dùng iframe
          window.open(movie.trailerUrl, "_blank");
        } else {
          toast.error("Không có trailer cho phim này!");
        }
      },
      bookTicket(movieId) {
        if (!movieId) {
          console.error("Không có movieId");
          return;
        }
        this.$router.push({ name: "MovieDetailView", params: { id: movieId } });
      },
      goToMovieList() {
        this.$router.push("/movie");
      },
    },
  };
  </script>