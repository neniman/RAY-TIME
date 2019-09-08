<template>
    <div class="proposed-container header">
        <img class="header-img" src="@/assets/header.png">
        <img class="register-img" src="@/assets/register_img.svg">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <div class="dropdown-container" v-if="dropdown">
            <div
                class="dropdown-element"
                v-for="(dropdownElement, index) in dropdownOptions"
                v-bind:key="index"
                @click.prevent="dropDownClicked(dropdownElement.title)"
            >   
                <img class="dropdown-element-img" src="@/assets/menu_btn.svg"/>
                <label class="title">{{ dropdownElement.key }}</label>
            </div>
        </div>

        <label class="header-label">Proposed Dates</label>
        <img class="date" style="margin-top: 5%;" @click="date1 = !date1" :src="date1 ? date1_1 : date1_0">
        <img class="date" @click="date2 = !date2" :src="date2 ? date2_1 : date2_0">
        <img class="date" @click="date3 = !date3" :src="date3 ? date3_1 : date3_0">
        <img class="date" @click="date4 = !date4" :src="date4 ? date4_1 : date4_0">
        
        <button @click="signUpClicked" class="sign-up-btn">Select Date</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'ProposedDate',
    data() {
        return {
            name: '',
            surname: '',
            mobile: '',
            email: '',
            dropdown: false,
            dropdownOptions: [{key: 'home', title: 'home', icon: 'user'}],
            date1: false,
            date2: false,
            date3: false,
            date4: false,
            date1_0: require('@/assets/date_1_not.svg'),
            date1_1: require('@/assets/date_1_select.svg'),
            date2_0: require('@/assets/date_2_not.svg'),
            date2_1: require('@/assets/date_2_select.svg'),
            date3_0: require('@/assets/date_3_not.svg'),
            date3_1: require('@/assets/date_3_select.svg'),
            date4_0: require('@/assets/date4_not.svg'),
            date4_1: require('@/assets/date4_select.svg'),
        };
    },
    methods: {
        ...mapMutations(['setAppointment']),
        signUpClicked() {
            (this as any).setAppointment();
            this.$router.push({
                name: 'ray'
            });
        },
        menuClicked() {
            this.dropdown = !this.dropdown;
        },
        dropDownClicked(key: string) {
            let date = 0;
            if(this.date1){
                date = 1;
            } else if (this.date2) {
                date = 2;
            } else if (this.date3) {
                date = 4;
            } else if (this.date4) {
                date = 5;
            }
            this.$socket.client.emit('newPatient', date);
            this.$router.push({
                name: key
            });
        },
    }
});
</script>

<style>
.start-container {
    background-image: linear-gradient(21deg, #6a514b, #b85a4b);
    border: none;
    height: 100%;
}

.dropdown-container {
    top: 60px;
    left: 20px;
    position: absolute;
    height: 30px;
    background: #ffffff;
    padding: 3px;
    display: flex;
    justify-content: center;
    font-family: Rubik;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: -0.41px;
    color: #acacac;
}

.reg-input {
    width: 90%;
    height: 44px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(200, 104, 81, 0.41);
    margin-top: 3%;
    border: none;
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

.reg-input::placeholder {
    width: 44.1px;
    height: 22px;
    font-family: Rubik;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: -0.41px;
    color: #acacac;
}

.header {
    width: 100%;
}

.sign-up-btn {
    width: 90%;
    height: 44px;
    /* margin-top: 15%; */
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
