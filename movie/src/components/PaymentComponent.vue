<template>
    <HeaderComponents />
    <div>
        <!-- Stepper -->
        <div class="container mx-auto p-4">
            <div class="flex items-center justify-between mb-8">
                <!-- Step 1 -->
                <div class="flex items-center">
                    <div
                        class="flex items-center justify-center w-10 h-10 rounded-full text-white bg-yellow-400 font-bold">
                        1
                    </div>
                    <div class="ml-2 text-lg font-bold text-yellow-400">THÔNG TIN KHÁCH HÀNG</div>
                </div>
                <div class="flex-auto border-t-4 border-gray-400"></div>

                <!-- Step 2 -->
                <div class="flex items-center">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full font-bold"
                        :class="showStep1 ? 'bg-gray-400 text-white' : 'bg-yellow-400 text-black'">
                        2
                    </div>
                    <div class="ml-2 text-lg font-bold" :class="showStep1 ? 'text-gray-400' : 'text-yellow-400'">
                        THANH TOÁN
                    </div>
                </div>
                <div class="flex-auto border-t-4" :class="showStep1 ? 'border-gray-400' : 'border-yellow-400'"></div>

                <!-- Step 3 -->
                <div class="flex items-center">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full font-bold"
                        :class="showStep1 ? 'bg-gray-400 text-white' : 'bg-gray-400 text-white'">
                        3
                    </div>
                    <div class="ml-2 text-lg font-bold text-gray-400">THÔNG TIN VỀ PHIM</div>
                </div>
            </div>
        </div>

        <!-- Step 1 -->
        <div v-if="showStep1" id="step1" class="bg-gradient-to-b from-blue-900 to-purple-900 text-white">
            <div class="container mx-auto p-4">
                <!-- Flex container for two sections -->
                <div class="flex flex-col lg:flex-row">
                    <!-- Form section -->
                    <div class="w-full lg:w-2/3 p-4">
                        <form ref="customerForm" id="customerForm">
                            <div class="mb-4">
                                <label class="block text-lg font-bold mb-2" for="name">Họ và tên <span
                                        class="text-red-500">*</span></label>
                                <input class="w-full p-3 rounded border border-gray-300 text-black" type="text"
                                    id="name" placeholder="Họ và tên" required />
                            </div>
                            <div class="mb-4">
                                <label class="block text-lg font-bold mb-2" for="phone">Số điện thoại <span
                                        class="text-red-500">*</span></label>
                                <input class="w-full p-3 rounded border border-gray-300 text-black" type="text"
                                    id="phone" placeholder="Số điện thoại" required />
                            </div>
                            <div class="mb-4">
                                <label class="block text-lg font-bold mb-2" for="email">Email <span
                                        class="text-red-500">*</span></label>
                                <input class="w-full p-3 rounded border border-gray-300 text-black" type="email"
                                    id="email" placeholder="Email" required />
                            </div>
                            <div class="mb-4">
                                <label class="inline-flex items-center">
                                    <input type="checkbox" class="form-checkbox text-yellow-400" required />
                                    <span class="ml-2">Đảm bảo mua vé đúng số tuổi quy định.</span>
                                </label>
                            </div>
                            <div class="mb-8">
                                <label class="inline-flex items-center">
                                    <input type="checkbox" class="form-checkbox text-yellow-400" required />
                                    <span class="ml-2">Đồng ý với điều khoản của Cinestar.</span>
                                </label>
                            </div>
                            <button id="continueBtn"
                                class="w-full bg-yellow-400 text-black text-lg font-bold py-3 rounded"
                                @click.prevent="continueToStep2">
                                TIẾP TỤC
                            </button>
                        </form>
                    </div>

                    <!-- Movie info section -->
                    <div class="w-full lg:w-1/3 p-4">
                        <div class="bg-blue-600 p-4 rounded-lg">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-xl font-bold">NHÀ GIA TIẾN (T18)</h2>
                                <div class="bg-yellow-400 text-black font-bold px-2 py-1 rounded">04:30</div>
                            </div>
                            <p class="text-yellow-400 font-bold mb-2">Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                            </p>
                            <p class="mb-2">Cinestar Hai Bà Trưng (TP.HCM)</p>
                            <p class="mb-2">135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh</p>
                            <p class="mb-2"><span class="font-bold">Thời gian:</span> 12:15 Chủ Nhật 02/03/2025</p>
                            <p class="mb-2"><span class="font-bold">Phòng chiếu:</span> 03</p>
                            <p class="mb-2"><span class="font-bold">Số vé:</span> 1</p>
                            <p class="mb-2"><span class="font-bold">Loại vé:</span> HSSV-Người Cao Tuổi</p>
                            <p class="mb-2"><span class="font-bold">Loại ghế:</span> Ghế Thường</p>
                            <p class="mb-2"><span class="font-bold">Số ghế:</span> C01</p>
                            <p class="mb-2"><span class="font-bold">Bắp nước:</span></p>
                            <hr class="border-gray-400 my-4">
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-yellow-400">SỐ TIỀN CẦN THANH TOÁN</span>
                                <span class="text-2xl font-bold">45,000VND</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Step 2 -->
        <div v-if="!showStep1" id="step2" class="bg-gradient-to-b from-blue-900 to-purple-900 text-white">
            <div class="container mx-auto p-4">
                <h2 class="text-4xl font-bold mb-8">THANH TOÁN</h2>
                <div class="flex flex-col lg:flex-row gap-4">
                    <div class="flex-1">

                        <div class="bg-blue-800 p-4 rounded-lg mb-4">
                            <div class="flex items-center mb-4">
                                <img alt="Momo logo" class="mr-2" height="24"
                                    src="https://storage.googleapis.com/a1aa/image/1WiKJ1oxBG6bYghwAAzBjf4OoUiiqiZ6WZGCtWdNJB4.jpg"
                                    width="24" />
                                <span>
                                    Thanh toán qua Momo
                                </span>
                            </div>
                            <div class="flex items-center mb-4">
                                <img alt="Nội địa logo" class="mr-2" height="24"
                                    src="https://storage.googleapis.com/a1aa/image/co8Ev6c35p4Q8uv49S34qEoF10L_pqyd1VbLutSDlnY.jpg"
                                    width="24" />
                                <span>
                                    Thanh toán qua Thẻ nội địa
                                </span>
                            </div>
                            <div class="flex items-center mb-4">
                                <img alt="Quốc tế logo" class="mr-2" height="24"
                                    src="https://storage.googleapis.com/a1aa/image/-Mb3LTwZB8cpa1kz-obJIBRPqT2C5W4FBU4OLV9xpog.jpg"
                                    width="24" />
                                <span>
                                    Thanh toán qua thẻ quốc tế
                                </span>
                            </div>
                        </div>
                        <div class="bg-blue-700 p-4 rounded-lg mb-4">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-tag text-yellow-400 mr-2">
                                </i>
                                <span>
                                    Chọn hoặc nhập mã giảm giá
                                </span>
                            </div>
                            <p class="text-sm">
                                Bạn đang có mã giảm giá
                            </p>
                        </div>
                        <div class="flex justify-between">
                            <button class="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg"
                                @click="showStep1 = true">
                                QUAY LẠI
                            </button>
                            <button class="bg-gray-500 text-gray-300 font-bold py-2 px-4 rounded-lg">
                                THANH TOÁN
                            </button>
                        </div>
                    </div>
                    <div class="bg-blue-700 p-4 rounded-lg w-full lg:w-1/3">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-xl font-bold">
                                NHÀ GIẢ TIẾN (T18)
                            </h2>
                            <div class="bg-yellow-400 text-blue-900 font-bold py-1 px-2 rounded-lg">
                                03:23
                            </div>
                        </div>
                        <p class="text-yellow-400 mb-2">
                            Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                        </p>
                        <p class="mb-2">
                            Cinestar Hai Bà Trưng (TP.HCM)
                        </p>
                        <p class="mb-2">
                            135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh
                        </p>
                        <h3 class="font-bold mb-2">
                            Thời gian
                        </h3>
                        <p class="mb-2">
                            12:15 Chủ Nhật 02/03/2025
                        </p>
                        <h3 class="font-bold mb-2">
                            Phòng chiếu
                        </h3>
                        <p class="mb-2">
                            03
                        </p>
                        <h3 class="font-bold mb-2">
                            Số vé
                        </h3>
                        <p class="mb-2">
                            1
                        </p>
                        <h3 class="font-bold mb-2">
                            Loại vé
                        </h3>
                        <p class="mb-2">
                            HSSV-Người Cao Tuổi
                        </p>
                        <h3 class="font-bold mb-2">
                            Loại ghế
                        </h3>
                        <p class="mb-2">
                            Ghế Thường
                        </p>
                        <h3 class="font-bold mb-2">
                            Số ghế
                        </h3>
                        <p class="mb-2">
                            C01
                        </p>
                        <h3 class="font-bold mb-2">
                            Bắp nước
                        </h3>
                        <p class="mb-2">
                            -
                        </p>
                        <div class="border-t border-gray-400 my-4">
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-yellow-400">
                                SỐ TIỀN CẦN THANH TOÁN
                            </span>
                            <span class="font-bold text-2xl">
                                45,000VND
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Nội dung thanh toán -->

            </div>
        </div>
    </div>


    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
// import '../assets/js/payment.js';


export default {
    name: 'PaymentComponent',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            showStep1: true,
        };
    },
    methods: {
        continueToStep2() {
            const form = this.$refs.customerForm;
            if (form && form.checkValidity()) {
                this.showStep1 = false; // Chuyển sang bước 2
            } else {
                form.reportValidity(); // Hiển thị lỗi nếu form không hợp lệ
            }
        },
    },
}
</script>
<style scoped>
.hidden {
    display: none;
}
</style>