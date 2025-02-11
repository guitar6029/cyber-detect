export function lazyload(node: HTMLImageElement) {
    function loadImage() {
       const src = node.dataset.src;
       if (!src) {
          return;
       }
       node.src = src;
    }
 
    const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
          if (entry.isIntersecting) {
             loadImage();
             observer.unobserve(node);
          }
       });
    });
 
    observer.observe(node);
 
    return {
       destroy() {
          observer.unobserve(node);
       }
    };
 }
 