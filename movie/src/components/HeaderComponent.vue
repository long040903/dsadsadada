<template>
    <header class="flex justify-between items-center p-4 bg-[#0b1120]">
        <div class="flex items-center">
            <img alt="Logo" class="mr-2" height="50"
                src="https://storage.googleapis.com/a1aa/image/eHsFAgA9B0p5W3tnXnt9jIiTi3u6Jz3UWDTd0ibfEd4.jpg"
                width="50" />
            <span class="text-xl font-bold">
                CINESTAR
            </span>
        </div>
        <div class="flex items-center space-x-4">
            <button class="bg-yellow-400 text-black px-4 py-2 rounded">
                ĐẶT VÉ NGAY
            </button>
            <button class="bg-purple-600 px-4 py-2 rounded">
                ĐẶT BẮP NƯỚC
            </button>
            <input class="px-2 py-1 rounded" placeholder="Tìm phim, rạp" type="text" />

            <template v-if="isLoggedIn">
                <!-- Show user's name and logout button -->
                <div class="relative">
                    <button @click="toggleMenu" class="flex items-center space-x-1">
                        <span class="bg-gray-700 text-white px-3 py-2 rounded-full">
                            {{ userName.charAt(0) }}
                        </span>
                    </button>
                    <div v-if="menuVisible" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
                        <!-- Make sure the menu is correctly positioned and stacked above other content -->
                        <a href="#" class="block px-4 py-2 text-gray-800">{{ userName }}</a>
                        <a href="#" @click="logout" class="block px-4 py-2 text-gray-800">Đăng xuất</a>
                    </div>
                </div>
            </template>
            <template v-else>
                <!-- Show login link if not logged in -->
                <a class="text-sm" href="/login">
                    Đăng nhập
                </a>
            </template>

            <a class="text-sm flex items-center" href="#">
                <img alt="VN Flag" class="mr-1" height="20"
                    src="https://storage.googleapis.com/a1aa/image/xaZfuYU0YG3zoXBW3Tf0tgk6TtIc6eDsBZAWQwwta0Q.jpg"
                    width="20" />
                VN
            </a>
        </div>
    </header>
    <div class="flex justify-between items-center px-4 py-2 border-t border-gray-700">
        <div class="flex space-x-4">
            <div class="flex items-center space-x-1" @mouseover="showCinemaList" @mouseleave="hideCinemaList">
                <a href="#" class="flex items-center text-yellow-400">
                    <i class="fas fa-map-marker-alt mr-1"></i> Chọn rạp
                </a>
                <div class="mt-4 border-t border-gray-700 pt-4" v-if="isCinemaListVisible">
                    <div class="cinema-list grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>Cinestar Quốc Thanh (TP.HCM)</div>
                        <div>Cinestar Hai Bà Trưng (TP.HCM)</div>
                        <div>Cinestar Sinh Viên (Bình Dương)</div>
                        <div>Cinestar Huế (TP. Huế)</div>
                        <div>Cinestar Đà Lạt (TP.Đà Lạt)</div>
                        <div>Cinestar Lâm Đồng (Đức Trọng)</div>
                        <div>Cinestar Mỹ Tho (Tiền Giang)</div>
                        <div>Cinestar Kiên Giang (Rạch Sỏi)</div>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-1">
                <i class="fas fa-calendar-alt"></i>
                <a href="/showtimes">Lịch chiếu</a>
            </div>
        </div>
        <div class="flex space-x-4">
            <a href="#">Khuyến mãi</a>
            <a href="#">Thuê sự kiện</a>
            <a href="/cac-loai-hinh-giai-tri-khac">Tất cả các giải trí</a>
            <a href="/abouts-us">Giới thiệu</a>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
    name: "HeaderHomePage",
    data() {
        return {
            isCinemaListVisible: false,
            menuVisible: false,
            isLoggedIn: false,
            userName: "", // Sử dụng để lưu email
        };
    },
    methods: {
        showCinemaList() {
            this.isCinemaListVisible = true;
        },
        hideCinemaList() {
            this.isCinemaListVisible = false;
        },
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
        },
        logout() {
            Cookies.remove('authToken');
            this.isLoggedIn = false;
            this.$router.push('/login');
        },
        decodeToken(token) {
            const base64Url = token.split('.')[1]; // Lấy phần payload
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Chuyển đổi base64url sang base64

            // Giải mã base64 thành JSON
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }
    },
    mounted() {
        const token = Cookies.get('authToken');
        console.log(token);
        if (token) {
            try {
                const decoded = this.decodeToken(token);
                this.isLoggedIn = true;
                this.userName = decoded.fullname || "User"; // Lấy email từ token, không phải username
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }
}
</script>