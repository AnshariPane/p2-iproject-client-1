<template>
  <div class="h-100 w-100 flex-column d-flex">
    <div class="flex-grow-1">
      <div class="d-flex justify-content-center p-2 align-items-center">
        <!-- <filterMovies /> -->
      </div>
        <charactersTable :characters="characters" />
    </div>
    <!-- <PaginationHome 
    class="align-self-center"
    :totalPages="movies.totalPages"
    /> -->
  </div>
</template>

<script>
import charactersTable from "../components/charactersTable.vue"
import { mapState } from "vuex";
export default {
    name: "Home",
    components : {
      charactersTable
    },
    computed: {
        ...mapState(["characters"]),
    },
};
</script>

<style scoped>
</style>
