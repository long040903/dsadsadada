<template>
    <HeaderComponents />
    <div class="bg-blue-900 text-white m-8">
        <div class="text-center py-4">
            <h1 class="text-2xl font-bold">
                TẤT CẢ CÁC GIẢI TRÍ
            </h1>
        </div>
        <div class="space-y-4" v-if="entertainments.length">
            <a v-for="(item, index) in entertainments" :key="index" class="p-4" :href="`/entertainment-detail/${item.id}`">
                <div class="flex items-center justify-between p-4" :class="getBgColor(index)">
                    <div class="flex items-center">
                        <img :alt="`${item.name} logo`" class="mr-2" height="50" :src="item.logo" width="50" />
                        <span class="text-2xl font-bold">{{ item.name }}</span>
                    </div>
                    <img :alt="item.description" class="h-32 w-2/3 object-cover" :src="item.image" />
                </div>
            </a>
        </div>
        <div v-else class="text-center py-4">
            <p>Đang tải dữ liệu...</p>
        </div>
    </div>
    <FooterComponents />
</template>

<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
import axios from 'axios';

export default {
    name: 'EntertainmentComponents',
    components: {
        HeaderComponents,
        FooterComponents
    },
    data() {
        return {
            entertainments: []
        };
    },
    methods: {
        async fetchEntertainment() {
            try {
                const response = await axios.get('https://api.example.com/entertainment');
                this.entertainments = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        },
        getBgColor(index) {
            const colors = ['bg-yellow-400', 'bg-orange-400', 'bg-blue-500'];
            return colors[index % colors.length];
        }
    },
    mounted() {
        this.fetchEntertainment();
    }
};
</script>
