<template>
	<div class="dashboard-view">
		<div class="sidebar">
			<div class="logo-brand">
				<img
					src="@/assets/images/brand/brand-logo.svg"
					alt="brand-logo"
					class="logo-img"
				/>
			</div>
		</div>
		<div class="main">
			<div class="top-navigation">
				<div class="logo-brand-mobile">
					<img
						src="@/assets/images/brand/brand-logo.svg"
						alt="brand-logo"
						class="logo-img"
					/>
				</div>
				<button class="user-profile" @click="toggleDropdown">
					<i class="fas fa-user"></i>
				</button>
				<div class="dropdown" :class="{ 'show-dropdown': showDropdown }">
					<ul>
						<li>Conta</li>
						<li>Configurações</li>
						<li @click="logout">Sair</li>
					</ul>
				</div>
			</div>
			<div class="dashboard-content">
				<div class="text-container">
					<h1 class="welcome-message">Olá João,</h1>
					<p>Seja bem-vindo a sua conta de hospedagem.</p>
				</div>
				<div class="video-container">
					<iframe
						width="100%"
						height="400"
						src="https://www.youtube.com/embed/zcXtyKdP92c"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DashboardView',
	data() {
		return {
			showDropdown: false,
		}
	},
	methods: {
		toggleDropdown() {
			this.showDropdown = !this.showDropdown
		},
		logout() {
			this.$router.push('/') // metodo simples para mudar a route da pagina, fazendo o token de auth ser deletado, conforme configurado no router.js
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.dashboard-view {
	display: flex;
	height: 100vh;
}

.sidebar {
	width: 250px;
	background-color: $brand-color-main;
	color: $font-color-primary;
}

.main {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.top-navigation {
	background-color: $bg-default;
	padding: $spacing-medium $spacing-large;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
}

.user-profile {
	border: none;
	background-color: $brand-color-main;
	cursor: pointer;
	display: flex;
	border: none;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	transition: 1s;
	color: $font-color-light;
	font-size: $icon-size-medium;
	&:hover {
		background-color: darken($brand-color-main, 10%);
		color: lighten($font-color-light, 50%);
	}
}

.dropdown {
	position: absolute;
	top: 100%;
	right: 0;
	background-color: $color-white;
	padding: $spacing-small;
	border-radius: $border-radius;
	box-shadow: $box-shadow;
	display: none;
	z-index: $z-index-dropdown;
}

.show-dropdown {
	display: block;
}

.dropdown ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.dropdown li {
	padding: $spacing-small;
	cursor: pointer;
}

.dashboard-content {
	flex: 1;
	padding: $spacing-medium;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.text-container {
	text-align: left;
	margin-bottom: $spacing-medium;
}

.video-container {
	display: flex;
	justify-content: center;
	width: 100%;
}

.logo-brand-mobile {
	display: none;
}

@media (max-width: $breakpoint-large) {
	.top-navigation {
		justify-content: space-between;
	}
	.sidebar {
		display: none;
	}
	.logo-brand-mobile {
		display: flex;
	}
	.video-container {
		width: -webkit-fill-available;
	}
}
</style>
