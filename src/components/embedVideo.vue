<template>
      <iframe class="custom-padding" width="550" height="315" :src="`https://www.youtube.com/embed/${charaDetail.id.videoId}`"> </iframe>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EmbedVideo",
  props: ["charaDetail"],
  computed: {
    ...mapState(["youtubeVideo"])
  },
  methods: {
    ...mapActions(["fetchYoutubeVideo"])
  },
  created() {
      console.log(this.charaDetail);
  }
};
</script>

<style scoped>

.custom-padding {
    margin: 5px 5px
}
</style>
