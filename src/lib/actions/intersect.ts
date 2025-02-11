export function intersect(node: HTMLElement, options: IntersectionObserverInit) {
   const observer = new IntersectionObserver(([entry]) => {
     node.dispatchEvent(new CustomEvent("intersect", { detail: entry }));
   }, options);
 
   observer.observe(node);
 
   return {
     destroy() {
       observer.unobserve(node);
     }
   };
 }
 