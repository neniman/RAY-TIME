<template>
    <div class="appointment-contaienr">
        <img class="header-img" src="@/assets/header.png">
        <img class="welcome-img" src="@/assets/welcome_img.svg">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <img @click="photoClicked" class="profile-btn" src="@/assets/photo.svg">
        <label class="header-label">New Appointment</label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Appointments',
    methods: {
        menuClicked() {
            // TODO
        },
        photoClicked() {
            // TODO
        }
    }
});
</script>

<style scoped>

</style>