export function isElementInViewport(el: any): boolean {
    const rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export enum NotificationType {
  FREE_CONSULTATION = 'FREE_CONSULTATION',
  CALLBACK = 'CALLBACK'
}