<script lang="ts">
	import Form from '$lib/components/Form.svelte';
</script>

<!-- form -->
<section class=" relative flex min-h-[30rem] flex-col items-center justify-center gap-2 p-4">
	<div
		class="absolute top-40 -right-30 z-[-1] h-[10.2rem] w-[10.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
	></div>
	<div
		class="absolute top-20 -right-50 z-[-2] h-[20.2rem] w-[20.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
	></div>
	<div
		class="absolute top-0 -right-70 z-[-3] h-[30.2rem] w-[30.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
	></div>
	<h1 class="text-4xl font-bold text-white">Connect with us</h1>
	<Form />
</section>
