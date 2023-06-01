<template>
	<div :class="['input-text', { 'input-text--responsive': responsive }]">
		<label :for="name" class="input-text__label">{{ label }}</label>
		<input
			:type="type"
			:name="name"
			:value="inputValue"
			@input="updateValue($event.target.value)"
			:placeholder="placeholder"
			class="input-text__input"
		/>
		<div v-if="errorMessage" class="input-text__error">{{ errorMessage }}</div>
	</div>
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
			default: 'text',
		},
		name: {
			type: String,
			required: true,
		},
		value: {
			type: [String, Number],
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		error: {
			type: String,
			default: '',
		},
		responsive: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			inputValue: this.value,
		}
	},
	computed: {
		hasError() {
			return Boolean(this.error)
		},
		errorMessage() {
			return this.hasError ? this.error : ''
		},
	},
	methods: {
		updateValue(newValue) {
			this.inputValue = newValue
			this.$emit('input', newValue)
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.input-text {
	margin-bottom: $spacing-medium;

	&__label {
		display: block;
		font-weight: bold;
		margin-bottom: $spacing-small;
	}

	&__input {
		border: 2px solid #ccc;
		border-radius: 5px;
		padding: 16px 0;
		gap: 10px;
		transition: border-color 0.3s;
		width: 100%;

		&:hover,
		&:focus {
			border: 2px solid $brand-vivid-pink;
			outline: none;
		}

		&:active {
			border-color: $brand-vivid-pink;
		}

		&::selection {
			background-color: $brand-vivid-pink;
		}
	}

	&__error {
		color: $error-color;
		font-size: map-get(map-get($font-styles, medium), size);
		font-weight: map-get(map-get($font-styles, medium), font-weight);
		margin-top: $spacing-small;
	}
}
</style>
