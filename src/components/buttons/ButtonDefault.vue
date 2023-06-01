<template>
	<button
		:class="['button', `button--${type}`, sizeClass]"
		:disabled="disabled"
	>
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
		size: {
			type: String,
			default: 'medium',
			validator: (value) => ['small', 'medium', 'large'].includes(value),
		},
	},
	computed: {
		sizeClass() {
			return `button--${this.size}`
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
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 8px;
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
