<template>
  <HeaderComponents />
  <div class="container mx-auto p-4">
      
      <div>
  <!-- Phim đang chiếu -->
   
  <h2 class="text-center text-2xl font-bold mb-8">PHIM ĐANG CHIẾU</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div v-for="movie in getMovies" :key="movie.id" class="text-center">
      <div class="relative">
        <img :alt="'Movie poster for ' + movie.title" height="450" 
             :src="movie.poster" width="300" />
        
      </div>
      <p class="mt-4">{{ movie.title }} </p>
      <div class="flex justify-center space-x-4 mt-4">
        <button class="bg-transparent text-white py-2 px-4 rounded border border-white" @click="viewTrailer(movie)">
          <i class="fas fa-play-circle mr-2"></i>
          Xem Trailer
        </button>
        <button class="bg-yellow-500 text-black py-2 px-4 rounded" @click="bookTicket(movie.movie_id)">
          ĐẶT VÉ
        </button>
      </div>
    </div>
  </div>
  

  <!-- Phim sắp chiếu -->
  <div class="pt-8 pb-9">
    <h2 class="text-center text-2xl font-bold mb-8">PHIM SẮP CHIẾU</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="movie in getMovies" :key="movie.id" class="text-center">
        <div class="relative">
          <img :alt="'Movie poster for ' + movie.title" height="450" 
               :src="movie.poster" width="300" />
         
        </div>
        <p class="mt-4">{{ movie.title }}</p>
        <div class="flex justify-center space-x-4 mt-4">
          <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
            <i class="fas fa-play-circle mr-2"></i>
            Xem Trailer
          </button>
          <button class="bg-yellow-500 text-black py-2 px-4 rounded">
            ĐẶT VÉ
          </button>
        </div>
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
  name: 'MovieComponent',
  components: {
    HeaderComponents,
    FooterComponents
  },
  props: ['movie'],
  data() {
    return {
      getMovies: [],
      isLoading: false,
      error: null
      
    };
  },
  async created() {
    this.isLoading = true;
    this.error = null;

    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/movies`;
      const token = Cookies.get('authToken');
      
      const response = await axios.get(apiUrl, {
        params: {
          page: 1,
          limit: 10
        },
        headers: token ? {
          Authorization: `Bearer ${token}`
        } : {}
      });

      console.log("Dữ liệu API:", response.data);
      this.getMovies = response.data.movies || [];
      toast.success('Tải phim thành công!');
      
    } catch (error) {
      console.error('Lỗi khi tải danh sách phim:', {
        url: error.config?.url,
        status: error.response?.status,
        data: error.response?.data
      });
      this.error = error.response?.data?.message || 'Lỗi khi tải danh sách phim';
      toast.error(this.error);
      
      if (error.response?.status === 401) {
        setTimeout(() => {
          this.$router.push('/login');
        }, 1500);
      }
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    // Xem trailer của phim
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
  }

  }
};


</script>