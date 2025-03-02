<template>
    <HeaderComponents />
    <div class="bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <div class="container mx-auto p-4">
            <div class="text-center">
                <img alt="Two children playing in a colorful indoor playground" class="mx-auto" height="400"
                    src="https://storage.googleapis.com/a1aa/image/o9bFdkcU0ilAqcMiRhCGyImnWcrT2eVVhCDDAq757Rs.jpg"
                    width="1200" />
            </div>
            <div class="text-center mt-8">
                <img alt="Kidzone logo" class="mx-auto" height="100"
                    src="https://storage.googleapis.com/a1aa/image/meld0UCtiWentsSBCnTbRu9Q2Dy272vpeUjI7aIDQrs.jpg"
                    width="200" />
            </div>
            <div class="text-center mt-8">
                <h1 class="text-4xl font-bold">
                    KIDZONE
                </h1>
                <p class="mt-4 text-lg">
                    Giải phóng trí tưởng tượng của con bạn tại Kidzone, sân chơi trong nhà tuyệt đỉnh.
                    Hãy để các bé khám phá một thế giới vui nhộn và khám phá tại Kidzone, khu vui chơi trong nhà
                    rộng rãi được thiết kế dành cho trẻ em ở mọi lứa tuổi.
                    C'Kidzone cung cấp hơn 25 trò chơi đa dạng và hấp dẫn, bao gồm các hố bóng kết hợp chướng ngại
                    vật đầy thử thách và mạng lưới leo núi thú vị. Và tất cả các thiết bị đều được chọn lọc kỹ và cẩn
                    thận
                    để đảm bảo môi trường vui chơi an toàn cho các bé.
                    C'Kidzone không chỉ là một không gian vui chơi giải trí, chúng tôi còn cung cấp một không gian sôi
                    động, nơi các bé có thể kết bạn mới, phát triển các kỹ năng thể chất và khơi dậy khả năng sáng tạo.
                    C'Kidzone có thêm dịch vụ trọn gói nhận tổ chức tiệc, sự kiện cho các bé
                    Hãy để bé yêu của bạn tận hưởng những trải nghiệm tuyệt vời tại đây!
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-center">
                <div>
                    <h2 class="text-xl font-bold">
                        CINESTAR HUẾ
                    </h2>
                    <p>
                        25 Hai Bà Trưng, Phường Vĩnh Ninh, TP.Huế
                    </p>
                    <a class="text-yellow-400" href="https://www.facebook.com/CinestarHue">
                        <i class="fab fa-facebook">
                        </i>
                        https://www.facebook.com/CinestarHue
                    </a>
                </div>
                <div>
                    <h2 class="text-xl font-bold">
                        CINESTAR MỸ THO
                    </h2>
                    <p>
                        52 Đinh Bộ Lĩnh, Phường 3, Thành phố Mỹ Tho
                    </p>
                    <a class="text-yellow-400" href="https://www.facebook.com/CinestarMyTho">
                        <i class="fab fa-facebook">
                        </i>
                        https://www.facebook.com/CinestarMyTho
                    </a>
                </div>
                <div>
                    <h2 class="text-xl font-bold">
                        CINESTAR ĐÀ LẠT
                    </h2>
                    <p>
                        Quảng trường Lâm Viên, Thành phố Đà Lạt
                    </p>
                    <a class="text-yellow-400" href="https://www.facebook.com/CinestarDaLat">
                        <i class="fab fa-facebook">
                        </i>
                        https://www.facebook.com/CinestarDaLat
                    </a>
                </div>
                <div>
                    <h2 class="text-xl font-bold">
                        CINESTAR KIÊN GIANG
                    </h2>
                    <p>
                        TTTM Rạch Sỏi, Phường Rạch Sỏi, TP. Rạch Giá
                    </p>
                    <a class="text-yellow-400" href="https://www.facebook.com/CinestarKienGiang">
                        <i class="fab fa-facebook">
                        </i>
                        https://www.facebook.com/CinestarKienGiang
                    </a>
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
    name: 'EntertainmentDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>