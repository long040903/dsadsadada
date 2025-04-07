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
                                <th class="py-2 px-4 border-b">Thể loại</th>
                                <th class="py-2 px-4 border-b">Rạp chiếu</th>
                                <th class="py-2 px-4 border-b">Ngày chiếu</th>
                                <th class="py-2 px-4 border-b">Giờ chiếu</th>
                                <th class="py-2 px-4 border-b">Thời lượng</th>
                                <th class="py-2 px-4 border-b">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(showtime, index) in showtimes" :key="showtime.id">
                                <td class="py-2 px-4 border-b text-center">{{ index + 1 }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ showtime.movieName }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ showtime.genre }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ showtime.cinemaName }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ showtime.showDate }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ showtime.showTime }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ showtime.duration }} phút</td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="text-blue-500" @click="openModal('edit', showtime)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', showtime)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="errorMessage"
                        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                        {{ errorMessage }}
                    </div>
                </div>


                <!-- Modal Thêm mới / Chỉnh sửa -->
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

                        <h2 class="text-xl font-bold mb-4">{{ modalType === 'add' ? 'Thêm suất chiếu' : 'Chỉnh sửa suất chiếu' }}</h2>
                        <form @submit.prevent="handleSubmit">
                            <label class="block mb-2">Tên phim:</label>
                            <select v-model="form.movieId" class="border px-4 py-2 w-full mb-4" required>
                                <option value="">-- Chọn phim --</option>
                                <option v-for="movie in movies" :key="movie.movie_id" :value="movie.movie_id">
                                    {{ movie.title }} ({{ movie.genre }})
                                </option>
                            </select>

                            <label class="block mb-2">Rạp chiếu:</label>
                            <div v-show="loadingCinemas" class="mb-4">
                                <p>Đang tải danh sách rạp chiếu...</p>
                            </div>
                            <div v-show="cinemaError" class="mb-4 text-red-500">
                                {{ cinemaError }}
                            </div>
                            <select v-model="form.cinemaId" class="border px-4 py-2 w-full mb-4" required>
                                <option value="">-- Chọn rạp --</option>
                                <option v-for="cinema in cinemas" :key="cinema.cinema_id" :value="cinema.cinema_id">
                                    {{ cinema.name }} - {{ cinema.address }}
                                </option>
                            </select>

                            <label class="block mb-2">Ngày chiếu:</label>
                            <input type="date" v-model="form.showDate" class="border px-4 py-2 w-full mb-4" required>

                            <label class="block mb-2">Giờ chiếu:</label>
                            <input type="time" v-model="form.showTime" class="border px-4 py-2 w-full mb-4" required>

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
                        <p>Bạn có chắc chắn muốn xóa suất chiếu <strong>{{ form.movieName }}</strong> vào {{
                            form.showDate }} lúc {{ form.showTime }} không?</p>
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
                showtimeId: '',
                movieId: '',
                cinemaId: '',
                showDate: '',
                showTime: ''
            },
            showtimes: [], // Danh sách lịch chiếu
            movies: [],    // Danh sách phim
            cinemas: [],   // Danh sách rạp
            errorMessage: '',
        };
    },

    methods: {
        async getAllMovies() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/movies`);
                this.movies = response.data?.movies || [];
            } catch (error) {
                console.error('Lỗi khi lấy danh sách phim:', error);
            }
        },

        async getAllCinemas() {
            this.loadingCinemas = true;
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/cinemas`);
                // Thử cả 2 cách nếu không chắc cấu trúc response
                this.cinemas = response.data?.cinemas || response.data || [];
                console.log('Formatted cinemas:', this.cinemas);
            } catch (error) {
                console.error('Error:', error.response?.data || error.message);
                this.cinemaError = 'Lỗi khi tải dữ liệu';
            } finally {
                this.loadingCinemas = false;
            }
        },
        openModal(type, showtime = null) {
            this.modalType = type;
            this.showModal = true;

            if (type === 'edit' && showtime) {
                this.form = {
                    showtimeId: showtime.showtimeId,
                    movieId: showtime.movieId,
                    cinemaId: showtime.cinemaId,
                    showDate: showtime.showDate,
                    showTime: showtime.showTime,
                    duration: showtime.duration
                };
            } else if (type === 'add') {
                this.form = {
                    showtimeId: '',
                    movieId: '',
                    cinemaId: '',
                    showDate: '',
                    showTime: '',
                    duration: ''
                };
            } else if (type === 'delete' && showtime) {
                this.form = {
                    showtimeId: showtime.showtimeId,
                    movieName: showtime.movieName,
                    showDate: showtime.showDate,
                    showTime: showtime.showTime
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
                const data = {
                    movie_id: this.form.movieId,
                    cinema_id: this.form.cinemaId,
                    show_date: this.form.showDate,
                    show_time: this.form.showTime + ':00' // Thêm giây vào thời gian
                };

                const url = this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/showtimes/${this.form.showtimeId}`;

                const method = this.modalType === 'add' ? 'POST' : 'PUT';

                const response = await fetch(url, {
                    method,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message || 'Thao tác thất bại');
                }

                alert(this.modalType === 'add' ? 'Thêm lịch chiếu thành công!' : 'Cập nhật lịch chiếu thành công!');
                this.getAllShowtimes();
                this.closeModal();
            } catch (error) {
                console.error('Error:', error);
                alert(`Lỗi: ${error.message}`);
            }
        },

        async handleDelete() {
            const token = Cookies.get('authToken');
            if (!token) {
                alert('Token not found! Please log in.');
                return;
            }

            if (!this.form.showtimeId) {
                alert('Không có lịch chiếu được chọn để xoá.');
                return;
            }

            try {
                const response = await axios.delete(
                    `${import.meta.env.VITE_API_BASE_URL}/api/showtimes/${this.form.showtimeId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.status !== 200) {
                    throw new Error(response.data.message || 'Xoá thất bại');
                }

                alert('Xoá lịch chiếu thành công!');
                this.getAllShowtimes();
                this.closeModal();
            } catch (error) {
                console.error('Delete error:', error);
                alert(`Xoá thất bại: ${error.message}`);
            }
        },

        async getAllShowtimes() {
            try {
                const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/showtimes`;
                const response = await axios.get(apiUrl);

                const showtimesData = response.data?.showtimes;

                if (Array.isArray(showtimesData)) {
                    this.showtimes = showtimesData.map(item => ({
                        showtimeId: item.showtime_id,
                        movieId: item.movie_id,
                        cinemaId: item.cinema_id,
                        movieName: item.Movie?.title || 'N/A',
                        genre: item.Movie?.genre || 'N/A',
                        cinemaName: item.Cinema?.name || 'N/A',
                        showDate: item.show_date,
                        showTime: item.show_time.split(':').slice(0, 2).join(':'),
                        duration: item.Movie?.duration || 'N/A'
                    }));
                    this.errorMessage = '';
                } else {
                    this.showtimes = [];
                    this.errorMessage = 'Không có lịch chiếu nào.';
                }
            } catch (error) {
                console.error('Lỗi khi lấy danh sách lịch chiếu:', error);
                this.errorMessage = 'Lỗi khi lấy danh sách lịch chiếu.';
                this.showtimes = [];
            }
        },
    },

    beforeCreate() {
        checkAuthAndRedirect(this.$router);
    },

    mounted() {
        this.getAllShowtimes();
        this.getAllMovies();
        this.getAllCinemas();
    }
};
</script>
