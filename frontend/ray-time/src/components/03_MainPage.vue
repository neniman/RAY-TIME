<template>
    <div class="main-contaienr">
        <img class="header-img" src="@/assets/header.png">
        <img style="    width: 105%;
    margin-left: -10px;
    margin-top: -39px;" src="@/assets/ray_green.svg">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <img @click="profileClicked" class="profile-btn" src="@/assets/user.svg">
        <label class="header-label">Welcome {{ $store.getters.getPatientName }}</label>
        <div v-if="$store.getters.hasAppointment" style="margin-top: 15%;">
            <label class="description">Upcoming Appointments:</label>
            <img class="appointment-img"  src="@/assets/date_2_select.svg">
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
                    break;
                    this.$router.push({
                        name: 'onsight'
                    });
                case 'change':
                    break;
                    this.$router.push({
                        name: 'change'
                    });
                case 'history':
                    break;
                    this.$router.push({
                        name: 'history'
                    });
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

    .description {
        font-family: Rubik;
        font-size: 17px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: -0.41px;
        color: #ffffff;
        padding-left: 10px;
        color: #c86851;
    }

    .appointment-img {
        margin-top: 5px;
        width: 90%;
    }
</style>