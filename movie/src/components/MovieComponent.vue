<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <div class="flex justify-center mb-8 space-x-4">
            <button class="bg-gray-200 text-black font-bold py-2 px-4 rounded">
                ĐẶT VÉ NHANH
            </button>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    1. Chọn Rạp
                </option>
            </select>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    2. Chọn Phim
                </option>
            </select>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    3. Chọn Ngày
                </option>
            </select>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    4. Chọn Suất
                </option>
            </select>
            <button class="bg-purple-600 text-white font-bold py-2 px-4 rounded">
                ĐẶT NGAY
            </button>
        </div>
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
    <div class="flex justify-center mt-8">
      <button class="bg-yellow-500 text-black py-2 px-4 rounded">
        XEM THÊM
      </button>
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
      <div class="flex justify-center mt-8">
        <button class="bg-yellow-500 text-black py-2 px-4 rounded">
          XEM THÊM
        </button>
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
  data() {
  return {
    getMovies: [], // Danh sách phim
    isLoading: false, // Thêm trạng thái loading
    error: null // Thêm trạng thái lỗi
  };
},
async created() {
  this.isLoading = true;
  this.error = null;
  
  try {
    // Sử dụng biến môi trường cho base URL
    const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/movies';
    
    // Thêm token vào header nếu API yêu cầu xác thực
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
    
    // Gán dữ liệu phim
    this.getMovies = response.data.movies || [];
    
    // Hiển thị thông báo thành công (nếu cần)
    toast.success('Tải phim thành công!');
    
  } catch (error) {
    console.error('Lỗi khi tải danh sách phim:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    
    this.error = error.response?.data?.message || 'Lỗi khi tải danh sách phim';
    
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