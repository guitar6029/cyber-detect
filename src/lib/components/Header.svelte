<script lang="ts">
	import logo from '$lib/assets/security.jpg';
</script>

<div class="sticky top-0 z-10 flex flex-row items-center gap-4 bg-neutral-900 p-3">
	<img
		src={logo}
		alt="Cyber Detect Logo"
		class="transiiton h-10 w-10 rounded-full border-orange-500 duration-300 ease-in-out hover:border-3"
	/>
	<a class="p-2 transition duration-300 ease-in-out hover:bg-neutral-600 hover:text-white" href="/"
		>Home</a
	>
	<a
		class="p-2 transition duration-300 ease-in-out hover:bg-neutral-600 hover:text-white"
		href="/services">Services</a
	>
	<a
		class="p-2 transition duration-300 ease-in-out hover:bg-neutral-600 hover:text-white"
		href="/about">About</a
	>
</div>
