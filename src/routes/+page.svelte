<script lang="ts">
	import ClientSection from '$lib/sections/ClientSection.svelte';
	import IntoductionSection from '$lib/sections/IntroductionSection.svelte';
	import WhyChooseUs from '$lib/sections/WhyChooseUs.svelte';
	import FormSection from '$lib/sections/FormSection.svelte';
</script>

<div class="flex min-h-screen flex-col gap-3 p-4">
	<IntoductionSection />
	<WhyChooseUs />
	<ClientSection />
	<FormSection />
</div>

<style lang="postcss">
	@import 'src/global.css';
</style>
