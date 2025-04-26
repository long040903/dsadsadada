<template>
    <div class="search">
        <SearchResults />
    </div>
</template>

<script>
import SearchResults from '@/components/SearchResultsComponent';

export default {
    name: 'SearchResultsView',
    components: {
        SearchResults
    }
}
</script>