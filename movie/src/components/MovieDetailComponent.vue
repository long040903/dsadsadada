<template>
  <HeaderComponents />
  
  <div class="p-4">
    <!-- Loading state -->
    <div v-if="isLoading" class="text-center py-8">
      Đang tải chi tiết phim...
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="text-red-500 text-center py-4">
      {{ error }}
    </div>
    
    <!-- Movie detail content -->
    <div v-else-if="movie" class="max-w-5xl mx-auto bg-[#1c2541] p-4 rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Movie poster -->
        <div class="md:w-1/2">
          <div class="relative">
            <img :alt="'Poster phim ' + movie.title" 
                 class="rounded-lg"
                 height="600"
                 :src="movie.poster || placeholderImage"
                 width="400" />
            <div class="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
              {{ movie.rating || 'T18' }}
            </div>
          </div>
        </div>
        
        <!-- Movie info -->
        <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 class="text-3xl font-bold">
            {{ movie.title }} <span v-if="movie.rating">({{ movie.rating }})</span>
          </h1>
          
          <!-- Basic info -->
          <div class="mt-2">
            <div v-if="movie.genre" class="flex items-center text-sm">
              <i class="fas fa-film mr-2"></i>
              {{ movie.genre }}
            </div>
            <div v-if="movie.duration" class="flex items-center text-sm mt-1">
              <i class="fas fa-clock mr-2"></i>
              {{ movie.duration }} phút
            </div>
            <div class="flex items-center text-sm mt-1">
              <i class="fas fa-globe mr-2"></i>
              {{ movie.country || 'Việt Nam' }}
            </div>
            <div v-if="movie.rating === 'T18'" class="flex items-center text-sm mt-1 bg-yellow-500 text-black px-2 py-1 rounded">
              <i class="fas fa-exclamation-triangle mr-2"></i>
              T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
            </div>
          </div>
          
          <!-- Description -->
          <div class="mt-4">
            <h2 class="text-xl font-bold">MÔ TẢ</h2>
            <p v-if="movie.director" class="mt-2">
              <strong>Đạo diễn:</strong> {{ movie.director }}
            </p>
            <p v-if="movie.cast">
              <strong>Diễn viên:</strong> {{ movie.cast }}
            </p>
            <p v-if="movie.release_date">
              <strong>Khởi chiếu:</strong> {{ formatDate(movie.release_date) }}
            </p>
          </div>
          
          <!-- Plot -->
          <div class="mt-4">
            <h2 class="text-xl font-bold">NỘI DUNG PHIM</h2>
            <p class="mt-2">
              {{ movie.description || 'Nội dung đang được cập nhật...' }}
            </p>
          </div>
          
          <!-- Trailer -->
          <div class="mt-4">
            <a v-if="movie.trailer_url" 
               class="flex items-center text-red-500" 
               :href="movie.trailer_url" 
               target="_blank">
              <i class="fas fa-play-circle text-2xl mr-2"></i>
              Xem Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <FooterComponents />
</template>

<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: 'MovieDetail', // Đổi tên component cho rõ ràng
  components: {
    HeaderComponents, 
    FooterComponents
  },
  data() {
    return {
      movie: null, // Thay getMovies bằng movie object
      isLoading: false,
      error: null,
      placeholderImage: 'https://via.placeholder.com/400x600?text=No+Poster'
    };
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return 'Đang cập nhật';
      const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    }
  },
  async created() {
    this.isLoading = true;
    this.error = null;
    
    try {
      // Lấy movie_id từ route params
      const movieId = this.$route.params.id;
      
      if (!movieId) {
        throw new Error('Không tìm thấy ID phim');
      }

      // Sửa lại API endpoint để lấy chi tiết 1 phim
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/movies/${movieId}`;
      
      // Thêm token vào header nếu API yêu cầu xác thực
      const token = Cookies.get('authToken');
      
      const response = await axios.get(apiUrl, {
        headers: token ? { 
          Authorization: `Bearer ${token}` 
        } : {}
      });
      
      console.log("Dữ liệu chi tiết phim:", response.data);
      
      // Gán dữ liệu phim (không cần .movies vì đây là 1 object)
      this.movie = response.data;
      
      // Hiển thị thông báo thành công
      toast.success('Tải chi tiết phim thành công!');
      
    } catch (error) {
      console.error('Lỗi khi tải chi tiết phim:', {
        url: error.config?.url,
        status: error.response?.status,
        data: error.response?.data
      });
      
      this.error = error.response?.data?.message || error.message || 'Lỗi khi tải chi tiết phim';
      
      // Hiển thị thông báo lỗi
      toast.error(this.error);
      
      // Nếu lỗi 401 (Unauthorized) thì chuyển hướng sang trang login
      if (error.response?.status === 401) {
        setTimeout(() => {
          this.$router.push('/login');
        }, 1500);
      }
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
/* Thêm các style tùy chỉnh nếu cần */
@import "../assets/css/movie-detail.css";
</style>