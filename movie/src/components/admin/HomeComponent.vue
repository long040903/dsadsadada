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
                                <th class="py-2 px-4 border-b">Mã phim</th>
                                <th class="py-2 px-4 border-b">Tiêu đề phim</th>
                                <th class="py-2 px-4 border-b">Thể loại</th>
                                <th class="py-2 px-4 border-b">Banner phim</th>
                                <th class="py-2 px-4 border-b">Trailer phim</th> <!-- Cột mới cho Trailer -->
                                <th class="py-2 px-4 border-b">Đạo diễn </th>
                                <th class="py-2 px-4 border-b">Diễn viên trong phim</th>
                                <th class="py-2 px-4 border-b">Mô tả phim</th>
                                <th class="py-2 px-4 border-b">Năm phát hành</th>
                                <th class="py-2 px-4 border-b">Ngày phát hành chính thức</th>
                                <th class="py-2 px-4 border-b">thời lượng phim</th>



                                <th class="py-2 px-4 border-b">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(movies, index) in movies" :key="movies.movie_id">
                                <td class="py-2 px-4 border-b">{{ index + 1 }}</td> <!-- STT (Index) -->
                                <td class="py-2 px-4 border-b">{{ movies.movie_id }}</td> <!-- Mã phim -->
                                <td class="py-2 px-4 border-b">{{ movies.title }}</td> <!-- Tên phim -->
                                <td class="py-2 px-4 border-b">{{ movies.genre }}</td>
                                <td class="py-2 px-4 border-b">
                                    <img :src="movies.banner_url" alt="Banner" class="h-20 w-20">
                                    <!-- Hình ảnh banner -->
                                </td>
                                <td class="py-2 px-4 border-b">
                                    <a :href="movies.trailer_url" class="text-blue-500" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                    </a> <!-- Trailer -->
                                </td>
                                <td class="py-2 px-4 border-b">{{ movies.director }}</td>
                                <td class="py-2 px-4 border-b">{{ movies.cast }}</td>
                                <td class="py-2 px-4 border-b">{{ movies.description }}</td>
                                <td class="py-2 px-4 border-b">{{ movies.release_year }}</td>
                                <td class="py-2 px-4 border-b">{{ movies.release_date }}</td>
                                <td class="py-2 px-4 border-b">
                                    {{ movies.duration }}

                                    <!-- <i class="fas fa-check-circle text-green-500"></i>  -->
                                </td>
                                <td class="py-2 px-4 border-b">
                                    <button class="text-blue-500" @click="openModal('edit', movies)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', movies)">
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
                            <label class="block mb-2">Mã Phim:</label>
                            <input type="text" v-model="form.movieId" class="border px-4 py-2 w-full mb-4" disabled>

                            <label class="block mb-2">Tên Phim:</label>
                            <input type="text" v-model="form.title" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Thể Loại:</label>
                            <input type="text" v-model="form.genre" class="border px-4 py-2 w-full mb-4">

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

                            <!-- Trailer Upload Section -->
                            <div class="mb-4">
                                <label class="block mb-2">Trailer URL <span class="text-red-500">*</span>:</label>
                                <div class="flex items-center">
                                    
                                    <input type="file" @change="handleFileUpload('trailer', $event)" class="aa">

                                    <a v-if="form.trailerUrl" :href="form.trailerUrl" target="_blank"
                                        class="text-blue-500 hover:underline flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.5C7.30558 4.5 3.34791 7.38303 1.5 12c1.84791 4.617 5.80558 7.5 10.5 7.5s8.65209-2.88397 10.5-7.5c-1.84791-4.617-5.80558-7.5-10.5-7.5zM12 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                                        </svg>
                                        View trailer
                                    </a>
                                </div>
                            </div>

                            <label class="block mb-2">Đạo Diễn:</label>
                            <input type="text" v-model="form.director" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Diễn Viên:</label>
                            <input type="text" v-model="form.cast" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Mô Tả:</label>
                            <input type="text" v-model="form.description" class="border px-4 py-2 w-full mb-4">
                            <label class="block mb-2">Năm phát hành:</label>
                            <input type="number" v-model="form.releaseYear" class="border px-4 py-2 w-full mb-4"
                                min="1900" max="2100" placeholder="YYYY" @input="formatYear">

                            <label class="block mb-2">Ngày Phát Hành:</label>
                            <input type="date" v-model="form.releaseDate" class="border px-4 py-2 w-full mb-4">

                            <label class="block mb-2">Thời Lượng (phút):</label>
                            <input type="number" v-model="form.duration" class="border px-4 py-2 w-full mb-4">

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
    name: 'HomePage',
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
            movies: [], // Mảng chứa danh sách phim
            errorMessage: '', // Thông báo lỗi
        };
    },
    methods: {
        // Trigger the hidden input for banner file upload
        triggerBannerUpload() {
            this.$refs.bannerFile.click();
        },

        // Trigger the hidden input for trailer file upload
        triggerTrailerUpload() {
            this.$refs.trailerFile.click();
        },
        handleFileUpload(field, event) {
        const file = event.target.files[0]; // Get the selected file

        if (file) {
            const isImage = field === 'banner';
            const isVideo = field === 'trailer';
            
            // Set file size limits
            const maxImageSize = 5 * 1024 * 1024; // 5MB for images
            const maxVideoSize = 50 * 1024 * 1024; // 50MB for videos

            // Check file size based on type
            if (isImage && file.size > maxImageSize) {
                alert('Image file size exceeds the 5MB limit.');
                return;
            }
            if (isVideo && file.size > maxVideoSize) {
                alert('Video file size exceeds the 50MB limit.');
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

            // For videos: Directly store the video file and display a video preview
            if (isVideo) {
                this.form[field] = file; // Store the actual video file for upload
                const videoUrl = URL.createObjectURL(file); // Create a local URL for video preview
                this.form[`${field}Url`] = videoUrl; // Set video URL for preview
            }
        }
    },



        openModal(type, movies = null) {
            this.modalType = type;
            this.showModal = true;

            if (type === 'edit' && movies) {
                // Gán dữ liệu của phim vào form để chỉnh sửa
                this.form.movieId = movies.movie_id;
                this.form.title = movies.title;
                this.form.genre = movies.genre;
                this.form.bannerUrl = movies.banner_url;
                this.form.trailerUrl = movies.trailer_url;
                this.form.director = movies.director;
                this.form.cast = movies.cast;
                this.form.description = movies.description;
                this.form.releaseDate = movies.release_date;
                this.form.duration = movies.duration;
            } else if (type === 'add') {
                // Đặt form về trạng thái trống khi thêm mới
                this.form = {
                    movieId: '',
                    title: '',
                    genre: '',
                    bannerUrl: '',
                    trailerUrl: '',
                    director: '',
                    cast: '',
                    description: '',
                    releaseDate: '',
                    duration: ''
                };
            }
        },

        closeModal() {
            this.showModal = false;
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
            formData.append('title', this.form.title);
            formData.append('genre', this.form.genre);
            formData.append('release_year', this.form.releaseYear);
            formData.append('director', this.form.director);
            formData.append('cast', this.form.cast);
            formData.append('description', this.form.description);
            formData.append('release_date', this.form.releaseDate);
            formData.append('duration', this.form.duration);

            // Append banner and trailer files if they exist
            if (this.form.banner) {
                formData.append('banner', this.form.banner); // Append banner file
            }
            if (this.form.trailer) {
                formData.append('trailer', this.form.trailer); // Append trailer file
            }

            // Define API endpoint and method
            const url =
                this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/movies`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/movies/${this.form.movieId}`;

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
                    alert(this.modalType === 'add' ? 'Movie added successfully!' : 'Movie updated successfully!');
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

        handleDelete() {
            // Logic xóa mục
            console.log('Xóa mục');
            this.closeModal();
        },
        async getallMovie() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/movies';
                const response = await axios.get(apiUrl); // Gọi API để lấy danh sách phim

                // Log toàn bộ response để xem cấu trúc dữ liệu trả về
                console.log('Full API response:', response);

                // Kiểm tra xem response.data chứa gì
                if (response.data && response.data.movies) {
                    this.movies = response.data.movies; // Gán danh sách phim nếu đúng cấu trúc
                } else if (response.data && Array.isArray(response.data)) {
                    this.movies = response.data; // Nếu response trả về là một mảng
                } else {
                    this.movies = []; // Nếu không có phim
                    this.errorMessage = 'Không có phim nào.';
                }

                console.log('Movies:', this.movies);
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
