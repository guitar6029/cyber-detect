<svg
	class="group hover:animate-checkmark text-white transition duration-300 ease-in group-hover:scale-105"
	xmlns="http://www.w3.org/2000/svg"
	width="5rem"
	height="5rem"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<!-- Shield (Static) -->
	<path
		d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
	/>

	<!-- Checkmark (Animated) -->
	<path class="animate-checkmark group-hover:animate-checkmark checkmark-path" d="M9 12l2 2 4-4" />
</svg>

<style>
	.animate-checkmark {
		stroke-dasharray: 30; /* Adjust this based on path length */
		stroke-dashoffset: 30; /* Hide stroke initially */
		animation: draw-checkmark 1s ease-out forwards 1;
	}

	.checkmark-path {
		stroke-dasharray: 30;
		stroke-dashoffset: 30;
		transition: stroke-dashoffset 1s ease-out;
	}

	@keyframes draw-checkmark {
		from {
			stroke-dashoffset: 30; /* Hidden */
		}
		to {
			stroke-dashoffset: 0; /* Fully drawn */
		}
	}
</style>
