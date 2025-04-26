<template>
    <div class="bg-gray-100 text-black">
        <div class="flex">
            <NavbarComponent />
            <div class="flex-1 p-6">
                <HeaderComponent />
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Quản lý ảnh</h1>
                    <div class="flex items-center">
                        <input class="border rounded-l px-4 py-2"
                            placeholder="Tìm kiếm theo Tên chính sách, Mã chính sách" type="text" />
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-r">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="bg-yellow-500 text-white px-4 py-2 ml-2 rounded">
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
                                <th class="py-2 px-4 border-b">Name </th>
                                <th class="py-2 px-4 border-b">Image </th>

                                <th class="py-2 px-4 border-b">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="(anhbia, index) in anhbias" :key="anhbia.anhbia_id">
                                <td class="py-2 px-4 border-b">{{ anhbia.anhbia_id }}</td>
                                <td class="py-2 px-4 border-b">{{ anhbia.name }}</td>
                                <td class="py-2 px-4 border-b" style="display: flex; justify-content: center;">
                                    <img :src="anhbia.banner_url" alt="Banner" class="h-20 w-40">
                                </td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="text-blue-500" @click="openModal('edit', anhbia)">
                                    <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', anhbia)">
                                    <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <!-- Modal Thêm mới/Chỉnh sửa -->
                <!-- Modal Thêm mới/Chỉnh sửa -->
                <div v-if="showModal && modalType !== 'delete'"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div
                        class="relative bg-white p-6 rounded shadow-lg w-full max-w-lg mx-auto overflow-y-auto h-auto max-h-full">
                        <!-- Close Icon -->
                        <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 class="text-xl font-bold mb-4">{{ modalType === 'add' ? 'Thêm mới' : 'Chỉnh sửa' }}</h2>
                        <form @submit.prevent="handleSubmit">
                            <label class="block mb-2">ID:</label>
                            <input type="text" v-model="form.anhbiaId" class="border px-4 py-2 w-full mb-4" disabled>

                            <label class="block mb-2">Name:</label>
                            <input type="text" v-model="form.name" class="border px-4 py-2 w-full mb-4">


                            <div class="mb-4">
                                <label class="block mb-2">Banner URL <span class="text-red-500">*</span>:</label>
                                <div class="flex items-center">
                                    <!-- Remove v-model from input[type="file"] -->
                                    <input type="file" @change="handleFileUpload('banner', $event)" class="aaa">
                                    <a v-if="form.trailerUrl" :href="form.trailerUrl" target="_blank"
                                        class="text-blue-500 hover:underline flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.5C7.30558 4.5 3.34791 7.38303 1.5 12c1.84791 4.617 5.80558 7.5 10.5 7.5s8.65209-2.88397 10.5-7.5c-1.84791-4.617-5.80558-7.5-10.5-7.5zM12 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                                        </svg>
                                        View file
                                    </a>

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



                <!-- Modal Xóa -->
                <div v-if="showModal && modalType === 'delete'"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
                        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
                        <div class="flex justify-end mt-4">
                            <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                @click="closeModal">Hủy</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded" @click="handleDelete">Xóa</button>
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
                policyCode: '',
                policyName: '',
                // Các trường khác
            },
            anhbias: [], // Mảng chứa danh sách phim
            errorMessage: '', // Thông báo lỗi
        };
    },
    methods: {
        // Trigger the hidden input for banner file upload
        triggerBannerUpload() {
            this.$refs.bannerFile.click();
        },

        
        handleFileUpload(field, event) {
            const file = event.target.files[0]; // Get the selected file

            if (file) {
                const isImage = field === 'banner';

                // Set file size limits
                const maxImageSize = 5 * 1024 * 1024; // 5MB for images

                // Check file size based on type
                if (isImage && file.size > maxImageSize) {
                    alert('Image file size exceeds the 5MB limit.');
                    return;
                }
                

                // For images: Use FileReader to preview the image in base64 format
                if (isImage) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.form[`${field}Url`] = e.target.result; // Set base64 preview for the image
                        this.form[field] = file; // Store the actual image file for upload
                    };
                    reader.readAsDataURL(file); // Convert the image file to base64
                }

                
            }
        },



        openModal(type, anhbia = null) {
            this.modalType = type;
            this.showModal = true;

            if (type === 'edit' && anhbia) { // Changed 'movies' to 'movie' here as well for consistency
                // Gán dữ liệu của phim vào form để chỉnh sửa
                this.form.anhbiaId = anhbia.anhbia_id;
                this.form.name = anhbia.name;
                this.form.bannerUrl = anhbia.banner_url;
            } else if (type === 'add') {
                // Đặt form về trạng thái trống khi thêm mới
                this.form = { /* ... */ };
            } else if (type === 'delete' && anhbia) { // Changed 'movies' to 'movie' here
                // Chỉ cần lưu movie_id để xóa
                console.log('Deleting anh object received:', anhbia);
                this.form.anhbiaId = anhbia.anhbia_id;
                this.form.name = anhbia.name;
            }
        },

        closeModal() {
            this.showModal = false;
      // Reset form after closing
            this.form = {
                anhbiaId: '',
                name: '',
                bannerUrl: '',
                banner: null,
            };
        },
        async handleSubmit() {
            console.log('cookies', Cookies.get());

            const token = Cookies.get('authToken'); // Get token from cookies
            console.log(token);
            if (!token) {
                alert('Token not found! Please log in.');
                return;
            }

            // Decode the token (assuming JWT)
            const decodedToken = jwtDecode(token);

            // Check if the user has the admin role
            if (decodedToken.role !== 'admin') {
                alert('You do not have the necessary permissions.');
                return;
            }

            // Prepare FormData to handle file uploads (banner & trailer)
            const formData = new FormData();
            formData.append('name', this.form.name);

            // Append banner and trailer files if they exist
            if (this.form.banner) {
                formData.append('banner', this.form.banner); // Append banner file
            }
            

            // Define API endpoint and method
            const url =
                this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/anhbias`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/anhbias/${this.form.anhbiaId}`;

            const method = this.modalType === 'add' ? 'POST' : 'PUT';

            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach the token
                    },
                    body: formData, // Use FormData instead of JSON
                });

                if (response.ok) {
                    alert(this.modalType === 'add' ? 'anh added successfully!' : 'anh updated successfully!');
                } else {
                    // Log more details about the error
                    console.error('Response status:', response.status);
                    console.error('Response status text:', response.statusText);

                    // Try to parse the response as JSON to get the error message from the server
                    response.json().then(errorData => {
                        console.error('Error data:', errorData); // Log the server error details
                        alert('Failed to perform the action: ' + errorData.message);
                    }).catch(err => {
                        // Handle case where response is not valid JSON
                        console.error('Failed to parse response as JSON:', err);
                        alert('Failed to perform the action. Please try again.');
                    });
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }

            this.closeModal(); // Close the modal after submission
        },

        // Trong phần methods của component
        async handleDelete() {
      console.log('Deleting anhbiaId (inside handleDelete):', this.form.anhbiaId);

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
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/anhbias/${this.form.anhbiaId}`;
        const response = await axios.delete(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          alert('anh deleted successfully!');
          this.getallAnhs(); // Refresh the movie list after successful deletion
        } else if (response.status === 404) {
          alert('anh not found on the server.');
        } else {
          console.error('Failed to delete anh:', response.data);
          alert('Failed to delete anh: ' + (response.data.message || 'An unexpected error occurred.'));
        }
      } catch (error) {
        console.error('Error deleting anh:', error.response ? error.response.data : error.message);
        alert('An error occurred while deleting the anh.');
      }

      this.closeModal(); // Close the delete modal after attempting to delete
    },
        async getallAnhs() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/anhbias';
                const response = await axios.get(apiUrl); // Gọi API để lấy danh sách phim

                // Log toàn bộ response để xem cấu trúc dữ liệu trả về
                console.log('Full API response:', response);

                // Kiểm tra xem response.data chứa gì
                if (response.data && response.data.anhbias) {
                    this.anhbias = response.data.anhbias; // Gán danh sách phim nếu đúng cấu trúc
                } else if (response.data && Array.isArray(response.data)) {
                    this.anhbias = response.data; // Nếu response trả về là một mảng
                } else {
                    this.anhbias = []; // Nếu không có phim
                    this.errorMessage = 'Không có phim nào.';
                }

                console.log('Anhbias:', this.anhbias);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách phim:', error.response ? error.response.data : error.message);
                this.errorMessage = 'Lỗi khi lấy danh sách phim.';
            }
        }

    },
    beforeCreate() {
        // Gọi hàm checkAuthAndRedirect để kiểm tra đăng nhập
        checkAuthAndRedirect(this.$router);
    },
    mounted() {
        // Gọi hàm getallMovie khi component được mount
        this.getallAnhs();
    }
};
</script>
