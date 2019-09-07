<template>
    <div class="appointment-contaienr">
        <img class="header-img" src="@/assets/header.png">
        <img class="welcome-img" src="@/assets/welcome_img.svg">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <img @click="photoClicked" class="profile-btn" src="@/assets/photo.svg">
        <label class="header-label">New Appointment</label>
        <div class="check-el">
            <img @click="clickCheckbox('xray')" class="check-img" :src="xrayChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">X-RAY</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('mrt')" class="check-img" :src="mrtChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">MRT</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('mamo')" class="check-img" :src="mamoChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">MAMOGRAPHIE</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('ultrasound')" class="check-img" :src="ultrasoundChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">ULTRASONIC</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('ct')" class="check-img" :src="ctChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">COMPUTER TOMOGRAPHIE (CT)</label>
        </div>
        <button @click="nextClicked" class="next-btn">Continue</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Appointments',
    data() {
        return {
            xrayChecked: false,
            mrtChecked: false,
            mamoChecked: false,
            ultrasoundChecked: false,
            ctChecked: false,
            iconCheckedPath: require('@/assets/check.svg'),
            iconUncheckedPath: require('@/assets/unchecked.svg')
        };
    },
    methods: {
        menuClicked() {
            // TODO
        },
        photoClicked() {
            this.$router.push({
                name: 'scans'
            });
        },
        nextClicked() {
            this.$router.push({
                name: 'preferences'
            });
        },
        clickCheckbox(box: string) {
            switch (box) {
                case 'xray':
                    this.xrayChecked = !this.xrayChecked;
                    break;
                case 'mrt':
                    this.mrtChecked = !this.mrtChecked;
                    break;
                case 'mamo':
                    this.mamoChecked = !this.mamoChecked;
                    break;
                case 'ultrasound':
                    this.ultrasoundChecked = !this.ultrasoundChecked;
                    break;
                case 'ct':
                    this.ctChecked = !this.ctChecked;
                    break;
                default:
                    break;
            }
        }
    }
});
</script>

<style scoped>
.check-el {
    height: 50px;
    text-align: left;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
}

.check-img {
    object-fit: contain;
    height: 100%;
}

.check-label {
    font-family: Rubik;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: -0.41px;
    color: #ffffff;
    padding-left: 10px;
}
</style>