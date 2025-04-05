<template>
    <div class="bg-gray-100 text-black">
        <div class="flex">
            <NavbarComponent />
            <div class="flex-1 p-6">
                <HeaderComponent />
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Quản lý phim</h1>
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
                                <th class="py-2 px-4 border-b">STT</th>
                                <th class="py-2 px-4 border-b">Tên phim</th>
                                <th class="py-2 px-4 border-b">Thể loại	</th>
                                <th class="py-2 px-4 border-b">Rạp chiếu	</th>
                                <th class="py-2 px-4 border-b">Ngày chiếu </th>
                                <th class="py-2 px-4 border-b">Giờ chiếu</th>
                                <th class="py-2 px-4 border-b">Thời lượng</th> <!-- Cột mới cho Trailer -->
                                <th class="py-2 px-4 border-b">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cinemas, index) in cinemas" :key="cinemas.cinema_id">
                                <td class="py-2 px-4 border-b text-center">{{ index + 1 }}</td> <!-- STT (Index) -->
                                <td class="py-2 px-4 border-b text-center">{{ cinemas.cinema_id }}</td> <!-- Mã phim -->
                                <td class="py-2 px-4 border-b text-center">{{ cinemas.name }}</td> <!-- Tên phim -->
                                <td class="py-2 px-4 border-b text-center">{{ cinemas.address }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ cinemas.phone }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ cinemas.capacity }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ cinemas.capacity }}</td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="text-blue-500" @click="openModal('edit', cinemas)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', cinemas)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>

                            </tr>
                        </tbody>
                        <div v-if="errorMessage"
                            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            {{ errorMessage }}
                        </div>

                    </table>
                </div>
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
                            <label class="block mb-2">Tên phim:</label>
                            <input type="text" v-model="form.cinemaId" class="border px-4 py-2 w-full mb-4" disabled>

                            <label class="block mb-2">Thể loại	:</label>
                            <input type="text" v-model="form.name" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Rạp chiếu	 :</label>
                            <input type="text" v-model="form.address" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Ngày chiếu:</label>
                            <input type="text" v-model="form.phone" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Giờ chiếu:</label>
                            <input type="number" v-model="form.capacity" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Thời lượng:</label>
                            <input type="number" v-model="form.capacity" class="border px-4 py-2 w-full mb-4">

                            <div class="flex justify-end">
                                <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    @click="closeModal">Đóng</button>
                                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Lưu</button>
                            </div>
                        </form>
                    </div>
                </div>



                <!-- Modal Xóa -->
                <!-- Modal Xóa -->
                <div v-if="showModal && modalType === 'delete'"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
                        <p>Bạn có chắc chắn muốn xóa rạp <strong>{{ form.name }}</strong> (ID: {{ form.cinemaId }})
                            không?</p>
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
    name: 'ShowtimePage',
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
            cinemas: [], // Mảng chứa danh sách phim
            errorMessage: '', // Thông báo lỗi
        };
    },

    methods: {
        openModal(type, cinemas = null) {
            this.modalType = type;
            this.showModal = true;

            if (type === 'edit' && cinemas) {
                console.log('Cinemas Data:', cinemas);
                // Gán dữ liệu của phim vào form để chỉnh sửa

                this.form.cinemaId = cinemas.cinema_id;
                this.form.name = cinemas.name;
                this.form.address = cinemas.address;
                this.form.phone = cinemas.phone;
                this.form.capacity = cinemas.capacity;

            } else if (type === 'add') {
                // Đặt form về trạng thái trống khi thêm mới
                this.form = {
                    cinemaId: '',
                    name: '',
                    address: '',
                    phone: '',
                    capacity: '',

                };
            } else if (type === 'delete' && cinemas) {  // Sửa từ 'cinema' thành 'cinemas'
        this.form = {
            cinemaId: cinemas.cinema_id,
            name: cinemas.name  // Thêm dòng này để hiển thị Thể loại	
        };
    }
        },

        closeModal() {
            this.showModal = false;
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

            try {
                const cinemaData = {
                    name: this.form.name,
                    address: this.form.address,
                    phone: this.form.phone,
                    capacity: this.form.capacity
                };

                const url = this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/cinemas`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/cinemas/${this.form.cinemaId}`;

                const method = this.modalType === 'add' ? 'POST' : 'PUT';

                const response = await fetch(url, {
                    method,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(cinemaData)
                });

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message || 'Failed to perform the action');
                }

                alert(this.modalType === 'add'
                    ? 'Cinema added successfully!'
                    : 'Cinema updated successfully!');

                // Refresh the cinema list after successful operation
                this.getallMovie();
                this.closeModal();
            } catch (error) {
                console.error('Error:', error);
                alert(`Error: ${error.message}`);
            }
        },
        async handleDelete() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    alert('Token not found! Please log in.');
                    return;
                }

                // Debug log to verify the ID
                console.log('Attempting to delete cinema with ID:', this.form.cinemaId);

                if (!this.form.cinemaId) {
                    throw new Error('No cinema selected for deletion');
                }


                const response = await axios.delete(
                    `${import.meta.env.VITE_API_BASE_URL}/api/cinemas/${this.form.cinemaId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.status !== 200) {
                    throw new Error(response.data.message || 'Failed to delete cinema');
                }

                alert('Cinema deleted successfully!');
                this.getallMovie(); // Refresh the list
                this.closeModal();
            } catch (error) {
                console.error('Delete error:', error);
                alert(`Delete failed: ${error.message}`);
            }
        },
        async getallMovie() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/cinemas';
                const response = await axios.get(apiUrl); // Gọi API để lấy danh sách phim

                // Log toàn bộ response để xem cấu trúc dữ liệu trả về
                console.log('Full API response:', response);

                // Kiểm tra xem response.data chứa gì
                if (response.data && response.data.cinemas) {
                    this.cinemas = response.data.cinemas; // Gán danh sách phim nếu đúng cấu trúc
                } else if (response.data && Array.isArray(response.data)) {
                    this.cinemas = response.data;
                } else {
                    this.cinemas = []; // Nếu không có phim
                    this.errorMessage = 'Không có phim nào.';
                }

                console.log('cinemas:', this.cinemas);
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
        this.getallMovie();
    }
};
</script>
