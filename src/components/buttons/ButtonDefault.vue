<template>
	<button :class="buttonClasses" :disabled="disabled">
		{{ label }}
	</button>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'default',
			validator: (value) => ['default', 'primary', 'danger'].includes(value),
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		buttonClasses() {
			return ['button', `button--${this.type}`]
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.button {
	border-radius: $border-radius;
	cursor: pointer;
	font-weight: bold;
	width: 551px;
	height: 80px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 30px 24px;
	gap: 24px;

	&--default {
		background-color: $brand-vivid-pink;
		color: $font-color-light;
	}

	&--primary {
		background-color: $secondary-color;
		color: $font-color-light;
	}

	&--danger {
		background-color: $error-color;
		color: $font-color-light;
	}
}
</style>
