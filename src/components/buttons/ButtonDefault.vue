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
	padding: $spacing-small $spacing-medium;
	border-radius: $border-radius;
	cursor: pointer;
	font-weight: bold;

	&--default {
		background-color: $primary-color;
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
