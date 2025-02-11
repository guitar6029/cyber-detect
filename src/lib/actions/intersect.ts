export function intersect(node: HTMLElement, options: IntersectionObserverInit) {
    const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
          if (entry.isIntersecting) {
             node.classList.add('slide-in');
             node.dispatchEvent(new CustomEvent('intersect'));
             observer.unobserve(node); // Stop observing once it intersects
          }
       });
    }, options);
 
    observer.observe(node);
 
    return {
       destroy() {
          observer.unobserve(node);
       }
    };
 }
 