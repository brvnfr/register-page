<template>
	<div id="app" class="app-container">
		<PageHeader />
		<main class="page-content">
			<router-view />
		</main>
		<PageFooter />
	</div>
</template>

<script>
import PageHeader from '@/components/layout/PageHeader.vue'
import PageFooter from '@/components/layout/PageFooter.vue'

export default {
	name: 'App',
	components: {
		PageHeader,
		PageFooter,
	},
}
</script>

<style scoped lang="scss">
.app-container {
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}

.page-content {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
