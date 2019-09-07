<template>
    <div class="start-container">
        <img class="logo" src="@/assets/logo.png">
        <button @click="registerClicked" class="sign-up-btn">Sign Up</button>
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
.logo {
    width: 100%;
    padding: 15%;
}

.sign-up-btn {
    width: 90%;
    height: 44px;
    bottom: 3%;
    left: 5%;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #c86851;
    font-family: Rubik;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: -0.41px;
    color: #ffffff;
    border: none;
}
</style>