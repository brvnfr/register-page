<template>
	<div class="dashboard-view">
		<div class="sidebar" :class="{ 'sidebar-hidden': isMobile }">
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
				<div class="user-profile" @click="toggleDropdown">
					<i class="fas fa-user avatar"></i>
				</div>
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
					<p>Seja bem-vindo à sua conta de hospedagem.</p>
				</div>
				<div class="video-container">
					<iframe
						class="dashboard-video"
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
			isMobile: false,
		}
	},
	methods: {
		toggleDropdown() {
			this.showDropdown = !this.showDropdown
		},
		logout() {
			this.$router.push('/')
		},
		checkMobile() {
			this.isMobile = window.innerWidth <= 768
		},
	},
	mounted() {
		window.addEventListener('resize', this.checkMobile)
		this.checkMobile()
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.checkMobile)
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.dashboard-view {
	display: flex;
	min-height: 100vh;
}

.sidebar {
	width: 250px;
	background-color: $brand-color-main;
	color: $font-color-primary;
	transition: transform 0.3s ease-in-out;

	&.sidebar-hidden {
		transform: translateX(-100%);
	}
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
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.avatar {
	font-size: $icon-size-large;
	color: $font-color-light;
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
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-bottom: $spacing-medium;
}

.video-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.dashboard-video {
	width: 500px;
	height: 500px;
}

.logo-brand-mobile {
	display: none;
}

@media (max-width: $breakpoint-medium) {
	.top-navigation {
		justify-content: space-between;
	}
	.sidebar {
		transform: none !important;
		display: none;
	}
	.logo-brand-mobile {
		display: flex;
	}
}
</style>
