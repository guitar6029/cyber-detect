<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen w-[100vw]">

	<Header />
	{@render children()}
	<Footer />
</div>
