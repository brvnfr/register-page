<template>
	<div class="plans-container desktop">
		<div class="price-plans">
			<div
				v-for="(plan, index) in planOptions"
				:key="index"
				class="price-plan"
				:class="{ 'plan-middle': index === 1 }"
				@click="handleChoosePlan(plan)"
			>
				<div v-if="index === 1" class="selected-plan-tag">Mais usado</div>
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

				<span>
					<p>
						{{ plan.profile }}
					</p>
				</span>
				<p>{{ plan.setupFee }}</p>
				<hr class="horizontal-spacer" />
				<ul class="features">
					<li
						v-for="(detail, detailIndex) in plan.features"
						:key="detailIndex"
						:class="{ 'bold-text': [0, 6, 7, 11, 13].includes(detailIndex) }"
					>
						<i
							v-if="![0, 6, 7, 11, 13].includes(detailIndex)"
							class="fas fa-check"
						></i>
						{{ detail }}
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="carousel-container mobile">
		<Carousel
			ref="carousel"
			:items-to-show="1"
			:wrap-around="true"
			v-model="currentSlide"
		>
			<template #addons>
				<Navigation />
			</template>
			<Slide v-for="(plan, index) in planOptions" :key="index">
				<div
					class="price-plan"
					:class="{ 'plan-middle': index === 1 }"
					@click="handleChoosePlan(plan)"
				>
					<div v-if="index === 1" class="selected-plan-tag">Mais usado</div>
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
					<p>{{ plan.setupFee }}</p>
					<hr class="horizontal-spacer" />
					<ul class="features">
						<li
							v-for="(detail, detailIndex) in plan.features"
							:key="detailIndex"
							:class="{ 'bold-text': [0, 6, 7, 11, 13].includes(detailIndex) }"
						>
							<i
								v-if="![0, 6, 7, 11, 13].includes(detailIndex)"
								class="fas fa-check"
							></i>
							{{ detail }}
						</li>
					</ul>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import plans from '@/data/plans.json'

export default {
	components: {
		Carousel,
		Slide,

		Navigation,
	},
	data() {
		return {
			planName: '',
			planOptions: plans,
		}
	},
	props: {
		selectedPlan: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		handleChoosePlan(plan) {
			this.$emit('select-plan', plan)
		},
		isSelectedPlan(plan) {
			return plan === this.selectedPlan
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.plans-container {
}

.price-plans {
	display: flex;
	justify-content: space-around;
	align-items: start;
	gap: 10px;
}

.price-plan {
	text-align: center;
	background-color: $color-white;
	padding: $spacing-medium;
	border-radius: $border-radius;
	width: 300px;
	cursor: pointer;
	transition: box-shadow 0.3s ease;
}

.price-plan h3 {
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
	font-size: 0.8em;
	color: $brand-vivid-pink;
}

.plan-description {
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

.fa-check {
	color: $brand-vivid-pink;
	margin-right: $spacing-small;
}

.carousel-container {
	display: none;
}

@media (max-width: 768px) {
	.desktop {
		display: none;
	}
	.price-plan {
		width: 80%;
	}

	.carousel-container {
		display: block;
	}
}
.bold-text {
	font-size: map-get(map-get($font-styles, medium-bold), size);
	font-weight: map-get(map-get($font-styles, medium-bold), font-weight);
}
</style>
