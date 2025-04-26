<template>
    <div class="bg-gray-100 text-black">
        <div class="flex">
            <NavbarComponent />
            <div class="flex-1 p-6">
                <HeaderComponent />
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Quản lý map</h1>
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
                    <table class="min-w-full bg-white text-center">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b">ID</th>
                                <th class="py-2 px-4 border-b">Cinema</th>
                                <th class="py-2 px-4 border-b">Name</th>
                                <th class="py-2 px-4 border-b">bản đồ</th>
                                <th class="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(map, index) in maps" :key="map.map_id">
                                <td class="py-2 px-4 border-b">{{ map.map_id }}</td>

                                <td class="py-2 px-4 border-b">{{ map.name }}</td>
                                <td class="py-2 px-4 border-b">{{ map.cinema ? map.cinema.name : 'Không có rạp' }}</td> <td class="py-2 px-4 border-b">
                                    <button class="text-green-500 hover:underline" @click="showMap(map)">
                                        <i class="fas fa-map-marked-alt"></i> Xem
                                    </button>
                                </td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="text-blue-500" @click="openModal('edit', map)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', map)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="showModal && modalType !== 'delete'"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div
                        class="relative bg-white p-6 rounded shadow-lg w-full max-w-lg mx-auto overflow-y-auto h-auto max-h-full">
                        <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 class="text-xl font-bold mb-4">{{ modalType === 'add' ? 'Thêm mới map' : 'Chỉnh sửa map' }}
                        </h2>
                        <form @submit.prevent="handleSubmit">
                            

                            <label class="block mb-2">Tên map:</label>
                            <input type="text" v-model="form.name" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Rạp:</label>
                            <select v-model="form.cinema_id" class="border px-4 py-2 w-full mb-4">
                            <option value="" disabled>Chọn rạp</option>
                            <option v-for="cinema in cinemas" :key="cinema.cinema_id" :value="cinema.cinema_id">
                                {{ cinema.name }}
                            </option>
                            </select>

                            <div class="mb-4">
                                <label class="block mb-2">File bản đồ HTML <span class="text-red-500">*</span>:</label>
                                <div class="flex items-center">
                                    <input type="file" @change="handleFileUpload('path', $event)" class="aa"
                                        ref="mapFile">
                                    <span v-if="form.mapFile && form.mapFile.name" class="ml-2 text-gray-600">
                                        {{ form.mapFile.name }}
                                    </span>
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
                        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
                        <div class="flex justify-end mt-4">
                            <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                @click="closeModal">Hủy</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded" @click="handleDelete">Xóa</button>
                        </div>
                    </div>
                </div>

                <div v-if="showMapModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="relative bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-auto overflow-auto max-h-screen">
                        <button @click="showMapModal = false"
                            class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 class="text-xl font-bold mb-4">Nội dung bản đồ</h2>
                        <iframe
                            v-if="mapContent"
                            :src="mapContent"
                            width="100%"
                            height="450"
                            style="border:0;"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div class="flex justify-end mt-4">
                            <button @click="showMapModal = false"
                                class="bg-gray-500 text-white px-4 py-2 rounded">Đóng</button>
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
// Thêm import cho DOMPurify
import DOMPurify from 'dompurify';

export default {
    name: 'Map',
    components: {
        NavbarComponent,
        HeaderComponent
    },
    data() {
        return {
            showModal: false,
            modalType: '',
            showMapModal: false,
            mapContent: '',
            selectedMap: null,
            form: {
                mapId: '',
                cinema_id: '',
                name: '',
                pathUrl: '',
                path: null,
            },
            maps: [],
            cinemas: [],
            errorMessage: '',
        };
    },
    methods: {
        triggerPathUpload() {
            this.$refs.mapFile.click();
        },

        handleFileUpload(field, event) {
            const file = event.target.files[0];
            if (file) {
                this.form[field] = file;
                console.log('File selected in handleFileUpload:', this.form[field]);
            }
        },

        openModal(type, map = null) {
            this.modalType = type;
            this.showModal = true;
            if (type === 'edit' && map) {
                this.form.mapId = map.map_id;
                this.form.name = map.name;
                this.form.cinemaId = map.cinema.cinema_id;
                this.form.pathUrl = map.map_file_path;
                this.form.path = null;
            } else if (type === 'add') {
                this.form = { mapId: '',cinemaId: '', name: '', pathUrl: '', path: null };
            } else if (type === 'delete' && map) {
                this.form.mapId = map.map_id;
                this.form.name = map.name;
            }
        },

        closeModal() {
            this.showModal = false;
            this.form = { mapId: '',cinemaId: '', name: '', pathUrl: '', path: null };
        },

        async handleSubmit() {
            console.log('this.form.path before submit:', this.form.path);

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

            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('cinema_id', this.form.cinemaId || null);

            if (this.form.path) {
                formData.append('path', this.form.path);
            }

            const url =
                this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/maps`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/maps/${this.form.mapId}`;

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
                    alert(this.modalType === 'add' ? 'map added successfully!' : 'map updated successfully!');
                    this.getallMap();
                    this.closeModal();
                } else {
                    console.error('Response status:', response.status);
                    console.error('Response status text:', response.statusText);
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
        },

        async handleDelete() {
            console.log('Deleting mapId (inside handleDelete):', this.form.mapId);

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
                const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/maps/${this.form.mapId}`;
                const response = await axios.delete(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    alert('map deleted successfully!');
                    this.getallMap();
                } else if (response.status === 404) {
                    alert('map not found on the server.');
                } else {
                    console.error('Failed to delete map:', response.data);
                    alert('Failed to delete map: ' + (response.data.message || 'An unexpected error occurred.'));
                }
            } catch (error) {
                console.error('Error deleting map:', error.response ? error.response.data : error.message);
                alert('An error occurred while deleting the map.');
            }

            this.closeModal();
        },

        async showMap(map) {
            this.selectedMap = map;
            try {
                const fileUrl = `${import.meta.env.VITE_API_BASE_URL}/api/maps/content/${map.map_file_path}`;
                const response = await fetch(fileUrl);
                if (response.ok) {
                    // Sử dụng DOMPurify để làm sạch HTML trước khi gán vào mapContent
                    this.mapContent = DOMPurify.sanitize(await response.text());
                    this.showMapModal = true;
                } else {
                    alert('Không thể tải nội dung bản đồ.');
                }
            } catch (error) {
                console.error('Lỗi khi tải nội dung bản đồ:', error);
                alert('Lỗi khi tải nội dung bản đồ.');
            }
        },

        async getallCinema() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/cinemas';
                const response = await axios.get(apiUrl);

                console.log('Full API response (Cinemas):', response);

                if (response.data && response.data.cinemas) {
                    this.cinemas = response.data.cinemas;
                } else if (response.data && Array.isArray(response.data)) {
                    this.cinemas = response.data;
                } else {
                    this.cinemas = [];
                    this.errorMessage = 'Không có rạp nào.';
                }

                console.log('cinemas:', this.cinemas);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách rạp:', error.response ? error.response.data : error.message);
                this.errorMessage = 'Lỗi khi lấy danh sách rạp.';
            }
        },

        async getallMap() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/maps';
                const response = await axios.get(apiUrl);
                console.log('Full API response:', response);
                if (response.data && response.data.maps) {
                    this.maps = response.data.maps;
                } else if (response.data && Array.isArray(response.data)) {
                    this.maps = response.data;
                } else {
                    this.maps = [];
                    this.errorMessage = 'Không có map nào.';
                }
                console.log('maps:', this.maps);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách map:', error.response ? error.response.data : error.message);
                this.errorMessage = 'Lỗi khi lấy danh sách map.';
            }
        }
    },
    beforeCreate() {
        checkAuthAndRedirect(this.$router);
    },
    mounted() {
        this.getallMap();
        this.getallCinema();
    }
};
</script>