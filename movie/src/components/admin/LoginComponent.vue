<template>
    <div class="flex h-screen text-black">
        <!-- Left Section -->
        <div class="hidden md:flex w-1/2 bg-yellow-200 items-center justify-center">
            <div class="text-center">
                <img alt="Admicro logo" class="mx-auto mb-4" height="50"
                    src="https://storage.googleapis.com/a1aa/image/YFQa1Iv9yWCEVbDULTK8xrdxZZeK8KJZe5ZxhRFuBuw.jpg"
                    width="150" />
                <h1 class="text-2xl font-bold mb-2">Hệ thống quản lý thưởng</h1>
                <img alt="Illustration of a person using a large mobile device with a shopping cart and trees"
                    class="mx-auto" height="400"
                    src="https://storage.googleapis.com/a1aa/image/RTZDbF3W5xcxTD7_DCmifhm0R46mcEUFD-Jsi2sUI1M.jpg"
                    width="300" />
            </div>
        </div>
        <!-- Right Section -->
        <div class="flex w-full md:w-1/2 items-center justify-center bg-white">
            <div class="w-full max-w-md p-8">
                <h2 class="text-2xl font-bold mb-6">Đăng nhập</h2>
                <form @submit.prevent="handleLogin">
                    <div class="mb-4">
                        <input v-model="email"
                            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tên người dùng hoặc email *" type="text" />
                    </div>
                    <div class="mb-4">
                        <input v-model="password"
                            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mật khẩu *" type="password" />
                    </div>
                    <div class="flex items-center mb-4">
                        <input class="mr-2" id="remember" type="checkbox" />
                        <label class="text-sm" for="remember">Lưu thông tin</label>
                    </div>
                    <button class="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600" type="submit">
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'LoginAdmin',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/auth/login';
                const response = await axios.post(apiUrl, {
                    email: this.email,
                    password: this.password
                });

                // Kiểm tra nếu vai trò là 'admin'
                const userRole = response.data.role;
                if (userRole === 'admin') {
                    // Lưu token vào cookie
                    const token = response.data.token;
                    Cookies.set('authToken', token, { expires: 7, secure: true }); // Lưu token với thời gian hết hạn và secure flag
                    const savedToken = Cookies.get('authToken');
                    console.log('Token stored in cookies:', savedToken);

                    // Hiển thị thông báo đăng nhập thành công
                    toast.success('Login successful!', { autoClose: 1000 });
                    console.log('Login successful:', response.data);

                    // Chuyển hướng sang trang /admin sau 1 giây
                    setTimeout(() => {
                        this.$router.push('/admin');
                    }, 1000);
                } else {
                    // Nếu không phải admin, hiển thị thông báo lỗi
                    toast.error('You do not have admin access.');
                }
            } catch (error) {
                console.error('Login error:', error.response ? error.response.data : error.message);
                // Hiển thị thông báo lỗi đăng nhập
                toast.error('Login failed. Please try again.');
            }
        },
    },
};
</script>
