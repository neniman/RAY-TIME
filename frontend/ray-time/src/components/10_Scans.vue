<template>
    <div class="scans-container header">
        <img class="header-img" src="@/assets/header.png">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <div class="dropdown-container" v-if="dropdown">
            <div
                class="dropdown-element"
                v-for="(dropdownElement, index) in dropdownOptions"
                v-bind:key="index"
                @click.prevent="dropDownClicked(dropdownElement.title)"
            >   
                <img class="dropdown-element-img" src="@/assets/menu_btn.svg"/>
                <label class="title">{{ dropdownElement.title }}</label>
            </div>
        </div>

        <!-- JONA's VUE TODO: wohoo: insert image capturing function here!! -->

        <label class="header-label">Scan Referral</label>
        <button @click="scanClicked" class="sign-up-btn">Scan</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'Scans',
    data() {
        return {
            name: '',
            surname: '',
            mobile: '',
            email: '',
            dropdown: false,
            dropdownOptions: [{title: 'home', icon: 'user'}]
        };
    },
    methods: {
        ...mapMutations(['setRegisterData']),
        scanClicked() {
            // TODO: For you JONAS: first caputre pic then next path!!!
            this.$router.push({
                name: 'preferences'
            });
        },
        menuClicked() {
            this.dropdown = !this.dropdown;
        },
        dropDownClicked(title: string) {
            this.$router.push({
                name: title
            });
        }
    }
});
</script>

<style scoped>

.dropdown-container {
    top: 60px;
    left: 20px;
    position: absolute;
    height: 30px;
    background: black;
    border-radius: 4px;
    padding: 3px;
    display: flex;
    justify-content: center;
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