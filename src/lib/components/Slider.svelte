<script lang="ts">
	let { list } = $props();
</script>

<div class="wrapper">
	<div class="scroll-text fadeout-horizontal">
		<div class="scroll-text-track">
			{#each list as litItem, index}
				<span
					class={`font-bold ${index % 2 === 0 ? 'border-2 border-orange-500' : 'border-2 border-white'}`}
					>{litItem}</span
				>
			{/each}

			{#each list as litItem, index}
				<span
					class={`font-bold ${index % 2 === 0 ? 'border-2 border-orange-500' : 'border-2 border-white'}`}
					>{litItem}</span
				>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.fadeout-horizontal {
		mask-image: linear-gradient(
			to right,
			transparent,
			black 5rem,
			black calc(100% - 5rem),
			transparent
		);
	}

	.wrapper {
		padding: 4.5rem 0px;
		color: white;
		font-size: 2.5rem;
	}

	.scroll-text {
		overflow: hidden;
		position: relative;
	}

	.scroll-text-track {
		display: flex;
		gap: 1rem;
		width: max-content;
		animation: move-text 70s linear infinite;
	}

	.scroll-text span {
		border-radius: 5px;
		padding: 1rem 2.5rem;
	}

	@keyframes move-text {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
