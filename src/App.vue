<template>
	<div id="app">
		<main>
			<router-view />
		</main>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style scoped lang="scss">
#app {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

main {
	max-width: 1200px;
	padding: 20px;
	width: 100%;
	margin: 0 auto;
}

@media (max-width: 768px) {
	main {
		padding: 10px;
	}
}
</style>
