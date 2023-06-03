<template>
	<label :for="name" class="label">{{ label }}</label>
	<input
		:id="name"
		:name="name"
		:value="value"
		@input="$emit('input', $event.target.value)"
		:placeholder="placeholder"
		:type="type"
		:class="{ 'input-error': error }"
	/>
	<div v-if="error" class="error-message">{{ error }}</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
		error: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.label {
	font-weight: bold;
	margin-bottom: $spacing-small;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, small), font-weight);
}

input {
	box-sizing: border-box;
	width: 100%;
	padding: $spacing-medium $spacing-small;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: $border-radius;
	transition: border-color 0.3s;
}
input:focus {
	outline: 1px solid $brand-vivid-pink;
	border-color: $brand-vivid-pink;
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-large), font-weight);
	margin-top: $spacing-x-small; /* Reduzir a margem superior */
}
</style>
