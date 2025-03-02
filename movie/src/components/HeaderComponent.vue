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
            <a class="text-sm" href="/login">
                Đăng nhập
            </a>
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
            <div class="flex items-center space-x-1">
                <i class="fas fa-map-marker-alt"></i>
                <span>Chọn rạp</span>
            </div>
            <div class="flex items-center space-x-1">
                <i class="fas fa-calendar-alt"></i>
                <span>Lịch chiếu</span>
            </div>
        </div>
        <div class="flex space-x-4">
            <a href="#">Khuyến mãi</a>
            <a href="#">Thuê sự kiện</a>
            <a href="/cac-loai-hinh-giai-tri-khac">Tất cả các giải trí</a>
            <a href="#">Giới thiệu</a>
        </div>

    </div>
</template>
<script>
export default {
    name: "HeaderHomePage",
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>