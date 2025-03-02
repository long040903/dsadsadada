<template>
    <div class="movie">
        <Movie />
    </div>
</template>

<script>
import Movie from '@/components/MovieComponent';

export default {
    name: 'MovieView',
    components: {
        Movie
    }
}
</script>