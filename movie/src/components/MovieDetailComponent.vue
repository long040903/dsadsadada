<template>
    <HeaderComponents />
    <div class="p-4">
        <div class="max-w-5xl mx-auto bg-[#1c2541] p-4 rounded-lg">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2">
                    <div class="relative">
                        <img alt="Movie poster showing a group of people with various expressions" class="rounded-lg"
                            height="600"
                            src="https://storage.googleapis.com/a1aa/image/Q39JTVZk03bRSdbWqcBMO4UPf2PrO0HMksfg9CYrwW4.jpg"
                            width="400" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
                            T18
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h1 class="text-3xl font-bold">
                        NHÀ GIA TIẾN (T18)
                    </h1>
                    <div class="mt-2">
                        <div class="flex items-center text-sm">
                            <i class="fas fa-film mr-2">
                            </i>
                            Hải, Gia đình
                        </div>
                        <div class="flex items-center text-sm mt-1">
                            <i class="fas fa-clock mr-2">
                            </i>
                            117'
                        </div>
                        <div class="flex items-center text-sm mt-1">
                            <i class="fas fa-globe mr-2">
                            </i>
                            Việt Nam
                        </div>
                        <div class="flex items-center text-sm mt-1">
                            <i class="fas fa-flag mr-2">
                            </i>
                            VN
                        </div>
                        <div class="flex items-center text-sm mt-1 bg-yellow-500 text-black px-2 py-1 rounded">
                            <i class="fas fa-exclamation-triangle mr-2">
                            </i>
                            T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                        </div>
                    </div>
                    <div class="mt-4">
                        <h2 class="text-xl font-bold">
                            MÔ TẢ
                        </h2>
                        <p class="mt-2">
                            Đạo diễn: Huỳnh Lập
                        </p>
                        <p>
                            Diễn viên: Huỳnh Lập, Phương Mỹ Chi, NSƯT Hạnh Thúy, NSƯT Huỳnh Đông, Puka, Đào Anh Tuấn,
                            Trung Dân, Kiều Linh, Lê Nam, Chí Tâm, Thanh Thức, Trác Thúy Miêu, Mai Thế Hiệp, NS Mạnh
                            Dung, NSƯT Thanh Dậu, NS Thanh Hiền, Nguyễn Anh Tú,...
                        </p>
                        <p>
                            Khởi chiếu: Thứ Sáu, 21/02/2025
                        </p>
                    </div>
                    <div class="mt-4">
                        <h2 class="text-xl font-bold">
                            NỘI DUNG PHIM
                        </h2>
                        <p class="mt-2">
                            Nhà Gia Tiến xoay quanh câu chuyện đa góc nhìn về các thế hệ khác nhau trong một gia đình,
                            có hai nhân vật chính là Gia Minh (Huỳnh Lập) và Mỹ Tiên (Phương Mỹ Chi). Trở về căn nhà gia
                            tiên để quay các video “triệu view” trên mạng xã hội, Mỹ Tiên - một nhà sáng tạo nội dung
                            thuộc thế hệ Z vốn không tin vào chuyện tâm linh, hoàn toàn mất kết nối với gia đình, bất
                            ngờ gặp lại thấy Gia Minh - người anh trai đã mất từ lâu. Để hồn ma của Gia Minh có thể siêu
                            thoát và không tiếp tục làm phiền...
                        </p>
                        <a class="text-blue-400 mt-2 inline-block" href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div class="mt-4">
                        <a class="flex items-center text-red-500" href="#">
                            <i class="fas fa-play-circle text-2xl mr-2">
                            </i>
                            Xem Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <div
            class="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 text-white">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-8">LỊCH CHIẾU</h1>
                <div class="flex justify-center space-x-4 mb-8">
                    <div class="bg-yellow-400 text-black px-4 py-2 rounded">02/03<br>Chủ Nhật</div>
                    <div class="border border-yellow-400 px-4 py-2 rounded">03/03<br>Thứ Hai</div>
                    <div class="border border-yellow-400 px-4 py-2 rounded">04/03<br>Thứ Ba</div>
                    <div class="border border-yellow-400 px-4 py-2 rounded">05/03<br>Thứ Tư</div>
                </div>
                <button class="border border-yellow-400 px-4 py-2 rounded mb-8">HỒ CHÍ MINH</button>
            </div>
            <div class="w-full max-w-4xl">
                <h2 class="text-2xl font-bold mb-4">DANH SÁCH RẠP</h2>
                <div class="bg-purple-700 p-4 mb-4 rounded">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold text-yellow-400">Cinestar Quốc Thanh (TP.HCM)</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <p class="mb-2">271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</p>
                    <p class="mb-2">Standard</p>
                    <div class="grid grid-cols-6 gap-2">
                        <div class="border border-white px-2 py-1 rounded">09:15</div>
                        <div class="border border-white px-2 py-1 rounded">09:45</div>
                        <div class="border border-white px-2 py-1 rounded">10:40</div>
                        <div class="border border-white px-2 py-1 rounded">11:40</div>
                        <div class="border border-white px-2 py-1 rounded">12:10</div>
                        <div class="border border-white px-2 py-1 rounded">13:00</div>
                        <div class="border border-white px-2 py-1 rounded">14:00</div>
                        <div class="border border-white px-2 py-1 rounded">14:30</div>
                        <div class="border border-white px-2 py-1 rounded">15:20</div>
                        <div class="border border-white px-2 py-1 rounded">16:20</div>
                        <div class="border border-white px-2 py-1 rounded">16:50</div>
                        <div class="border border-white px-2 py-1 rounded">17:40</div>
                        <div class="border border-white px-2 py-1 rounded">18:40</div>
                        <div class="border border-white px-2 py-1 rounded">19:10</div>
                        <div class="border border-white px-2 py-1 rounded">20:00</div>
                        <div class="border border-white px-2 py-1 rounded">20:40</div>
                        <div class="border border-white px-2 py-1 rounded">21:00</div>
                        <div class="border border-white px-2 py-1 rounded">21:30</div>
                        <div class="border border-white px-2 py-1 rounded">22:20</div>
                        <div class="border border-white px-2 py-1 rounded">23:00</div>
                        <div class="border border-white px-2 py-1 rounded">23:20</div>
                        <div class="border border-white px-2 py-1 rounded">23:50</div>
                    </div>
                </div>
                <div class="bg-purple-700 p-4 mb-4 rounded">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold text-yellow-400">Cinestar Hai Bà Trưng (TP.HCM)</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <p class="mb-2">135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh</p>
                    <p class="mb-2">Standard</p>
                    <div class="grid grid-cols-6 gap-2">
                        <div class="border border-white px-2 py-1 rounded">08:15</div>
                        <div class="border border-white px-2 py-1 rounded">09:00</div>
                        <div class="border border-white px-2 py-1 rounded">10:30</div>
                        <div class="border border-white px-2 py-1 rounded">11:15</div>
                        <div class="border border-white px-2 py-1 rounded">12:15</div>
                        <div class="border border-white px-2 py-1 rounded">12:45</div>
                        <div class="border border-white px-2 py-1 rounded">13:30</div>
                        <div class="border border-white px-2 py-1 rounded">14:30</div>
                        <div class="border border-white px-2 py-1 rounded">15:00</div>
                        <div class="border border-white px-2 py-1 rounded">15:45</div>
                        <div class="border border-white px-2 py-1 rounded">16:10</div>
                        <div class="border border-white px-2 py-1 rounded">16:45</div>
                        <div class="border border-white px-2 py-1 rounded">17:15</div>
                        <div class="border border-white px-2 py-1 rounded">18:00</div>
                        <div class="border border-white px-2 py-1 rounded">18:30</div>
                        <div class="border border-white px-2 py-1 rounded">19:00</div>
                        <div class="border border-white px-2 py-1 rounded">19:30</div>
                        <div class="border border-white px-2 py-1 rounded">20:15</div>
                        <div class="border border-white px-2 py-1 rounded">20:45</div>
                        <div class="border border-white px-2 py-1 rounded">21:15</div>
                        <div class="border border-white px-2 py-1 rounded">22:30</div>
                        <div class="border border-white px-2 py-1 rounded">23:00</div>
                        <div class="border border-white px-2 py-1 rounded">23:30</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>

<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'MovieDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>