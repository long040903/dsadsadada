<template>
    <HeaderComponents />
    <div class="bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <div class="container mx-auto p-4">
            <div class="text-center">
                <img v-if="entertainment.image" :alt="entertainment.altText" class="mx-auto" height="400" :src="entertainment.image" width="1200" />
            </div>
            <div class="text-center mt-8">
                <img v-if="entertainment.logo" :alt="`${entertainment.name} logo`" class="mx-auto" height="100" :src="entertainment.logo" width="200" />
            </div>
            <div class="text-center mt-8">
                <h1 class="text-4xl font-bold">{{ entertainment.name }}</h1>
                <p class="mt-4 text-lg">{{ entertainment.description }}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-center">
                <div v-for="(location, index) in entertainment.locations" :key="index">
                    <h2 class="text-xl font-bold">{{ location.name }}</h2>
                    <p>{{ location.address }}</p>
                    <a class="text-yellow-400" :href="location.facebook">
                        <i class="fab fa-facebook"></i>
                        {{ location.facebook }}
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
import axios from 'axios';

export default {
    name: 'EntertainmentDetailComponent',
    components: {
        HeaderComponents,
        FooterComponents
    },
    data() {
        return {
            entertainment: {}
        };
    },
    methods: {
        async fetchEntertainmentDetail() {
            try {
                const response = await axios.get('https://api.example.com/entertainment-detail');
                this.entertainment = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        }
    },
    mounted() {
        this.fetchEntertainmentDetail();
    }
};
</script>
