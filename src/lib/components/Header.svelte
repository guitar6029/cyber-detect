<script lang="ts">
	import logo from '$lib/assets/security.jpg';
	import { onMount } from 'svelte';
	import { Menu } from 'lucide-svelte';
	import { X as CloseIcon } from 'lucide-svelte';

	let isMobile = $state(false); // Initially false to prevent SSR issues
	let isMenuOpened = $state(false);
	let isAnimating = $state(false);
	//ref for the dropdown container
	let dropdownContainerRef: HTMLDivElement | null = $state(null);

	onMount(() => {
		// ✅ Only access window inside onMount (runs in the browser)
		const updateSize = () => {
			isMobile = window.innerWidth <= 640;
			if (!isMobile)
				//close the menu if the screen is resized above 640px
				isMenuOpened = false;
		};

		updateSize(); // Call once to set initial value in the browser
		window.addEventListener('resize', updateSize);

		return () => window.removeEventListener('resize', updateSize);
	});

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Services', href: '/services' },
		{ name: 'Team', href: '/team' },
		{ name: 'About', href: '/about' }
	];

	const handleMenuClick = () => {
		if (isMenuOpened) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	const openMenu = () => {
		if (dropdownContainerRef) {
			dropdownContainerRef.classList.add('slide-in-from-right');
			dropdownContainerRef.offsetHeight;
			dropdownContainerRef.classList.add('slide-in-from-right');
		}

		isMenuOpened = true;
	};

	const closeMenu = () => {
		if (dropdownContainerRef) {
			//this as well
			dropdownContainerRef.classList.remove('slide-in-from-right');
			dropdownContainerRef.offsetHeight; // Trigger reflow to apply the class
			dropdownContainerRef.classList.add('slide-out-to-right');
			isAnimating = true;
		}

		setTimeout(() => {
			if (dropdownContainerRef) {
				//remove slide-out
				dropdownContainerRef.classList.remove('slide-out-to-right');
			}

			isMenuOpened = false;
			isAnimating = false;
		}, 300);
	};
</script>

<div class="sticky w-[100vw] top-0 z-10 flex flex-row items-center gap-4 bg-neutral-900 p-3">
	<img
		src={logo}
		alt="Cyber Detect Logo"
		class="transiiton h-10 w-10 rounded-full border-orange-500 duration-300 ease-in-out hover:border-3"
	/>

	{#each links as link}
		<a
			href={link.href}
			class="hidden p-2 transition duration-300 ease-in-out hover:bg-neutral-600 hover:text-white sm:block"
			>{link.name}</a
		>
	{/each}

	<button class="group menu-icon-container ml-auto cursor-pointer" onclick={handleMenuClick}>
		<Menu size="2rem" class="transition duration-300 ease-in group-hover:text-orange-500" />
	</button>

	{#if isMobile && isMenuOpened}
		<div
			bind:this={dropdownContainerRef}
			class="dropdown-container absolute top-full right-0 mt-2 w-[100vw] rounded-md bg-neutral-800 p-2 shadow-lg {isAnimating
				? 'slide-out-to-right'
				: 'slide-in-from-right'}"
		>
			<CloseIcon
				onclick={closeMenu}
				size={40}
				class="ml-auto cursor-pointer transition duration-300 ease-in hover:text-orange-500"
			/>
			{#each links as link}
				<a
					href={link.href}
					onclick={() => closeMenu()}
					class="block p-2 text-center text-white hover:bg-neutral-600">{link.name}</a
				>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	@import 'src/global.css';
	@media screen and (max-width: 640px) {
		.menu-icon-container {
			display: block;
		}
	}

	@media screen and (min-width: 641px) {
		.menu-icon-container {
			display: none;
		}
	}

	.dropdown-container {
		background-color: #2d2d2d; /* Match the background color */
	}
</style>
