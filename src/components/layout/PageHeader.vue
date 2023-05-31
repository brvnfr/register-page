<template>
	<header class="header">
		<h1>Meu Site</h1>
		<nav class="header__nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">Sobre</router-link>
			<router-link to="/contact">Contato</router-link>
		</nav>
	</header>
</template>

<style scoped lang="scss">
.header {
	background-color: var(--primary-color);
	padding: var(--spacing-medium);

	h1 {
		color: var(--font-color-light);
		font-size: var(--font-size-large);
		margin-bottom: var(--spacing-small);
	}

	&__nav {
		display: flex;
		gap: var(--spacing-medium);
		margin-top: var(--spacing-small);

		a {
			color: var(--font-color-light);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
}

@media (max-width: 768px) {
	.header {
		padding: var(--spacing-small);

		h1 {
			font-size: var(--font-size-medium);
			margin-bottom: var(--spacing-tiny);
		}
	}
}
</style>
