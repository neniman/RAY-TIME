<template>
    <div class="start-container">
        <img class="logo" src="@/assets/logo.svg">
        <button @click="registerClicked" class="sign-up-btn">Sign Up</button>
        <label class="label-start">Save the time of your life.</label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'StartScreen',
    methods: {
        registerClicked() {
            this.$router.push({
                name: 'register'
            });
        }
    }
});
</script>

<style scoped>
.start-container {
    background-image: linear-gradient(21deg, #6a514b, #b85a4b);
    border: none;
    height: 100%;
}

.label-start {
    font-family: Rubik;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: -0.41px;
    color: #ffffff;
}
</style>
