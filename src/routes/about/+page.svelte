<script lang="ts">
	const commitment = [
		{
			keyPoint: 'Proactive Protection',
			description: 'Identify and address threats before they cause harm.'
		},
		{
			keyPoint: 'Swift Response',
			description: 'Minimize damage and restore operations quickly.'
		},
		{
			keyPoint: 'Education and Training',
			description: 'Empower your team to recognize and respond to threats.'
		}
	];
</script>

<svelte:head>
    <title>About | CyberDetect </title>
</svelte:head>


<div class="min-h-screen slide-in relative flex flex-col gap-5 p-4">
	
  <div
			class="absolute top-40 -right-30 z-[-1] h-[10.2rem] w-[10.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>
		<div
			class="absolute top-20 -right-50 z-[-2] h-[20.2rem] w-[20.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

		<div
			class="absolute top-0 -right-70 z-[-3] h-[30.2rem] w-[30.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

  
  <h1 class="text-4xl font-bold text-white">About Us</h1>
	<p>
		At Cyber Detect, we protect your digital assets from evolving cyber threats. Our expert team is
		dedicated to providing cutting-edge solutions and fast response times to keep you secure.
	</p>
	<ul class="list-inside list-disc">
		{#each commitment as { keyPoint, description }}
			<li class="mt-1 mb-1 flex flex-col gap-3">
				<span class="font-bold lg:text-2xl text-white">{keyPoint} </span>
				<span class="lg:text-xl">{description}</span>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	@import 'src/global.css';
</style>
