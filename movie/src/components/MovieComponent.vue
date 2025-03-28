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
      <div v-for="movie in nowShowing" :key="movie.id" class="text-center">
        <div class="relative">
          <img :alt="'Movie poster for ' + movie.title" height="450" 
               :src="movie.poster" width="300" />
          <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
            {{ movie.rating }}
          </div>
        </div>
        <p class="mt-4">{{ movie.title }} ({{ movie.rating }})</p>
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
        <div v-for="movie in comingSoon" :key="movie.id" class="text-center">
          <div class="relative">
            <img :alt="'Movie poster for ' + movie.title" height="450" 
                 :src="movie.poster" width="300" />
            <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
              {{ movie.rating }}
            </div>
          </div>
          <p class="mt-4">{{ movie.title }} ({{ movie.rating }})</p>
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

export default {
  name: 'MovieComponent',
  components: {
    HeaderComponents, 
    FooterComponents
  },
  data() {
    return {
      nowShowing: [], // Danh sách phim đang chiếu
      comingSoon: []  // Danh sách phim sắp chiếu
    };
  },
  async created() {
    try {
      // Gọi API để lấy danh sách phim đang chiếu
      const nowShowingResponse = await axios.get('/api/movies/now-showing');
      this.nowShowing = nowShowingResponse.data;

      // Gọi API để lấy danh sách phim sắp chiếu
      const comingSoonResponse = await axios.get('/api/movies/coming-soon');
      this.comingSoon = comingSoonResponse.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu phim:', error);
      // Có thể thêm thông báo lỗi cho người dùng ở đây
    }
  }
};
</script>