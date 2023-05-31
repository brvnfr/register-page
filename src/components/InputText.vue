<template>
	<div class="input-text">
		<label :for="name" class="input-text__label">{{ label }}</label>
		<input
			:type="type"
			:name="name"
			v-model="value"
			:placeholder="placeholder"
			class="input-text__input"
		/>
		<div v-if="hasError" class="input-text__error">{{ errorMessage }}</div>
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
	},
	computed: {
		hasError() {
			return Boolean(this.error)
		},
		errorMessage() {
			return this.hasError ? this.error : ''
		},
	},
}
</script>

<style scoped lang="scss">
.input-text {
	margin-bottom: $spacing-medium;

	&__label {
		display: block;
		font-weight: bold;
		margin-bottom: $spacing-small;
	}

	&__input {
		width: 100%;
		padding: $spacing-small;
		border: 1px solid $secondary-color;
		border-radius: $border-radius;
	}

	&__error {
		color: $error-color;
		font-size: $font-size-base - 2px;
		margin-top: $spacing-small;
	}
}
</style>
