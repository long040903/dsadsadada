<template>
    <HeaderComponents />
    <div class="bg-blue-900 text-white m-8">
        <div class="text-center py-4">
            <h1 class="text-2xl font-bold">
                TẤT CẢ CÁC GIẢI TRÍ
            </h1>
        </div>
        <div class="space-y-4">
            <a class="p-4" href="/entertainment-detail">
                <div class="flex items-center justify-between bg-yellow-400 p-4">
                    <div class="flex items-center">
                        <img alt="Kidzone logo" class="mr-2" height="50"
                            src="https://storage.googleapis.com/a1aa/image/crADw-Nk5Az5z0cx0uVeRK3dQDqzak3Y-9aySHQZWiM.jpg"
                            width="50" />
                        <span class="text-2xl font-bold">
                            KIDZONE
                        </span>
                    </div>
                    <img alt="Children playing in a colorful indoor playground" class="h-32 w-2/3 object-cover"
                        src="https://storage.googleapis.com/a1aa/image/Dr7zL_PvBKptSc-vXUeRIKBWcyGMKvkJ9RQUmSxXSU0.jpg" />
                </div>
            </a>
            <a class="p-4" href="/entertainment-detail">
                <div class="flex items-center justify-between bg-orange-400 p-4">
                    <div class="flex items-center">
                        <img alt="Food logo" class="mr-2" height="50"
                            src="https://storage.googleapis.com/a1aa/image/MnTZeiuMwG_J2V8r7iKdp_NS6uB3WuP3jFvgVmOyKkk.jpg"
                            width="50" />
                        <span class="text-2xl font-bold">
                            Món ngon
                        </span>
                    </div>
                    <img alt="People dining in a busy restaurant" class="h-32 w-2/3 object-cover"
                        src="https://storage.googleapis.com/a1aa/image/ZgjMsbXZ0-tEjkddGdL6c03LD0HBIEnEcviRjekAgAM.jpg" />
                </div>
            </a>
            <a class="p-4" href="/entertainment-detail">
                <div class="flex items-center justify-between bg-blue-500 p-4">
                    <div class="flex items-center">
                        <img alt="Bowling logo" class="mr-2" height="50"
                            src="https://storage.googleapis.com/a1aa/image/p9F4aXW_9ecKD1GVDc_na92D03PoFlLTmtc9GR7Pso4.jpg"
                            width="50" />
                        <span class="text-2xl font-bold">
                            BOWLING
                        </span>
                    </div>
                    <img alt="People bowling in a bowling alley" class="h-32 w-2/3 object-cover"
                        src="https://storage.googleapis.com/a1aa/image/x6qjrBfWoJzcgEioEB_Kuhqp5xVsOi1cQhdL1nEKSjI.jpg" />
                </div>
            </a>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'EntertainmentComponents',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>