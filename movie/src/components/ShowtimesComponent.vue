<template>
  <HeaderComponents />
  <div class="p-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
        <div class="p-2 border-[#a9a9a9] border rounded-lg">
          <div class="flex justify-between mb-2">
            <label class="text-2xl text-yellow-300" for="date"> 1. Ngày </label>
            <i class="fas fa-calendar-alt text-yellow-300 text-2xl"> </i>
          </div>
          <div class="">
            <input
              class="bg-white text-black py-2 px-4 rounded-md w-full font- semibold"
              id="date"
              type="text"
              value="Hôm Nay 03/03"
            />
          </div>
        </div>
        <div class="p-2 border-[#a9a9a9] border rounded-lg col-span-2">
          <div class="flex justify-between mb-2">
            <label class="text-2xl text-yellow-300" for="movie">
              2. Phim
            </label>
            <i class="fas fa-film text-yellow-300 text-2xl"> </i>
          </div>

          <div class="">
            <input
              class="bg-white text-black py-2 px-4 rounded-md w-full font- semibold"
              id="movie"
              type="text"
              value="Chọn Phim"
            />
          </div>
        </div>
        <div class="p-2 border-[#a9a9a9] border rounded-lg">
          <div class="flex justify-between mb-2">
            <label class="text-2xl text-yellow-300" for="date"> 3. Rạp </label>
            <i class="fas fa-map-marker-alt text-yellow-300 text-2xl"> </i>
          </div>
          <div class="">
            <input
              class="bg-white text-black py-2 px-4 rounded-md w-full font- semibold"
              id="cinema"
              type="text"
              value="Chọn Rạp"
            />
          </div>
        </div>
      </div>
      <hr class="border-gray-600 my-6" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <img
            alt="Movie poster for Nhà Gia Tiền"
            class="w-full rounded-md mb-4"
            height="600"
            src="https://storage.googleapis.com/a1aa/image/ko0jsk5Ayd8kx_MahbqtAEMoVYUeol5au8eEL8kLt-I.jpg"
            width="400"
          />
          <div class="text-lg font-bold mb-2">NHÀ GIA TIỀN (T18)</div>
          <div class="text-sm mb-1">Hài, Gia đình</div>
          <div class="text-sm mb-1">117</div>
          <div class="text-sm mb-1">Việt Nam</div>
          <div class="text-sm mb-1">VN</div>
          <div class="text-sm">
            T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
          </div>
        </div>
        <div class="col-span-2">
          <div class="mb-6">
            <div class="flex items-start">
              <div class="w-1/3 px-3">
                <div class="text-lg font-semibold">Cinestar</div>
                <div class="text-3xl mb-1 leading-[1.4] font-sans">
                  Hai Bà Trưng (TP.HCM)
                </div>
                <div class="text-sm mb-2">
                  271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ
                  Chí Minh
                </div>
              </div>
              <div class="px-3">
                <h3 class="text-xs mb-3 uppercase">Standard</h3>
                <div class="grid grid-cols-7 gap-2 flex-1">
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md border-yellow-300 text-yellow-300"
                  >
                    08:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    09:15
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    09:50
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    10:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    11:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    13:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    14:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    14:30
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    15:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    16:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    16:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    18:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    18:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    19:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    20:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    20:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    21:30
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    21:50
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    22:20
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    23:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    23:50
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-gray-600 my-8" />
          <div class="mb-6">
            <div class="flex items-start">
              <div class="w-1/3 px-3">
                <div class="text-lg font-semibold">Cinestar</div>
                <div class="text-3xl mb-1 leading-[1.4] font-sans">
                  Mỹ Tho (Tiền Giang)
                </div>
                <div class="text-sm mb-2">
                  52 Đinh Bộ Lĩnh, Phường 3, Thành phố Mỹ Tho, Tiền Giang
                </div>
              </div>
              <div class="px-3">
                <h3 class="text-xs mb-3 uppercase">Standard</h3>
                <div class="grid grid-cols-7 gap-2 flex-1">
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md border-yellow-300 text-yellow-300"
                  >
                    08:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    09:15
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    09:50
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    10:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    11:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    13:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    14:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    14:30
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    15:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    16:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    16:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    18:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    18:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    19:10
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    20:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    20:40
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    21:30
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    21:50
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    22:20
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    23:00
                  </div>
                  <div
                    class="border-[.05rem] border-[rgb(248 250 252 / 50%)] text-center py-2 px-3 rounded-md"
                  >
                    23:50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-gray-600 my-4 w-2/3 mx-auto" />
  <div class="bg-gradient-to-b from-gray-900 to-purple-900 text-white">
    <div class="container mx-auto p-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3">
          <img
            alt="Movie poster showing a group of people in a dark, eerie setting with the title 'QUỶ NHẬP TRÀNG' in bold yellow letters at the top"
            height="600"
            src="https://storage.googleapis.com/a1aa/image/rqEqU6fhZjzQkDa3gZ3IgIcSFyEE4DOIEBgt0uYEXn4.jpg"
            width="400"
          />
          <div class="text-lg font-bold mt-4">QUỶ NHẬP TRÀNG (T18)</div>
          <div class="mt-2">
            <i class="fas fa-film"> </i>
            Kinh Dị
          </div>
          <div class="mt-2">
            <i class="fas fa-clock"> </i>
            122
          </div>
          <div class="mt-2">
            <i class="fas fa-flag"> </i>
            Việt Nam
          </div>
          <div class="mt-2">
            <i class="fas fa-globe"> </i>
            VN
          </div>
          <div class="mt-2">
            <i class="fas fa-exclamation-triangle"> </i>
            T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
          </div>
        </div>
        <div class="md:w-2/3 md:pl-8">
          <div class="mb-4">
            <button class="border border-gray-500 px-4 py-2 rounded">
              Chưa có suất chiếu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-gray-600 my-4 w-2/3 mx-auto" />
  <div class="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
    <div class="container mx-auto py-8">
      <div class="text-center mb-8">
        <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          XEM TẤT CẢ LỊCH CHIẾU
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="relative">
            <img
              alt="Movie poster for ĐẢO CUỒNG SÁT (T18)"
              class="w-full"
              height="450"
              src="https://storage.googleapis.com/a1aa/image/5qm-Dhsrv8kysm1o34a3PsGvscwOVBJ8PsR5Bt42KJY.jpg"
              width="300"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1"
            >
              20
            </div>
            <div
              class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1"
            >
              T18
            </div>
          </div>
          <h3 class="mt-4 font-bold">ĐẢO CUỒNG SÁT (T18)</h3>
          <div class="flex justify-center mt-2">
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2"
            >
              ĐẶT VÉ
            </button>
            <button
              class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2"
            >
              Xem Trailer
            </button>
          </div>
        </div>
        <div class="text-center">
          <div class="relative">
            <img
              alt="Movie poster for NỮ TU BÓNG TỐI (T16)"
              class="w-full"
              height="450"
              src="https://storage.googleapis.com/a1aa/image/UC6i6AYdDspLugWqe-taeElLQ6r4O5g-iq0HPMvB4Tk.jpg"
              width="300"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1"
            >
              20
            </div>
            <div
              class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1"
            >
              T16
            </div>
          </div>
          <h3 class="mt-4 font-bold">NỮ TU BÓNG TỐI (T16)</h3>
          <div class="flex justify-center mt-2">
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2"
            >
              ĐẶT VÉ
            </button>
            <button
              class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2"
            >
              Xem Trailer
            </button>
          </div>
        </div>
        <div class="text-center">
          <div class="relative">
            <img
              alt="Movie poster for VÕ ĐƯỜNG ĐẠI NÁO (T16)"
              class="w-full"
              height="450"
              src="https://storage.googleapis.com/a1aa/image/ziK7Vwdp3fADgTqNvgDM3MmoQVEBCGEIS-cG2kFwjMs.jpg"
              width="300"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1"
            >
              20
            </div>
            <div
              class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1"
            >
              T16
            </div>
          </div>
          <h3 class="mt-4 font-bold">VÕ ĐƯỜNG ĐẠI NÁO (T16)</h3>
          <div class="flex justify-center mt-2">
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2"
            >
              ĐẶT VÉ
            </button>
            <button
              class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2"
            >
              Xem Trailer
            </button>
          </div>
        </div>
        <div class="text-center">
          <div class="relative">
            <img
              alt="Movie poster for CUỘC ĐÀO TẨU TRÊN KHÔNG (T16)"
              class="w-full"
              height="450"
              src="https://storage.googleapis.com/a1aa/image/BZjAV0tHP6YIiLl2LG4-za6CY5cwBKnOOM81RUNki64.jpg"
              width="300"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1"
            >
              20
            </div>
            <div
              class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1"
            >
              T16
            </div>
          </div>
          <h3 class="mt-4 font-bold">CUỘC ĐÀO TẨU TRÊN KHÔNG (T16)</h3>
          <div class="flex justify-center mt-2">
            <button
              class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2"
            >
              ĐẶT VÉ
            </button>
            <button
              class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2"
            >
              Xem Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponents />
</template>
<script>
import HeaderComponents from "./HeaderComponent.vue";
import FooterComponents from "./FooterComponents.vue";

export default {
  name: "ShowtimesComponent",
  components: {
    HeaderComponents,
    FooterComponents,
  },
};
</script>