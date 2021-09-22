<template>
  <div
    class="custom-section s-page-section custom-01-section transition collapse-bottom-padding"
    style="padding-top: 100px;"
  >
    <div class="container">
      <div class="custom1-container">
        <div class="s-component custom1">
          <div class="custom1-content">
            <div class="custom1-products-wrapper">
              <div class="custom1-row-view-wrapper">
                <div class="custom1-row-view-product from-product-page">
                  <div class="columns seven offset-one" style="min-height: 50px;">
                    <div class="half-offset-right">
                      <div class="custom1-row-view-product-image-wrapper" style="height: 532px;">
                        <div class="image-wrapper">
                          <img :src="charaDetail.imageUrl" alt="" width="100%" class="lazyloaded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="custom1-row-view-product-detail-panel s-font-body columns seven">
                    <div class="custom1-row-view-product-name">
                      <h1>{{ charaDetail.name }}</h1>
                    </div>
                    <div class="custom1-row-view-product-desc">
                      <div>{{ charaDetail.about }}</div>
                    </div>
                    <a class="custom1-row-view-product-order-btn s-common-button" href="">Add to favourites</a>
                  </div>
                </div>
                <div class="custom-container"  >
                  <embedVideo v-for="(item, index) in youtubeVideo" :key="index" :charaDetail="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import embedVideo from "../components/embedVideo.vue";
export default {
  name: "characterDetail",
  components: {
    embedVideo
  },
  computed: {
    ...mapState(["charaDetail", "youtubeVideo"])
  },
  methods: {
    ...mapActions(["fetchCharaDetail", "fetchYoutubeVideo"])
  },
  async created() {
    await this.fetchCharaDetail(this.$route.params.id);
    await this.fetchYoutubeVideo(this.charaDetail.name);
  }
};
</script>

<style scoped>
.custom-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.s-page-product .custom-01-section {
  padding-top: 120px;
}

.s-page-product .custom-01-section {
  -webkit-transform: initial !important;
  transform: none !important;
}

.custom-section.collapse-bottom-padding {
  padding-bottom: 0 !important;
}
.custom-section.transition {
  transition: padding-bottom 0.5s;
}

.s-page-product .custom-01-section .container {
  z-index: 5 !important;
}

.custom-section {
  padding: 80px 0;
  font-size: 16px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  background: #fff;
  position: relative;
  color: #323940;
  line-height: 1.45;
}

.custom-section .container {
  width: 80% !important;
  margin: 0 auto !important;
  max-width: 1280px;
  position: relative;
  padding: 0;
}

.custom1-container {
  clear: both;
}

.custom1 {
  clear: both;
}

.custom1 .custom1-content {
  position: relative;
  text-align: left;
  clear: both;
}

.custom1 .custom1-content .custom1-products-wrapper {
  clear: both;
  position: relative;
}

.custom1 .custom1-content .custom1-products-wrapper .custom1-row-view-product:last-child {
  margin-bottom: 0;
}
.custom1 .custom1-content .custom1-products-wrapper .custom1-row-view-product {
  width: 100%;
  display: inline-block;
  position: relative;
  margin-bottom: 40px;
  padding: 0;
}

.custom-section .container .seven.columns {
  width: 41.5666666%;
}

.custom-section .container .offset-one {
  padding-left: 6.25%;
}

.custom-section .container .column,
.custom-section .container .columns {
  float: left;
  display: inline;
  margin-left: 1.04166666%;
  margin-right: 1.04166666%;
}

.column,
.columns {
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1), margin 0.2s cubic-bezier(0.7, 0, 0.3, 1),
    padding 0.2s cubic-bezier(0.7, 0, 0.3, 1);
}

.custom1 .custom1-content .custom1-products-wrapper .custom1-row-view-product .half-offset-right {
  width: 100%;
}

.custom-section .half-offset-right {
  padding-right: 3.125%;
}

.custom1 .custom1-content .custom1-products-wrapper .custom1-row-view-product .custom1-row-view-product-image-wrapper {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 0;
  transition: height 0.3s;
}

.custom1
  .custom1-content
  .custom1-products-wrapper
  .custom1-row-view-product
  .custom1-row-view-product-image-wrapper
  img {
  width: 100%;
}

img {
  border: 0;
}

.custom1 .custom1-content .custom1-products-wrapper .custom1-row-view-product .custom1-row-view-product-detail-panel {
  box-sizing: border-box;
  padding-left: 10px;
}

.custom-section .container .seven.columns {
  width: 41.5666666%;
}

.custom-section .container .column,
.custom-section .container .columns {
  float: left;
  display: inline;
  margin-left: 1.04166666%;
  margin-right: 1.04166666%;
}

.s-font-body {
  font-family: work sans, sans-serif;
}

.column,
.columns {
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1), margin 0.2s cubic-bezier(0.7, 0, 0.3, 1),
    padding 0.2s cubic-bezier(0.7, 0, 0.3, 1);
}

.custom1
  .custom1-content
  .custom1-products-wrapper
  .custom1-row-view-product
  .custom1-row-view-product-detail-panel
  .custom1-row-view-product-name {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
}

#s-content h1,
#s-content h2 {
  margin-bottom: 10px;
  font-size: 44px;
}

#s-content h1,
#s-content h2,
#s-content h3,
#s-content h4,
#s-content h5,
#s-content h6 {
  line-height: inherit;
  font-weight: inherit;
}

.custom1
  .custom1-content
  .custom1-products-wrapper
  .custom1-row-view-product
  .custom1-row-view-product-detail-panel
  .custom1-row-view-product-name
  h1 {
  font-size: inherit !important;
}

h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.custom1
  .custom1-content
  .custom1-products-wrapper
  .custom1-row-view-product
  .custom1-row-view-product-detail-panel
  .custom1-row-view-product-desc {
  margin: 0 0 35px;
  word-wrap: break-word;
}

.custom1
  .custom1-content
  .custom1-products-wrapper
  .custom1-row-view-product
  .custom1-row-view-product-detail-panel
  .custom1-row-view-product-order-btn {
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 100%;
  padding: 12px;
  font-size: 18px;
  box-sizing: border-box;
}

.s-custom-colors .s-common-button {
  background: #a2d8e6;
}

.s-custom-colors .s-common-button {
  box-shadow: none;
}

.s-common-button {
  max-width: 90%;
  padding: 25px 45px;
  margin: 0 auto;
  display: inline-block;
  background: #2eb6dc;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-size: 24px;
  border-radius: 100px;
  cursor: pointer;
  transition: background 0.2s;
}

.s-common-button {
  zoom: 1;
  word-break: break-word;
}

#customblabla {
  margin-top: 20px;
  margin-left: 70px;
}
</style>
