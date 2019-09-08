<template>
    <div class="start-container">
        
        <img style="padding: 10%;  width: 100%;" src="@/assets/ray_text.svg">
        <button @click="moreInfoClicked" class="sign-up-btn" style="bottom: 17%;">More Information</button>
        <button @click="addClicked" class="sign-up-btn" style="bottom: 10%;">Add to Calender</button>
        <button @click="removeClicked" class="sign-up-btn">Cancel</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'Register',
    data() {
        return {
            name: '',
            surname: '',
            mobile: '',
            email: '',
            dropdown: false,
            dropdownOptions: [{key: 'home', title: 'home', icon: 'user'}]
        };
    },
    methods: {
        ...mapMutations(['setAppointment']),
        moreInfoClicked() {
            this.$router.push({
                name: 'moreInfo'
            });
        },
        addClicked() {
            (this as any).setAppointment(true);
            this.$router.push({
                name: 'estimation'
            });
        },
        removeClicked() {
            (this as any).setAppointment(false);
            this.$router.push({
                name: 'main'
            });
            }
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