<template>
    <div class="register-container header">
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

        <label class="header-label">Information</label>
        <img class="photo-img" src="@/assets/info_last.png">        
        
        <button @click="signUpClicked" class="sign-up-btn">I have read understood and agree</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'Information',
    data() {
        return {
            name: '',
            surname: '',
            mobile: '',
            email: '',
            dropdown: false,
            dropdownOptions: [{key: 'main', title: 'Home', icon: 'user'}]
        };
    },
    methods: {
        ...mapMutations(['setRegisterData']),
        signUpClicked() {
            (this as any).setRegisterData(
                { name: this.name, surname: this.surname, mobile: this.mobile, email: this.email }
            );
            this.$router.push({
                name: 'main'
            });
        },
        menuClicked() {
            this.dropdown = !this.dropdown;
        },
        dropDownClicked(key: string) {
            this.$router.push({
                name: key
            });
        }
    }
});
</script>

<style>

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