<template>
    <div class="profile-container header">
        <img class="header-img" src="@/assets/header.png">
        <img @click="menuClicked" class="menu-btn" src="@/assets/menu_btn.svg">
        <img @click="editClicked" class="profile-btn" src="@/assets/user.svg">
        <div class="dropdown-container" v-if="dropdown">
            <div
                class="dropdown-element"
                v-for="(dropdownElement, index) in dropdownOptions"
                v-bind:key="index"
                @click.prevent="dropDownClicked(dropdownElement.key)"
            >   
                <img class="dropdown-element-img" src="@/assets/menu_btn.svg"/>
                <label class="title">{{ dropdownElement.title }}</label>
            </div>
        </div>
        <label class="header-label">Profile</label>

        <div class="profile-header">
            <div class="header-box">
                <img class="profile-img" src="@/assets/user_female.svg"/>
                <label class="headline-label">{{ $store.getters.getFullName }}</label>

                <img class="small-img" src="@/assets/user_fem.svg">
            </div>
        </div>

        <div class="header-box">
            <label class="headline-label">Personal Information</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('claust')" class="check-img" :src="claust ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">CLAUSTROPHOBIC</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('contrast')" class="check-img" :src="contrast ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">CONTRAST AGENT ALLERGY</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('pacemaker')" class="check-img" :src="pacemaker ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">PACEMAKER</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('heart')" class="check-img" :src="heart ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">HEART VALVE REPLACEMENT</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('implant')" class="check-img" :src="implant ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">IMPLANTATES</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('intra')" class="check-img" :src="intra ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">INTRAUTERINE IMPLANTATE</label>
        </div>


        <div class="header-box">
            <label class="headline-label">Axiety</label>
        </div>
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">

        <div class="header-box">
            <label class="headline-label">Other Information</label>
        </div>
        <input class="reg-input" type="text" placeholder="Info" v-model="name"/>
        <button @click="saveChanges" class="sign-up-btn">Save Changes</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'Profile',
    data() {
        return {
            name: '',
            surname: '',
            mobile: '',
            email: '',
            dropdown: false,
            dropdownOptions: [{key: 'main', title: 'Home', icon: 'user'}],
            claust: false,
            contrast: false,
            pacemaker: false,
            heart: false,
            implant: false,
            intra: false,
            iconCheckedPath: require('@/assets/check.svg'),
            iconUncheckedPath: require('@/assets/unchecked.svg')
        };
    },
    methods: {
        ...mapMutations(['setRegisterData']),
        editClicked() {
            // (this as any).setRegisterData(
            //     { name: this.name, surname: this.surname, mobile: this.mobile, email: this.email }
            // );
            // this.$router.push({
            //     name: 'main'
            // });
        },
        menuClicked() {
            this.dropdown = !this.dropdown;
        },
        dropDownClicked(key: string) {
            this.$router.push({
                name: key
            });
        },
        saveChanges() {
          this.$router.push({
                name: 'main'
            });
        },
        clickCheckbox(box: string) {
            switch (box) {
                case 'claust':
                    this.claust = !this.claust;
                    break;
                case 'contrast':
                    this.contrast = !this.contrast;
                    break;
                case 'pacemaker':
                    this.pacemaker = !this.pacemaker;
                    break;
                case 'heart':
                    this.heart = !this.heart;
                    break;
                case 'implant':
                    this.implant = !this.implant;
                    break;
                case 'intra':
                    this.intra = !this.intra;
                    break;
                default:
                    break;
            }
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
    background-color: rgba(200, 104, 81, 0.2);
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

#myRange {
    margin-top: 3%;
    -webkit-appearance: none;
    width: 90%;
}

/* .profile-header {
    background: #CDD9DA;
} */
</style>