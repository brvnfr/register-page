<template>
	<Carousel :items-to-show="1">
		<template #addons>
			<Navigation class="carousel-navigation" />
			<Pagination class="carousel-pagination" />
		</template>
		<Slide v-for="(plan, index) in planOptions" :key="index">
			<div class="selected-plan">
				<h3>{{ plan.name }}</h3>
				<p class="price">{{ plan.price }}</p>
				<p class="price-description">{{ plan.description }}</p>
				<p>{{ plan.setupFee }}</p>
				<ul id="planFeatures" class="features">
					<li
						v-for="(detail, detailIndex) in plan.features.slice(0, 8)"
						:key="detailIndex"
					>
						<i class="fas fa-check" />
						{{ detail }}
					</li>
				</ul>
			</div>
		</Slide>
	</Carousel>
</template>
<script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
	data() {
		return {
			planName: '',
		}
	},
	props: {
		planOptions: {
			type: Array,
		},
		selectedPlan: {
			type: Object,
			default: () => {},
		},
	},
	computed: {},
	methods: {
		handleChoosePlan() {
			// Metodo para  atualizar o dado isPlanSelected para false  e mandar o evento para o  componente pai, para fazer a div de escolha de planos seja renderizada pelo v-if.
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.selected-plan {
	position: relative;
	text-align: center;
	background-color: $color-white;
	padding: $spacing-medium;
	border-radius: $border-radius;
	max-width: 350px;
	margin: 0 auto;
}

.selected-plan::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 300px; /* Ajuste a altura do degradê conforme necessário */
	background-image: linear-gradient(transparent, rgb(255, 255, 255));
	background-clip: content-box;
	pointer-events: none;
	@media (max-width: $breakpoint-medium) {
		height: 30px;
	}
}

.selected-plan h3 {
	color: $brand-vivid-pink;
	font-weight: bold;
	font-size: 1.5rem;
}

.price {
	font-size: 2rem;
	margin-top: $spacing-small;
}

.price-description {
	color: $font-color-secondary;
	font-size: 1rem;
}

.features {
	list-style: none;
	margin: $spacing-medium 0;
	padding: 0;
	text-align: left;
}

.features li {
	margin-bottom: $spacing-small;
}

.choose-plan-button {
	background-color: $button-color;
	color: $color-white;
	border: none;
	border-radius: $border-radius;
	padding: $spacing-small $spacing-medium;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: $button-hover;
	}
}

.fa-check {
	color: $brand-vivid-pink;
	margin-right: $spacing-small;
}

#planFeatures {
	@media (max-width: $breakpoint-medium) {
		display: none;
	}
}
</style>
