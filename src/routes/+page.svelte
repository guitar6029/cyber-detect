<script lang="ts">
	import ClientSection from '$lib/sections/ClientSection.svelte';
	import IntoductionSection from '$lib/sections/IntroductionSection.svelte';
	import WhyChooseUs from '$lib/sections/WhyChooseUs.svelte';
	import FormSection from '$lib/sections/FormSection.svelte';
	import Card from '$lib/components/Card.svelte';

	let cardInfo = [
		{
			title: 'Comprehensive Security Assessment',
			description:
				'At Cyber Detect, our comprehensive security assessments go beyond the surface. Our expert team meticulously examines your digital infrastructure, identifying vulnerabilities and recommending robust solutions to fortify your defenses. Trust us to keep your business one step ahead of cyber threats.'
		},
		{
			title: 'Proactive Threat Monitoring',
			description:
				'Stay vigilant with our proactive threat monitoring services. Using cutting-edge technology, we continuously scan for potential threats and anomalies, ensuring immediate response to any suspicious activity. With Cyber Detect, you can rest easy knowing your digital assets are under constant protection.'
		},
		{
			title: 'Custom Security Solutions',
			description:
				"Every business is unique, and so are its security needs. Cyber Detect offers tailored security solutions designed to address your specific challenges. Whether it's data encryption, network security, or compliance management, our solutions are crafted to fit your business perfectly."
		},
		{
			title: 'Expert Consultation and Training',
			description:
				'Empower your team with knowledge. Cyber Detect provides expert consultation and training to help your staff recognize and respond to cyber threats. Our interactive workshops and training sessions equip your team with the skills they need to maintain a secure digital environment.'
		},
		{
			title: 'Incident Response and Recovery',
			description:
				"In the event of a cyber incident, time is of the essence. Cyber Detect's incident response team is ready to spring into action, minimizing damage and restoring normalcy. Our swift and effective recovery strategies ensure your business bounces back stronger than ever."
		}
	];
</script>

<div class="flex min-h-screen flex-col gap-3 p-4">
	<IntoductionSection />
	<!-- <section class="relative flex h-[500vh] w-[100%] flex-col gap-2 bg-black mb-[20rem]">
		<div class="sticky top-0 left-0 h-20 w-20 rounded-lg ">
			<Card title={cardInfo[0].title} description={cardInfo[0].description} cardBg='bg-white' />
		</div>
		
		<div>
			<Card title={cardInfo[1].title} description={cardInfo[1].description} />
		</div>
		<div>
			<Card title={cardInfo[2].title} description={cardInfo[2].description} />
		</div>
		<div>
			<Card title={cardInfo[3].title} description={cardInfo[3].description} />
		</div>
	</section> -->
	<WhyChooseUs />
	<ClientSection />
	<FormSection />
</div>

<style lang="postcss">
	@import 'src/global.css';
</style>
