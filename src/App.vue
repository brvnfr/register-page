<template>
	<div id="app">
		<main>
			<AppNotification
				v-if="notification"
				:type="notification.type"
				:message="notification.message"
			/>
			<router-view />
		</main>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			notification: null,
		}
	},
	created() {
		this.$root.$on('show-notification', (notification) => {
			this.notification = notification
			setTimeout(() => {
				this.notification = null
			}, 3000) // Tempo em milissegundos para a notificação desaparecer
		})
	},
}
</script>

<style lang="scss"></style>
