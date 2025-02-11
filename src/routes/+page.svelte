<script lang="ts">
	import { LockKeyholeOpen, ShieldCheck, Cable, Focus } from 'lucide-svelte';
	import Slider from '$lib/components/Slider.svelte';
	let userForm: { name: string; email: string; message: string } = $state({
		name: '',
		email: '',
		message: ''
	});

	const fintechCompanies: String[] = [
		'QuantumPay Solutions',
		'NeuralNet Finance',
		'HoloWealth Inc.',
		'CipherBank Global',
		'StellarFunds Tech',
		'CrypticLedger Systems',
		'ZeroGravity Investments',
		'PrismCash Networks',
		'AetherCard Technologies',
		'NanoPay Innovations'
	];

	const reasons = [
		{
			name: 'Security Awareness Training',
			icon: ShieldCheck
		},
		{
			name: 'Penetration Testing',
			icon: Cable
		},
		{
			name: 'Security Consulting',
			icon: Focus
		},
		{
			name: 'Malware Analysis',
			icon: LockKeyholeOpen
		}
	];

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log('form details : ', userForm);
		//clear the form
		userForm = { name: '', email: '', message: '' };
	};
</script>

<div class="flex min-h-screen flex-col gap-3 p-4">
	<section class="slide-in relative flex min-h-[50rem] flex-col justify-center gap-10">
		<div
			class="absolute -top-50 -left-100 z-[-1] h-[60.2rem] w-[60.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

		<div
			class="absolute top-10 -left-50 z-[-1] h-[30.2rem] w-[30.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

		<div class="flex flex-col gap-[0.75rem] text-6xl text-white">
			<span>Welcome</span><span>to</span><span class="font-bold text-orange-500">Cyber Detect</span>
		</div>
		<p>
			At Cyber Detect, we specialize in safeguarding your business against the ever-evolving
			landscape of cyber threats. Our team of seasoned experts utilizes advanced tools and
			methodologies to ensure that your digital assets remain secure.
		</p>
		<button
			class="w-[10rem] cursor-pointer rounded-lg bg-orange-500 p-4 text-white transition duration-300 ease-in-out hover:bg-orange-400"
			><a href="/services">Learn More</a></button
		>
	</section>

	<!-- why choose us -->
	<section
		class="slide-in-from-right flex flex-col gap-4 rounded-lg border-2 border-orange-500 p-4"
	>
		<h1 class="text-4xl font-bold text-white">Why Choose Us ?</h1>
		<p>
			Our comprehensive suite of services is designed to address your unique security needs. From
			threat intelligence to security awareness training, we have you covered.
		</p>
		<div class="flex-col justify-center p-3 sm:flex sm:gap-10 lg:flex-row lg:flex-wrap lg:gap-5">
			{#each reasons as reason}
				<div
					class="group flex flex-row items-center justify-center gap-4 rounded-lg bg-neutral-900 p-5 transition duration-300 ease-in-out hover:bg-neutral-700 sm:w-[100%] lg:h-[10rem] lg:w-[35rem]"
				>
					<reason.icon
						size="5rem"
						class="text-white transition duration-300 ease-in group-hover:scale-105"
					/>
					<span class="flex-1 text-white sm:text-sm">{reason.name}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- our sponsors -->
	<section class="relative min-h-[30rem] p-4">
		<h1 class="text-center text-4xl font-bold text-white">Our Clients</h1>
		<Slider list={fintechCompanies} />
	</section>

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

		<h1 class="text-4xl font-bold text-white">Conect with us</h1>
		<form onsubmit={handleSubmit} class="flex flex-col gap-4">
			<label for="name" class="text-2xl">Name</label>
			<input
				type="text"
				name="name"
				id="name"
				bind:value={userForm.name}
				placeholder="Name"
				class="rounded-lg border-2 p-2"
			/>
			<label for="email" class="text-2xl">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				bind:value={userForm.email}
				placeholder="Email"
				class="rounded-lg border-2 p-2"
			/>
			<label for="message" class="text-2xl">Message</label>
			<textarea
				class="rounded-lg border-2 p-2"
				name="message"
				id="message"
				bind:value={userForm.message}
			></textarea>
			<button
				disabled={!userForm.name || !userForm.email}
				type="submit"
				class="rounded-lg bg-orange-500 p-4 font-bold text-white">Submit Inquiry</button
			>
		</form>
	</section>
</div>

<style lang="postcss">
	@import 'src/global.css';
</style>
