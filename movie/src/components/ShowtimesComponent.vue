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
              @change="filterMoviesByDate"
            >
              <option value="">Chọn ngày</option>
              <option v-for="date in uniqueShowDates" :key="date" :value="date">
                {{ formatDate(date) }}
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
              @change="filterCinemasByMovieAndDate"
              :disabled="!selectedDate"
            >
              <option value="">Chọn Phim</option>
              <option
                v-for="movie in filteredMoviesByDate"
                :key="movie.movie_id"
                :value="movie.movie_id"
              >
                {{ movie.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <label class="text-lg font-bold" for="cinema">3. Rạp</label>
          <div class="relative w-full">
            <select
              class="bg-gray-800 text-white py-2 px-4 rounded-md w-full"
              v-model="selectedCinema"
              @change="filterShowtimesByCinemaAndMovieAndDate"
              :disabled="!selectedMovie"
            >
              <option value="">Chọn Rạp</option>
              <option v-for="cinema in filteredCinemasByMovieAndDate" :key="cinema.cinema_id" :value="cinema.cinema_id">
                {{ cinema.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="errorMessage" class="text-red-500 text-center mt-4">
        {{ errorMessage }}
      </div>
      <hr class="border-gray-600 my-4" />

      <div v-if="selectedMovie && selectedCinema && filteredShowtimesByCinemaAndMovieAndDate.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 my-6 py-6">
          <div class="movie-info">
            <img
              :src="filteredShowtimesByCinemaAndMovieAndDate[0]?.Movie?.banner_url"
              :alt="filteredShowtimesByCinemaAndMovieAndDate[0]?.Movie?.title"
              class="w-full rounded-lg mb-4 h-64 object-cover"
            />
            <h3 class="text-xl font-bold mb-2">{{ filteredShowtimesByCinemaAndMovieAndDate[0]?.Movie?.title }}</h3>
            <p class="text-gray-600 mb-1">{{ filteredShowtimesByCinemaAndMovieAndDate[0]?.Movie?.genre }}</p>
            <p class="text-gray-600">{{ filteredShowtimesByCinemaAndMovieAndDate[0]?.Movie?.duration }} phút</p>
          </div>

          <div class="col-span-2 cinema-list">
            <div class="mb-6 pb-4 border-b border-gray-100 last:border-0">
              <div class="cinema-info mb-3">
                <h4 class="text-lg font-semibold flex items-center">
                  <i class="fas fa-building mr-2 text-yellow-500"></i>
                  {{ filteredShowtimesByCinemaAndMovieAndDate[0]?.Cinema?.name }}
                </h4>
                <p class="text-sm text-gray-500 flex items-center mt-1">
                  <i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                  {{ filteredShowtimesByCinemaAndMovieAndDate[0]?.Cinema?.address }}
                </p>
              </div>

              <div class="showtimes flex flex-wrap gap-2">
                <div
                  v-for="showtime in filteredShowtimesByCinemaAndMovieAndDate"
                  :key="showtime.show_time"
                  class="px-3 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
                >
                  {{ formatTime(showtime.show_time) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div
          v-for="movieGroup in groupedShowtimes"
          :key="movieGroup.movie.movie_id"
          class="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 my-6 py-6"
        >
          <div class="movie-info">
            <img
              :src="movieGroup.movie.banner_url"
              :alt="movieGroup.movie.title"
              class="w-full rounded-lg mb-4 h-64 object-cover"
              @click="bookTicket(movieGroup.movie.movie_id)"
            />
            <h3 class="text-xl font-bold mb-2">{{ movieGroup.movie.title }}</h3>
            <p class="text-gray-600 mb-1">{{ movieGroup.movie.genre }}</p>
            <p class="text-gray-600">{{ movieGroup.movie.duration }} phút</p>
          </div>

          <div class="col-span-2 cinema-list">
            <div
              v-for="cinemaGroup in movieGroup.cinemas"
              :key="cinemaGroup.cinema.cinema_id"
              class="mb-6 pb-4 border-b border-gray-100 last:border-0"
            >
              <div class="cinema-info mb-3">
                <h4 class="text-lg font-semibold flex items-center">
                  <i class="fas fa-building mr-2 text-yellow-500"></i>
                  {{ cinemaGroup.cinema.name }}
                </h4>
                <p class="text-sm text-gray-500 flex items-center mt-1">
                  <i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                  {{ cinemaGroup.cinema.address }}
                </p>
              </div>

              <div class="showtimes flex flex-wrap gap-2">
                <div
                  v-for="time in cinemaGroup.showtimes"
                  :key="time"
                  class="px-3 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
                >
                  {{ formatTime(time.split('_')[1]) }}
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
        <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded" @click="toggleShowAllMovies">
          {{ showAllMovies ? 'ẨN BỚT' : 'XEM TẤT CẢ LỊCH CHIẾU' }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 container mx-auto max-w-7xl">
        <div class="text-center" v-for="movie in allMovies" :key="movie.movieId">
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
      allShowtimes: [],
      selectedDate: "",
      selectedMovie: "",
      selectedCinema: "",
      errorMessage: "",
      isLoading: false,
      uniqueShowDates: [],
      uniqueMovies: [],
      filteredMoviesByDate: [],
      filteredCinemasByMovieAndDate: [],
      filteredShowtimesByCinemaAndMovieAndDate: [],
      allMovies: [],
    };
  },
  mounted() {
    this.getShowtimes();
    this.getAllMovies();
  },

  computed: {
    groupedShowtimes() {
      const grouped = {};
      this.allShowtimes.forEach(showtime => {
        const movieId = showtime.movie_id;
        if (!grouped[movieId]) {
          grouped[movieId] = {
            movie: showtime.Movie,
            cinemas: {}
          };
        }
        const cinemaId = showtime.cinema_id;
        if (!grouped[movieId].cinemas[cinemaId]) {
          grouped[movieId].cinemas[cinemaId] = {
            cinema: showtime.Cinema,
            showtimes: new Set()
          };
        }
        grouped[movieId].cinemas[cinemaId].showtimes.add(`${showtime.show_date}_${showtime.show_time}`);
      });

      return Object.values(grouped).map(movieGroup => ({
        movie: movieGroup.movie,
        cinemas: Object.values(movieGroup.cinemas).map(cinemaGroup => ({
          cinema: cinemaGroup.cinema,
          showtimes: Array.from(cinemaGroup.showtimes).sort()
        }))
      }));
    },
  },

  methods: {
    async getAllMovies() {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/movies";
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          const data = response.data?.movies;
          this.allMovies = data?.map((m) => ({
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
          })) || [];
        }
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

    viewTrailer(url) {
      window.open(url, "_blank");
    },

    async getShowtimes() {
      try {
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          this.allShowtimes = response.data?.showtimes || [];
          this.processShowtimesData();
        }
      } catch (error) {
        console.error("Lỗi khi tải lịch chiếu:", error);
        this.errorMessage = "Lỗi khi tải lịch chiếu.";
      }
    },

    processShowtimesData() {
      const uniqueDatesSet = new Set(this.allShowtimes.map(st => st.show_date));
      this.uniqueShowDates = Array.from(uniqueDatesSet).sort();
      const uniqueMoviesMap = new Map(this.allShowtimes.map(st => [st.movie_id, st.Movie]));
      this.uniqueMovies = Array.from(uniqueMoviesMap.values());
    },

    filterMoviesByDate() {
      this.selectedMovie = "";
      this.selectedCinema = "";
      if (this.selectedDate) {
        this.filteredMoviesByDate = Array.from(
          new Map(
            this.allShowtimes
              .filter(st => st.show_date === this.selectedDate)
              .map(st => [st.movie_id, st.Movie])
          ).values()
        );
      } else {
        this.filteredMoviesByDate = this.uniqueMovies;
      }
      this.filteredCinemasByMovieAndDate = [];
      this.filteredShowtimesByCinemaAndMovieAndDate = [];
    },

    filterCinemasByMovieAndDate() {
      this.selectedCinema = "";
      if (this.selectedMovie && this.selectedDate) {
        const relevantShowtimes = this.allShowtimes.filter(
          st => st.movie_id === this.selectedMovie && st.show_date === this.selectedDate
        );
        const uniqueCinemasMap = new Map();
        relevantShowtimes.forEach(showtime => {
          uniqueCinemasMap.set(showtime.cinema_id, showtime.Cinema);
        });
        this.filteredCinemasByMovieAndDate = Array.from(uniqueCinemasMap.values());
      } else {
        this.filteredCinemasByMovieAndDate = [];
      }
      this.filteredShowtimesByCinemaAndMovieAndDate = [];
    },

    filterShowtimesByCinemaAndMovieAndDate() {
  if (this.selectedCinema && this.selectedMovie && this.selectedDate) {
    const allShowtimesForSelection = this.allShowtimes.filter(
      st =>
        st.cinema_id === this.selectedCinema &&
        st.movie_id === this.selectedMovie &&
        st.show_date === this.selectedDate
    );

    // Sử dụng Set để lưu trữ các thời gian chiếu duy nhất
    const uniqueShowTimes = new Set();
    this.filteredShowtimesByCinemaAndMovieAndDate = [];

    allShowtimesForSelection.forEach(showtime => {
      if (!uniqueShowTimes.has(showtime.show_time)) {
        uniqueShowTimes.add(showtime.show_time);
        this.filteredShowtimesByCinemaAndMovieAndDate.push(showtime);
      }
    });

    // Sắp xếp lại các suất chiếu theo thời gian (tùy chọn)
    this.filteredShowtimesByCinemaAndMovieAndDate.sort((a, b) => {
      const timeA = a.show_time;
      const timeB = b.show_time;
      return timeA.localeCompare(timeB);
    });

  } else {
    this.filteredShowtimesByCinemaAndMovieAndDate = [];
  }
},

    formatTime(time) {
      if (!time) return "";
      const [hour, minute, second] = time.split(":");
      return `${hour}:${minute}`;
    },
    bookTicket(movieId) {
    if (!movieId) {
      console.error('Không có movieId');
      return;
    }
    this.$router.push({ name: 'MovieDetailView', params: { id: movieId } });
  },

    formatDate(dateString) {
      if (!dateString) return "";
      try {
        const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
        return format(parsedDate, 'dd/MM/yyyy');
      } catch (error) {
        console.error("Error parsing date:", error, dateString);
        return dateString;
      }
    },
  },
};
</script>