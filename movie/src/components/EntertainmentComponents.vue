<template>
    <HeaderComponents />
    <div class="bg-blue-900 text-white m-8">
        <div class="text-center py-4">
            <h1 class="text-2xl font-bold">
                TẤT CẢ CÁC GIẢI TRÍ
            </h1>
        </div>
        <div class="space-y-4" v-if="entertainments.length">
            <a v-for="(item, index) in entertainments" :key="index" class="p-4" :href="`/entertainment-detail/${item.id}`">
                <div class="flex items-center justify-between p-4" :class="getBgColor(index)">
                    <div class="flex items-center">
                        <img :alt="`${item.name} logo`" class="mr-2" height="50" :src="item.logo" width="50" />
                        <span class="text-2xl font-bold">{{ item.name }}</span>
                    </div>
                    <img :alt="item.description" class="h-32 w-2/3 object-cover" :src="item.image" />
                </div>
            </a>
        </div>
        <div v-else class="text-center py-4">
            <p>Đang tải dữ liệu...</p>
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
    name: 'EntertainmentComponents',
    components: {
        HeaderComponents,
        FooterComponents
    },
    data() {
        return {
            entertainments: [],
            isLoading: false, // Thêm trạng thái loading
            error: null // Thêm trạng thái lỗi
        };
    },
    async created() {
    this.isLoading = true;
    this.error = null;
  
  try {
    // Sử dụng biến môi trường cho base URL
    const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/entertainments';
    
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
    this.getEntertainment = response.data.entertainments || [];
    
    // // Hiển thị thông báo thành công (nếu cần)
    // toast.success('Tải khu vui chơi thành công!');
    
  } catch (error) {
    console.error('Lỗi khi tải khu vui chơi:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    
    this.error = error.response?.data?.message || 'Lỗi khi tải khu vui chơi';
    
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
