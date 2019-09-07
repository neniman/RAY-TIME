<template>
    <div class="main-contaienr">
        <img class="header-img" src="@/assets/header.png">
        <img class="welcome-img" src="@/assets/welcome_img.svg">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <img @click="profileClicked" class="profile-btn" src="@/assets/user.svg">
        <label class="header-label">Welcome {{ $store.getters.getPatientName }}</label>
        <div class="elements">
            <img @click="elementClicked('new-appointment')" class="element-img" src="@/assets/menu_btn.svg">
            <img @click="elementClicked('new-appointment')" class="element-img" src="@/assets/menu_btn.svg">
            <img @click="elementClicked('new-appointment')" class="element-img" src="@/assets/menu_btn.svg">
            <img @click="elementClicked('new-appointment')" class="element-img" src="@/assets/menu_btn.svg">

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'MainPage',
    methods: {
        menuClicked() {
            // TODO
        },
        profileClicked() {
            // TODO
        }
    }
});
</script>

<style scoped>
    .elements {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        bottom: 3%;
        left: 5%;
        width: 90%;
    }

    .element-img {
        width: 50%;
    }

    .profile-btn {
        position: absolute;
        top: 10px;
        right: 0;
        padding: 20px;
        width: 19%;
    }
</style>