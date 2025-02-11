<script lang="ts">
	import logo from '$lib/assets/security.jpg';

    import { intersect } from '$lib/actions/intersect';

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Adjust as needed
   };

   function handleIntersect() {
      console.log('Element is intersecting');
      // Add your logic for when the element is in view
   }




    let userForm : { name: string; email: string; } = $state({
        name: "",
        email: "",
    })

	const reasons = [
		'Security Awareness Training',
		'Penetration Testing',
		'Security Consulting',
		'Malware Analysis'
	];

    const handleSubmit = (e: Event) => {
        e.preventDefault();
    }
</script>

<div class="flex min-h-screen flex-col gap-3 p-4">
	<section class="relative flex min-h-[50rem] flex-col justify-center gap-4 slide-in">
		<div
			class="absolute -top-80 -left-120 z-[-1] h-[60.2rem] w-[60.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

		<div
			class="absolute -top-50 -left-140 z-[-1] h-[60.2rem] w-[60.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>
		
		
		<div class="flex flex-col gap-[0.75rem] text-6xl text-white">
			<span>Welcome</span><span>to</span><span class="font-bold text-orange-500">Cyber Detect</span>
		</div>
		<p>
			At Cyber Detect, we specialize in safeguarding your business against the ever-evolving
			landscape of cyber threats. Our team of seasoned experts utilizes advanced tools and
			methodologies to ensure that your digital assets remain secure.
		</p>
        <button class="hover:bg-orange-400 transition duration-300 ease-in-out rounded-lg bg-orange-500 p-4 text-white w-[10rem] cursor-pointer"><a href="/services">Learn More</a></button>
	</section>

	<section use:intersect={options} onintersect={handleIntersect} class="flex flex-col gap-3 rounded-lg border-2 border-orange-500 p-4">
		<h1 class="text-4xl text-white font-bold">Why Choose Us ?</h1>
		<p>
			Our comprehensive suite of services is designed to address your unique security needs. From
			threat intelligence to security awareness training, we have you covered.
		</p>
		<div class="sm:flex flex-col lg:flex-row lg:flex-wrap justify-center sm:gap-10 lg:gap-5 p-3">
			{#each reasons as reason}
				<div
					class="bg-neutral-900 hover:bg-neutral-700 transition duration-300 ease-in-out lg:w-[35rem] lg:h-[10rem] flex  flex-row items-center justify-center gap-4 rounded-lg sm:w-[100%] p-5"
				>
					<img src={logo} alt="security" class="h-[5rem] w-[5rem] rounded-full" />
					<span class="flex-1 text-white sm:text-sm">{reason}</span>
				</div>
			{/each}
		</div>
	</section>

    <section class=" relative flex flex-col justify-center items-center  gap-2 p-4 min-h-[30rem] ">
        
        <div
			class="absolute top-40 -right-30 z-[-1] h-[10.2rem] w-[10.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>
        <div
			class="absolute top-20 -right-50 z-[-2] h-[20.2rem] w-[20.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>
        
        <div
			class="absolute top-0 -right-70 z-[-3] h-[30.2rem] w-[30.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

		
		
        
        <h1 class="text-4xl text-white font-bold">Conect with us</h1>
        <form action="/" method="POST" class="flex flex-col gap-4">
            <label for="name" class="text-2xl">Name</label>
            <input type="text" name="name" id="name" bind:value={userForm.name} placeholder="Name" class="p-2 rounded-lg border-2 " />
            <label for="email" class="text-2xl">Email</label>
            <input type="email" name="email" id="email" bind:value={userForm.email} placeholder="Email" class="p-2 rounded-lg border-2" />
            <button disabled={!userForm.name || !userForm.email} formaction="" class="rounded-lg p-4 bg-orange-500 text-white font-bold">Submit Inquiry</button>
        </form>

    </section>
</div>


<style lang="postcss">
    .slide-in {
        animation: slide-in 1s ease-in-out .1s;
    }

    @keyframes slide-in {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>