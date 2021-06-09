<template>
<div>
    <div class="card">

        <h2>New York</h2>
        <table>
            <tr>
                <td v-for="items in weatherDataTop" :key=items>
                    <div v-if="items.temperature > 15 && items.temperature < 25" class="sky">
                        <div class="sun"></div>
                        <div class="cloud">
                            <div class="circle-small"></div>
                            <div class="circle-tall"></div>
                            <div class="circle-medium"></div>
                        </div>
                    </div>
                    <div v-if="items.temperature > 25" class="sky">
                        <div class="sun"></div>
                    </div>
                     <div v-if="items.temperature < 15" class="sky">
                        <div class="cloud">
                            <div class="circle-small"></div>
                            <div class="circle-tall"></div>
                            <div class="circle-medium"></div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td v-for="items in weatherDataTop" :key=items>{{items.startTime.slice(5,10)}}</td>
            </tr>
            <tr>
                <td v-for="items in weatherDataTop" :key=items>{{items.temperature}}°</td>
            </tr>
            <br/>
            <tr>
                <td v-for="items in weatherDataBottom" :key=items>
                    <div v-if="items.temperature > 15 && items.temperature < 25" class="sky">
                        <div class="sun"></div>
                        <div class="cloud">
                            <div class="circle-small"></div>
                            <div class="circle-tall"></div>
                            <div class="circle-medium"></div>
                        </div>
                    </div>
                    <div v-if="items.temperature > 25" class="sky">
                        <div class="sun"></div>
                    </div>
                     <div v-if="items.temperature < 15" class="sky">
                        <div class="cloud">
                            <div class="circle-small"></div>
                            <div class="circle-tall"></div>
                            <div class="circle-medium"></div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td v-for="items in weatherDataBottom" :key=items>{{items.startTime.slice(5,10)}}</td>
            </tr>
            <tr>
                <td v-for="items in weatherDataBottom" :key=items>{{items.temperature}}°</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import weather from '@/assets/weather.json';

export default {
    data(){
		return {
            weatherDataTop: weather,
            weatherDataBottom: weather,
		}
    },
    created(){
        this.weatherDataTop = weather.slice(7,11);
        this.weatherDataBottom = weather.slice(11,14);

    },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
html,
body {
    background-color: #141d33;
    font-family: 'Roboto', sans-serif;
}

.card {
    position: fixed;
    bottom: 10px;
    width: 26.3%;
    height: 35%;
    background-color: #141d33;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
}

h1,
h2,
h3,
h4 {
    position: relative;
}

h1 {
    float: right;
    color: #666;
    font-weight: 300;
    font-size: 4.59375em;
    line-height: .2em;
}

h2 {
    margin-left: 5%;
    margin-top: 3%;
    margin-bottom: 2%;
    font-weight: 300;
    font-size: 2.25em;
}

h3 {
    float: left;
    margin-right: 33px;
    color: #777;
    font-weight: 400;
    font-size: 1em;
}

span {
    margin-left: 24px;
    color: #999;
    font-weight: 300;
}

span span {
    margin-left: 0;
}

.dot {
    font-size: .9em;
}

.sky {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #03A9F4;
}

.sun {
    position: relative;
    top: -3px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FFEB3B;
}

.cloud {
    position: absolute;
    top: 45px;
    left: 10px;
    margin-left: 10px;
}

.cloud:before,
.cloud:after {
    position: absolute;
    display: block;
    content: "";
}

.cloud:before {
    border-radius: 35%;
    padding-top: 28px;
    margin-right: 10px;
    top: -11px;
    width: 63px;
    height: 25px;
    background: #fff;
}

.cloud:after {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 50px -6px 0 6px #fff, 25px -19px 0 10px #fff;
}

table {
    position: relative;
    top: 10px;
    width: 100%;
    text-align: center;
}


tr:nth-child(2) td:nth-child(1),
tr:nth-child(2) td:nth-child(2),
tr:nth-child(2) td:nth-child(3),
tr:nth-child(2) td:nth-child(4),
tr:nth-child(2) td:nth-child(5) {
    padding-bottom: 7px;
}

tr:nth-child(3) td:nth-child(1),
tr:nth-child(3) td:nth-child(2),
tr:nth-child(3) td:nth-child(3),
tr:nth-child(3) td:nth-child(4),
tr:nth-child(3) td:nth-child(5) {
    padding-bottom: 7px;
}

tr:nth-child(2),
tr:nth-child(3) {
    font-size: .9em;
}

tr:nth-child(3) {
    color: #999;
}
</style>