<template>
  <HeaderComponents />
  <div class="p-4">
    <div class="mx-40 p-4 rounded-lg" v-if="movie">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-5">
          <div class="relative">
            <img
              :alt="'Movie poster for ' + movie.title"
              class="rounded-lg w-full"
              :src="movie.banner_url"
            />
            <div
              class="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded"
            >
              {{ movie.rating }}
            </div>
          </div>
        </div>
        <div class="col-span-7 mt-4 md:mt-0 space-y-8">
          <h1 class="text-3xl font-bold uppercase">
            {{ movie.title }} ({{ movie.rating }})
          </h1>
          <div class="mt-2 space-y-4">
            <div class="flex items-center text-lg">
              <i class="fas fa-film mr-2"></i>
              {{ movie.genre }}
            </div>
            <div class="flex items-center text-lg">
              <i class="fas fa-clock mr-2"></i>
              {{ movie.duration }}'
            </div>
            <div class="flex items-center text-lg">
              <i class="fas fa-globe mr-2"></i>
              {{ movie.country }}
            </div>
            <div class="flex items-center text-lg">
              <i class="fas fa-flag mr-2"></i>
              {{ movie.language }}
            </div>
            <div
              class="flex items-center text-sm mt-1 bg-yellow-500 text-black px-2 py-1 rounded w-fit"
            >
              <i class="fas fa-exclamation-triangle mr-2"></i>
              {{ movie.rating_description }}
            </div>
          </div>
          <div class="mt-4">
            <h2 class="text-xl font-bold">MÔ TẢ</h2>
            <p class="mt-2">Đạo diễn: {{ movie.director }}</p>
            <p>Diễn viên: {{ movie.actors }}</p>
            <p>Khởi chiếu: {{ movie.release_date }}</p>
          </div>
          <div class="mt-4">
            <h2 class="text-xl font-bold">NỘI DUNG PHIM</h2>
            <p class="mt-2">{{ movie.description }}</p>
            <a
              class="mt-2 text-sm hover:text-yellow-400 inline-block underline"
              href="#"
            >
              Xem thêm
            </a>
          </div>
          <div class="mt-4">
            <a
              class="flex items-cente"
              :href="movie.trailer_url"
              target="_blank"
            >
              <i class="fas fa-play-circle text-3xl mr-2 text-red-500"></i>
              <span class="text-xl underline">Xem Trailer</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lịch chiếu -->
    <div
      class="min-h-screen flex flex-col items-center justify-center"
      v-if="showtimes"
    >
      <div
        class="w-full min-h-screen flex flex-col items-center justify-center text-white"
      >
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-8">LỊCH CHIẾU</h1>
          <div class="flex justify-center space-x-4 mb-8">
            <div
              v-for="(date, index) in showDates"
              :key="index"
              @click="selectDate(date)"
              :class="{
                'bg-yellow-400 text-black': selectedDate === date,
                'border border-yellow-400': selectedDate !== date,
              }"
              class="px-4 py-2 rounded cursor-pointer"
            >
              {{ formatDate(date) }}
            </div>
          </div>
          <button
            class="border border-yellow-400 px-4 py-2 rounded mb-8"
            @click="toggleLocation"
          >
            {{ selectedLocation || "CHỌN TỈNH THÀNH" }}
          </button>
        </div>

        <div class="w-full max-w-4xl" v-if="filteredCinemas.length > 0">
          <h2 class="text-2xl font-bold mb-4">DANH SÁCH RẠP</h2>
          <div
            v-for="cinema in filteredCinemas"
            :key="cinema.id"
            class="bg-purple-700 p-4 mb-4 rounded"
          >
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-xl font-bold text-yellow-400">
                {{ cinema.name }}
              </h3>
              <i class="fas fa-chevron-down"></i>
            </div>
            <p class="mb-2">{{ cinema.address }}</p>
            <p class="mb-2">{{ cinema.room_type }}</p>
            <div class="grid grid-cols-6 gap-2">
              <div
                v-for="time in cinema.showtimes"
                :key="time"
                class="border border-white px-2 py-1 rounded toggle-button"
                @click="selectShowtime(cinema.id, time)"
                :class="{
                  'bg-yellow-500 text-black': isSelectedShowtime(
                    cinema.id,
                    time
                  ),
                }"
              >
                {{ time }}
              </div>
          </div>
      </div>
    </div>

    <!-- Đặt vé -->
    <div
      class="booking-movie flex flex-col items-center p-8"
      :class="{ active: showBookingSection }"
      id="booking-section"
    >
      <!-- Phần chọn ghế và combo -->
      <!-- ... (giữ nguyên phần này nhưng thêm v-model và methods tương ứng) ... -->

      <div class="mt-8 text-center">
        <div class="font-bold">{{ movie?.title }}</div>
        <div>{{ selectedCinema?.name }}</div>
      </div>

      <div
        id="booking-bar"
        class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center"
      >
        <div class="text-center">
          <div>Thời gian giữ vé</div>
          <div class="bg-yellow-500 text-black font-bold px-2 py-1">
            {{ countdown }}
          </div>
        </div>
        <div class="text-center">
          <div>Tạm tính</div>
          <div class="font-bold">{{ formatPrice(totalAmount) }} VND</div>
        </div>
        <button
          class="bg-yellow-500 text-black font-bold px-4 py-2"
          @click="bookTickets"
          :disabled="!canBook"
        >
          ĐẶT VÉ
        </button>
      </div>
  </div>

  <div class="bg-gradient-1">
    <div class="mx-40">
      <FooterComponents />
    </div>
  </div>
  <FooterComponents />
</template>

<script>
import HeaderComponents from "./HeaderComponent.vue";
import FooterComponents from "./FooterComponents.vue";
import axios from "axios";

export default {
  name: 'MovieDetailComponent',
  components: {
      HeaderComponents, 
      FooterComponents
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      showtimes: null,
      selectedDate: null,
      selectedLocation: null,
      selectedCinema: null,
      selectedShowtime: null,
      showBookingSection: false,
      countdown: "05:00",
      totalAmount: 0,
      selectedSeats: [],
      selectedCombos: [],
      showDates: [],
      cinemas: [],
      timer: null,
      bookingData: {
        adultTickets: 0,
        studentTickets: 0,
        coupleTickets: 0,
        combos: {},
      },
      baseUrl: import.meta.env.VITE_API_BASE_URL,
    };
  },
  computed: {
    filteredCinemas() {
      if (!this.showtimes || !this.selectedDate) return [];

      return this.showtimes.locations
        .filter(
          (location) =>
            !this.selectedLocation || location.name === this.selectedLocation
        )
        .flatMap((location) => location.cinemas)
        .filter((cinema) =>
          cinema.showtimes.some((st) => st.date === this.selectedDate)
        )
        .map((cinema) => ({
          ...cinema,
          showtimes:
            cinema.showtimes.find((st) => st.date === this.selectedDate)
              ?.times || [],
        }));
    },
    canBook() {
      return (
        this.selectedSeats.length > 0 &&
        this.selectedCinema &&
        this.selectedShowtime
      );
    },
  },
  async created() {
    const movieId = this.movieId;

    await this.fetchMovieDetails(movieId);
    await this.fetchShowtimes(movieId);

    // Tạo danh sách ngày (7 ngày kể từ hôm nay)
    const today = new Date();
    this.showDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date.toISOString().split("T")[0];
    });

    this.selectedDate = this.showDates[0];
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    async fetchMovieDetails(movieId) {
      try {
        const response = await axios.get(
          `${this.baseUrl}/api/movies/${movieId}`
        );
        this.movie = response.data;
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    },
    async fetchShowtimes(movieId) {
      try {
        const response = await axios.get(
          `${this.baseUrl}/api/showtimes/movie/${movieId}`
        );
        
        this.showtimes = response.data.showtimes;
      } catch (error) {
        console.error("Error fetching showtimes:", error);
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
      return `${date.getDate()}/${date.getMonth() + 1}<br>${
        days[date.getDay()]
      }`;
    },
    selectDate(date) {
      this.selectedDate = date;
      this.selectedCinema = null;
      this.selectedShowtime = null;
      this.showBookingSection = false;
    },
    toggleLocation() {
      // Logic để hiển thị modal chọn tỉnh thành
      // Có thể implement bằng dialog hoặc dropdown
    },
    selectShowtime(cinemaId, time) {
      this.selectedCinema = this.cinemas.find((c) => c.id === cinemaId);
      this.selectedShowtime = time;
      this.showBookingSection = true;
      this.startCountdown();
    },
    isSelectedShowtime(cinemaId, time) {
      return (
        this.selectedCinema?.id === cinemaId && this.selectedShowtime === time
      );
    },
    startCountdown() {
      if (this.timer) clearInterval(this.timer);

      let minutes = 5;
      let seconds = 0;

      this.timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.timer);
            this.showBookingSection = false;
            return;
          }
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }

        this.countdown = `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      }, 1000);
    },
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async bookTickets() {
      try {
        const bookingData = {
          movieId: this.movie.id,
          cinemaId: this.selectedCinema.id,
          showtime: this.selectedShowtime,
          date: this.selectedDate,
          seats: this.selectedSeats,
          combos: this.selectedCombos,
          totalAmount: this.totalAmount,
        };

        const response = await axios.post("/api/bookings", bookingData);

        if (response.data.success) {
          this.$router.push(`/booking-confirmation/${response.data.bookingId}`);
        } else {
          alert("Đặt vé thất bại: " + response.data.message);
        }
      } catch (error) {
        console.error("Error booking tickets:", error);
        alert("Có lỗi xảy ra khi đặt vé");
      }
    },
    // Các methods khác để xử lý chọn ghế, combo...
  },
};
</script>

      try {
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/movies/${movieId}`;  // Lấy đúng API với ID phim
        const response = await axios.get(apiUrl);

        console.log('Dữ liệu chi tiết phim:', response.data); // Kiểm tra dữ liệu nhận được
        
        // Kiểm tra dữ liệu và gán vào movieDetails
        if (response.data) {
          this.movieDetails = response.data;  // Gán toàn bộ dữ liệu vào movieDetails
          console.log('Dữ liệu gán vào movieDetails:', this.movieDetails); // Kiểm tra lại giá trị movieDetails
        } else {
          this.error = 'Không tìm thấy dữ liệu phim';
        }
      } catch (error) {
        console.error('Lỗi khi tải chi tiết phim:', error);
        this.error = 'Lỗi khi tải dữ liệu phim';
      } finally {
        this.isLoading = false;
      }
    },
    viewTrailer(movie) {
      if (movie.trailer_url) {
        // Mở trailer, có thể mở trong một cửa sổ mới hoặc dùng iframe
        window.open(movie.trailer_url, '_blank');
      } else {
        toast.error('Không có trailer cho phim này!');
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/css/movie-detail.css";
</style>