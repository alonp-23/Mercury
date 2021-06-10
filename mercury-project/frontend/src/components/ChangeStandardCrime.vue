<template>
    <v-form>
		<v-text-field
			class="inputLine"
			v-model="input"
			label="שנה כמות פשע צפוייה"
		></v-text-field>
    </v-form>
</template>

<script>
export default {
	name: 'changeWantedCrime',
	data() {
		return {
			input: undefined,
		};
	},
	watch: {
		input() {
			console.log('eawefsfewea');
			this.$emit('changed-value', input);
		}
	}
}
</script>

<style scoped>
	.inputLine{
		padding-top: 0;
	}

	.inputLine:active{
	outline: none;
}

.inputLine:focus{
	outline: none;
}
</style>