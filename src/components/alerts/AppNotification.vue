<template>
	<transition name="notification-fade">
		<div class="notification" :class="type">
			{{ message }}
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'info',
		},
		message: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

// 				Exemplo de chamada de notificação de erro
// 				this.$root.$emit('show-notification', { type: 'error', message: '' })
// 				this.$root.$emit('show-notification', { type: 'info', message: '' })
// 				this.$root.$emit('show-notification', { type: 'success', message: '' })

.notification {
	position: fixed;
	top: 20px;
	right: 20px;
	padding: 10px 15px;
	border-radius: 4px;
	font-size: 14px;
	z-index: 9999;
	transition: opacity 0.3s;
}

.error {
	background-color: $error-color;
	color: $color-white;
}

.info {
	background-color: $info-color;
	color: $color-white;
}

.success {
	background-color: $success-color;
	color: $color-white;
}
.warning {
	background-color: $warning-color;
	color: $color-white;
}

.notification-fade-enter-active,
.notification-fade-leave-active {
	transition: opacity 0.3s;
}

.notification-fade-enter,
.notification-fade-leave-to {
	opacity: 0;
}
</style>
