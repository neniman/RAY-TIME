<template>
    <div class="preferences-contaienr">
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
        <label class="header-label">Preferences</label>
        <div class="header-box">
            <p class="description">Adding more flexibility regarding location and time will lead to an earlier appointment.</p>
            <label class="headline-label">Flexibility</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('time')" class="check-img" :src="timeChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">TIME</label>
        </div>
        <div class="check-el">
            <img @click="clickCheckbox('location')" class="check-img" :src="locationChecked ?  iconCheckedPath : iconUncheckedPath">
            <label class="check-label">LOCATION</label>
        </div>
        <div class="header-box">
            <label class="headline-label">Distance</label>
            <p class="description">Which is your max preferred distance?</p>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            <div class="text-km">
                <p class="text-km" style="left: 0;">1km</p>
                <p class="text-km" style="right: 0;">50km</p>
            </div>
        </div>

        <div class="header-box">
            <label class="headline-label">Mean of Transportation</label>
        </div>
        <div class="transport-container">
            <div class="check-el small">
                <img @click="clickCheckbox('car')" class="check-img" :src="carChecked ?  iconCheckedPath : iconUncheckedPath">
                <img class="check-img-label" src="@/assets/transport_car.svg">
            </div>
            <div class="check-el small">
                <img @click="clickCheckbox('bus')" class="check-img" :src="busChecked ?  iconCheckedPath : iconUncheckedPath">
                <img class="check-img-label" src="@/assets/transport_bus.svg">
            </div>
            <div class="check-el small">
                <img @click="clickCheckbox('ambulance')" class="check-img" :src="ambulanceChecked ?  iconCheckedPath : iconUncheckedPath">
                <img class="check-img-label" src="@/assets/transport_ambulance.svg">
            </div>
            <div class="check-el small">
                <img @click="clickCheckbox('bike')" class="check-img" :src="bikeChecked ?  iconCheckedPath : iconUncheckedPath">
                <img class="check-img-label" src="@/assets/transport_bike.svg">
            </div>
            <div class="check-el small">
                <img @click="clickCheckbox('walking')" class="check-img" :src="walkingChecked ?  iconCheckedPath : iconUncheckedPath">
                <img class="check-img-label" src="@/assets/transport_walk.svg">
            </div>

        </div>
        <button @click="nextClicked" class="next-btn">Continue</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Preferences',
    data() {
        return {
            timeChecked: false,
            locationChecked: false,
            carChecked: false,
            busChecked: false,
            ambulanceChecked: false,
            bikeChecked: false,
            walkingChecked: false,
            iconCheckedPath: require('@/assets/check.svg'),
            iconUncheckedPath: require('@/assets/unchecked.svg'),
            dropdown: false,
            dropdownOptions: [{title: 'main', icon: 'user'}]
        };
    },
    methods: {
        menuClicked() {
            this.dropdown = !this.dropdown;
        },
        nextClicked() {
            this.$router.push({
                name: 'proposed'
            });
        },
        dropDownClicked(title: string) {
            this.$router.push({
                name: title
            });
        },
        clickCheckbox(box: string) {
            switch (box) {
                case 'time':
                    this.timeChecked = !this.timeChecked;
                    break;
                case 'location':
                    this.locationChecked = !this.locationChecked;
                    break;
                case 'car':
                    this.carChecked = !this.carChecked;
                    break;
                case 'bus':
                    this.busChecked = !this.busChecked;
                    break;
                case 'ambulance':
                    this.ambulanceChecked = !this.ambulanceChecked;
                    break;
                case 'bike':
                    this.bikeChecked = !this.bikeChecked;
                    break;
                case 'walking':
                    this.walkingChecked = !this.walkingChecked;
                    break;
                default:
                    break;
            }
        }
    }
});
</script>

<style>


.check-img {
    object-fit: contain;
    height: 100%;
}

.check-img-label {
    object-fit: contain;
    height: 100%; 
    padding: 5px;
}

.check-label, .headline-label, .description {
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

.headline-label {
    font-weight: bold;
}

.description {
    color: #c86851;
    padding-bottom: 20px;
}

.header-box {
    width: 100%;
    text-align: left;
    padding: 10px;
}

.transport-container {
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
}

.small {
    width: 50%;
    margin: 0;
}

.text-km {
    color: #ffffff; 
    display: flex;
    justify-content: space-between;
}
</style>