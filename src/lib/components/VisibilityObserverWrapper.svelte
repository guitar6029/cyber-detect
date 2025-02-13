<script lang="ts">
    import { writable } from 'svelte/store';
    export let isVisible = writable(false);
    let node;
  
    // Intersection Observer logic
    const observer = new IntersectionObserver(([entry]) => {
      isVisible.set(entry.isIntersecting); // Update visibility state
    });
  
    observer.observe(node);
  
    // Clean up when component is destroyed
    import { onDestroy } from 'svelte';
    onDestroy(() => {
      observer.disconnect();
    });
  </script>
  
  <div bind:this={node}>
    <!-- Snippet is used here to inject content dynamically -->
    <snippet>{isVisible}</snippet>
  </div>
  