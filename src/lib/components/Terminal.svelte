<script lang="ts">

    const scripts : string[] = [
        "Welcome_Hacker",
        "Access Level: Full",
        "Cyber Detect v1.0.0"
    ];

</script>


<div
	class="terminal absolute -right-10 z-[-1] h-[25rem] w-[50rem] -skew-x-2 rounded-md border-2 border-neutral-200 bg-black text-white opacity-50 shadow-lg shadow-orange-500"
>
	<div class="h-[.9rem] w-[100%] bg-neutral-900"></div>
	<div class="h-[90%] rounded-lg p-4">
		{#each scripts as script, index}
            <div class="flex flex-row items-center gap-1" style="animation-delay: {index * 2}s">
			    <span class="text-green-400 text-2xl">$cyber_detect_user></span>
			    <span class="text-gray-400 text-2xl typewriter">{script}</span>
            </div>
        {/each}
        
        
	</div>
</div>

<style lang="postcss">
	@import 'src/global.css';
	@media screen and (max-width: 760px) {
		.terminal {
			display: none;
		}
	}

	.typewriter {
		overflow: hidden;
		border-right: 0.15rem solid orange;
		white-space: nowrap;
		/* margin: 0 auto; */
		letter-spacing: 0.15rem;
		animation:
			typing 3.5s steps(20, end) forwards,
            blink-caret 0.75s step-end 3,
            remove-border 0.75s forwards 3.5s;
            --type-width: 45%; /* Default width */    
			
	}

    @keyframes remove-border {
        0% {
            border-right: 0.15rem solid orange;
        }
        100% {
            border-right: none;
        }
    }

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: var(--type-width);
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}
</style>
