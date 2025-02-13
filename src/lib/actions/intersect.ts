import { writable } from 'svelte/store';

export function intersect(node: HTMLElement, options: IntersectionObserverInit = {}) {
  // Create a writable store to manage visibility state
  const isVisible = writable(false);

  // Initialize the Intersection Observer
  const observer = new IntersectionObserver(([entry]) => {
    console.log(entry.isIntersecting); // Debugging line
    isVisible.set(entry.isIntersecting); // Update the store value when visibility changes
  }, options);

  observer.observe(node);

  return {
    // Update the options dynamically if needed
    update(newOptions: IntersectionObserverInit) {
      observer.disconnect(); // Disconnect previous observer
      observer.observe(node); // Re-observe with new options
    },
    destroy() {
      observer.disconnect(); // Cleanup when the component is destroyed
    },
    isVisible // Expose the store to be used in the component
  };
}
