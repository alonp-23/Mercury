<template>
    <v-card 
    elevation="8" 
    :color="bgColor"
    dark
    class="mx-auto rounded-card"
    width="200"
    height="200"
    outlined>
        <v-container>
            <v-row>
                <h1 class="mx-auto my-1 text-center h1-title">
                    {{title}}
                </h1>
            </v-row>
            <v-row>
                <h1 class="mx-auto my-2 amount" v-bind:style="{color :amountColor}">{{amount}}</h1>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        amountColor: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
.rounded-card{
    border-radius:10px;

    font-family: 'Heebo', sans-serif !important;
}

.h1-title {
    font-weight: lighter;
}
.amount {
    font-size: 3.5vw;
}
</style>