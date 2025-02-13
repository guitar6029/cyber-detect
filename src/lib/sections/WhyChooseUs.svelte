<script lang="ts">
	import { reasons } from '$lib/dummydata/reasonsDummyData';
	import Shield from '$lib/components/animatedIcons/Shield.svelte';
	
</script>

<!-- why choose us -->
<section class="min-h-screen slide-in-from-right flex flex-col gap-4 rounded-lg border-2 border-orange-500 p-4">
	<h1 class="text-6xl font-bold text-white">Why Choose Us?</h1>
	<p>
		Our comprehensive suite of services is designed to address your unique security needs. From
		threat intelligence to security awareness training, we have you covered.
	</p>
	
    
    <div class="flex-col justify-center p-3 sm:flex sm:gap-10 lg:flex-row lg:flex-wrap lg:gap-5">
		{#each reasons as reason, index}
			<div
				class="group flex flex-row items-center justify-center rounded-lg bg-neutral-900 p-5 transition duration-300 ease-in-out hover:bg-neutral-700 sm:w-[100%] sm:gap-10 lg:h-[10rem] lg:w-[35rem] lg:gap-4"
			>
				{#if index === 0}
					<Shield />
				{:else}
					<reason.icon
						size="5rem"
						class="text-white transition duration-300 ease-in group-hover:scale-105"
					/>
				{/if}
				<span class="flex-1 text-white sm:text-sm">{reason.name}</span>
			</div>
		{/each}
	</div>
</section>

<style>
</style>
