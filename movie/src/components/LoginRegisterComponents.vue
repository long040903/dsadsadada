<template>
    <div>
        <HeaderComponents />
        <div class="bg-blue-900 flex items-center justify-center min-h-screen">
            <div class="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
                <div class="flex justify-between border-b-2 border-gray-200 mb-6">

                    <button id="login-tab"
                        :class="activeTab === 'login' ? 'text-black border-yellow-400' : 'text-gray-500'"
                        class="tab font-bold py-2 px-4 border-b-4" @click="switchTab('login')">
                        ĐĂNG NHẬP
                    </button>
                    <button id="register-tab"
                        :class="activeTab === 'register' ? 'text-black border-yellow-400' : 'text-gray-500'"
                        class="tab font-bold py-2 px-4" @click="switchTab('register')">
                        ĐĂNG KÝ
                    </button>
                </div>
                <div v-if="activeTab === 'login'" id="login-form" class="form">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Tài khoản, Email hoặc số điện thoại <span class="text-red-500">*</span>
                        </label>
                        <input v-model="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Nhập tài khoản, email hoặc số điện thoại">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Mật khẩu <span class="text-red-500">*</span>
                        </label>
                        <input v-model="password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="Nhập mật khẩu">
                        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
                    </div>
                    <div class="mb-4">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-yellow-400">
                            <span class="ml-2 text-gray-700">Lưu mật khẩu đăng nhập</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <a class="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-gray-900"
                            href="#">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div>
                        <button @click="login"
                            class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            ĐĂNG NHẬP
                        </button>
                    </div>
                </div>
                <div v-if="activeTab === 'register'" id="register-form" class="form">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="full-name">
                            Họ và Tên <span class="text-red-500">*</span>
                        </label>
                        <input v-model="full_name"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="full-name" type="text" placeholder="Nhập họ và tên">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="dob">
                            Ngày sinh <span class="text-red-500">*</span>
                        </label>
                        <input v-model="ngay_sinh"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dob" type="date">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            Số điện thoại <span class="text-red-500">*</span>
                        </label>
                        <input v-model="phone"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone" type="tel" placeholder="Nhập số điện thoại">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Tên đăng nhập <span class="text-red-500">*</span>
                        </label>
                        <input v-model="username"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Nhập tên đăng nhập">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="cccd">
                            CCCD/CMND <span class="text-red-500">*</span>
                        </label>
                        <input v-model="cccd"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cccd" type="text" placeholder="Nhập số CCCD/CMND">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email <span class="text-red-500">*</span>
                        </label>
                        <input v-model="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Nhập địa chỉ email">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Mật khẩu <span class="text-red-500">*</span>
                        </label>
                        <input v-model="password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="Nhập mật khẩu">
                        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
                            Xác nhận mật khẩu <span class="text-red-500">*</span>
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password" type="password" placeholder="Nhập lại mật khẩu">
                        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
                    </div>
                    <div class="pb-4">
                        <input type="checkbox" />
                        <a class="text-black p-4" href="">Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên
                            MovieCiname</a>
                    </div>
                    <div>
                        <button @click="register"
                            class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            ĐĂNG KÝ
                        </button>
                    </div>
                    <div class="inline-flex items-center pt-4">
                        <p class="text-black">Bạn đã có tài khoản?</p>
                        <a class="text-black cursor-pointer" @click="switchTab('login')">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponents />
    </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
import { showTab } from '../assets/js/login_register.js';  // Adjust depending on the JS file content
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'LoginRegisterComponents',
    components: {
        HeaderComponents,
        FooterComponents
    },
    data() {
        return {
            activeTab: 'login',
            email: '',
            password: '',
            full_name: '',
            ngay_sinh: '',
            phone: '',
            username: '',
            cccd: '',
        };
    },
    mounted() {
        // Optionally, you can use the showTab function here if needed.
        // showTab('login'); // Example: Defaulting to the 'login' tab on mount
    },
    methods: {
        async login() {

            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/auth/login';
                const response = await axios.post(apiUrl, {
                    email: this.email,
                    password: this.password
                });

                // If login is successful, store token in cookies
                const token = response.data.token;
                Cookies.set('authToken', token, { expires: 7, secure: true }); // Set token cookie with expiration and secure flag
                const savedToken = Cookies.get('authToken');
                console.log('Token stored in cookies:', savedToken);

                // Show success message
                toast.success('Login successful!', { autoClose: 1000 });
                console.log('Login successful:', response.data);

                // Redirect to home page after 1 second
                setTimeout(() => {
                    this.$router.push('/');
                }, 1000);

            } catch (error) {
                console.error('Login error:', error.response ? error.response.data : error.message);
                // Handle login error, e.g., show error message to user
                toast.error('Login failed. Please try again.');
            }
        },
        async register() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/auth/register';
                const response = await axios.post(apiUrl, {
                    full_name: this.full_name,
                    ngay_sinh: this.ngay_sinh,
                    phone: this.phone,
                    user_name: this.username,
                    cccd: this.cccd,
                    email: this.email,
                    password: this.password
                });

                // If login is successful, show toast and redirect
                toast("Register successfuly !", {
                    autoClose: 1000,
                });
                console.log('Register successful:', response.data);

                // Redirect to home page after 1 second
                setTimeout(() => {
                    this.switchTab('login');
                }, 1000);


            } catch (error) {
                console.error('Login error:', error.response ? error.response.data : error.message);
                // Handle login error, e.g., show message to user
            }
        },
        switchTab(tab) {
            this.activeTab = tab; // Call the imported showTab function on tab switch
        }
    }
}
</script>
