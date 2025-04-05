<template>
    <HeaderComponents />
    <div class="bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <div class="container mx-auto p-4">
            <div class="text-center">
                <img v-if="entertainment.image" :alt="entertainment.altText" class="mx-auto" height="400" :src="entertainment.image" width="1200" />
            </div>
            <div class="text-center mt-8">
                <img v-if="entertainment.logo" :alt="`${entertainment.name} logo`" class="mx-auto" height="100" :src="entertainment.logo" width="200" />
            </div>
            <div class="text-center mt-8">
                <h1 class="text-4xl font-bold">{{ entertainment.name }}</h1>
                <p class="mt-4 text-lg">{{ entertainment.description }}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-center">
                <div v-for="(location, index) in entertainment.locations" :key="index">
                    <h2 class="text-xl font-bold">{{ location.name }}</h2>
                    <p>{{ location.address }}</p>
                    <a class="text-yellow-400" :href="location.facebook">
                        <i class="fab fa-facebook"></i>
                        {{ location.facebook }}
                    </a>
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
    name: 'EntertainmentDetailComponent',
    components: {
        HeaderComponents,
        FooterComponents
    },
    data() {
        return {
            entertainments_detail: [],
            isLoading: false, // Thêm trạng thái loading
            error: null // Thêm trạng thái lỗi
        };
    },
    async created() {
    this.isLoading = true;
    this.error = null;
  
  try {
    // Sử dụng biến môi trường cho base URL
    const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/entertainments_detail';
    
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
    
    // Gán dữ liệu khu vui chơi
    this.getEntertainmentDetail = response.data.entertainments_detail || [];
    
    // // Hiển thị thông báo thành công (nếu cần)
    // toast.success('Tải khu vui chơi thành công!');
    
  } catch (error) {
    console.error('Lỗi khi tải thông tin khu vui chơi:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    
    this.error = error.response?.data?.message || 'Lỗi khi tải thông tin khu vui chơi';
    
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
