<template>
    <div>
        <HeaderComponents />
        <div class="bg-blue-900 flex items-center justify-center min-h-screen">
            <div class="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
                <div class="flex justify-between border-b-2 border-gray-200 mb-6">
                    <button id="login-tab" class="tab text-black font-bold py-2 px-4 border-b-4 border-yellow-400"
                        @click="switchTab('login')">ĐĂNG NHẬP</button>
                    <button id="register-tab" class="tab text-gray-500 font-bold py-2 px-4"
                        @click="switchTab('register')">ĐĂNG
                        KÝ</button>
                </div>
                <div id="login-form" class="form">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Tài khoản, Email hoặc số điện thoại <span class="text-red-500">*</span>
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Nhập tài khoản, email hoặc số điện thoại">
                </div>
                <div class="mb-4 relative">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Mật khẩu <span class="text-red-500">*</span>
                    </label>
                    <input
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
                    <a class="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-gray-900" href="#">
                        Quên mật khẩu?
                    </a>
                </div>
                <div>
                    <button
                        class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        ĐĂNG NHẬP
                    </button>
                </div>
            </div>
            <div id="register-form" class="form hidden">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="full-name">
            Họ và Tên <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="full-name" type="text" placeholder="Nhập họ và tên">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="dob">
            Ngày sinh <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="dob" type="date">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Số điện thoại <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="phone" type="tel" placeholder="Nhập số điện thoại">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Tên đăng nhập <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="username" type="text" placeholder="Nhập tên đăng nhập">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="cccd">
            CCCD/CMND <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="cccd" type="text" placeholder="Nhập số CCCD/CMND">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="email" type="email" placeholder="Nhập địa chỉ email">
    </div>
    <div class="mb-4 relative">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Mật khẩu <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="password" type="password" placeholder="Nhập mật khẩu">
        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
    </div>
    <div class="mb-4 relative">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
            Xác nhận mật khẩu <span class="text-red-500">*</span>
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="confirm-password" type="password" placeholder="Nhập lại mật khẩu">
        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
    </div>
    <div class="pb-4">
        <input type ="checkbox" /> 
        <a class="text-black p-4" href="">Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên Cinestar</a>
    </div>
    <div>
        <button class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            ĐĂNG KÝ
        </button>
    </div>
    <div class="inline-flex items-center pt-4">
        <p class="text-black">Bạn đã có tài khoản?</p>
        <a class="text-black" href="">Đăng nhập</a>
    </div>
</div>
            </div>
        </div>
        <FooterComponents />
    </div>
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
import { showTab } from '../assets/js/login_register.js';  // Adjust depending on the JS file content

export default {
    name: 'LoginRegisterComponents',
    components: {
        HeaderComponents,
        FooterComponents
    },
    mounted() {
        // Optionally, you can use the showTab function here if needed.
        // showTab('login'); // Example: Defaulting to the 'login' tab on mount
    },
    methods: {
        switchTab(tab) {
            showTab(tab);  // Call the imported showTab function on tab switch
        }
    }
}
</script>
