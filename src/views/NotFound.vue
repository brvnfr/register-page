<template>
	<div class="content">
		<div class="card">
			<h2>404 - Página não encontrada</h2>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.card {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-large;
	width: $box-size;

	& h2 {
		text-justify: center;
	}
}
</style>
