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
			<div class="dashboard-content"></div>
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
.dashboard-view {
	display: flex;
	height: 100vh;
}

.sidebar {
	width: 250px;
	background-color: #ebebeb;
	color: #333;
}

.main {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.top-navigation {
	background-color: #f0f0f0;
	padding: 16px 24px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative; // Adicionado para posicionar o dropdown
}

.user-profile {
	border: none;
	background-color: gray;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.avatar {
	font-size: 24px;
	color: light-gray;
}

.dropdown {
	position: absolute;
	top: 100%;
	right: 0;
	background-color: #fff;
	padding: 10px;
	border-radius: 4px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	display: none;
	z-index: 9999;
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
	padding: 8px;
	cursor: pointer;
}

.dashboard-content {
	flex: 1;
	padding: 20px;
}

.logo-brand-mobile {
	display: none;
}

@media (max-width: 768px) {
	.top-navigation {
		justify-content: space-between;
	}
	.sidebar {
		display: none;
	}
	.logo-brand-mobile {
		display: flex;
	}
}
</style>
