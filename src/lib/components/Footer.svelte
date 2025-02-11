<script lang="ts">
	import { Linkedin, Facebook } from 'lucide-svelte';

    const handleLink = (event: Event) => {
        event?.preventDefault();
    }
</script>

<footer class="flex min-h-[10rem] flex-row items-center justify-around bg-black p-4 text-gray-700">
	<span class="text-2xl font-bold text-white">Cyber Detect &copy; 2025</span>
	<div class="flex flex-row items-center gap-3">
		<a href="#" class="rounded-lg border-2 border-orange-500 p-4" onclick={(e: Event) => handleLink(e)}><Linkedin class="text-white" /></a>
		<a href="#" class="rounded-lg border-2 border-orange-500 p-4" onclick={(e: Event) => handleLink(e)}><Facebook class="text-white" /></a>
	</div>
</footer>
