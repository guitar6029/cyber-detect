<script lang="ts">
    import logo from '$lib/assets/security.jpg';
    import { onMount } from 'svelte';
    import { Menu } from 'lucide-svelte';
    import { X as CloseIcon } from 'lucide-svelte';
    import { goto } from '$app/navigation';

    let isMobile = false;
    let isMenuOpened = false;
    let isAnimating = false;
    let dropdownContainerRef: HTMLDivElement | null = null;

    onMount(() => {
        const updateSize = () => {
            isMobile = window.innerWidth <= 640;
            if (!isMobile) isMenuOpened = false;
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    });

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },
        { name: 'About', href: '/about' }
    ];

    const navigateTo = (href: string) => {
        goto(href);
        closeMenu();
    };

    const handleMenuClick = () => {
        isMenuOpened ? closeMenu() : openMenu();
    };

    const openMenu = () => {
        if (dropdownContainerRef) {
            dropdownContainerRef.classList.add('slide-in-from-right');
        }
        isMenuOpened = true;
    };

    const closeMenu = () => {
        if (dropdownContainerRef) {
            dropdownContainerRef.classList.remove('slide-in-from-right');
            dropdownContainerRef.classList.add('slide-out-to-right');
            isAnimating = true;
        }

        setTimeout(() => {
            if (dropdownContainerRef) {
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
            on:click={() => navigateTo(link.href)}
            class="cursor-pointer hidden p-2 transition duration-300 ease-in-out rounded-lg hover:bg-neutral-600 hover:text-white sm:block"
            >{link.name}</a
        >
    {/each}

    <button class="group menu-icon-container ml-auto cursor-pointer" on:click={handleMenuClick}>
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
                on:click={closeMenu}
                size={40}
                class="ml-auto cursor-pointer transition duration-300 ease-in hover:text-orange-500"
            />
            {#each links as link}
                <a
                    on:click={() => navigateTo(link.href)}
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
        background-color: #2d2d2d;
    }
</style>
