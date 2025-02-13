<script lang="ts">
    import { onMount } from 'svelte';

    // Explicitly defining the state types
    let dailyZeroAttacks: { value: number } = $state({ value: 12480 });
    let totalAttacksPrevented: { value: number } = $state({ value: 1045230 });
    let currentActiveThreats: { value: number } = $state({ value: 528 });

    let attacksInfo = $state([
        { title: 'Daily Zero-Day Attacks Prevented', value: dailyZeroAttacks.value },
        { title: 'Total Attacks Prevented', value: totalAttacksPrevented.value },
        { title: 'Current Active Threats Under Surveillance', value: currentActiveThreats.value }
    ]);

    onMount(() => {
        incrementCounter(dailyZeroAttacks, 10, 55, 1000);
        incrementCounter(totalAttacksPrevented, 5, 1000, 15000);
    });

    const incrementCounter = (
        state: { value: number }, 
        increment: number, 
        maxCount: number, 
        interval = 1000
    ) => {
        let counter = 0;
        const intervalId = setInterval(() => {
            if (counter < maxCount) {
                state.value += increment;
                counter += increment;
            } else {
                clearInterval(intervalId);
            }
        }, interval);

        return () => clearInterval(intervalId);
    };

    // Effect to update attacksInfo when values change
    $effect(() => {
        attacksInfo = [
            { title: 'Daily Zero-Day Attacks Prevented', value: dailyZeroAttacks.value },
            { title: 'Total Attacks Prevented', value: totalAttacksPrevented.value },
            { title: 'Current Active Threats Under Surveillance', value: currentActiveThreats.value }
        ];
    });
</script>

<section class="flex h-[100vh] flex-col justify-center gap-3 p-4">
    <div class="flex flex-col">
        <div class="flex flex-col gap-10">
            {#each attacksInfo as info}
                <div class="flex flex-col gap-2">
                    <h1 class="font-bold text-wrap text-white sm:text-xl lg:text-4xl">
                        {info.title}
                    </h1>
                    <h1 class="font-bold text-gray-400 sm:text-2xl lg:text-6xl">
                        {info.value.toLocaleString()}
                    </h1>
                </div>
            {/each}
        </div>
    </div>
</section>
