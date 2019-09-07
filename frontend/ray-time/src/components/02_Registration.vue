<template>
    <div class="register-container header">
        <img class="header-img" src="@/assets/header.png">
        <img class="register-img" src="@/assets/register_img.png">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.png">
        <label class="register-label">Registration</label>
        <input class="reg-input" type="text" placeholder="Name"/>
        <input class="reg-input" type="text" placeholder="Surname"/>
        <input class="reg-input" type="text" placeholder="Mobile"/>
        <input class="reg-input" type="text" placeholder="Email"/>
        <button @click="signUpClicked" class="sign-up-btn">Sign Up</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Register',
    methods: {
        signUpClicked() {
            this.$router.push({
                name: 'main'
            });
        },
        menuClicked() {
            // TODO: what happens -> modal? dropdown?
        }
    }
});
</script>

<style scoped>
.header-img {
    width: 100%;
}

.register-img {
    width: 100%;
    margin-top: -35px;
}

.menu-btn {
    position: absolute;
    top: 10px;
    left: 0;
    padding: 20px;
    width: 19%;
}

.register-label {
    position: absolute;
    top: 26px;
    left: 70px;
    height: 34px;
    font-family: Rubik;
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: 0.36px;
    color: #ffffff;
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