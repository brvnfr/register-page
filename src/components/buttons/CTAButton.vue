<template>
	<button class="cta-button" :class="buttonClass" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		buttonClass: {
			type: String,
			default: '',
		},
	},
	methods: {
		handleClick() {
			this.$emit('click')
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.cta-button {
	background-color: $primary-color;
	color: $color-white;
	padding: $spacing-medium $spacing-large;
	border: none;
	border-radius: $border-radius;
	cursor: pointer;
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
	transition: background-color $transition-duration $transition-easing;
}

.cta-button:hover {
	background-color: $brand-secondary;
}
</style>
