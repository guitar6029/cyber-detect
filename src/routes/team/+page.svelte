<script lang="ts">
    import  {Facebook, Linkedin , Twitter} from 'lucide-svelte'
    import { lazyload } from '$lib/actions/lazyload';
    
    type TeamMember = {
        name: string,
        position: string,
        photo?: string
    }
    
    const team : TeamMember[] = [
    { name: "Alice Johnson", position: "Manager", photo: "https://randomuser.me/portraits/women/8.jpg" },
    { name: "Bob Smith", position: "Cybersecurity Engineer", photo: "https://randomuser.me/portraits/men/10.jpg" },
    { name: "Catherine Lee", position: "DevOps Engineer", photo: "https://randomuser.me/portraits/women/40.jpg" },
    { name: "David Smith", position: "Full Stack Developer" , photo: "https://randomuser.me/portraits/men/30.jpg"},
    { name: "Eva Garcia", position: "Security Analyst" , photo: "https://randomuser.me/portraits/women/19.jpg"},
];

</script>

<svelte:head>
    <title>Team | CyberDetect </title>
</svelte:head>

<div class="flex min-h-screen flex-col gap-3 p-4">
    <h1 class="text-4xl text-white font-bold">Team</h1>
    <div class="flex sm:flex-col lg:flex-row flex-wrap gap-5 items-cente">
        {#each team as teamMember, index}
            <div style="animation-delay: {index * 0.3}s;" class="hover:shadow-neutral-800 hover:bg-neutral-800 opacity-30 transition duration-300 ease-in fade-in sm:h-fit sm:w-[50vw]  lg:h-[15rem] lg:w-[20rem]  flex flex-row items-center justify-center rounded-[2em] gap-5 p-4 border-2 border-neutral-900 shadow-lg shadow-neutral-800">
                <img src="{teamMember.photo}" alt={teamMember.name} use:lazyload class="sm:h-25 sm:w-25 lg:h-30 lg:w-30 border-2 border-orange-300 rounded-full">
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                        <span class="font-bold text-2xl text-white">{teamMember.name}</span>
                        <span class="italic">{teamMember.position}</span>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <Linkedin class="text-white hover:scale-110 transition duration-150 ease-in-out" />
                        <Facebook class="text-white hover:scale-110 transition duration-150 ease-in-out" />
                        <Twitter class="text-white hover:scale-110 transition duration-150 ease-in-out" />
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>


<style lang="postcss">
    @import 'src/global.css';
</style>