<template>
	<div class="plans-container">
		<div class="selected-plan">
			<h3>{{ selectedPlan?.name }}</h3>
			<p class="price">
				<span v-if="!isNaN(selectedPlan?.price)" class="currency">R$</span>
				<span class="price-value">{{ selectedPlan?.price }}</span>
				<span v-if="!isNaN(selectedPlan?.price)" class="unit">/mês</span>
			</p>

			<hr class="horizontal-spacer" />
			<CTAButton @click="deselectPlan">Trocar Plano</CTAButton>
			<hr class="horizontal-spacer" />
			<span
				class="plan-description"
				v-for="(description, index) in selectedPlan?.description"
				:key="index"
			>
				<p>
					{{ description }}
				</p>
			</span>
			<hr class="horizontal-spacer" />

			<span class="plan-profile">
				<p>
					{{ selectedPlan?.profile }}
				</p>
			</span>
			<hr class="horizontal-spacer" />
			<ul id="desktopOnly" class="features">
				<li
					v-for="(detail, detailIndex) in selectedPlan?.features.slice(0, 4)"
					:key="detailIndex"
					:class="{ 'bold-text': [0, 6].includes(detailIndex) }"
				>
					<i v-if="![0, 6].includes(detailIndex)" class="fas fa-check"></i>
					{{ detail }}
				</li>
			</ul>
		</div>
	</div>

	<div class="carousel-container">
		<Carousel
			ref="carousel"
			:items-to-show="1"
			:wrap-around="true"
			v-model="currentSlide"
			class="mobile"
		>
			<template #addons>
				<div class="custom-navigation">
					<button
						aria-label="Previous Plan"
						id="previousPlan"
						@click="previousPlan"
						class="previous-plan-button"
					>
						<i class="fa-solid fa-chevron-left"></i>
					</button>
					<Pagination />
					<button
						aria-label="Next Plan"
						@click="nextPlan"
						class="next-plan-button"
					>
						<i class="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			</template>

			<Slide v-for="(plan, index) in planOptions" :key="index">
				<div class="selected-plan">
					<h3>{{ plan.name }}</h3>
					<p class="price">
						<span v-if="!isNaN(plan.price)" class="currency">R$</span>
						<span class="price-value">{{ plan.price }}</span>
						<span v-if="!isNaN(plan.price)" class="unit">/mês</span>
					</p>

					<span
						class="plan-description"
						v-for="(description, index) in plan.description"
						:key="index"
					>
						<p>
							{{ description }}
						</p>
					</span>
					<hr class="horizontal-spacer" />

					<span class="plan-profile">
						<p>
							{{ plan.profile }}
						</p>
					</span>
					<hr class="horizontal-spacer" />
					<ul id="desktopOnly" class="features">
						<li
							v-for="(detail, detailIndex) in plan.features.slice(0, 4)"
							:key="detailIndex"
							:class="{ 'bold-text': [0, 6].includes(detailIndex) }"
						>
							<i v-if="![0, 6].includes(detailIndex)" class="fas fa-check"></i>
							{{ detail }}
						</li>
					</ul>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import CTAButton from '@/components/buttons/CTAButton.vue'
import 'vue3-carousel/dist/carousel.css'

export default {
	components: {
		CTAButton,
		Carousel,
		Slide,
		Pagination,
	},
	data() {
		return {
			planName: '',
			currentSlide: 0,
		}
	},
	props: {
		selectedPlan: {
			type: Object,
			default: null,
		},
		planOptions: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		handleChoosePlan(plan) {
			this.$emit('update:selectedPlan', plan)
		},
		deselectPlan() {
			this.$emit('update:selectedPlan', null)
		},
		nextPlan() {
			this.$refs.carousel.next() // botoes custom carousel
		},

		previousPlan() {
			this.$refs.carousel.prev()
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
	margin: 0 auto;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 300px; // Ajuste a altura do degradê conforme necessário
		background-image: linear-gradient(transparent, rgb(255, 255, 255));
		background-clip: content-box;
		pointer-events: none;
		@media (max-width: 768px) {
			height: 30px;
		}
	}
}

.selected-plan h3 {
	color: $font-color-primary;
	font-weight: bold;
	font-size: 1.5rem;
}

.price-value {
	font-size: 2rem;
	margin-top: $spacing-small;
	color: $brand-vivid-pink;
}

.currency,
.unit {
	font-size: 1.2em;
	color: $brand-vivid-pink;
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

.bold-text {
	font-size: map-get(map-get($font-styles, medium-bold), size);
	font-weight: map-get(map-get($font-styles, medium-bold), font-weight);
	margin-bottom: $spacing-large 0;
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

.custom-navigation {
	display: flex;
	justify-content: space-around;
	padding: $spacing-small;
	& ol {
		padding: 0;
	}
}

.previous-plan-button,
.next-plan-button {
	background-color: #0000005d;
	color: $color-white;
	border: none;
	border-radius: 50%;
	font-size: 16px;
	outline: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.previous-plan-button:hover,
.next-plan-button:hover {
	background-color: #0000007e;
}

.carousel-container {
	display: none;
}

@media (max-width: 768px) {
	#desktopOnly {
		display: none;
	}
	.plans-container {
		display: none;
	}
	.price-plans {
		display: none;
	}
	.price-plan {
		width: 80%;
	}

	.carousel-container {
		display: block;
	}
}
</style>
