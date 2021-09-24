<template>
    <div class="container">
        <h3 id="custom555">Characters</h3>
        <div class="row">
            <div
                class="p-3 col-3"
                v-for="(character, index) in characters"
                :key="index"
            >
                <characterCard :character="character"/>
            </div>
        </div>
    </div>
</template>

<script>
import characterCard from "./characterCard.vue";
import { mapActions } from "vuex";
export default {
    name: "characterTable",
    components: {
        characterCard,
    },
    props: ["characters"],
    methods: {
        ...mapActions(["fetchCharacters"]),
    },
    created() {
        this.fetchCharacters();
    },
};
</script>

<style scoped>
#custom555 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
}
</style>