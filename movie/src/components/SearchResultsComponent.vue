<template>
  <HeaderComponents />
  <div class="search-results-container">
    

    <!-- Error message -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- Loading state -->
    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Đang tìm kiếm...</p>
    </div>

    <!-- Results -->
    <div v-else>
      <!-- Movies results -->
      <div v-if="hasMovies" class="results-section">
  <h1 class="section-title text-center font-bold">Kết quả tìm kiếm phim</h1>
  <div class="movies-grid">
    <div 
      v-for="movie in movies" 
      :key="movie.id"
      class="movie-card"
    >
      <img
        :src="getMovieImage(movie.banner_url)"
        :alt="movie.title"
        @click="bookTicket(movie.movie_id)"
        class="movie-poster"
      />
      <div class="movie-info">
        <h3 class="movie-title">{{ movie.title }}</h3>
        <div class="mt-4 flex items-center justify-between">
          <a class="flex items-center text-red-500 hover:text-red-700 text-sm" href="#" @click.prevent="viewTrailer(movie)">
            <i class="fas fa-play-circle text-lg mr-2"></i>
            Xem Trailer
          </a>
          <button class="bg-yellow-500 hover:bg-yellow-600 text-black py-1 px-3 rounded text-sm" @click="bookTicket(movie.movie_id)">
            ĐẶT VÉ
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    

      <!-- Cinemas results -->
      <div v-if="hasCinemas" class="results-section">
        <h1 class="section-title text-center font-bold">Kết quả tìm kiếm rạp</h1>
        <div class="cinemas-list">
          <div 
            v-for="cinema in cinemas" 
            :key="cinema.id"
            class="cinema-card"
            @click="viewCinemaDetails(cinema.id)"
          >
            <h3 class="cinema-name"><i class="fas fa-building"></i> {{ cinema.name }}</h3>
            <p class="cinema-address"><i class="fas fa-map-marker-alt"></i> {{ cinema.address }}</p>
            <p class="cinema-phone"><i class="fas fa-phone"></i>  {{ cinema.phone }}</p>
          </div>
        </div>
      </div>

      

      <!-- No results at all -->
      <div v-if="noResults" class="no-results-message">
        Không có kết quả nào phù hợp với "{{ searchQuery }}"
      </div>
    </div>
  </div>
  <FooterComponents />
</template>

<style scoped>
/* Thêm các style cần thiết ở đây */
.search-results-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.results-section {
  margin-top: 30px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.movie-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.movie-poster {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  color: #ff3333;
  padding: 10px;
  background-color: #ffeeee;
  border-radius: 4px;
  margin: 10px 0;
}

.no-results-message {
  padding: 20px;
  text-align: center;
  color: #666;
}
</style>

<script>
import axios from 'axios';
import HeaderComponents from "./HeaderComponent.vue";
import FooterComponents from "./FooterComponents.vue";

export default {
  name: "SearchResults",
  components: {
      HeaderComponents, 
      FooterComponents
  },
  
  data() {
    return {
      searchQuery: "",
      movies: [],
      cinemas: [],
      isLoading: false,
      hasSearchAttempted: false,
      searchDebounce: null,
      error: null
    };
  },
  
  computed: {
    hasMovies() {
      return this.movies.length > 0;
    },
    hasCinemas() {
      return this.cinemas.length > 0;
    },
    noResults() {
      return this.hasSearchAttempted && !this.hasMovies && !this.hasCinemas;
    }
  },

  created() {
    this.searchQuery = this.$route.query.q || "";
    if (this.searchQuery.trim()) {
      this.fetchSearchResults();
    }
  },

  beforeUnmount() {
    clearTimeout(this.searchDebounce);
  },

  watch: {
    "$route.query.q"(newVal) {
      this.searchQuery = newVal || "";
      this.debouncedSearch();
    }
  },

  methods: {
    debouncedSearch() {
      clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(() => {
        if (this.searchQuery.trim()) {
          this.fetchSearchResults();
        } else {
          this.resetResults();
        }
      }, 300);
    },

    handleSearch() {
      const trimmedQuery = this.searchQuery.trim();
      if (trimmedQuery === this.$route.query.q) {
        this.fetchSearchResults();
      } else {
        this.$router.replace({ 
          query: trimmedQuery ? { q: trimmedQuery } : null 
        }).catch(() => {});
      }
    },

    resetResults() {
      this.movies = [];
      this.cinemas = [];
      this.hasSearchAttempted = false;
      this.error = null;
    },

    async fetchSearchResults() {
  const query = this.searchQuery.trim();
  if (!query) {
    this.resetResults();
    return;
  }

  this.isLoading = true;
  this.hasSearchAttempted = true;
  this.error = null;
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const queryLower = this.removeAccents(query.toLowerCase()); // Xử lý bỏ dấu
    
    const [moviesResponse, cinemasResponse] = await Promise.all([
      axios.get(`${apiUrl}/api/movies/search`, {
        params: { query },
        timeout: 5000
      }).catch(() => ({ data: [] })),
      
      axios.get(`${apiUrl}/api/cinemas/search`, {
        params: { query },
        timeout: 5000
      }).catch(() => ({ data: [] }))
    ]);

    // Xử lý response từ API movies
    let moviesData = [];
    if (moviesResponse.data) {
      if (Array.isArray(moviesResponse.data)) {
        moviesData = moviesResponse.data;
      } else if (moviesResponse.data.movies) {
        moviesData = moviesResponse.data.movies;
      } else if (moviesResponse.data.data) {
        moviesData = moviesResponse.data.data;
      }
    }

    // Lọc kết quả với xử lý không dấu
    this.movies = moviesData.filter(movie => {
      const title = this.removeAccents(movie.title?.toLowerCase() || '');
      return title.includes(queryLower);
    });
    
    // Xử lý cinemas (giữ nguyên)
    let cinemasData = [];
    if (cinemasResponse.data) {
      if (Array.isArray(cinemasResponse.data)) {
        cinemasData = cinemasResponse.data;
      } else if (Array.isArray(cinemasResponse.data.data)) {
        cinemasData = cinemasResponse.data.data;
      }
    }
    
    this.cinemas = cinemasData.filter(cinema => {
      const name = this.removeAccents(cinema.name?.toLowerCase() || '');
      return name.includes(queryLower);
    });

  } catch (error) {
    console.error("Search error:", error);
    this.movies = [];
    this.cinemas = [];
    this.error = "Có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại";
  } finally {
    this.isLoading = false;
  }
},
removeAccents(str) {
  return str.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d").replace(/Đ/g, "D");
},

viewTrailer(movie) {
      if (movie.trailer_url) {
        // Mở trailer, có thể mở trong một cửa sổ mới hoặc dùng iframe
        window.open(movie.trailer_url, '_blank');
      } else {
        toast.error('Không có trailer cho phim này!');
      }
    },
    
    // Đặt vé, chuyển hướng đến trang chi tiết phim
    bookTicket(movieId) {
    if (!movieId) {
      console.error('Không có movieId');
      return;
    }
    this.$router.push({ name: 'MovieDetailView', params: { id: movieId } });
  },

    viewCinemaDetails(cinemaId) {
      this.$router.push({
        name: 'CinemaDetail',
        params: { id: cinemaId },
        query: { 
          ...this.$route.query,
          fromSearch: this.searchQuery 
        }
      });
    },

    getMovieImage(bannerUrl) {
      // Nếu có banner_url và không phải chuỗi rỗng
      if (bannerUrl && bannerUrl.trim() !== '') {
        return bannerUrl;
      }
      // Fallback image
      return 'https://via.placeholder.com/300x450?text=No+Poster';
    },

    handleImageError(event) {
      // Thay thế bằng ảnh placeholder khi load lỗi
      event.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
      // Ngăn chặn infinite loop nếu placeholder cũng lỗi
      event.target.onerror = null;
    },
  }
};
</script>