<template>
	<div class="app">
		<PageHeader />
		<router-view />
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

<style>
.app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
