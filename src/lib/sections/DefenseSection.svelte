<script lang="ts">
	import { onMount } from 'svelte';
	import { intersect } from '$lib/actions/intersect';
	import { writable } from 'svelte/store';

	// Reactive store for visibility
	let intersection = writable(false);

	// Function to set up intersection observer
	function setup(node: HTMLElement) {
		const { isVisible } = intersect(node); // Access the visibility state from the observer
		isVisible.subscribe((value) => {
			console.log('Visibility changed:', value);
			intersection.set(value); // Update the store whenever visibility changes
		});
	}

	// Example state for attack data (writable stores)
	let dailyZeroAttacks = $state(12480);
	let totalAttacksPrevented = $state(1045230);
	let currentActiveThreats = $state(528);

	let attacksInfo = [
		{ title: 'Daily Zero-Day Attacks Prevented', value: dailyZeroAttacks },
		{ title: 'Total Attacks Prevented', value: totalAttacksPrevented },
		{ title: 'Current Active Threats Under Surveillance', value: currentActiveThreats }
	];

	// Increment counters
	onMount(() => {
		incrementCounter(dailyZeroAttacks, 10, 55, 1000);
		incrementCounter(totalAttacksPrevented, 5, 1000, 15000);
	});

	const incrementCounter = (
		state: number,
		increment: number,
		maxCount: number,
		interval = 1000
	) => {
		let counter = 0;
		const intervalId = setInterval(() => {
			if (counter < maxCount) {
				state += increment;
				counter += increment;
			} else {
				clearInterval(intervalId);
			}
		}, interval);
		return () => clearInterval(intervalId);
	};
</script>

<section
	use:setup
	class:slide-in-from-left={$intersection}
	class:off-screen={!$intersection}
	class="relative flex h-[100vh] flex-col justify-center gap-3 p-4 transition-all"
>
	<div
		class="absolute top-1/2 left-1/2 z-[-1] h-50 w-50 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-5 border-orange-500 opacity-5"
	>
		<div class="orbit h-10 w-10 rounded-full bg-orange-500"></div>
		<div class="orbit-reverse relative top-10 left-0 h-10 w-10 rounded-full bg-orange-500"></div>
	
		<div class="orbit-reverse relative top-50 left-40 h-10 w-10 rounded-full bg-orange-500"></div>
	</div>
	<div
		class="absolute top-1/2 left-1/2 z-[-1] h-150 w-150 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-5 border-orange-500 opacity-5"
	>
		<div class="orbit-reverse relative top-10 left-0 h-10 w-10 rounded-full bg-orange-500"></div>
	</div>
	<div
		class="absolute top-1/2 left-1/2 z-[-1] h-250 w-250 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-5 border-orange-500 opacity-5"
	></div>

	<div class="flex flex-col">
		<div class="flex flex-col gap-10">
			{#each attacksInfo as info}
				<div class="flex flex-col gap-2">
					<h1 class="font-bold text-wrap text-white sm:text-xl lg:text-4xl">
						{info.title}
					</h1>
					<h1 class="font-bold text-gray-400 sm:text-2xl lg:text-6xl">
						{info.value.toLocaleString()}
					</h1>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Off-screen class for the entire section */
	.off-screen {
		transform: translateX(-100%); /* Start off-screen to the left */
	}

	/* Slide-in from left class for the entire section */
	.slide-in-from-left {
		transform: translateX(0); /* Slide in from the left */
	}

	/* Apply transition for smooth animation */
	.transition-all {
		transition: transform 0.9s ease-in;
	}

	.orbit {
		animation: orbit 10s linear infinite;
	}

	/* Orbit animation */
	.orbit {
		animation: orbit 10s linear infinite;
	}
	.orbit-reverse {
		animation: orbit-reverse 10s linear infinite;
	}

	@keyframes orbit-reverse {
		from {
			transform: rotate(0deg) translateX(-100px); /* Orbit radius set to 100px */
		}
		to {
			transform: rotate(-360deg) translateX(-100px); /* Orbit complete 360 degrees */
		}
	}

	@keyframes orbit {
		from {
			transform: rotate(0deg) translateX(100px); /* Orbit radius set to 100px */
		}
		to {
			transform: rotate(360deg) translateX(100px); /* Orbit complete 360 degrees */
		}
	}
</style>
