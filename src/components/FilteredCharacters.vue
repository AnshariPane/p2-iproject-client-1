<template>
    <div class="sixteen columns custom-margin" style="display: block;">
      <div class="s-category-bar s-font-body clearfix">
        <div class="category-list check-list">
          <div class="category-link-item-wrapper" style="display: inline-block;">
            <h3 @click.prevent="showAll" class="category-link-item selected" href="#">All</h3>
          </div>
          <div class="category-link-item-wrapper" style="display: inline-block;">
            <h3 class="category-link-item selected" href="#">Generation 0</h3>
          </div>
          <div class="category-link-item-wrapper" style="display: inline-block;">
            <h3 class="category-link-item selected" href="#">1st Generation</h3>
          </div>
          <div class="category-link-item-wrapper" style="display: inline-block;">
            <h3 class="category-link-item selected" href="#">2nd Generation</h3>
          </div>
          <div class="category-link-item-wrapper" style="display: inline-block;">
            <h3 class="category-link-item selected" href="#">3rd Generation</h3>
          </div>
          <div class="category-link-item-wrapper" style="display: inline-block;">
            <h3 class="category-link-item selected" href="#">4th Generation</h3>
          </div>
        </div>
      </div>
      <h4 type="text" placeholder="Movie title" class="mb-2 mb-sm-0 mr-sm-2"></h4>
    <b-button class="invisible" type="button" variant="dark">Reset</b-button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterByGeneration",
   methods: {
    ...mapActions(["fetchFilteredCharacters"]),
    async showAll() {
      const query = {
        Generation : "Generation 0"
      };
      await this.fetchFilteredCharacters(query);
    },
    filterButton() {
      console.log("masuk sini");
    }
  }
};
</script>

<style scoped>
.custom-margin {
  margin-top: 20px;
}

.s-section .container .sixteen.columns {
  width: 97.8166666%;
}
.columns {
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

.s-section .s-category-bar {
  text-align: center;
  z-index: 1;
  border-color: rgba(85, 85, 85, 0.2);
}

.s-font-body {
  font-family: work sans, sans-serif;
}
.s-category-bar {
  margin-bottom: 30px;
  border-width: 0 0 1px;
  border-style: solid;
}

.clearfix,
.row {
  zoom: 1;
}

.clearfix {
  position: relative;
}

.s-category-bar .category-list {
  border-radius: 3px;
  padding-left: 5px;
}

.s-category-bar .category-list .category-link-item-wrapper {
  padding: 0 10px;
  display: inline-block;
  cursor: pointer;
}

.s-custom-colors .s-section .s-category-bar .category-list .category-link-item.selected {
  color: #49c8f0;
}

.s-category-bar .category-list .category-link-item.selected {
  position: relative;
}

.s-category-bar .category-list .category-link-item:last-child {
  margin-right: 0 !important;
}

.s-category-bar .category-list .category-link-item:first-child {
  margin-left: 0 !important;
}

.s-category-bar .category-list .category-link-item {
  display: inline-block;
  padding: 14px 0;
  text-decoration: none;
  font-size: 15px;
  text-transform: none;
}
</style>
