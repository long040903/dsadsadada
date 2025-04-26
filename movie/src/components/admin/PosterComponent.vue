<template>
    <div class="bg-gray-100 text-black">
        <div class="flex">
            <NavbarComponent />
            <div class="flex-1 p-6">
                <HeaderComponent />
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Quản lý poster</h1>
                    <div class="flex items-center">
                        <input class="border rounded-l px-4 py-2"
                               placeholder="Tìm kiếm theo Tên" type="text" v-model="searchName" />
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-r">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="bg-yellow-500 text-white px-4 py-2 ml-2 rounded" @click="getallPosters">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 mb-4 rounded" @click="openModal('add')">
                    + Thêm mới
                </button>
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b">ID</th>
                                <th class="py-2 px-4 border-b">Name</th>
                                <th class="py-2 px-4 border-b">Image</th>
                                <th class="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="poster in filteredPosters" :key="poster.poster_id">
                                <td class="py-2 px-4 border-b">{{ poster.poster_id }}</td>
                                <td class="py-2 px-4 border-b">{{ poster.name }}</td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="custom-hover-effect" @click="openImagePopup(poster.images)">
                                        Xem ảnh
                                    </button>
                                </td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="text-blue-500" @click="openModal('edit', poster)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', poster)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                


                <div v-if="showModal && modalType !== 'delete'"
                     class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        class="relative bg-white p-6 rounded shadow-lg w-full max-w-lg mx-auto overflow-y-auto h-auto max-h-full">
                        <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 class="text-xl font-bold mb-4">{{ modalType === 'add' ? 'Thêm mới' : 'Chỉnh sửa' }}</h2>
                        <form @submit.prevent="handleSubmit">
                            <label class="block mb-2">Name:</label>
                            <input type="text" v-model="form.name" class="border px-4 py-2 w-full mb-4">

                            

                            <div class="mb-4">
                                <label class="block mb-2">Hình ảnh Poster <span class="text-red-500">*</span>:</label>
                                <input type="file" @change="handleFileUpload($event)" class="aaa" multiple>
                                <div v-if="form.images.length > 0" class="mt-2">
                                    <p class="italic text-gray-600">Đã chọn {{ form.images.length }} hình ảnh.</p>
                                    </div>
                            </div>

                            <div class="flex justify-end">
                                <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                        @click="closeModal">Đóng</button>
                                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Lưu</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div v-if="showModal && modalType === 'delete'"
                     class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
                        <p>Bạn có chắc chắn muốn xóa poster <strong>{{ form.name }}</strong> không?</p>
                        <div class="flex justify-end mt-4">
                            <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    @click="closeModal">Hủy</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded" @click="handleDelete">Xóa</button>
                        </div>
                    </div>
                </div>



                <div v-if="showImagePopup" class="fixed z-20 inset-0 bg-black bg-opacity-80 flex justify-center items-center">
  <div class="relative bg-white rounded-md p-4 max-w-3xl max-h-screen overflow-auto">
    <img v-if="selectedPosterImages && selectedPosterImages.length > 0" :src="selectedPosterImages[currentImageIndex]" alt="Poster Image" class="w-full object-contain mb-4">
    <p v-else class="text-gray-600 italic">Không có hình ảnh để hiển thị.</p>
    <div v-if="selectedPosterImages && selectedPosterImages.length > 0" class="flex flex-col items-center">
      <div class="flex justify-between w-full mb-2">
        <button @click="prevImage" :disabled="currentImageIndex === 0" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50">
          Trước
        </button>
        <button @click="nextImage" :disabled="currentImageIndex === selectedPosterImages.length - 1" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50">
          Sau
        </button>
      </div>
      
      <span class="mt-2 text-sm text-gray-600">{{ currentImageIndex + 1 }} / {{ selectedPosterImages.length }}</span>

      <div class="w-full flex justify-end">
        <button @click="closeImagePopup" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Đóng
        </button>
        </div>
    </div>
  </div>
</div>



            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from './NavbarComponent.vue';
import HeaderComponent from './HeaderComponents.vue';
import { checkAuthAndRedirect } from '@/utils/authGuard';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default {
    name: 'Anhbia',
    components: {
        NavbarComponent,
        HeaderComponent
    },
    data() {
        return {
            showModal: false,
            modalType: '', // 'add', 'edit', 'delete'
            form: {
                posterId: '',
                name: '',
                images: [], // Mảng chứa các file ảnh đã chọn
                imageUrl: '',
                image: null,
                cinemaId: '', // Để người dùng có thể chọn rạp (tùy chọn)
            },
            posters: [],
            cinemas: [], // Mảng chứa danh sách rạp
            errorMessage: '', // Thông báo lỗi
            searchName: '',
            selectedPosterImages: null, // Khởi tạo là null hoặc []
            showImagePopup: false,
            currentImageIndex: 0,
        };
    },
    computed: {
        filteredPosters() {
            if (this.posters && Array.isArray(this.posters)) {
                return this.posters.filter(poster =>
                    !this.searchName || (poster.name && poster.name.toLowerCase().includes(this.searchName.toLowerCase()))
                );
            } else {
                console.error('Error: this.posters is not an array:', this.posters);
                return [];
            }
        },
    },
    methods: {
        triggerImageUpload() {
            this.$refs.imageFile.click();
        },

        handleFileUpload(event) {
            const files = Array.from(event.target.files);
            const maxImageSize = 5 * 1024 * 1024; // 5MB

            for (const file of files) {
                if (file.type.startsWith('image/')) {
                    if (file.size > maxImageSize) {
                        alert(`Kích thước ảnh ${file.name} vượt quá 5MB.`);
                        continue;
                    }
                    this.form.images.push(file);
                } else {
                    alert(`Tệp ${file.name} không phải là hình ảnh.`);
                }
            }
        },

        openModal(type, poster = null) {
            this.modalType = type;
            this.showModal = true;

            if (type === 'edit' && poster) {
                this.form.posterId = poster.poster_id;
                this.form.name = poster.name;
                this.form.imageUrl = poster.image_url;
                this.form.cinemaId = poster.cinema_id || ''; // Use cinema_id directly
            } else if (type === 'add') {
                this.form = { posterId: '', name: '', imageUrl: '', images: [], cinemaId: '' }; // Reset images array
            } else if (type === 'delete' && poster) {
                this.form.posterId = poster.poster_id;
                this.form.name = poster.name;
            }
        },

        closeModal() {
            this.showModal = false;
            this.form = { posterId: '', name: '', imageUrl: '', images: [], cinemaId: '' }; // Reset images array
        },

        async handleSubmit() {
            const token = Cookies.get('authToken');
            if (!token) {
                alert('Token not found! Please log in.');
                return;
            }

            const decodedToken = jwtDecode(token);
            if (decodedToken.role !== 'admin') {
                alert('You do not have the necessary permissions.');
                return;
            }
            console.log('Giá trị cinemaId trước khi gửi:', this.form.cinemaId);

            const formData = new FormData();
            formData.append('name', this.form.name);
            for (const image of this.form.images) {
                formData.append('images', image); // Gửi nhiều file với cùng key 'images'
            }
            formData.append('cinema_id', this.form.cinemaId || null);

            const url =
                this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/posters`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/posters/${this.form.posterId}`;

            const method = this.modalType === 'add' ? 'POST' : 'PUT';

            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (response.ok) {
                    alert(`Poster ${this.modalType === 'add' ? 'added' : 'updated'} successfully!`);
                    this.getallPosters();
                } else {
                    console.error('Response status:', response.status);
                    response.json().then(errorData => {
                        console.error('Error data:', errorData);
                        alert('Failed to perform the action: ' + errorData.message);
                    }).catch(err => {
                        console.error('Failed to parse response as JSON:', err);
                        alert('Failed to perform the action. Please try again.');
                    });
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }

            this.closeModal();
        },

        async handleDelete() {
            const token = Cookies.get('authToken');
            if (!token) {
                alert('Token not found! Please log in.');
                return;
            }
            const decodedToken = jwtDecode(token);
            if (decodedToken.role !== 'admin') {
                alert('You do not have the necessary permissions.');
                return;
            }

            try {
                const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/posters/${this.form.posterId}`;
                const response = await axios.delete(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    alert('Poster deleted successfully!');
                    this.getallPosters();
                } else if (response.status === 404) {
                    alert('Poster not found on the server.');
                } else {
                    console.error('Failed to delete poster:', response.data);
                    alert('Failed to delete poster: ' + (response.data.message || 'An unexpected error occurred.'));
                }
            } catch (error) {
                console.error('Error deleting poster:', error.response ? error.response.data : error.message);
                alert('An error occurred while deleting the poster.');
            }

            this.closeModal();
        },

        openImagePopup(images) {
      if (images && Array.isArray(images)) {
        this.selectedPosterImages = images;
        this.currentImageIndex = 0;
        this.showImagePopup = true;
      } else {
        console.warn('Không có hình ảnh để hiển thị cho poster này.');
        this.selectedPosterImages = [];
        this.showImagePopup = false;
      }
    },

closeImagePopup() {
      this.showImagePopup = false;
      this.selectedPosterImages = null; // Đảm bảo reset về null hoặc []
      this.currentImageIndex = 0;
    },

        nextImage() {
      if (this.selectedPosterImages && this.currentImageIndex < this.selectedPosterImages.length - 1) {
        this.currentImageIndex++;
      }
    },

    prevImage() {
      if (this.selectedPosterImages && this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },


    async getallPosters() {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/posters';
        const response = await axios.get(apiUrl);
        if (response.data && response.data.posters && Array.isArray(response.data.posters)) {
          this.posters = response.data.posters.map(poster => ({
            ...poster,
            images: poster.image_urls || [] // Đảm bảo images luôn là một mảng
          }));
          console.log('Posters data:', this.posters);
        } else if (response.data && Array.isArray(response.data)) {
          this.posters = response.data.map(poster => ({
            ...poster,
            images: poster.image_urls || [] // Đảm bảo images luôn là một mảng
          }));
          console.log('Posters data (direct array):', this.posters);
        } else {
          console.error('Error: API returned unexpected data format for posters:', response.data);
          this.posters = [];
          this.errorMessage = 'Lỗi khi lấy danh sách poster từ API.';
        }
      } catch (error) {
        console.error('Lỗi khi lấy danh sách poster:', error.response ? error.response.data : error.message);
        this.errorMessage = 'Lỗi khi lấy danh sách poster.';
      }
    },

        async getAllCinemas() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/cinemas';
                const response = await axios.get(apiUrl);
                this.cinemas = response.data;
                console.log('Cinemas data:', this.cinemas);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách rạp:', error.response ? error.response.data : error.message);
                this.errorMessage = 'Lỗi khi lấy danh sách rạp.';
            }
        }
    },
    beforeCreate() {
        checkAuthAndRedirect(this.$router);
    },
    mounted() {
        this.getallPosters();
    }
};
</script>


<style>
.custom-hover-effect {
  background-color: #d1d5db; /* Màu xám */
  color: #374151; /* Màu chữ xám đậm */
  padding: 0.5rem 1rem; /* Khoảng đệm */
  border-radius: 0.25rem; /* Bo tròn góc */
  background-image: linear-gradient(to right, transparent 50%, #bef264 50%); /* Gradient trong suốt và xanh chuối */
  background-size: 200% 100%; /* Kích thước nền gấp đôi */
  background-position: left bottom; /* Vị trí nền ban đầu */
  transition: background-position 0.5s ease-in-out, color 0.5s ease-in-out; /* Hiệu ứng chuyển tiếp */
}

.custom-hover-effect:hover {
  background-position: right bottom; /* Di chuyển nền khi hover */
  color: #000000; /* Màu chữ trắng khi hover */
}
</style>
