<script lang="ts">
	import Terminal from '$lib/components/Terminal.svelte';
</script>

<!-- logo -->
<section class="slide-in relative flex min-h-[50rem] flex-col justify-center gap-10">
	<div
		class="absolute -top-50 -left-100 z-[-1] h-[60.2rem] w-[60.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
	></div>
	<div
		class="absolute top-10 -left-50 z-[-1] h-[30.2rem] w-[30.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
	></div>
	<div class="flex flex-col gap-[0.75rem] text-2xl text-white md:text-5xl lg:text-8xl">
		<span>Welcome</span><span>to</span>
		<span class="font-bold text-orange-500">Cyber Detect</span>
	</div>
	<p class="text-white sm:text-xl lg:text-2xl">
		At Cyber Detect, we specialize in safeguarding your business against the ever-evolving landscape
		of cyber threats. Our team of seasoned experts utilizes advanced tools and methodologies to
		ensure that your digital assets remain secure.
	</p>
	<button
		class="w-[10rem] cursor-pointer rounded-lg bg-orange-500 p-4 text-white transition duration-300 ease-in-out hover:bg-orange-400"
		><a href="/services">Learn More</a></button
	>
	<Terminal />
</section>

<style lang="postcss">
	@import 'src/global.css';
</style>
