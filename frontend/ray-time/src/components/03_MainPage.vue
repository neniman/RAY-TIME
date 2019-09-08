<template>
    <div class="main-contaienr">
        <img class="header-img" src="@/assets/header.png">
        <img class="welcome-img" src="@/assets/welcome_img.svg">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <img @click="profileClicked" class="profile-btn" src="@/assets/user.svg">
        <label class="header-label">Welcome {{ $store.getters.getPatientName }}</label>
        <div v-if="$store.getters.hasAppointment" class="">
            <img class="appointment-img" src="@/assets/user.svg">
        </div>
        <div class="elements">
            <img @click="elementClicked('new-appointment')" class="element-img" src="@/assets/el_new_appointment.svg">
            <img @click="elementClicked('history')" class="element-img" src="@/assets/el_history.svg">
            <img @click="elementClicked('change')" class="element-img" src="@/assets/el_change.svg">
            <img @click="elementClicked('onsight')" class="element-img" src="@/assets/el_onsight.svg">
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
            this.$router.push({
                name: 'profile'
            });
        },
        elementClicked(element: string) {
            switch (element) {
                case 'new-appointment':
                    this.$router.push({
                        name: 'appointment'
                    });
                    break;
                case 'onsight':
                    this.$router.push({
                        name: 'onsight'
                    });
                    break;
                case 'change':
                    this.$router.push({
                        name: 'change'
                    });
                    break;
                case 'history':
                    this.$router.push({
                        name: 'history'
                    });
                    break;
                default:
                    break;
            }
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
</style>