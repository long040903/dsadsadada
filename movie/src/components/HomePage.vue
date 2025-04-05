<template>
  <HeaderComponents />
  <main class="p-4">
    <div class="relative">
      <img
        alt="Movie Banner"
        class="w-full rounded"
        height="400"
        src="https://storage.googleapis.com/a1aa/image/LRankpWN5mW9GSLsOoRAHepkqkT58tmVXhjwNnjXoy0.jpg"
        width="1200"
      />
      <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-white"
      >
        <i class="fas fa-chevron-left"> </i>
      </button>
      <button
        class="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-white"
      >
        <i class="fas fa-chevron-right"> </i>
      </button>
    </div>
   
      
     
   
    <div class="mt-4 flex justify-center items-center space-x-4 bg-white py-4 font-bold">
    <span class="bg-white text-black px-4 py-2 rounded text-2xl">ĐẶT VÉ NHANH</span>
    
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
      <option 
        v-for="date in availableDates" 
        :value="date" 
        :key="date"
      >
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
          :key="movie.movieId"
          class="relative flex-1"
        >
          <img
            @click="goToDetails(movie.movieId)"
            :alt="movie.title"
            class="w-full h-[423px] object-cover cursor-pointer"
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
              <button class="bg-yellow-500 text-black px-4 py-2 rounded flex-1">
                <a target="_blank" :href="movie.trailerUrl"> Xem Trailer </a>
              </button>
              <button
                @click="goToDetails(movie.movieId)"
                class="bg-yellow-500 text-black px-4 py-2 rounded flex-1"
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
        <button class="bg-yellow-500 text-black px-6 py-2 rounded" @click="goToMovieList">
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
            @click="goToDetails(movie.movieId)"
            :alt="movie.title"
            class="rounded-t-lg h-[384px] w-full object-cover cursor-pointer"
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
            >
              <a target="_blank" :href="movie.trailerUrl">
                <i class="fas fa-play-circle mr-2"> </i>
                Xem Trailer
              </a>
            </button>
            <button
              @click="goToDetails(movie.movieId)"
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full flex items-center whitespace-nowrap"
              @click="bookTicket(movie.movieId)"   >
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <button class="bg-yellow-500 text-black font-bold py-2 px-8 rounded-full" @click="goToMovieList">
        XEM THÊM
      </button>
    </div>
  </div>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
    <div class="container mx-auto py-12">
      <h1 class="text-center text-4xl font-bold mb-8">KHUYẾN MÃI</h1>
      <div class="relative">
        <div class="flex justify-center items-center space-x-4">
          <button
            class="absolute left-0 transform -translate-y-1/2 top-1/2 text-2xl"
          >
            <i class="fas fa-chevron-left"> </i>
          </button>
          <div class="flex space-x-4 overflow-x-auto">
            <div class="flex-shrink-0 w-64">
              <img
                alt="Promotion 1: Ngày Thành Viên - Thứ 4 45K"
                class="w-full h-full object-cover"
                height="144"
                src="https://storage.googleapis.com/a1aa/image/YforO03ruMGTpVvK79Z-45sDi6ekfKYLbuUJZJvEQwU.jpg"
                width="256"
              />
            </div>
            <div class="flex-shrink-0 w-64">
              <img
                alt="Promotion 2: Học Sinh Sinh Viên 45K"
                class="w-full h-full object-cover"
                height="144"
                src="https://storage.googleapis.com/a1aa/image/4GNo8P5_b87eCcdfrAd4qssBZqXXInW6vxEU6eJn1oY.jpg"
                width="256"
              />
            </div>
            <div class="flex-shrink-0 w-64">
              <img
                alt="Promotion 3: Trước 10h sáng - Đồng Giá 45K"
                class="w-full h-full object-cover"
                height="144"
                src="https://storage.googleapis.com/a1aa/image/AgV2SykrKQM94BwoJiUn9dcEafKBjmjB-bVunQ4T-uY.jpg"
                width="256"
              />
            </div>
            <div class="flex-shrink-0 w-64">
              <img
                alt="Promotion 4: Sau 10h tối - Đồng Giá 45K"
                class="w-full h-full object-cover"
                height="144"
                src="https://storage.googleapis.com/a1aa/image/mngJyH5QjfeLwtqFnQruo31P2ozfm3aV0nzMo-vVJcs.jpg"
                width="256"
              />
            </div>
          </div>
          <button
            class="absolute right-0 transform -translate-y-1/2 top-1/2 text-2xl"
          >
            <i class="fas fa-chevron-right"> </i>
          </button>
        </div>
        <div class="flex justify-center mt-4 space-x-2">
          <span class="w-3 h-3 bg-white rounded-full"> </span>
          <span class="w-3 h-3 bg-gray-400 rounded-full"> </span>
          <span class="w-3 h-3 bg-gray-400 rounded-full"> </span>
          <span class="w-3 h-3 bg-gray-400 rounded-full"> </span>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <button class="bg-yellow-400 text-black font-bold py-2 px-6 rounded">
          TẤT CẢ ƯU ĐÃI
        </button>
      </div>
    </div>
  </div>
  <div class="relative">
    <img
      alt="Background image of a cinema with purple seats"
      class="w-full h-full object-cover absolute inset-0 z-0"
      src="https://storage.googleapis.com/a1aa/image/s1i4lT5_HwGERq0cQekn_wu_mmEvBgAuu3LAAANI-jk.jpg"
    />
    <div
      class="relative z-10 bg-black bg-opacity-50 min-h-screen flex flex-col justify-center"
    >
      <div class="container mx-auto py-8">
        <h1 class="text-center text-3xl font-bold mb-8">
          CHƯƠNG TRÌNH THÀNH VIÊN
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div class="bg-gray-800 bg-opacity-75 p-4 rounded-lg">
            <img
              alt="C'Friend membership card with people enjoying a movie"
              class="w-full h-48 object-cover rounded-lg mb-4"
              src="https://storage.googleapis.com/a1aa/image/xiatiT0qVB8w2G_NUqlm49Pa5ywMt6MIdJqDCtA6wZM.jpg"
            />
            <h2 class="text-xl font-bold mb-2">THÀNH VIÊN C'FRIEND</h2>
            <p class="mb-4">Thẻ C'Friend nhiều ưu đãi cho thành viên mới</p>
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded"
            >
              TÌM HIỂU NGAY
            </button>
          </div>
          <div class="bg-gray-800 bg-opacity-75 p-4 rounded-lg">
            <img
              alt="C'VIP membership card"
              class="w-full h-48 object-cover rounded-lg mb-4"
              src="https://storage.googleapis.com/a1aa/image/A77_AiR9DkEbSRhVQD1zaS_cQBo-7HbPKflytFy-Nj0.jpg"
            />
            <h2 class="text-xl font-bold mb-2">THÀNH VIÊN C'VIP</h2>
            <p class="mb-4">Thẻ VIP CineStar mang đến sự ưu đãi độc quyền</p>
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded"
            >
              TÌM HIỂU NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-center text-4xl font-bold mb-4">TẤT CẢ CÁC GIẢI TRÍ</h1>
    <p class="text-center mb-8">
      Ngoài hệ thống rạp chiếu phim chất lượng cao, Cinestar còn cung cấp cho
      bạn nhiều loại hình giải trí tuyệt vời khác.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white rounded-lg overflow-hidden">
        <img
          alt="Children playing in Kidzone"
          class="w-full h-48 object-cover"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/5WaNq882Bldux_jsYS0_UXxgBEfNchX796WvDwF64a0.jpg"
          width="600"
        />
        <div class="p-4 bg-yellow-500 text-center text-xl font-bold">
          KIDZONE
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden">
        <img
          alt="Woman holding a bowling ball"
          class="w-full h-48 object-cover"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/8UACDs18kFwsuWPS-KUpcTbq92CcaqmEf2_-VaSUe7o.jpg"
          width="600"
        />
        <div class="p-4 bg-blue-500 text-center text-xl font-bold">BOWLING</div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden">
        <img
          alt="People playing billiards"
          class="w-full h-48 object-cover"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/LQT_kNdIsDu66mImam56h8AQ9q7J1FrRLaZCrrjqRfY.jpg"
          width="600"
        />
        <div class="p-4 bg-green-500 text-center text-xl font-bold">
          BILLIARDS
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden">
        <img
          alt="Couple enjoying food"
          class="w-full h-48 object-cover"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/bmEEX4vSL2Q7WNtxzwrUA_DOJAjWPnh-nhzINqnfWmw.jpg"
          width="600"
        />
        <div class="p-4 bg-orange-500 text-center text-xl font-bold">
          Món ngon
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden">
        <img
          alt="Woman working out in a gym"
          class="w-full h-48 object-cover"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/6lV4Q7ZZCfQKoeYl_Krni5EAZmUzfdbSQ98-9JkThds.jpg"
          width="600"
        />
        <div class="p-4 bg-red-500 text-center text-xl font-bold">GYM</div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden">
        <img
          alt="Opera performance"
          class="w-full h-48 object-cover"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/pfHjzz5qqmyLZW0BpXnNOgajxbOjGRSiqkixBDxi5C4.jpg"
          width="600"
        />
        <div class="p-4 bg-black text-center text-xl font-bold">
          DALAT OPERA HOUSE
        </div>
      </div>
    </div>
  </div>
  <div
    class="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center h-screen"
  >
    <div class="w-full md:w-1/2 flex flex-col items-center">
      <h1 class="text-2xl font-bold mb-6">LIÊN HỆ VỚI CHÚNG TÔI</h1>
      <div class="mb-4">
        <a
          class="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
          href="#"
        >
          <img
            alt="Facebook logo"
            class="w-10 h-10 mr-2"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/NIGlvOxH4mzol3JITp6HMF0_k6IVFaRNhWhubeFKXqI.jpg"
            width="50"
          />
          FACEBOOK
        </a>
      </div>
      <div>
        <a
          class="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
          href="#"
        >
          <img
            alt="Zalo logo"
            class="w-10 h-10 mr-2"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/u0dtEqIvlZEfoXVMECNpS9vxOFmWX36KhLOlyB6OhyI.jpg"
            width="50"
          />
          ZALO CHAT
        </a>
      </div>
    </div>
    <div
      class="w-full md:w-1/2 bg-blue-700 p-8 rounded-lg shadow-lg mt-8 md:mt-0"
    >
      <h2 class="text-xl font-bold mb-4">THÔNG TIN LIÊN HỆ</h2>
      <p class="mb-2">
        <i class="fas fa-envelope"> </i>
        cskh@cinestar.com.vn
      </p>
      <p class="mb-2">
        <i class="fas fa-phone"> </i>
        1900.0085
      </p>
      <p class="mb-4">
        <i class="fas fa-map-marker-alt"> </i>
        135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM
      </p>
      <form>
        <input
          class="w-full p-2 mb-4 rounded-lg"
          placeholder="Họ và tên"
          type="text"
        />
        <input
          class="w-full p-2 mb-4 rounded-lg"
          placeholder="Điền email"
          type="email"
        />
        <textarea
          class="w-full p-2 mb-4 rounded-lg h-32"
          placeholder="Thông tin liên hệ hoặc phản ánh"
        ></textarea>
        <button
          class="w-full bg-yellow-500 text-blue-900 font-bold py-2 rounded-lg"
          type="submit"
        >
          GỬI NGAY
        </button>
      </form>
    </div>
  </div>
  <FooterComponents />
</template>
<script>
import axios from "axios";
import { toast } from 'vue3-toastify';
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
      cinemas: [],
      movies: [],
      selectedCinema: null,
      filteredMovies: [],
      selectedMovie: null,
      availableDates: [],
      selectedDate: null,
      availableTimes: [],
      selectedTime: null
    };
  },
  async mounted() {
    await this.fetchCinemas();
    await this.getAllMovies() ;
  },
  methods: {
    // Lấy danh sách tất cả rạp chiếu
    async fetchCinemas() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/cinemas`);
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
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/showtimes`, {
          params: {
            cinema_id: this.selectedCinema
          }
        });

        // Kiểm tra cấu trúc dữ liệu trả về
        const showtimes = this.normalizeShowtimesData(response.data);
        
        // Lọc danh sách phim duy nhất đang chiếu tại rạp này
        this.filteredMovies = this.getUniqueMoviesFromShowtimes(showtimes);
        
        console.log('Movies at selected cinema:', this.filteredMovies);
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
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/showtimes`, {
      params: {
        cinema_id: this.selectedCinema,
        movie_id: this.selectedMovie
      }
    });

    // Chuẩn hóa dữ liệu trả về
    const showtimes = this.normalizeShowtimesData(response.data);
    
    // Lọc và sắp xếp các ngày chiếu
    this.availableDates = this.processAvailableDates(showtimes);
    
    console.log('Available dates:', this.availableDates);
  } catch (error) {
    console.error("Error fetching available dates:", error);
    toast.error("Không thể tải danh sách ngày chiếu");
    this.availableDates = [];
  }
},

// Helper method để xử lý danh sách ngày chiếu
processAvailableDates(showtimes) {
  // Lọc showtimes hợp lệ
  const validShowtimes = showtimes.filter(st => 
    st.cinema_id == this.selectedCinema && 
    st.movie_id == this.selectedMovie &&
    st.show_date
  );

  // Trích xuất các ngày duy nhất
  const uniqueDates = [...new Set(validShowtimes.map(st => st.show_date))];
  
  // Sắp xếp ngày từ sớm nhất đến muộn nhất
  return uniqueDates.sort((a, b) => new Date(a) - new Date(b));
},
normalizeShowtimesData(data) {
  // Xử lý nhiều định dạng response khác nhau
  if (Array.isArray(data)) {
    return data; // Nếu data đã là mảng
  }
  
  if (data && typeof data === 'object') {
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
      
      if (!this.selectedCinema || !this.selectedMovie || !this.selectedDate) return;
      
      try {
        // Gọi API lấy showtimes theo cinema_id, movie_id và ngày
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/showtimes`, {
          params: {
            cinema_id: this.selectedCinema,
            movie_id: this.selectedMovie,
            show_date: this.selectedDate
          }
        });

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

        // Redirect to home page after 1 second
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } catch (error) {
        console.error(
          "Get all movies error:",
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

    // Định dạng ngày tháng
    formatDate(dateString) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
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
      
      const selectedShowtime = this.availableTimes.find(time => time.showtime_id === this.selectedTime);
      
      if (selectedShowtime?.movie_id) {
        this.$router.push({ 
          name: 'MovieDetailView', 
          params: { id: selectedShowtime.movie_id },
          query: { 
            showtime_id: this.selectedTime,
            cinema_id: this.selectedCinema,
            show_date: this.selectedDate
          }
        });
      } else {
        toast.error("Không tìm thấy thông tin phim");
      }
    },
    viewTrailer(movie) {
      if (movie.trailerUrl) {
        // Mở trailer, có thể mở trong một cửa sổ mới hoặc dùng iframe
        window.open(movie.trailerUrl, '_blank');
      } else {
        toast.error('Không có trailer cho phim này!');
      }
    },
    bookTicket(movieId) {
    if (!movieId) {
      console.error('Không có movieId');
      return;
    }
    this.$router.push({ name: 'MovieDetailView', params: { id: movieId } });
  },
  goToMovieList() {
    this.$router.push('/movie');
  }
  }
};
</script>