<script lang="ts">
	import ClientSection from '$lib/sections/ClientSection.svelte';
	import DefenseSection from '$lib/sections/DefenseSection.svelte';
	import FormSection from '$lib/sections/FormSection.svelte';
	import IntoductionSection from '$lib/sections/IntroductionSection.svelte';
	import WhyChooseUs from '$lib/sections/WhyChooseUs.svelte';

	
</script>

<div class="flex min-h-screen flex-col gap-3 p-4">
	<IntoductionSection />
	<DefenseSection />
	<WhyChooseUs />
	<ClientSection />
	<FormSection />
</div>

<style lang="postcss">
	@import 'src/global.css';
</style>
