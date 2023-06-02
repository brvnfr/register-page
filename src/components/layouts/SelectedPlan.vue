<template>
	<div>
		<Carousel :items-to-show="1">
			<Slide v-for="(plan, index) in planOptions" :key="index">
				<div class="selected-plan">
					<h2>{{ plan.name }}</h2>
					<p>{{ plan.price }}</p>
					<p>{{ plan.description }}</p>
					<p>{{ plan.setupFee }}</p>
					<ul>
						<li
							v-for="(detail, detailIndex) in plan.features"
							:key="detailIndex"
						>
							{{ detail }}
						</li>
					</ul>
				</div>
			</Slide>
			<template #addons>
				<Navigation />
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>
<script>
// import CTAButton from '@/components/buttons/CTAButton.vue'

import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
	components: {
		// CTAButton,
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
	created() {
		console.log(this.planOptionjs)
	},
	methods: {
		handleChoosePlan() {
			// Metodo para  atualizar o dado isPlanSelected para false  e mandar o evento para o  componente pai, para fazer a div de escolha de planos seja renderizada pelo v-if.
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
// .selected-plan {
// 	text-align: center;
// 	background-color: $color-white;
// 	padding: $spacing-medium;
// 	border-radius: $border-radius;
// 	max-width: 350px;
// 	height: 100%;
// 	margin: 0 auto;
// }

// .selected-plan::after {
// 	content: '';
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 20px; /* Ajuste a altura do degradê conforme necessário */
// 	background-image: linear-gradient(transparent, rgb(255, 255, 255));
// 	background-clip: content-box;
// 	pointer-events: none;
// }

// .selected-plan h3 {
// 	color: $brand-vivid-pink;
// 	font-weight: bold;
// 	font-size: 1.5rem;
// }

// .price {
// 	font-size: 2rem;
// 	margin-top: $spacing-small;
// }

// .price-description {
// 	color: $font-color-secondary;
// 	font-size: 1rem;
// }

// .features {
// 	list-style: none;
// 	margin: $spacing-medium 0;
// 	padding: 0;
// 	text-align: left;
// }

// .features li {
// 	margin-bottom: $spacing-small;
// }

// .choose-plan-button {
// 	background-color: $button-color;
// 	color: $color-white;
// 	border: none;
// 	border-radius: $border-radius;
// 	padding: $spacing-small $spacing-medium;
// 	font-size: 1rem;
// 	cursor: pointer;
// 	transition: background-color 0.3s ease;
// 	&:hover {
// 		background-color: $button-hover;
// 	}
// }

// .fa-check {
// 	color: $brand-vivid-pink;
// 	margin-right: $spacing-small;
// }

// .carousel__slide {
// 	padding: 5px;
// }

// .carousel__viewport {
// 	perspective: 2000px;
// }

// .carousel__track {
// 	transform-style: preserve-3d;
// }

// .carousel__slide--sliding {
// 	transition: 0.5s;
// }

// .carousel__slide {
// 	opacity: 0.9;
// 	transform: rotateY(-20deg) scale(0.9);
// }

// .carousel__slide--active ~ .carousel__slide {
// 	transform: rotateY(20deg) scale(0.9);
// }

// .carousel__slide--prev {
// 	opacity: 1;
// 	transform: rotateY(-10deg) scale(0.95);
// }

// .carousel__slide--next {
// 	opacity: 1;
// 	transform: rotateY(10deg) scale(0.95);
// }

// .carousel__slide--active {
// 	opacity: 1;
// 	transform: rotateY(0) scale(1.1);
// }
</style>
