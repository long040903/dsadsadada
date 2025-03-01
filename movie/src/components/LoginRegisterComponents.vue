<template>
    <div>
        <HeaderComponents />
        <div class="bg-blue-900 flex items-center justify-center min-h-screen">
            <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
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
                            id="username" type="text" placeholder="">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Mật khẩu <span class="text-red-500">*</span>
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="">
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
                        <button
                            class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            ĐĂNG NHẬP
                        </button>
                    </div>
                </div>
                <div id="register-form" class="form hidden">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="new-username">
                            Tài khoản, Email hoặc số điện thoại <span class="text-red-500">*</span>
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="new-username" type="text" placeholder="">
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="new-password">
                            Mật khẩu <span class="text-red-500">*</span>
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="new-password" type="password" placeholder="">
                        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
                            Xác nhận mật khẩu <span class="text-red-500">*</span>
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password" type="password" placeholder="">
                        <i class="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer"></i>
                    </div>
                    <div>
                        <button
                            class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            ĐĂNG KÝ
                        </button>
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
