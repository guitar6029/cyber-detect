<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';
	import { fintechCompanies } from '$lib/dummydata/fintechDummyData';
</script>

<!-- our clients -->
<section class="relative mt-10 min-h-[20rem] p-4">
	<h1 class="text-center text-4xl font-bold text-white">Our Clients</h1>
	<Slider list={fintechCompanies} />
</section>
