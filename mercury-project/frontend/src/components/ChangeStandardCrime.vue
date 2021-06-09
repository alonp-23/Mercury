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
			input: '',
		};
	},
	watch: {
		input() {
			this.$emit();
		}
	}
}
</script>

<style scoped>
	.inputLine{
		padding-top: 0;
	}
</style>