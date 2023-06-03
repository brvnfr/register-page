<template>
	<div class="dashboard-view">
		<div class="sidebar"></div>
		<div class="main">
			<div class="top-navigation">
				<!--sidebar links -->
				<div class="user-profile" @click="toggleDropdown">
					<img class="avatar" src="avatar.jpg" alt="Avatar" />
					<div class="dropdown" v-show="showDropdown">
						<!--configurações da conta  -->
						<ul>
							<li>Configuração 1</li>
							<li>Configuração 2</li>
							<li>Configuração 3</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="dashboard-content">
				<!-- Conteúdo  -->
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
	},
}
</script>

<style scoped>
.dashboard-view {
	display: flex;
	height: 100vh;
}

.sidebar {
	width: 250px;
	background-color: #333;
	color: #fff;
}

.main {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.top-navigation {
	background-color: #f0f0f0;
	padding: 10px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.user-profile {
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
}

.avatar {
	width: 40px;
	height: 40px;
	border-radius: 50%;
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
</style>
