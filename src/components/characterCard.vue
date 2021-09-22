<template>
  <div
        @click="charaDetails"
        class="hoverImage p-2 d-flex flex-column cardBorder rounded-border align-items-center"
    >
        <img
            :src="character.imageUrl"
            alt="movie"
            style="max-width: 100%; max-height: 30vh"
        />
        <h5 class="custom-h5">{{character.name}}</h5>
    </div>
</template>

<script>
export default {
    name: "characterCard",
    props: ["character"],
    methods : {
        charaDetails() {
            this.$router.push(`/charaDetails/${this.character.id}`)
        }
    }
    
}
</script>

<style scoped>
.cardBorder {
    border: 1px solid #141414;
}

.hoverImage {
    cursor: pointer;
}

.rounded-border {
    border-radius: 8px;
}

.custom-btn1 {
    border: 2px solid #fff;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    transition: all 0.75s;
}

.custom-btn1:hover {
    background-color: black;
    border: 2px solid rgb(0, 94, 156);
}

.custom-h5 {
    margin-top: 10px;
}
</style>