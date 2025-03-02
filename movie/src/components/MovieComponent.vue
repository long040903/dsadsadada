<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <div class="flex justify-center mb-8 space-x-4">
            <button class="bg-gray-200 text-black font-bold py-2 px-4 rounded">
                ĐẶT VÉ NHANH
            </button>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    1. Chọn Rạp
                </option>
            </select>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    2. Chọn Phim
                </option>
            </select>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    3. Chọn Ngày
                </option>
            </select>
            <select class="bg-gray-200 text-black py-2 px-4 rounded">
                <option>
                    4. Chọn Suất
                </option>
            </select>
            <button class="bg-purple-600 text-white font-bold py-2 px-4 rounded">
                ĐẶT NGAY
            </button>
        </div>
        <h2 class="text-center text-2xl font-bold mb-8">
            PHIM ĐANG CHIẾU
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="relative">
                    <img alt="Movie poster for Nhà Gia Tiên" height="450"
                        src="https://storage.googleapis.com/a1aa/image/V5MfKYY0leyIHTFCcMf0Dh7A8yhT36GgkSJuUIchzXo.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                        T18
                    </div>
                </div>
                <p class="mt-4">
                    NHÀ GIA TIÊN (T18)
                </p>
                <div class="flex justify-center space-x-4 mt-4">
                    <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                        <i class="fas fa-play-circle mr-2">
                        </i>
                        Xem Trailer
                    </button>
                    <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                        ĐẶT VÉ
                    </button>
                </div>
            </div>
            <div class="text-center">
                <div class="relative">
                    <img alt="Movie poster for Quỷ Nhập Tràng" height="450"
                        src="https://storage.googleapis.com/a1aa/image/ggEng7TZDSIrWmYAe-jR281Owmxo78bwWUqLFvPxMO4.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                        T18
                    </div>
                </div>
                <p class="mt-4">
                    QUỶ NHẬP TRÀNG (T18)
                </p>
                <div class="flex justify-center space-x-4 mt-4">
                    <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                        <i class="fas fa-play-circle mr-2">
                        </i>
                        Xem Trailer
                    </button>
                    <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                        ĐẶT VÉ
                    </button>
                </div>
            </div>
            <div class="text-center">
                <div class="relative">
                    <img alt="Movie poster for Cưới Ma" height="450"
                        src="https://storage.googleapis.com/a1aa/image/yQCEM2_foqlT7s8vLzwkJBJylXuLhN62SzULmKtjLWM.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                        T18
                    </div>
                </div>
                <p class="mt-4">
                    CƯỚI MA (T18)
                </p>
                <div class="flex justify-center space-x-4 mt-4">
                    <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                        <i class="fas fa-play-circle mr-2">
                        </i>
                        Xem Trailer
                    </button>
                    <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                        ĐẶT VÉ
                    </button>
                </div>
            </div>
            <div class="text-center">
                <div class="relative">
                    <img alt="Movie poster for Nữ Tu Bóng Tối" height="450"
                        src="https://storage.googleapis.com/a1aa/image/_A60Vme6qRcZedNL3l9m_Ll59Rg5Id1afj1h0lrfGEg.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                        T16
                    </div>
                </div>
                <p class="mt-4">
                    NỮ TU BÓNG TỐI (T16)
                </p>
                <div class="flex justify-center space-x-4 mt-4">
                    <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                        <i class="fas fa-play-circle mr-2">
                        </i>
                        Xem Trailer
                    </button>
                    <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                        ĐẶT VÉ
                    </button>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-8">
            <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                XEM THÊM
            </button>
        </div>
        <div class="pt-8 pb-9">
            <h2 class="text-center text-2xl font-bold mb-8">
                PHIM SẮP CHIẾU
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for Nhà Gia Tiên" height="450"
                            src="https://storage.googleapis.com/a1aa/image/V5MfKYY0leyIHTFCcMf0Dh7A8yhT36GgkSJuUIchzXo.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                            T18
                        </div>
                    </div>
                    <p class="mt-4">
                        NHÀ GIA TIÊN (T18)
                    </p>
                    <div class="flex justify-center space-x-4 mt-4">
                        <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                            <i class="fas fa-play-circle mr-2">
                            </i>
                            Xem Trailer
                        </button>
                        <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                            ĐẶT VÉ
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for Quỷ Nhập Tràng" height="450"
                            src="https://storage.googleapis.com/a1aa/image/ggEng7TZDSIrWmYAe-jR281Owmxo78bwWUqLFvPxMO4.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                            T18
                        </div>
                    </div>
                    <p class="mt-4">
                        QUỶ NHẬP TRÀNG (T18)
                    </p>
                    <div class="flex justify-center space-x-4 mt-4">
                        <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                            <i class="fas fa-play-circle mr-2">
                            </i>
                            Xem Trailer
                        </button>
                        <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                            ĐẶT VÉ
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for Cưới Ma" height="450"
                            src="https://storage.googleapis.com/a1aa/image/yQCEM2_foqlT7s8vLzwkJBJylXuLhN62SzULmKtjLWM.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                            T18
                        </div>
                    </div>
                    <p class="mt-4">
                        CƯỚI MA (T18)
                    </p>
                    <div class="flex justify-center space-x-4 mt-4">
                        <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                            <i class="fas fa-play-circle mr-2">
                            </i>
                            Xem Trailer
                        </button>
                        <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                            ĐẶT VÉ
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for Nữ Tu Bóng Tối" height="450"
                            src="https://storage.googleapis.com/a1aa/image/_A60Vme6qRcZedNL3l9m_Ll59Rg5Id1afj1h0lrfGEg.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs">
                            T16
                        </div>
                    </div>
                    <p class="mt-4">
                        NỮ TU BÓNG TỐI (T16)
                    </p>
                    <div class="flex justify-center space-x-4 mt-4">
                        <button class="bg-transparent text-white py-2 px-4 rounded border border-white">
                            <i class="fas fa-play-circle mr-2">
                            </i>
                            Xem Trailer
                        </button>
                        <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                            ĐẶT VÉ
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <button class="bg-yellow-500 text-black py-2 px-4 rounded">
                    XEM THÊM
                </button>
            </div>
        </div>

    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'MovieComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>