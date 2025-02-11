<script lang="ts">
	const services = [
		{
			serviceName: 'Threat Intelligence',
			serviceDescription:
				'Proactively identify potential cyber threats and vulnerabilities before they become serious risks by leveraging advanced threat intelligence tools and methodologies.',
			keyPoints: ['24/7 real-time threat monitoring', 'Access to an extensive threat database']
		},
		{
			serviceName: 'Incident Response',
			serviceDescription:
				'Swiftly address and mitigate security incidents to minimize damage, preserve evidence, and quickly restore operations through a systematic approach.',
			keyPoints: ['Immediate incident assessment', 'Detailed forensic analysis and reporting']
		},
		{
			serviceName: 'Malware Analysis',
			serviceDescription:
				'Analyze and dissect malware to understand its behavior, origin, and impact. Develop strategies to defend against and remediate infections.',
			keyPoints: ['Comprehensive malware behavior analysis', 'Custom remediation strategies']
		},
		{
			serviceName: 'Penetration Testing',
			serviceDescription:
				'Conduct simulated cyber attacks to identify and fix security weaknesses in your systems, networks, and applications before malicious actors can exploit them.',
			keyPoints: ['Thorough vulnerability assessment', 'Actionable recommendations for improvement']
		},
		{
			serviceName: 'Security Awareness Training',
			serviceDescription:
				'Empower your team with the knowledge and skills to recognize and respond to security threats through comprehensive training programs and simulations.',
			keyPoints: ['Interactive training modules', 'Phishing simulation exercises']
		},
		{
			serviceName: 'Security Consulting',
			serviceDescription:
				"Provide expert guidance and customized solutions to enhance your organization's overall security posture, ensuring you stay ahead of evolving cyber threats.",
			keyPoints: ['Tailored security strategies', 'Ongoing support and advisory services']
		}
	];

	const handleServiceSelection = (service: {
		serviceName: string;
		serviceDescription: string;
		keyPoints: string[];
	}) => {
		selectedService = service;
	};

	let selectedService = $state(services[0]);
</script>

<div class="relative flex flex-col gap-2 p-4 slide-in">
	
	<div
			class="absolute top-40 -right-30 z-[-1] h-[10.2rem] w-[10.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>
		<div
			class="absolute top-20 -right-50 z-[-2] h-[20.2rem] w-[20.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

		<div
			class="absolute top-0 -right-70 z-[-3] h-[30.2rem] w-[30.2rem] rounded-full border-10 border-yellow-500 bg-black opacity-[5%]"
		></div>

	
	<h1 class="text-4xl text-white font-bold">Our Services</h1>
	<div class="grid xl:grid-cols-2 sm:grid-cols-1 gap-3">
		<div class="col-span-1 flex flex-col items-start gap-3">
			{#each services as service}
				<button
					onclick={() => handleServiceSelection(service)}
					class="p-2 w-[100%] text-left cursor-pointer transition duration-300 ease-in-out hover:text-white hover:bg-neutral-900"
					>{service.serviceName}</button
				>
			{/each}
		</div>
		<div class="col-span-1 flex flex-col items-start gap-3 p-3 ">
			<p class="text-white">{selectedService.serviceDescription}</p>
			<div class="flex flex-row items-center gap-5">
				{#each selectedService.keyPoints as keyPoint}
					<div class="text-white rounded-lg p-4 bg-gray-900 flex flex-row items-center justify-center">{keyPoint}</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
    @import 'src/global.css';
</style>