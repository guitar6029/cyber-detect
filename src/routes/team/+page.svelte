<script lang="ts">
    import  {User} from 'lucide-svelte'
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


<div class="flex min-h-screen flex-col gap-3 p-4">
    <h1 class="text-4xl text-white font-bold">Team</h1>
    <div class="flex sm:flex-col lg:flex-row flex-wrap gap-5 items-center">
        {#each team as teamMember, index}
            <div style="animation-delay: {index * 0.3}s;" class="fade-in sm:h-fit sm:w-[50vw]  lg:h-[15rem] lg:w-[25rem]  flex flex-col items-center justify-center rounded-lg gap-5 p-4 border-2 border-neutral-900 shadow-lg shadow-neutral-800">
                <img src="{teamMember.photo}" alt={teamMember.name} use:lazyload class="h-25 w-25 border-2 border-orange-500 rounded-full">
                <span class="font-bold text-2xl text-white">{teamMember.name}</span>
                <span class="italic">{teamMember.position}</span>
            </div>
        {/each}
    </div>
</div>


<style lang="postcss">
    @import 'src/global.css';
</style>