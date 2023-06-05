<template>
	<div :class="containerClass">
		<div class="logo-brand">
			<img
				src="@/assets/images/brand/brand-logo.svg"
				alt="brand-logo"
				class="logo-img"
			/>
		</div>
		<h2>
			Você está muito perto de mudar a forma de <br />
			<u>hospedar seu site</u>
		</h2>
		<div v-if="selectedPlan !== null" class="content">
			<div class="register-column">
				<RegisterForm
					:selectedPlan="selectedPlan"
					@update-selected-plan="handleUpdateSelectedPlan"
				/>
			</div>
			<div class="plan-column">
				<div class="selected-plan-tag">Plano Escolhido</div>
				<SelectedPlan
					:selectedPlan="selectedPlan"
					:planOptions="planOptions"
					@update-selected-plan="handleUpdateSelectedPlan"
					@clear-plan="clearSelectedPlan"
				/>
			</div>
		</div>
		<div v-else-if="selectedPlan === null" class="content">
			<!-- TODO div com os planos selecionaveis-->
			<PlanOptions
				:selectedPlan="selectedPlan"
				:planOptions="planOptions"
				@select-plan="handleUpdateSelectedPlan"
			/>
		</div>
		<div class="register-link">
			<p>
				Ja possui uma conta?
				<router-link to="/">Login</router-link>
			</p>
		</div>
	</div>
</template>

<script>
import RegisterForm from '@/components/forms/RegisterForm.vue'
import SelectedPlan from '@/components/layouts/SelectedPlan.vue'
import PlanOptions from '@/components/layouts/PlanOptions.vue'
import plans from '@/data/plans.json'

export default {
	components: {
		SelectedPlan,
		RegisterForm,
		PlanOptions,
	},
	data() {
		return {
			planOptions: plans,
			selectedPlan: null,
			selectedPlanIndex: 0,
		}
	},
	watch: {
		selectedPlan() {
			console.log('plano mudou', this.selectedPlan)
		},
	},
	computed: {
		containerClass() {
			return {
				container: this.selectedPlan !== null,
				'container-full': this.selectedPlan === null,
			}
		},
	},
	methods: {
		handleUpdateSelectedPlan(plan) {
			this.selectedPlan = plan
		},
		clearSelectedPlan() {
			this.selectedPlan = null
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.header-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.container-full {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.content {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	gap: $spacing-medium;
}

.register-column {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: $box-size;

	& h2 {
		text-justify: start;
	}
}

.selected-plan-tag {
	display: flex;
	justify-content: center;
	position: relative;
	top: -$spacing-large;
	left: 50%;
	width: 150px;
	text-transform: uppercase;
	transform: translateX(-50%);
	padding: $spacing-small;
	background-color: $color-black;
	color: $color-white;
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
	border-radius: $border-radius;
	z-index: $z-index-modal;

	@media (max-width: $breakpoint-medium) {
		top: $spacing-small;
	}
}

.plan-column {
	position: relative;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: 250px;
	border-radius: $border-radius;
}

@media (max-width: $breakpoint-medium) {
	.container {
		height: 100%;
	}
	.content {
		flex-direction: column-reverse;
	}
	.register-column {
		width: 95%;
		padding: $spacing-small;
	}
	.plan-column {
		width: 95%;
		padding: $spacing-small;
	}
}

h2:first-of-type {
	margin-bottom: $spacing-large;
	text-align: center;
	& u {
		color: $brand-vivid-pink;
	}
}

.register-link {
	margin: $spacing-small 0;
	text-align: center;
	& p {
		margin-bottom: $spacing-none;
	}
	& router-link {
		margin-left: $spacing-x-small;
		color: $button-color;
	}
}
</style>
