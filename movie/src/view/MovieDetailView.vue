<template>
  <div class="movie-detail">
    <MovieDetail :movieId="movieId" />
  </div>
</template>

<script>
import MovieDetail from "@/components/MovieDetailComponent";

export default {
  name: "MovieDetailView",
  components: {
    MovieDetail,
  },
  computed: {
    movieId() {
      return this.$route.params.id;
    },
  },
};
</script>