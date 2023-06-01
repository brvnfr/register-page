<template>
	<div class="input-text">
		<label :for="name" class="label">{{ label }}</label>
		<input
			:id="name"
			:name="name"
			:value="value"
			@input="$emit('update:modelValue', $event.target.value)"
			:placeholder="placeholder"
			:type="type"
			:class="{ 'input-error': error }"
		/>
		<div v-if="error" class="error-message">{{ error }}</div>
	</div>
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

.input-text {
	margin-bottom: $spacing-large;
	width: 94%;
}

.label {
	font-weight: bold;
	margin-bottom: $spacing-small;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, small), font-weight);
}

input {
	width: 100%;
	padding: 10px;
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
	color: red;
	margin-top: $spacing-small;
}
</style>
