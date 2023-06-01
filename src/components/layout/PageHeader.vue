<template>
	<header class="page-header navbar">
		<div class="logo">
			<img src="@/assets/images/brand/locaweb.svg" alt="Logo" />
		</div>
		<button class="menu-toggle" @click="toggleMenu">
			<i :class="{ 'fa-bars': !isMenuOpen, 'fa-times': isMenuOpen }"></i>
		</button>
		<nav class="nav-items" v-show="isMenuOpen">
			<router-link to="/" class="nav-link">Login</router-link>
			<router-link to="/register" class="nav-link">Cadastrar</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false,
		}
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.page-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	background-color: $brand-color-main;
	color: $font-color-primary;
}

.logo img {
	height: 2rem;
}

.menu-toggle {
	display: none;
	background: none;
	border: none;
	font-size: 1.5rem;
	color: $font-color-primary;
}

.nav-items {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.nav-link {
	color: $font-color-primary;
	text-decoration: none;
}

@media (max-width: 768px) {
	.logo {
		flex: 1;
	}

	.menu-toggle {
		display: block;
	}

	.nav-items {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
}
</style>
